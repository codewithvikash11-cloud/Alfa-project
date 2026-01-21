import { Request, Response } from 'express';
import * as projectService from '../services/project.service';
import logger from '../utils/logger';
import { AuthRequest } from '../middlewares/auth.middleware';
import { z } from 'zod';

const createProjectSchema = z.object({
    name: z.string().min(1),
    domain: z.string().optional(),
});

const updateProjectSchema = z.object({
    name: z.string().min(1).optional(),
    domain: z.string().optional(),
});

const onboardingStepSchema = z.object({
    projectId: z.string().uuid(),
    stepIdentifier: z.string(),
    data: z.record(z.any()),
});

export const create = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const validatedData = createProjectSchema.parse(req.body);
        const project = await projectService.createProject(userId, validatedData);
        res.status(201).json(project);
    } catch (error: any) {
        logger.error('Create project error:', error);
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: 'Validation error', errors: (error as any).errors || error.issues });
        }
        res.status(400).json({ message: error.message || 'Failed to create project' });
    }
};

export const list = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const projects = await projectService.getProjects(userId);
        res.json(projects);
    } catch (error: any) {
        logger.error('List projects error:', error);
        res.status(500).json({ message: 'Failed to list projects' });
    }
};

export const getOne = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const projectId = req.params.id as string;
        const project = await projectService.getProjectById(userId, projectId);
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    } catch (error: any) {
        res.status(500).json({ message: 'Failed to get project' });
    }
}

export const update = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const projectId = req.params.id as string;
        const validatedData = updateProjectSchema.parse(req.body);

        const project = await projectService.updateProject(userId, projectId, validatedData);
        res.json(project);
    } catch (error: any) {
        logger.error('Update project error', error);
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: 'Validation error', errors: (error as any).errors || error.issues });
        }
        res.status(400).json({ message: error.message || 'Failed to update project' });
    }
}

export const remove = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const projectId = req.params.id as string;

        await projectService.deleteProject(userId, projectId);
        res.json({ message: 'Project deleted successfully' });
    } catch (error: any) {
        logger.error('Delete project error', error);
        res.status(400).json({ message: error.message || 'Failed to delete project' });
    }
}

export const saveStep = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const validatedData = onboardingStepSchema.parse(req.body);
        const step = await projectService.saveOnboardingStep(
            userId,
            validatedData.projectId,
            validatedData.stepIdentifier,
            validatedData.data
        );
        res.json(step);
    } catch (error: any) {
        logger.error('Save onboarding step error:', error);
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: 'Validation error', errors: (error as any).errors || error.issues });
        }
        res.status(400).json({ message: error.message || 'Failed to save step' });
    }
};
