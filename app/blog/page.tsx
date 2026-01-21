import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Insights & Guides | SeoPilot.ai Blog",
    description: "Expert guides, tutorials, and industry news on AI SEO, content automation, and programmatic ranking strategies.",
};

const BLOG_POSTS = [
    {
        slug: "future-of-ai-seo-2026",
        title: "The Future of AI in SEO: Trends to Watch in 2026",
        excerpt: "How Generative Engine Optimization (GEO) is changing the landscape of search visibility forever.",
        date: "January 15, 2026",
        category: "Trends",
    },
    {
        slug: "programmatic-seo-guide",
        title: "Complete Guide to Programmatic SEO for SaaS",
        excerpt: "Learn how to generate thousands of high-ranking landing pages without spamming Google.",
        date: "January 10, 2026",
        category: "Strategy",
    },
    {
        slug: "fixing-indexing-issues",
        title: "How to Fix 'Crawled - Currently Not Indexed' with AI",
        excerpt: "A technical deep dive into solving crawling budget issues using intelligent content refresh agents.",
        date: "January 5, 2026",
        category: "Technical",
    },
];

export default function BlogIndex() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <div className="container mx-auto px-4 py-24">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
                        SEO Engineering Blog
                    </h1>
                    <p className="text-lg text-slate-600">
                        Insights on building, scaling, and ranking modern web applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                            <article className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full flex flex-col">
                                <div className="mb-4">
                                    <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-slate-500 text-sm mb-4 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="text-xs text-slate-400 font-medium">
                                    {post.date}
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
