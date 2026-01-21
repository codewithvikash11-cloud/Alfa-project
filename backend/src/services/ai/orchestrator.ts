// import { OpenAIProvider } from './providers/openai.provider';
// import { AnthropicProvider } from './providers/anthropic.provider';
import { GeminiProvider } from './providers/gemini.provider';
import { AiProvider, AiResponse } from './providers/ai-provider.interface';
// import { AiRequestType } from '@prisma/client';
export enum AiRequestType {
    ANALYZE = 'ANALYZE',
    ARTICLE = 'ARTICLE',
    SEO_CHECK = 'SEO_CHECK'
}
import logger from '../../utils/logger';

export class AiOrchestrator {
    private provider: AiProvider;

    constructor() {
        this.provider = new GeminiProvider();
    }

    getProvider(): AiProvider {
        return this.provider;
    }

    async processRequest(type: AiRequestType, data: any): Promise<AiResponse> {
        // Provider selection logic removed - always using Gemini
        const provider = this.getProvider();

        let prompt = '';
        let systemPrompt = 'You are an expert SEO and Content Marketing AI assistant.';
        let model = 'gemini-1.5-flash'; // Default

        switch (type) {
            case AiRequestType.ANALYZE:
                prompt = this.buildAnalyzePrompt(data);
                break;
            case AiRequestType.ARTICLE:
                prompt = this.buildArticlePrompt(data);
                systemPrompt = 'You are a professional blog post writer optimized for SEO.';
                break;
            case AiRequestType.SEO_CHECK:
                prompt = this.buildSeoCheckPrompt(data);
                break;
            default:
                throw new Error('Invalid AI Request Type');
        }

        logger.info(`Processing AI Request: ${type} via Gemini`);
        return await provider.generate(prompt, model, systemPrompt);
    }

    private buildAnalyzePrompt(data: any): string {
        return `Analyze the following SEO data and provide actionable value proposition. Data: ${JSON.stringify(data)}`;
    }

    private buildArticlePrompt(data: any): string {
        return `Write a comprehensive SEO-optimized article about "${data.topic}". Keywords: ${data.keywords}. Target Audience: ${data.audience || 'General'}.`;
    }

    private buildSeoCheckPrompt(data: any): string {
        return `Perform an SEO audit on the following content/url: ${data.url || data.content}. Focus on: ${data.focus || 'General Health'}.`;
    }
}
