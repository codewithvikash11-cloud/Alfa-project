import { Router } from 'express';
import * as promptController from '../controllers/prompt.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticateToken);

router.get('/', promptController.listPrompts);
router.post('/', promptController.createPrompt);
router.put('/:id', promptController.updatePrompt);

export default router;
