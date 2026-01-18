"use client";

import { useOnboarding } from "@/components/onboarding/onboarding-context";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea"; // Need to create this
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import { useState } from "react";

export function Step4Description() {
    const { data, updateData, nextStep, prevStep } = useOnboarding();
    const [desc, setDesc] = useState(data.description);
    const [features, setFeatures] = useState<string[]>(data.keyFeatures);
    const [currentFeature, setCurrentFeature] = useState("");

    const addFeature = () => {
        if (currentFeature.trim() && !features.includes(currentFeature.trim())) {
            setFeatures([...features, currentFeature.trim()]);
            setCurrentFeature("");
        }
    };

    const removeFeature = (feature: string) => {
        setFeatures(features.filter(f => f !== feature));
    };

    const handleNext = () => {
        updateData({ description: desc, keyFeatures: features });
        nextStep();
    };

    return (
        <Card className="w-full max-w-2xl shadow-lg border-0 bg-white/95 backdrop-blur">
            <CardHeader>
                <CardTitle className="text-2xl">Describe your product</CardTitle>
                <CardDescription>Our AI agents will use this to generate relevant content.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label>Company Description</Label>
                    <textarea
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="We serve businesses by providing..."
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label>Key Features / Selling Points</Label>
                    <div className="flex gap-2">
                        <Input
                            value={currentFeature}
                            onChange={(e) => setCurrentFeature(e.target.value)}
                            placeholder="e.g. 24/7 Support"
                            onKeyDown={(e) => e.key === 'Enter' && addFeature()}
                        />
                        <Button onClick={addFeature} variant="secondary" size="icon"><Plus className="h-4 w-4" /></Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {features.map((f, i) => (
                            <Badge key={i} variant="secondary" className="pl-2 pr-1 py-1 flex items-center gap-1">
                                {f}
                                <X className="h-3 w-3 cursor-pointer hover:text-red-500" onClick={() => removeFeature(f)} />
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}>Back</Button>
                <Button onClick={handleNext} disabled={!desc.trim()}>Continue</Button>
            </CardFooter>
        </Card>
    );
}
