"use client";

import { useOnboarding } from "@/components/onboarding/onboarding-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building, Globe } from "lucide-react";
import { useState } from "react";

export function Step1Project() {
    const { data, updateData, nextStep } = useOnboarding();
    const [value, setValue] = useState(data.projectOrganization);

    const handleNext = () => {
        if (value.trim()) {
            updateData({ projectOrganization: value });
            nextStep();
        }
    };

    return (
        <Card className="w-full max-w-2xl shadow-lg border-0 bg-white/95 backdrop-blur">
            <CardHeader>
                <CardTitle className="text-2xl">Let's start fresh</CardTitle>
                <CardDescription>Name your new project or organization workspace.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label>Project / Organization Name</Label>
                    <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                            className="pl-9"
                            placeholder="Acme Corp SEO"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            autoFocus
                        />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button onClick={handleNext} disabled={!value.trim()}>Continue</Button>
            </CardFooter>
        </Card>
    );
}
