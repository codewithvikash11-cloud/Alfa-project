# SEO AI Agent Platform

A modern SaaS platform for SEO automation, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Landing Page**: High-conversion design with sticky header, pricing, and features.
- **Authentication**: Login and Register pages with localized auth.
- **Onboarding Wizard**: Multi-step setup flow to configure project, company, and AI agents.
- **Dashboard**: specialized views for:
  - Article Writer
  - Brand Identity
  - Competitor Intelligence
  - Monitor Tracking
  - Prompt Library
- **Billing**: Pricing plans and subscription management.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3 + shadcn/ui components
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animation**: Framer Motion (ready), Tailwind Animate

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Project Structure

- `app/`: Application routes and pages.
- `components/`: Reusable UI components and feature-specific widgets.
- `lib/`: Utility functions and constants.
- `public/`: Static assets.

## Notes

- This project uses **Mock APIs** (`app/api/...`) for demonstration purposes.
- Configuration files (`postcss.config.js`, `next.config.js`, `tailwind.config.js`) are set to CommonJS for maximum compatibility.
