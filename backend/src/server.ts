import app from './app';
import { config } from './config/env';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const startServer = async () => {
    try {
        // Check DB Connection
        await prisma.$connect();
        console.log('✅ Database connected successfully');

        app.listen(config.port, () => {
            console.log(`🚀 Server running on port ${config.port} in ${config.nodeEnv} mode`);
        });
    } catch (error) {
        console.error('❌ Error starting server:', error);
        process.exit(1);
    }
};

startServer();
