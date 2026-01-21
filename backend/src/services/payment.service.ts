import Stripe from 'stripe';
import { PrismaClient, PaymentStatus, TransactionType, PlanType, SubStatus } from '@prisma/client';
import { config } from '../config/env';
import logger from '../utils/logger';
import * as creditService from './credit.service';

const stripe = new Stripe(config.stripeSecretKey, {
    apiVersion: '2023-10-16' as any, // Use latest or compatible version
});

const prisma = new PrismaClient();

const PLAN_PRICES = {
    [PlanType.PRO]: 'price_pro_id_placeholder', // Replace with real Stripe Price IDs
    [PlanType.AGENCY]: 'price_agency_id_placeholder',
};

const CREDIT_PACKAGES = {
    '100_CREDITS': { priceId: 'price_100_credits', amount: 100 },
    '500_CREDITS': { priceId: 'price_500_credits', amount: 500 },
}

export const createCheckoutSession = async (userId: string, plan: PlanType) => {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error('User not found');

    const priceId = PLAN_PRICES[plan];
    if (!priceId) throw new Error('Invalid plan');

    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        customer_email: user.email,
        metadata: {
            userId,
            plan,
            type: 'SUBSCRIPTION',
        },
        success_url: `${config.corsOrigin}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${config.corsOrigin}/pricing`,
    });

    return session;
};

export const createCreditPurchaseSession = async (userId: string, packageId: string) => {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error('User not found');

    // @ts-ignore
    const creditPkg = CREDIT_PACKAGES[packageId];
    if (!creditPkg) throw new Error('Invalid credit package');

    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
            {
                price: creditPkg.priceId,
                quantity: 1,
            },
        ],
        customer_email: user.email,
        metadata: {
            userId,
            packageId,
            credits: creditPkg.amount,
            type: 'CREDIT_PURCHASE',
        },
        success_url: `${config.corsOrigin}/dashboard?credits_purchased=true`,
        cancel_url: `${config.corsOrigin}/dashboard`,
    });

    return session;
}

export const handleWebhook = async (signature: string, payload: Buffer) => {
    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(payload, signature, config.stripeWebhookSecret);
    } catch (err: any) {
        logger.error(`Webhook signature verification failed: ${err.message}`);
        throw new Error('Webhook Error');
    }

    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object as Stripe.Checkout.Session;
            await handleCheckoutCompleted(session);
            break;
        case 'invoice.payment_succeeded':
            // Extend subscription usually handled by Stripe, but we can verify status
            break;
        case 'customer.subscription.deleted':
            const subscription = event.data.object as Stripe.Subscription;
            await handleSubscriptionCancelled(subscription);
            break;
        default:
            logger.info(`Unhandled event type ${event.type}`);
    }
}

const handleCheckoutCompleted = async (session: Stripe.Checkout.Session) => {
    const { userId, type, plan, credits } = session.metadata || {};

    if (type === 'SUBSCRIPTION') {
        const subId = session.subscription as string;
        // Upsert Organization Subscription (assuming 1 org per user for MVP or user-linked sub)
        // Linking to User directly first as per schema option
        await prisma.subscription.upsert({
            where: { userId },
            create: {
                userId: userId!,
                stripeSubId: subId,
                plan: plan as PlanType,
                status: SubStatus.ACTIVE,
            },
            update: {
                stripeSubId: subId,
                plan: plan as PlanType,
                status: SubStatus.ACTIVE,
            }
        });

        // Grant initial credits for the plan?
        const monthlyCredits = plan === PlanType.PRO ? 100 : 1000;
        await creditService.addCredits(userId!, monthlyCredits, TransactionType.PLANNED_REFILL, `Plan Subscription: ${plan}`);

    } else if (type === 'CREDIT_PURCHASE') {
        const amount = parseInt(credits || '0', 10);
        await creditService.addCredits(userId!, amount, TransactionType.PURCHASE, 'Credit Pack Purchase');
    }
}

const handleSubscriptionCancelled = async (sub: Stripe.Subscription) => {
    await prisma.subscription.updateMany({
        where: { stripeSubId: sub.id },
        data: { status: SubStatus.CANCELED }
    });
}
