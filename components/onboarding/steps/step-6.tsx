"use client";

import { useOnboarding } from "@/components/onboarding/onboarding-context";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Bot } from "lucide-react";

export function Step6AIConfig() {
    const { data, updateData, nextStep, prevStep } = useOnboarding();
    const [tone, setTone] = useState(data.aiTone);
    const [lang, setLang] = useState(data.aiLanguage);

    const handleNext = () => {
        updateData({ aiTone: tone, aiLanguage: lang });
        nextStep();
    };

    return (
        <Card className="w-full max-w-2xl shadow-lg border-0 bg-white/95 backdrop-blur">
            <CardHeader>
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                    <Bot className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Configure your AI Agents</CardTitle>
                <CardDescription>Set the behavior and personality of your autonomous agents.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Content Tone</Label>
                        <Select onValueChange={setTone} defaultValue={tone}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Professional">Professional</SelectItem>
                                <SelectItem value="Casual">Casual</SelectItem>
                                <SelectItem value="Authoritative">Authoritative</SelectItem>
                                <SelectItem value="Funny">Funny</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Output Language</Label>
                        <Select onValueChange={setLang} defaultValue={lang}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="English">English</SelectItem>
                                <SelectItem value="Spanish">Spanish</SelectItem>
                                <SelectItem value="French">French</SelectItem>
                                <SelectItem value="German">German</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}>Back</Button>
                <Button onClick={handleNext}>Generate Prompts</Button>
            </CardFooter>
        </Card>
    );
}
