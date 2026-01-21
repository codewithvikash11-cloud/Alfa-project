import { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middlewares/auth.middleware';
import logger from '../utils/logger';

const prisma = new PrismaClient();

export const getMe = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                organization: true,
                subscription: true,
                credits: true,
            }
        });

        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error: any) {
        logger.error('Get Me error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
