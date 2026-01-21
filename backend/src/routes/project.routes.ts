import { Router } from 'express';
import * as projectController from '../controllers/project.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = Router();

// Protected Routes
router.use(authenticateToken);

router.post('/create', projectController.create);
router.get('/list', projectController.list);
router.get('/:id', projectController.getOne);
router.put('/:id', projectController.update);
router.delete('/:id', projectController.remove);

router.post('/onboarding/save', projectController.saveStep);

export default router;
