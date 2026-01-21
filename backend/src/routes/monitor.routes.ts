import { Router } from 'express';
import * as monitorController from '../controllers/monitor.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticateToken);

router.get('/', monitorController.listMonitors);
router.post('/', monitorController.createMonitor);

export default router;
