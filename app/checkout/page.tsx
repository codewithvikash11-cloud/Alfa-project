"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card"; // Using card for the white container if needed, but this looks like a full page split
import { BarChart2, CreditCard, Building2, Lock } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckoutPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handlePayment = () => {
        setLoading(true);
        setTimeout(() => {
            router.push("/dashboard");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row font-sans bg-white text-slate-900">
            {/* Left Side - Product Info */}
            <div className="w-full md:w-1/2 bg-[#007AFF] text-white p-8 md:p-12 lg:p-20 flex flex-col items-start relative overflow-hidden">
                {/* Background pattern if any, looks plain blue with logo */}

                <div className="z-10 mt-10 md:mt-20">
                    <div className="flex items-center gap-2 text-white/80 mb-8 font-medium">
                        <BarChart2 className="h-5 w-5" />
                        <span>SEOForge.ai</span>
                        {/* Screenshot says Bidylitics, Inc. but we stick to project name */}
                    </div>

                    <div className="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
                        <BarChart2 className="h-7 w-7 text-white" />
                    </div>

                    <p className="text-white/80 font-medium mb-1">Try Startup</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">7 days free</h1>
                    <p className="text-white/80 text-lg">Then $29.00 per month starting January 25, 2026</p>

                    {/* Big Visual Icon */}
                    <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl max-w-xs mx-auto md:mx-0 flex flex-col items-center justify-center aspect-square w-64 h-64">
                        <div className="relative mb-4">
                            {/* Eye Icon */}
                            <div className="bg-[#007AFF] rounded-full p-4 h-24 w-24 flex items-center justify-center relative z-10">
                                <span className="text-5xl font-bold text-white">A</span>
                            </div>
                            {/* Bars */}
                        </div>
                        <div className="flex items-end gap-3 h-20">
                            <div className="w-8 bg-[#007AFF] h-12 rounded-t-md"></div>
                            <div className="w-8 bg-[#007AFF] h-16 rounded-t-md"></div>
                            <div className="w-8 bg-[#007AFF] h-20 rounded-t-md"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Payment Form */}
            <div className="w-full md:w-1/2 bg-white p-8 md:p-12 lg:p-20 overflow-y-auto">
                <div className="max-w-md mx-auto">
                    <div className="flex gap-4 mb-8">
                        <button className="flex-1 bg-[#00D66F] hover:bg-[#00c465] text-white font-bold py-3 rounded-md flex items-center justify-center gap-1 transition-colors">
                            Pay with <span className="font-extrabold italic">Link</span>
                        </button>
                        <button className="flex-1 bg-[#FFD814] hover:bg-[#f7d010] text-black font-bold py-3 rounded-md flex items-center justify-center gap-1 transition-colors">
                            amazon pay
                        </button>
                    </div>

                    <div className="relative text-center mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <span className="relative bg-white px-4 text-slate-400 text-sm">OR</span>
                    </div>

                    <h2 className="text-xl font-medium mb-6">Enter payment details</h2>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-600">Email</Label>
                            <Input id="email" defaultValue="codumodu20@gmail.com" className="bg-white border-slate-200 h-10 shadow-sm" />
                        </div>

                        <div className="space-y-3">
                            <Label className="text-slate-600">Payment method</Label>

                            <div className="border border-slate-200 rounded-lg p-3 flex items-center gap-3 cursor-pointer ring-2 ring-transparent hover:border-slate-300">
                                <div className="h-4 w-4 rounded-full border border-slate-300 flex items-center justify-center">
                                    <div className="h-2 w-2 bg-slate-400 rounded-full opacity-0"></div>
                                </div>
                                <CreditCard className="h-5 w-5 text-slate-700" />
                                <span className="font-medium text-slate-700">Card</span>
                                <div className="ml-auto flex gap-1">
                                    <div className="h-4 w-6 bg-slate-100 border border-slate-200 rounded"></div>
                                    <div className="h-4 w-6 bg-slate-100 border border-slate-200 rounded"></div>
                                    <div className="h-4 w-6 bg-slate-100 border border-slate-200 rounded"></div>
                                </div>
                            </div>

                            <div className="border border-slate-200 rounded-lg p-3 flex items-center gap-3 cursor-pointer ring-2 ring-transparent hover:border-slate-300">
                                <div className="h-4 w-4 rounded-full border border-slate-300"></div>
                                <div className="h-5 w-5 bg-green-500 rounded text-white flex items-center justify-center font-bold text-xs">$</div>
                                <span className="font-medium text-slate-700">Cash App Pay</span>
                            </div>

                            <div className="border border-slate-200 rounded-lg p-3 flex items-center gap-3 cursor-pointer ring-2 ring-transparent hover:border-slate-300">
                                <div className="h-4 w-4 rounded-full border border-slate-300"></div>
                                <Building2 className="h-5 w-5 text-slate-700" />
                                <span className="font-medium text-slate-700">Bank</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 mt-4">
                            <div className="h-5 w-5 border border-slate-300 rounded mt-0.5" />
                            <div className="text-sm text-slate-500">
                                <span className="font-medium text-slate-700">Save my information for faster checkout</span>
                                <p className="mt-0.5">Pay securely at SEOForge.ai, Inc. and everywhere Link is accepted.</p>
                            </div>
                        </div>

                        <Button
                            className="w-full bg-[#007AFF] hover:bg-[#0069db] h-12 text-lg font-medium shadow-none mt-4"
                            onClick={handlePayment}
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Start trial"}
                        </Button>

                        <p className="text-xs text-slate-400 mt-4 text-center leading-relaxed">
                            By subscribing, you authorize SEOForge.ai, Inc. to charge you according to the terms until you cancel.
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex items-center justify-center gap-4 text-slate-400 text-sm">
                    <Link href="#" className="hover:text-slate-600">Terms</Link>
                    <Link href="#" className="hover:text-slate-600">Privacy</Link>
                </div>
            </div>
        </div>
    );
}

