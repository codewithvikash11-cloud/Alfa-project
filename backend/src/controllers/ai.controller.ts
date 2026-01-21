import { Request, Response } from 'express';
import * as aiService from '../services/ai.service';
import { AuthRequest } from '../middlewares/auth.middleware';
import logger from '../utils/logger';
import { AiRequestType } from '@prisma/client';

export const analyze = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const { projectId, data } = req.body;

        if (!projectId) return res.status(400).json({ message: 'Project ID required' });

        const { request, result } = await aiService.createAiRequest(userId, projectId, AiRequestType.ANALYZE, data);
        res.json({ message: 'Analysis completed', requestId: request.id, result });
    } catch (error: any) {
        logger.error('AI Analyze error:', error);
        res.status(400).json({ message: error.message });
    }
}

export const article = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const { projectId, topic, keywords } = req.body;

        if (!projectId) return res.status(400).json({ message: 'Project ID required' });

        const { request, result } = await aiService.createAiRequest(userId, projectId, AiRequestType.ARTICLE, { topic, keywords });
        res.json({ message: 'Article generation completed', requestId: request.id, result });
    } catch (error: any) {
        logger.error('AI Article error:', error);
        res.status(400).json({ message: error.message });
    }
}

export const getHistory = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const { projectId } = req.query;

        const history = await aiService.getRequestHistory(userId, projectId as string);
        res.json(history);
    } catch (error: any) {
        logger.error('AI History error:', error);
        res.status(500).json({ message: 'Failed to fetch history' });
    }
}
