import { Router, raw } from 'express';
import * as paymentController from '../controllers/payment.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = Router();

router.post('/checkout', authenticateToken, paymentController.createCheckout);
router.post('/credits', authenticateToken, paymentController.buyCredits);

// Webhook requires raw body (or JSON depending on Cashfree config, usually JSON is fine for Cashfree if not validating signature strictly with raw buffer yet)
router.post('/webhook', paymentController.cashfreeWebhook);

export default router;
