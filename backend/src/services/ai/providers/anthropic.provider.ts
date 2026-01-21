import Anthropic from '@anthropic-ai/sdk';
import { config } from '../../../config/env';
import { AiProvider, AiResponse } from './ai-provider.interface';
import logger from '../../../utils/logger';

export class AnthropicProvider implements AiProvider {
    private client: Anthropic;

    constructor() {
        this.client = new Anthropic({
            apiKey: config.anthropicApiKey,
        });
    }

    async generate(prompt: string, model: string = 'claude-3-opus-20240229', systemPrompt?: string): Promise<AiResponse> {
        try {
            const response = await this.client.messages.create({
                model: model,
                max_tokens: 1024,
                system: systemPrompt,
                messages: [{ role: 'user', content: prompt }],
            });

            const content = response.content[0].type === 'text' ? response.content[0].text : '';
            const tokensUsed = (response.usage.input_tokens + response.usage.output_tokens);

            return { content, tokensUsed };
        } catch (error) {
            logger.error('Anthropic generation error:', error);
            throw error;
        }
    }
}
