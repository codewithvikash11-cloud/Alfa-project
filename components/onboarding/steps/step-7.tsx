"use client";

import { useOnboarding } from "@/components/onboarding/onboarding-context";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Wand2, Loader2, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Mock prompting generator
const MOCK_PROMPT = `
You are an expert SEO content writer for {companyName}.
Your goal is to write {tone} articles about {features}.
Target Audience: {role} at {companySize} companies.
`;

export function Step7Review() {
    const { data, nextStep, prevStep } = useOnboarding();
    const [loading, setLoading] = useState(true);
    const [prompt, setPrompt] = useState("");

    useEffect(() => {
        // Simulate AI generation
        const timer = setTimeout(() => {
            const generated = MOCK_PROMPT
                .replace("{companyName}", data.companyName)
                .replace("{tone}", data.aiTone)
                .replace("{features}", data.keyFeatures.join(", "))
                .replace("{role}", data.role)
                .replace("{companySize}", data.companySize);
            setPrompt(generated.trim());
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [data]);

    return (
        <Card className="w-full max-w-2xl shadow-lg border-0 bg-white/95 backdrop-blur">
            <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                    {loading ? <Loader2 className="animate-spin h-6 w-6" /> : <Wand2 className="h-6 w-6 text-purple-500" />}
                    {loading ? "Generating Optimization Prompts..." : "Review Generated Prompts"}
                </CardTitle>
                <CardDescription>
                    Our agents created this system prompt for your brand. You can edit it now or later.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {loading ? (
                    <div className="h-40 w-full bg-muted animate-pulse rounded-md" />
                ) : (
                    <div className="space-y-2">
                        <Label>System Prompt</Label>
                        <textarea
                            className="flex min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep} disabled={loading}>Back</Button>
                <Button onClick={nextStep} disabled={loading} className="gap-2">
                    Confirm & Finish <Check className="h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
}
