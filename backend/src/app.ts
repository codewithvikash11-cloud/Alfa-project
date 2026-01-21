import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { config } from './config/env';

// Import Routes
// Import Routes
import authRoutes from './routes/auth.routes';
import projectRoutes from './routes/project.routes';
import aiRoutes from './routes/ai.routes';
import paymentRoutes from './routes/payment.routes';
import promptRoutes from './routes/prompt.routes';
import monitorRoutes from './routes/monitor.routes';
import userRoutes from './routes/user.routes';
import { rateLimiter } from './middlewares/rateLimit.middleware';

const app: Express = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: config.corsOrigin,
    credentials: true,
}));
app.use(helmet());
app.use(morgan('dev'));

// Simple Health Check
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/prompts', promptRoutes);
app.use('/api/monitors', monitorRoutes);

// Error Handling (to be added)

export default app;
