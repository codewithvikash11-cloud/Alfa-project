"use client";

import { useOnboarding } from "@/components/onboarding/onboarding-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function Step5Monitor() {
    const { data, updateData, nextStep, prevStep } = useOnboarding();
    const [url, setUrl] = useState(data.monitorUrl || data.website); // Default to website
    const [keywords, setKeywords] = useState<string[]>(data.monitorKeywords);
    const [currentKeyword, setCurrentKeyword] = useState("");

    const addKeyword = () => {
        if (currentKeyword.trim() && !keywords.includes(currentKeyword.trim())) {
            setKeywords([...keywords, currentKeyword.trim()]);
            setCurrentKeyword("");
        }
    };

    const removeKeyword = (k: string) => {
        setKeywords(keywords.filter(key => key !== k));
    };

    const handleNext = () => {
        updateData({ monitorUrl: url, monitorKeywords: keywords });
        nextStep();
    };

    return (
        <Card className="w-full max-w-2xl shadow-lg border-0 bg-white/95 backdrop-blur">
            <CardHeader>
                <CardTitle className="text-2xl">Create your first monitor</CardTitle>
                <CardDescription>We'll track this URL and these keywords for changes and rankings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label>Target URL to Monitor</Label>
                    <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-9" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com/blog" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label>Keywords to Track</Label>
                    <div className="flex gap-2">
                        <Input
                            value={currentKeyword}
                            onChange={(e) => setCurrentKeyword(e.target.value)}
                            placeholder="e.g. ai agent platform"
                            onKeyDown={(e) => e.key === 'Enter' && addKeyword()}
                        />
                        <Button onClick={addKeyword} variant="secondary" size="icon"><Plus className="h-4 w-4" /></Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {keywords.map((k, i) => (
                            <Badge key={i} variant="outline" className="pl-2 pr-1 py-1 flex items-center gap-1">
                                {k}
                                <span className="cursor-pointer hover:text-red-500 ml-1 font-bold" onClick={() => removeKeyword(k)}>×</span>
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}>Back</Button>
                <Button onClick={handleNext} disabled={!url.trim() || keywords.length === 0}>Continue</Button>
            </CardFooter>
        </Card>
    );
}
