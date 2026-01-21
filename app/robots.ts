import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://SeoPilot.ai';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/dashboard/',
                '/api/',
                '/admin/',
                '/_next/',
                '/onboarding/'
            ],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
