"use client";

import { useOnboarding } from "@/components/onboarding/onboarding-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Building2 } from "lucide-react";
import { useState } from "react";

export function Step2Company() {
    const { data, updateData, nextStep, prevStep } = useOnboarding();
    const [name, setName] = useState(data.companyName);
    const [website, setWebsite] = useState(data.website);

    const handleNext = () => {
        if (name.trim() && website.trim()) {
            updateData({ companyName: name, website: website });
            nextStep();
        }
    };

    return (
        <Card className="w-full max-w-2xl shadow-lg border-0 bg-white/95 backdrop-blur">
            <CardHeader>
                <CardTitle className="text-2xl">Tell us about your company</CardTitle>
                <CardDescription>We'll use this to tailor your SEO strategy.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label>Company Name</Label>
                    <div className="relative">
                        <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-9" value={name} onChange={(e) => setName(e.target.value)} placeholder="Acme Inc." />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label>Website URL</Label>
                    <div className="relative">
                        <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-9" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://example.com" />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}>Back</Button>
                <Button onClick={handleNext} disabled={!name.trim() || !website.trim()}>Continue</Button>
            </CardFooter>
        </Card>
    );
}
