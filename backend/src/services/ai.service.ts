import { PrismaClient, AiRequestType, RequestStatus } from '@prisma/client';
import logger from '../utils/logger';
import * as creditService from './credit.service';
import { AiOrchestrator } from './ai/orchestrator';

const prisma = new PrismaClient();
const orchestrator = new AiOrchestrator();

const COST_MAP = {
    [AiRequestType.ANALYZE]: 1,
    [AiRequestType.ARTICLE]: 2,
    [AiRequestType.SEO_CHECK]: 1,
};

export const createAiRequest = async (userId: string, projectId: string, type: AiRequestType, inputData: any) => {
    const cost = COST_MAP[type];

    // 1. Check Credits
    const hasCredits = await creditService.hasEnoughCredits(userId, cost);
    if (!hasCredits) {
        throw new Error('Insufficient credits');
    }

    // 2. Create Initial Request Record
    const request = await prisma.aiRequest.create({
        data: {
            projectId,
            type,
            inputData,
            costCredits: cost,
            status: RequestStatus.PROCESSING, // Set to processing immediately as we await
        }
    });

    try {
        // 3. Deduct Credits (Optimistic deduction)
        await creditService.deductCredits(userId, cost, `AI Request: ${type}`);

        // 4. Process Request via Orchestrator (Native AI)
        // This is now synchronous processing. For scaling, this should be moved to a Job Queue (BullMQ).
        const aiResponse = await orchestrator.processRequest(type, inputData);

        // 5. Save Result
        const result = await prisma.aiResult.create({
            data: {
                content: JSON.parse(JSON.stringify(aiResponse.content)), // Ensure JSON compatibility
                request: { connect: { id: request.id } }
            }
        });

        // 6. Update Request Status
        await prisma.aiRequest.update({
            where: { id: request.id },
            data: {
                status: RequestStatus.COMPLETED,
                resultId: result.id,
                tokensUsed: aiResponse.tokensUsed,
                provider: 'gemini', // Default or dynamic from orchestrator
                model: 'gemini-1.5-flash'     // Default or dynamic
            }
        });

        return { request, result };

    } catch (error: any) {
        logger.error(`AI Processing failed for ${request.id}`, error);

        // 7. Handle Failure
        await prisma.aiRequest.update({
            where: { id: request.id },
            data: {
                status: RequestStatus.FAILED,
                errorMessage: error.message
            }
        });

        // Optional: Refund credits on failure?
        // await creditService.addCredits(userId, cost, TransactionType.REFUND, 'AI Failure Refund');

        throw error;
    }
};

export const getRequestHistory = async (userId: string, projectId?: string) => {
    const where: any = { project: { userId } };
    if (projectId) where.projectId = projectId;

    return await prisma.aiRequest.findMany({
        where,
        include: { result: true },
        orderBy: { createdAt: 'desc' }
    });
};
