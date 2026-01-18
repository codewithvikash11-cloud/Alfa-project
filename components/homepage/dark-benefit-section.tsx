"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, PenTool } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function DarkBenefitSection() {
    return (
        <section className="py-24 bg-[#0F172A] text-white overflow-hidden relative">
            {/* Background gradient blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Higher Visibility. <br />
                        More Traffic. <br />
                        <span className="text-slate-300">Increased Revenue.</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Our agents don't just give advice; they execute tasks for you. Stop managing tools and start managing growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[400px]"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Rank for Search Engines & AI Models</h3>
                            <p className="text-blue-100 mb-8 max-w-sm">
                                Don't just optimize for Google. Get cited by ChatGPT, Claude, and Gemini with our proprietary schema optimization.
                            </p>
                            <Button variant="secondary" className="rounded-full">
                                Start Ranking <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        {/* Abstract Visual */}
                        <div className="absolute font-bold text-[200px] leading-none text-white/10 -bottom-10 -right-10 select-none">
                            #1
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[400px]"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Outrank Competitors with Real-Time Data</h3>
                            <p className="text-orange-100 mb-8 max-w-sm">
                                Monitor changes in competitor content and structure instantly. React before they even know you're there.
                            </p>
                            <Button variant="secondary" className="rounded-full text-orange-600 hover:text-orange-700 hover:bg-white">
                                Analyze Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        {/* Abstract Visual */}
                        <div className="absolute top-1/2 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                    </motion.div>
                </div>

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="relative z-10 max-w-xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Generate Unlimited Content 10x Faster</h3>
                        <p className="text-purple-100 mb-6">
                            Our Article Writer agent researches, drafts, and optimizes long-form content that reads naturally and ranks high.
                        </p>
                        <Button size="lg" variant="secondary" className="rounded-full text-primary hover:text-primary font-bold">
                            Try Content Generator <Sparkles className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    <div className="relative z-10">
                        {/* Illustration placeholder */}
                        <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                            <PenTool className="h-24 w-24 text-white/80" />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
