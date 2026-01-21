# SEO AI Agent Backend - Setup Guide

## Prerequisites

*   **Node.js** v18+
*   **PostgreSQL** (running locally or cloud)
*   **Redis** (running locally or cloud)
*   **Stripe Account** (for payments)
*   **n8n Instance** (for AI workflows)

## Installation

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```

2.  Install dependencies:
    ```bash
    npm install
    # If using Windows, ensure you have build tools or use WSL if any native modules fail.
    ```

3.  Set up Environment Variables:
    *   Copy `.env` to `.env.local` (if needed) or edit `.env` directly.
    *   **CRITICAL**: Update `DATABASE_URL` to point to your PostgreSQL instance.
    *   Update `REDIS_URL`.
    *   Add your `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`.
    *   Add your `N8N_WEBHOOK_URL`.

## Database Setup

1.  Generate Prisma Client:
    ```bash
    npx prisma generate
    ```

2.  Push Schema to Database:
    ```bash
    npx prisma db push
    # OR for production migrations:
    # npx prisma migrate dev --name init
    ```

## Running the Server

*   **Development Mode** (with hot reload):
    ```bash
    npm run dev
    ```

*   **Production Build**:
    ```bash
    npm run build
    npm start
    ```

*   The server will start on `http://localhost:4000` (or `PORT` in env).

## Verification

*   Visit `http://localhost:4000/health` to check if the API is running.
*   Check terminal logs for "Database connected successfully" and "Redis connected successfully".

## Troubleshooting

*   **Prisma Client Errors**: If you see errors about "PrismaClient not found", ensure you ran `npx prisma generate` successfully.
*   **Redis Connection**: Ensure Redis is running on port 6379 or update `.env`.
