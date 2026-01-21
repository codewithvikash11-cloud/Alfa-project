import { PrismaClient, Project, OnboardingStep } from '@prisma/client';
import logger from '../utils/logger';

const prisma = new PrismaClient();

export const createProject = async (userId: string, data: { name: string; domain?: string }) => {
    return await prisma.project.create({
        data: {
            userId,
            name: data.name,
            domain: data.domain,
        },
    });
};

export const getProjects = async (userId: string) => {
    return await prisma.project.findMany({
        where: {
            userId,
            deletedAt: null // Exclude soft deleted projects
        },
        orderBy: { createdAt: 'desc' },
        include: {
            _count: {
                select: { aiRequests: true }
            }
        }
    });
};

export const getProjectById = async (userId: string, projectId: string) => {
    return await prisma.project.findFirst({
        where: {
            id: projectId,
            userId,
            deletedAt: null
        },
        include: {
            onboarding: true,
            monitors: true,
        },
    });
};

export const updateProject = async (userId: string, projectId: string, data: { name?: string; domain?: string }) => {
    const project = await prisma.project.findFirst({ where: { id: projectId, userId, deletedAt: null } });
    if (!project) throw new Error('Project not found');

    return await prisma.project.update({
        where: { id: projectId },
        data: {
            name: data.name,
            domain: data.domain
        }
    });
}

// Soft Delete
export const deleteProject = async (userId: string, projectId: string) => {
    const project = await prisma.project.findFirst({ where: { id: projectId, userId, deletedAt: null } });
    if (!project) throw new Error('Project not found');

    return await prisma.project.update({
        where: { id: projectId },
        data: {
            deletedAt: new Date()
        }
    });
}

export const saveOnboardingStep = async (userId: string, projectId: string, stepIdentifier: string, data: any) => {
    // Verify project ownership
    const project = await prisma.project.findFirst({ where: { id: projectId, userId, deletedAt: null } });
    if (!project) throw new Error('Project not found or unauthorized');

    // Check if step exists
    const existingStep = await prisma.onboardingStep.findFirst({
        where: { projectId, stepIdentifier },
    });

    if (existingStep) {
        return await prisma.onboardingStep.update({
            where: { id: existingStep.id },
            data: {
                data,
                completed: true,
                updatedAt: new Date(),
            },
        });
    } else {
        return await prisma.onboardingStep.create({
            data: {
                projectId,
                stepIdentifier,
                data,
                completed: true,
            },
        });
    }
};
