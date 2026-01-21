import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://SeoPilot.ai';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/login',
        '/register',
        '/blog',
        // Add other public routes here as they are created, e.g., '/pricing'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
