import { Request, Response } from 'express';
import * as cashfreeService from '../services/cashfree.service';
import { config } from '../config/env';
import { AuthRequest } from '../middlewares/auth.middleware';
import logger from '../utils/logger';
import { PlanType } from '@prisma/client';

export const createCheckout = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const { plan, billingInterval } = req.body;

        if (!plan) return res.status(400).json({ message: 'Plan required' });

        const orderId = `order_${Date.now()}_${Math.random().toString(36).substring(7)}`;
        // Calculate amount based on plan (mock logic for now, should come from DB/Config)
        const amount = plan === PlanType.PRO ? 29 : 299; // Example prices

        // Use a dummy phone number if user doesn't have one, as it's required by Cashfree
        // Ideally fetch from user profile
        const customerPhone = '9999999999';

        const returnUrl = `${config.corsOrigin}/dashboard?order_id=${orderId}`;

        const order = await cashfreeService.createOrder(orderId, amount, userId, customerPhone, returnUrl);

        // We might want to save the order_id and plan mapping in DB here 
        // to verify later what plan was purchased.
        // For strict correctness, we'd create a pending transaction in DB.

        res.json(order);
    } catch (error: any) {
        logger.error('Create checkout error:', error);
        res.status(400).json({ message: error.message });
    }
}

export const buyCredits = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const { packageId } = req.body;

        const orderId = `credit_${Date.now()}_${Math.random().toString(36).substring(7)}`;

        // Mock amounts
        const amount = packageId === '100_CREDITS' ? 100 : 500;
        const customerPhone = '9999999999';
        const returnUrl = `${config.corsOrigin}/dashboard?credits_purchased=true&order_id=${orderId}`;

        const order = await cashfreeService.createOrder(orderId, amount, userId, customerPhone, returnUrl);
        res.json(order);
    } catch (error: any) {
        logger.error('Buy credits error:', error);
        res.status(400).json({ message: error.message });
    }
}

export const cashfreeWebhook = async (req: Request, res: Response) => {
    try {
        // TODO: Implement Cashfree webhook signature verification
        console.log('Cashfree Webhook received:', req.body);

        // const sig = req.headers['x-webhook-signature'];
        // const timestamp = req.headers['x-webhook-timestamp'];
        // await cashfreeService.verifyWebhook(sig, timestamp, req.body);

        res.json({ status: 'OK' });
    } catch (error: any) {
        logger.error('Webhook error:', error);
        res.status(400).json({ message: error.message });
    }
}
