import OpenAI from 'openai';
import dotenv from 'dotenv';
import path from 'path';

// Load env vars explicitly from the .env file in the backend root
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function testOpenAI() {
    console.log("🔑 Checking OpenAI API Key...");

    if (!process.env.OPENAI_API_KEY) {
        console.error("❌ OPENAI_API_KEY is missing in .env");
        return;
    }

    try {
        console.log("📡 Sending test request to OpenAI (gpt-3.5-turbo)...");
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: "Are you working? Reply with 'Yes, I am working!' only." }],
            model: "gpt-3.5-turbo",
        });

        console.log("✅ Response received:");
        console.log("---------------------------------------------------");
        console.log(completion.choices[0].message.content);
        console.log("---------------------------------------------------");
        console.log("✅ OpenAI API is properly configured and working!");
    } catch (error: any) {
        console.error("❌ Error testing OpenAI API:", error.message || error);
        if (error.status === 401) {
            console.error("⚠️  Authentication failed. Please check if the API Key is correct.");
        }
    }
}

testOpenAI();
