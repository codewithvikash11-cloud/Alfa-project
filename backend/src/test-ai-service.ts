import { AiOrchestrator } from './services/ai/orchestrator';
// import { AiRequestType } from '@prisma/client'; // Bypassing import issue
import dotenv from 'dotenv';
import path from 'path';

// Load env explicitly
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function testAiService() {
    console.log("🧪 Testing AI Orchestrator with Gemini...");

    try {
        const orchestrator = new AiOrchestrator();

        const data = {
            topic: "The benefits of AI in SEO",
            keywords: "AI SEO, automation, ranking",
            audience: "Marketing Managers"
        };

        // mocking the request type as the enum might be tricky if not compiled, using 'ARTICLE' or casting
        console.log("📡 Sending request...");
        const response = await orchestrator.processRequest(
            'ARTICLE' as any,
            data
        );

        console.log("✅ Response received:");
        console.log("---------------------------------------------------");
        console.log(response.content.substring(0, 500) + "..."); // Print first 500 chars
        console.log("---------------------------------------------------");
        console.log("✅ AI Service Integration Verified!");

    } catch (error: any) {
        console.error("❌ Error testing AI Service:", error);
    }
}

testAiService();
