# Native AI Backend Setup

This backend implements a **native multi-agent AI architecture** using Node.js, removing the dependency on external workflow tools like n8n.

## Features

*   **Native AI Orchestrator**: Directly calls OpenAI, Anthropic, and Gemini APIs.
*   **Provider Swapping**: Easily switch between models (GPT-4o, Claude 3 Opus, Gemini Pro).
*   **Rate Limiting**: Redis-backed rate limiting per user IP.
*   **Soft Deletes**: Projects and Users are soft-deleted (`deletedAt`).
*   **Audit Logging**: Critical actions are logged to the database.

## Prerequisites

*   **Redis** must be running (default: `localhost:6379`).
*   **PostgreSQL** must be running.
*   **API Keys**: You need keys for OpenAI, Anthropic, or Gemini in `.env`.

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Generate Prisma Client**:
    ```bash
    npx prisma generate
    ```

3.  **Push Database Schema**:
    ```bash
    npx prisma db push
    ```

4.  **Configure Environment**:
    Ensure `.env` has:
    ```env
    OPENAI_API_KEY=sk-...
    ANTHROPIC_API_KEY=sk-ant-...
    GEMINI_API_KEY=...
    REDIS_URL=redis://localhost:6379
    ```

5.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## Architecture

*   **`src/services/ai/orchestrator.ts`**: The brain that routes requests to specific providers/agents.
*   **`src/services/ai/providers/`**: Adapters for each LLM provider.
*   **`src/middlewares/rateLimit.middleware.ts`**: Protects APIs using Redis.

## API Changes

*   `/api/ai/analyze`: Returns `{ request, result }` immediately (synchronous).
*   `/api/ai/history`: Returns list of past AI requests.
*   `/api/user/me`: Returns current user profile.
*   `/api/projects/:id` (PUT/DELETE): Now supports updates and soft deletes.
