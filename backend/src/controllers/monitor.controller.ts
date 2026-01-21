import { Request, Response } from 'express';
import { PrismaClient, MonitorType } from '@prisma/client';
import { AuthRequest } from '../middlewares/auth.middleware';
import logger from '../utils/logger';

const prisma = new PrismaClient();

export const listMonitors = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const monitors = await prisma.monitor.findMany({
            where: { project: { userId } },
            include: { project: true }
        });
        res.json(monitors);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching monitors' });
    }
}

export const createMonitor = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const { projectId, type, frequency } = req.body;

        // Verify ownership
        const project = await prisma.project.findFirst({ where: { id: projectId, userId } });
        if (!project) return res.status(404).json({ message: 'Project not found' });

        const monitor = await prisma.monitor.create({
            data: {
                projectId,
                type: type as MonitorType,
                frequency,
                status: 'PENDING'
            }
        });
        res.status(201).json(monitor);
    } catch (error: any) {
        logger.error('Create monitor error', error);
        res.status(400).json({ message: error.message });
    }
}
