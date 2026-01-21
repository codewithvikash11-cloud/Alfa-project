"use client";

import Link from "next/link";
import { Package2 } from "lucide-react";
import { useOnboarding } from "@/components/onboarding/onboarding-context";
import { cn } from "@/lib/utils";

export function OnboardingHeader() {
    const { step } = useOnboarding();
    const totalSteps = 8;
    const progress = (step / totalSteps) * 100;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
            <div className="h-16 flex items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <img src="/logo.png" alt="SeoPilot.ai Logo" className="h-10 w-auto" />
                </Link>
                <div className="text-sm text-muted-foreground font-medium">
                    Step {step} of {totalSteps}
                </div>
            </div>
            <div className="h-1 w-full bg-secondary">
                <div
                    className="h-full bg-primary transition-all duration-500 ease-in-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </header>
    );
}
