import axios from 'axios';
import { config } from '../config/env';
import logger from '../utils/logger';

interface AIRequestPayload {
    prompt: string;
    type: 'ANALYZE' | 'ARTICLE' | 'SEO_CHECK';
    projectId: string;
    additionalData?: any;
}

export const triggerN8nWorkflow = async (payload: AIRequestPayload) => {
    try {
        const webhookUrl = config.n8nWebhookUrl;
        if (!webhookUrl) {
            throw new Error('N8N_WEBHOOK_URL is not defined');
        }

        logger.info(`Triggering n8n workflow for project: ${payload.projectId}, type: ${payload.type}`);

        // Call n8n webhook (Fire and forget, or wait for response depending on arch. 
        // Usually async for long running tasks, but here we might want immediate ack)
        const response = await axios.post(webhookUrl, payload, {
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000, // 10s timeout for initial handshake
        });

        return response.data;
    } catch (error) {
        logger.error('Error triggering n8n workflow:', error);
        throw error;
    }
};
