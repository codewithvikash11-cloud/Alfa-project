import { HeroSection } from "@/components/homepage/hero-section";
import { SocialProof } from "@/components/homepage/social-proof";
import { FeaturesGrid } from "@/components/homepage/features-grid";
import { DarkBenefitSection } from "@/components/homepage/dark-benefit-section";
import { Testimonials } from "@/components/homepage/testimonials";
import { PricingSection } from "@/components/homepage/pricing-section";
import { FAQSection } from "@/components/homepage/faq-section";
import { Footer } from "@/components/homepage/footer";
import { Header } from "@/components/layout/header"; // Using existing header if suitable, or create a public one?
// Wait, the existing header was for dashboard. The landing page usually has its own nav.
// The previous page.tsx had a sticky header. I should recreate a minimal public header here or reuse.
// The instructions said "Same layout" as image. The image has a top nav.
// Let's create a dedicated LandingHeader inside this file or strictly for homepage to match the image.

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package2, Menu } from "lucide-react";

function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
          <img src="/logo.png" alt="SeoPilot.ai Logo" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors">Wall of Love</Link>
          <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block">Log in</Link>
          <Button size="sm" className="rounded-full px-6" asChild>
            <Link href="/register">Get Started Free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "SeoPilot.ai",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "AI-Powered SEO Automation Platform for Agencies and Startups."
      },
      {
        "@type": "Organization",
        "name": "SeoPilot.ai",
        "url": "https://SeoPilot.ai",
        "logo": "https://SeoPilot.ai/logo.png",
        "sameAs": [
          "https://twitter.com/SeoPilot_ai",
          "https://linkedin.com/company/SeoPilot"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturesGrid />
        <DarkBenefitSection />
        <Testimonials />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
