"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, PenTool, BarChart3, Globe, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Search,
        title: "SEO Health Monitoring",
        description: "Real-time alerts for broken links, slow pages, and core web vitals issues."
    },
    {
        icon: PenTool,
        title: "AI Content Generation",
        description: "Create human-like, SEO-optimized articles in minutes with our advanced agents."
    },
    {
        icon: BarChart3,
        title: "Competitor Analysis",
        description: "Spy on your competitors' keywords and backlinks to steal their traffic."
    },
    {
        icon: Globe,
        title: "Automated Backlinks",
        description: "Smart outreach campaigns to build high-authority backlinks on autopilot."
    },
    {
        icon: Shield,
        title: "Rank Protection",
        description: "Get notified immediately if your rankings drop for key search terms."
    },
    {
        icon: Zap,
        title: "Speed Optimization",
        description: "AI suggestions to improve your page load speed and pass Core Web Vitals."
    }
];

export function FeaturesGrid() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
                        Everything You Need to Grow <br />
                        Across AI Search & SEO
                    </h2>
                    <p className="text-slate-500 text-lg">
                        From technical audits to content creation, our agents handle the heavy lifting so you can focus on strategy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
