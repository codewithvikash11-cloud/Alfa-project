import { PrismaClient, TransactionType } from '@prisma/client';
import logger from '../utils/logger';

const prisma = new PrismaClient();

export const getBalance = async (userId: string) => {
    const credit = await prisma.credit.findUnique({
        where: { userId },
    });
    if (!credit) throw new Error('Credit account not found');
    return credit;
};

export const hasEnoughCredits = async (userId: string, cost: number) => {
    const credit = await prisma.credit.findUnique({ where: { userId } });
    if (!credit) return false;

    const totalAvailable = credit.freeBalance + credit.paidBalance;
    return totalAvailable >= cost;
};

export const deductCredits = async (userId: string, cost: number, description: string) => {
    return await prisma.$transaction(async (tx) => {
        const credit = await tx.credit.findUnique({ where: { userId } });
        if (!credit) throw new Error('Credit account not found');

        let newFree = credit.freeBalance;
        let newPaid = credit.paidBalance;
        let remainingCost = cost;

        // Deduct from free first
        if (newFree >= remainingCost) {
            newFree -= remainingCost;
            remainingCost = 0;
        } else {
            remainingCost -= newFree;
            newFree = 0;

            // Deduct remainder from paid
            if (newPaid >= remainingCost) {
                newPaid -= remainingCost;
                remainingCost = 0;
            } else {
                throw new Error('Insufficient credits');
            }
        }

        const updatedCredit = await tx.credit.update({
            where: { userId },
            data: {
                freeBalance: newFree,
                paidBalance: newPaid,
                totalUsed: { increment: cost }
            }
        });

        await tx.creditTransaction.create({
            data: {
                creditId: credit.id,
                amount: -cost,
                type: TransactionType.USAGE,
                description
            }
        });

        return updatedCredit;
    });
}

export const addCredits = async (userId: string, amount: number, type: TransactionType, description: string) => {
    const credit = await prisma.credit.findUnique({ where: { userId } });
    if (!credit) throw new Error('Credit account not found');

    // If type is PLANNED_REFILL or BONUS, maybe add to free? Or logic depends on requirements.
    // Usually PURCHASE -> paidBalance, REFILL -> freeBalance reset or add?
    // Let's assume PURCHASE adds to paid, others to free/paid as appropriate.

    let updateData: any = {};
    if (type === TransactionType.PURCHASE) {
        updateData.paidBalance = { increment: amount };
    } else {
        updateData.freeBalance = { increment: amount };
    }

    return await prisma.credit.update({
        where: { userId },
        data: {
            ...updateData,
            transactions: {
                create: {
                    amount,
                    type,
                    description
                }
            }
        }
    });
}
