"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PricingSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />

            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
                        Grow Organic Traffic on <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Auto-Pilot</span>
                    </h2>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="bg-slate-100 p-1 rounded-full inline-flex">
                            <Button variant="ghost" className="rounded-full px-6 bg-white shadow-sm text-slate-900">Monthly</Button>
                            <Button variant="ghost" className="rounded-full px-6 text-slate-500 hover:text-slate-900">Yearly <span className="text-green-600 text-xs ml-1 font-bold">-20%</span></Button>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Free Plan */}
                    <Card className="border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
                        <CardHeader>
                            <h3 className="text-xl font-bold text-slate-900">Starter</h3>
                            <div className="flex items-baseline gap-1 mt-4">
                                <span className="text-4xl font-bold tracking-tight">$29</span>
                                <span className="text-slate-500">/mo</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-2">For individuals and hobbyists.</p>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full mb-6" variant="outline">Start Free Trial</Button>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 1 Project</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 5,000 AI Words/mo</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Basic Analytics</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 10 Keywords Tracked</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Pro Plan */}
                    <Card className="border-2 border-primary shadow-2xl relative scale-105 z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                            Most Popular
                        </div>
                        <CardHeader>
                            <h3 className="text-xl font-bold text-primary">Professional</h3>
                            <div className="flex items-baseline gap-1 mt-4">
                                <span className="text-4xl font-bold tracking-tight">$69</span>
                                <span className="text-slate-500">/mo</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-2">For growing startups and creators.</p>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full mb-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">Get Started Now</Button>
                            <ul className="space-y-3 text-sm text-slate-700 font-medium">
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 5 Projects</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 50,000 AI Words/mo</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Competitor Analysis</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 100 Keywords Tracked</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Priority Support</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Agency Plan */}
                    <Card className="border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
                        <CardHeader>
                            <h3 className="text-xl font-bold text-slate-900">Agency</h3>
                            <div className="flex items-baseline gap-1 mt-4">
                                <span className="text-4xl font-bold tracking-tight">$199</span>
                                <span className="text-slate-500">/mo</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-2">For large teams and agencies.</p>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full mb-6" variant="outline">Contact Sales</Button>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Unlimited Projects</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Unlimited AI Words</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> White Label Reports</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> API Access</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Dedicated Account Manager</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
