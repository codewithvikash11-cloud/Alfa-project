import Redis from 'ioredis';
import { config } from '../config/env';
import logger from '../utils/logger';

const redis = new Redis(config.redisUrl);

redis.on('connect', () => {
    logger.info('✅ Redis connected successfully');
});

redis.on('error', (err) => {
    logger.error('❌ Redis connection error:', err);
});

export const cacheSet = async (key: string, value: any, ttlSeconds: number = 3600) => {
    try {
        await redis.set(key, JSON.stringify(value), 'EX', ttlSeconds);
    } catch (error) {
        logger.error(`Error setting cache for key ${key}:`, error);
    }
};

export const cacheGet = async (key: string) => {
    try {
        const data = await redis.get(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        logger.error(`Error getting cache for key ${key}:`, error);
        return null;
    }
};

export const cacheDel = async (key: string) => {
    try {
        await redis.del(key);
    } catch (error) {
        logger.error(`Error deleting cache for key ${key}:`, error);
    }
};

export const redisClient = redis;
export default redis;
