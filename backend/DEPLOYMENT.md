# Deployment Guide

## Overview

This backend is designed to be deployed on any Node.js compatible environment. Common options include:
*   **Railway / Render / Heroku** (PaaS - easiest)
*   **AWS EC2 / DigitalOcean Droplets** (VPS - full control)
*   **Docker / Kubernetes** (Containerized)

## Deployment Checklist

1.  **Environment Variables**: Ensure all variables from `.env` are set in your production environment.
2.  **Database**: use a managed PostgreSQL provider (e.g., Supabase, Neon, AWS RDS).
3.  **Redis**: use a managed Redis provider (e.g., Upstash, AWS ElastiCache).

## Option 1: Docker (Recommended)

1.  Create a `Dockerfile` in the `backend` directory:
    ```dockerfile
    FROM node:18-alpine

    WORKDIR /app

    COPY package*.json ./
    # Copy prisma schema
    COPY prisma ./prisma/

    RUN npm install

    COPY . .

    # Generate Prisma Client
    RUN npx prisma generate

    RUN npm run build

    EXPOSE 4000

    CMD ["npm", "start"]
    ```

2.  Build and Run:
    ```bash
    docker build -t seo-backend .
    docker run -p 4000:4000 --env-file .env seo-backend
    ```

## Option 2: Railway / Heroku

1.  Add a `start` script to `package.json` (already configured): `"start": "node dist/server.js"`.
2.  Ensure `postinstall` script runs prisma generation:
    ```json
    "scripts": {
      "postinstall": "prisma generate",
      ...
    }
    ```
3.  Push code.
4.  Set environment variables in the dashboard.

## Webhooks

*   **Stripe**: Configure the Stripe Webhook URL to point to `https://your-domain.com/api/payment/webhook`.
*   **n8n**: Ensure n8n can reach your backend URL if it needs to callback.

## Security

*   Ensure CORS is configured for your production frontend domain (Update `CORS_ORIGIN` env var).
*   Run behind a reverse proxy (Nginx) if deploying on VPS to handle SSL/TLS.
