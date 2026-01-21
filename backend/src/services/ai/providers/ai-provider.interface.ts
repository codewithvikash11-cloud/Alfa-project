export interface AiResponse {
    content: string;
    tokensUsed: number;
}

export interface AiProvider {
    generate(prompt: string, model?: string, systemPrompt?: string): Promise<AiResponse>;
}
