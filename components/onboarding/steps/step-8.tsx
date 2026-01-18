"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Confetti from "react-confetti"; // Just mock or basic placeholder if package missing, but we'll stick to CSS animation or just UI
// Actually, let's just use a nice UI state.

export function Step8Finish() {
    return (
        <div className="relative">
            <Card className="w-full max-w-2xl shadow-lg border-0 bg-white/95 backdrop-blur text-center py-8">
                <CardHeader>
                    <div className="mx-auto h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <CardTitle className="text-3xl">Setup Complete!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-lg mb-4">
                        Your SEO dashboard is ready. Specifically optimized for your company.
                    </p>
                    <div className="p-4 bg-muted/50 rounded-lg text-sm text-left max-w-md mx-auto space-y-2">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" /> <span>Project Created</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" /> <span>Analysis Agents Deployed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" /> <span>First Monitor Running</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center pt-6">
                    <Button size="lg" className="h-12 px-8 text-lg w-full max-w-sm" asChild>
                        <Link href="/dashboard">Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
