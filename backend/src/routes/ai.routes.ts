import { Router } from 'express';
import * as aiController from '../controllers/ai.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = Router();

// Protected Routes
router.post('/analyze', authenticateToken, aiController.analyze);
router.post('/article', authenticateToken, aiController.article);
router.get('/history', authenticateToken, aiController.getHistory);

export default router;
