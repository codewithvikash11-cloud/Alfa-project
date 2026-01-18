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
          <Package2 className="h-6 w-6 text-primary" />
          <span>SEOForge.ai</span>
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
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/20">
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
