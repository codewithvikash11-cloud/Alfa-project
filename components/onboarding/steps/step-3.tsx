"use client";

import { useOnboarding } from "@/components/onboarding/onboarding-context";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export function Step3Role() {
    const { data, updateData, nextStep, prevStep } = useOnboarding();
    const [role, setRole] = useState(data.role);
    const [size, setSize] = useState(data.companySize);
    const [traffic, setTraffic] = useState(data.traffic);

    const handleNext = () => {
        if (role && size && traffic) {
            updateData({ role, companySize: size, traffic });
            nextStep();
        }
    };

    return (
        <Card className="w-full max-w-2xl shadow-lg border-0 bg-white/95 backdrop-blur">
            <CardHeader>
                <CardTitle className="text-2xl">Help us understand your needs</CardTitle>
                <CardDescription>Select the options that best describe your situation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Your Role</Label>
                        <Select onValueChange={setRole} defaultValue={role}>
                            <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="founder">Founder / CEO</SelectItem>
                                <SelectItem value="marketing_manager">Marketing Manager</SelectItem>
                                <SelectItem value="seo_specialist">SEO Specialist</SelectItem>
                                <SelectItem value="developer">Developer</SelectItem>
                                <SelectItem value="content_writer">Content Writer</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Company Size</Label>
                        <Select onValueChange={setSize} defaultValue={size}>
                            <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1-10">1-10 employees</SelectItem>
                                <SelectItem value="11-50">11-50 employees</SelectItem>
                                <SelectItem value="51-200">51-200 employees</SelectItem>
                                <SelectItem value="200+">200+ employees</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label>Monthly Website Traffic</Label>
                    <Select onValueChange={setTraffic} defaultValue={traffic}>
                        <SelectTrigger><SelectValue placeholder="Select current traffic range" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0-1k">0 - 1,000 visits</SelectItem>
                            <SelectItem value="1k-10k">1,000 - 10,000 visits</SelectItem>
                            <SelectItem value="10k-50k">10,000 - 50,000 visits</SelectItem>
                            <SelectItem value="50k+">50,000+ visits</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}>Back</Button>
                <Button onClick={handleNext} disabled={!role || !size || !traffic}>Continue</Button>
            </CardFooter>
        </Card>
    );
}
