import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 4000,
    nodeEnv: process.env.NODE_ENV || 'development',
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    jwtSecret: process.env.JWT_SECRET || 'supersecretkey',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || 'supersecretrefreshkey',
    jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
    redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
    stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
    stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
    geminiApiKey: process.env.GEMINI_API_KEY || '',
    n8nWebhookUrl: process.env.N8N_WEBHOOK_URL || '',
    cashfreeAppId: process.env.CASHFREE_APP_ID || '',
    cashfreeSecretKey: process.env.CASHFREE_SECRET_KEY || '',
    cashfreeEnv: process.env.CASHFREE_ENV || 'SANDBOX',
};
