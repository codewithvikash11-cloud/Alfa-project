import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://seopilot.ai"),
  title: {
    default: "SeoPilot.ai - AI-Powered SEO Automation Platform",
    template: "%s | SeoPilot.ai",
  },
  description: "Monitor, Analyze, and Generate content with AI agents. Supercharge your SEO strategy with automated audits, competitor analysis, and AI-driven content generation.",
  keywords: ["SEO", "AI SEO", "SEO Automation", "Content Generation", "Competitor Analysis", "SaaS"],
  authors: [{ name: "SeoPilot Team" }],
  creator: "SeoPilot.ai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "SeoPilot.ai - AI-Powered SEO Automation Platform",
    description: "Monitor, Analyze, and Generate content with AI agents.",
    siteName: "SeoPilot.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeoPilot.ai - AI-Powered SEO Automation Platform",
    description: "Monitor, Analyze, and Generate content with AI agents.",
    creator: "@seopilot_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}
