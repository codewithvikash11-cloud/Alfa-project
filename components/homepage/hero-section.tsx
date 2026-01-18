"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
            <div className="container px-4 mx-auto text-center relative z-10">

                {/* Floating Elements (Decorative) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-10 left-[10%] hidden lg:block"
                >
                    <div className="bg-white p-4 rounded-xl shadow-xl border border-slate-100 transform -rotate-6">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg mb-2" />
                        <div className="w-24 h-2 bg-slate-100 rounded mb-1" />
                        <div className="w-16 h-2 bg-slate-100 rounded" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-20 right-[10%] hidden lg:block"
                >
                    <div className="bg-white p-4 rounded-xl shadow-xl border border-slate-100 transform rotate-6">
                        <div className="flex gap-2 mb-2">
                            <div className="w-8 h-8 bg-green-100 rounded-full" />
                            <div className="space-y-1">
                                <div className="w-20 h-2 bg-slate-100 rounded" />
                                <div className="w-12 h-2 bg-slate-100 rounded" />
                            </div>
                        </div>
                    </div>
                </motion.div>


                <div className="max-w-4xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center"
                    >
                        <Badge variant="outline" className="px-4 py-2 rounded-full text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                            ✨ New: AI Content Generator v2.0 is live
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white"
                    >
                        Get High-Converting Traffic From <br />
                        <span className="text-primary bg-clip-text">AI Search & SEO</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Automate your SEO strategy with intelligent agents that monitor rankings, generate optimized content, and analyze competitors 24/7.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" className="rounded-full h-14 px-8 text-lg shadow-lg hover:shadow-primary/25 transition-all" asChild>
                            <Link href="/register">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-slate-200 hover:bg-slate-50">
                            <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
                        </Button>
                    </motion.div>
                </div>

                {/* Hero Image/Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 relative mx-auto max-w-5xl"
                >
                    <div className="relative rounded-2xl p-2 bg-gradient-to-b from-slate-200/50 to-slate-100/10 backdrop-blur-3xl border border-white/50 shadow-2xl">
                        <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200/60 aspect-[16/9] relative flex items-center justify-center">
                            {/* Placeholder for uploaded image lookalike or actual screenshot */}
                            <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
                                <p className="text-slate-400 font-medium">Dashboard Preview Interface</p>
                                {/* In a real scenario, we'd use next/image here */}
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute -inset-10 -z-10 bg-primary/20 blur-[100px] rounded-full opacity-50" />
                </motion.div>
            </div>
        </section>
    );
}
