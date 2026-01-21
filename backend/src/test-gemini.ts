import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import path from 'path';

// Load env vars explicitly from the .env file in the backend root
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function testGemini() {
    console.log("💎 Checking Gemini API Key...");

    if (!process.env.GEMINI_API_KEY) {
        console.error("❌ GEMINI_API_KEY is missing in .env");
        return;
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        console.log("📡 Sending test request to Google Gemini (gemini-pro)...");
        const prompt = "Are you working? Reply with 'Yes, I am working!' only.";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log("✅ Response received:");
        console.log("---------------------------------------------------");
        console.log(text);
        console.log("---------------------------------------------------");
        console.log("✅ Google Gemini API is properly configured and working!");
    } catch (error: any) {
        console.error("❌ Error testing Gemini API:", error.message || error);
    }
}

testGemini();
