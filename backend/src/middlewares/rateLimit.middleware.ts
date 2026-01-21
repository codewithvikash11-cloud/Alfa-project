import { Response, NextFunction } from 'express';
import { redisClient } from '../services/redis.service';
import { AuthRequest } from './auth.middleware';
import logger from '../utils/logger';

const WINDOW_SIZE_IN_SECONDS = 60;
const MAX_WINDOW_REQUEST_COUNT = 20;
const WINDOW_LOG_INTERVAL_IN_SECONDS = 1;

export const rateLimiter = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        if (!req.user) return next(); // Should be authenticated, but if not, skip or block

        const ip = req.ip;
        const userId = req.user.id;
        const key = `ratelimit:${userId}`;

        const currentRequestCount = await redisClient.incr(key);

        if (currentRequestCount === 1) {
            await redisClient.expire(key, WINDOW_SIZE_IN_SECONDS);
        }

        if (currentRequestCount > MAX_WINDOW_REQUEST_COUNT) {
            return res.status(429).json({
                message: `You have exceeded the ${MAX_WINDOW_REQUEST_COUNT} requests in ${WINDOW_SIZE_IN_SECONDS} seconds limit!`,
            });
        }
        next();
    } catch (error) {
        logger.error('Rate Limiter Error:', error);
        next(); // Fail open or closed? Open for now.
    }
};
