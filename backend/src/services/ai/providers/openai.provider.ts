import OpenAI from 'openai';
import { config } from '../../../config/env';
import { AiProvider, AiResponse } from './ai-provider.interface';
import logger from '../../../utils/logger';

export class OpenAIProvider implements AiProvider {
    private client: OpenAI;

    constructor() {
        this.client = new OpenAI({
            apiKey: config.openAiApiKey,
        });
    }

    async generate(prompt: string, model: string = 'gpt-4o', systemPrompt?: string): Promise<AiResponse> {
        try {
            const completion = await this.client.chat.completions.create({
                messages: [
                    { role: 'system', content: systemPrompt || 'You are a helpful AI assistant.' },
                    { role: 'user', content: prompt }
                ],
                model: model,
            });

            const content = completion.choices[0].message.content || '';
            const tokensUsed = completion.usage?.total_tokens || 0;

            return { content, tokensUsed };
        } catch (error) {
            logger.error('OpenAI generation error:', error);
            throw error;
        }
    }
}
