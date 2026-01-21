import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middlewares/auth.middleware';
import logger from '../utils/logger';

const prisma = new PrismaClient();

export const listPrompts = async (req: AuthRequest, res: Response) => {
    try {
        const prompts = await prisma.prompt.findMany({
            where: { isActive: true }
        });
        res.json(prompts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching prompts' });
    }
}

export const createPrompt = async (req: AuthRequest, res: Response) => {
    try {
        // Only Admin should create prompts? For now allow all or check role
        if (req.user?.role !== 'ADMIN') return res.status(403).json({ message: 'Admins only' });

        const { name, template } = req.body;
        const prompt = await prisma.prompt.create({
            data: { name, template }
        });
        res.status(201).json(prompt);
    } catch (error: any) {
        logger.error('Create prompt error', error);
        res.status(400).json({ message: error.message });
    }
}

export const updatePrompt = async (req: AuthRequest, res: Response) => {
    try {
        if (req.user?.role !== 'ADMIN') return res.status(403).json({ message: 'Admins only' });
        const { id } = req.params;
        const { template, isActive } = req.body;

        const prompt = await prisma.prompt.update({
            where: { id },
            data: { template, isActive, version: { increment: 1 } }
        });
        res.json(prompt);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
