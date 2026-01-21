import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from '../../../config/env';
import { AiProvider, AiResponse } from './ai-provider.interface';
import logger from '../../../utils/logger';

export class GeminiProvider implements AiProvider {
    private genAI: GoogleGenerativeAI;

    constructor() {
        this.genAI = new GoogleGenerativeAI(config.geminiApiKey);
    }

    async generate(prompt: string, model: string = 'gemini-1.5-flash', systemPrompt?: string): Promise<AiResponse> {
        try {
            const genModel = this.genAI.getGenerativeModel({ model: model });

            // Gemini doesn't strictly support system prompts in the same way as OpenAI in all SDK versions,
            // but we can prepend it or use the systemInstruction if available in newer versions.
            // For simplicity and compatibility, we'll prepend if provided.
            let finalPrompt = prompt;
            if (systemPrompt) {
                finalPrompt = `System Instruction: ${systemPrompt}\n\nUser Request: ${prompt}`;
            }

            const result = await genModel.generateContent(finalPrompt);
            const response = await result.response;
            const content = response.text();

            // Gemini doesn't always return token usage in the basic response object in strictly the same way,
            // but we can estimate or check usage metadata if available. 
            // For now, we'll default to 0 to avoid breaking the interface if metadata is missing.
            const tokensUsed = 0;

            return { content, tokensUsed };
        } catch (error) {
            logger.error('Gemini generation error:', error);
            throw error;
        }
    }
}
