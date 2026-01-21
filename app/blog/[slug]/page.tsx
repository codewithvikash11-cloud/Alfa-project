import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// This is where you would fetch data from your CMS or Database
// For now, valid slugs are hardcoded to match the index page
const VALID_SLUGS = ["future-of-ai-seo-2026", "programmatic-seo-guide", "fixing-indexing-issues"];

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;

    // In a real app, fetch title by slug
    const title = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

    return {
        title: `${title} | SeoPilot Blog`,
        description: `Read our in-depth guide on ${title}.`,
    };
}

export default function BlogPost({ params }: Props) {
    const { slug } = params;

    if (!VALID_SLUGS.includes(slug)) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white font-sans">
            <div className="container mx-auto px-4 py-24 max-w-3xl">
                <Link href="/blog" className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                <header className="mb-12">
                    <div className="flex gap-2 mb-6">
                        <span className="px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-600 rounded-full">Guide</span>
                        <span className="px-3 py-1 text-xs font-medium text-slate-500">5 min read</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                        {slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        This is a placeholder for the actual blog content. In a production environment, this content would be fetched from a CMS (like Sanity, Contentful) or Markdown files.
                    </p>
                </header>

                <div className="prose prose-lg px-4 prose-slate max-w-none">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2>Why this matters for specific SEO strategies</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <ul>
                        <li>Strategic benefit 1</li>
                        <li>Strategic benefit 2</li>
                        <li>Strategic benefit 3</li>
                    </ul>
                    <h2>Conclusion</h2>
                    <p>
                        Start implementing these changes today to see results.
                    </p>
                </div>
            </div>
        </article>
    );
}
