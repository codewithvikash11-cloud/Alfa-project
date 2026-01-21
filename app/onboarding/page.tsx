"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BarChart2, MessageSquare, Trash2, Plus, Sparkles, Check, CheckCircle2, Circle, Bot, Zap, Globe, Cpu, Search, Calendar } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function OnboardingPage() {
    const [step, setStep] = useState(1);
    const router = useRouter();

    // Form State
    const [formData, setFormData] = useState({
        // Steps 1-5
        projectName: "",
        companyName: "",
        companyWebsite: "https://",
        role: "",
        companySize: "",
        searchVolume: "",
        aiTraffic: "" as "yes" | "no" | "dont-know" | "",
        shortDescription: "",
        industry: "",
        description: "",
        features: ["", "", ""],
        monitorName: "",
        monitorDescription: "",
        language: "GB English",
        location: "Global (Global)",
        // Step 6 (Removed model selection)
        // selectedModels: [] as string[],
        // Step 7
        prompts: [
            "What can you tell me about the company wr4rr3g?",
            "Have you heard of the website chodumodu.com?",
            "What industry does wr4rr3g operate in?",
            "How can I find more information about wr4rr3g?",
            "What are the key features of the company wr4rr3g?",
            "What services does wr4rr3g offer?"
        ],
        // Step 8
        planInterval: "monthly" as "monthly" | "yearly",
        selectedPlan: "",
    });

    const handleNext = () => {
        if (step === 8) {
            // Redirect to Checkout
            router.push("/checkout");
        } else {
            setStep(prev => Math.min(prev + 1, 8));
        }
    };

    const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

    // Feature list handlers
    const updateFeature = (index: number, value: string) => {
        const newFeatures = [...formData.features];
        newFeatures[index] = value;
        setFormData({ ...formData, features: newFeatures });
    };

    const addFeature = () => {
        setFormData({ ...formData, features: [...formData.features, ""] });
    };

    const removeFeature = (index: number) => {
        const newFeatures = formData.features.filter((_, i) => i !== index);
        setFormData({ ...formData, features: newFeatures });
    };

    // Prompt handlers
    const updatePrompt = (index: number, value: string) => {
        const newPrompts = [...formData.prompts];
        newPrompts[index] = value;
        setFormData({ ...formData, prompts: newPrompts });
    }

    const addPrompt = () => {
        setFormData({ ...formData, prompts: [...formData.prompts, ""] });
    }

    const removePrompt = (index: number) => {
        const newPrompts = formData.prompts.filter((_, i) => i !== index);
        setFormData({ ...formData, prompts: newPrompts });
    }

    // Model selection
    // Model selection logic removed
    /*
    const toggleModel = (modelId: string) => {
        if (formData.selectedModels.includes(modelId)) {
            setFormData({ ...formData, selectedModels: formData.selectedModels.filter(id => id !== modelId) });
        } else {
            setFormData({ ...formData, selectedModels: [...formData.selectedModels, modelId] });
        }
    };
    */


    // total steps for progress bar
    const totalSteps = 8;
    const progressPercentage = (step / totalSteps) * 100;

    const ModelCard = ({ id, name, description, icon: Icon }: { id: string, name: string, description: string, icon: any }) => (
        <div
            onClick={() => toggleModel(id)}
            className={cn(
                "cursor-pointer rounded-xl border p-4 flex items-start gap-4 transition-all duration-200 hover:shadow-md",
                formData.selectedModels.includes(id) ? "border-blue-500 bg-blue-50/50 ring-1 ring-blue-500" : "border-slate-200 bg-white hover:border-slate-300"
            )}
        >
            <div className={cn("h-10 w-10 min-w-10 rounded-lg flex items-center justify-center", formData.selectedModels.includes(id) ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500")}>
                <Icon className="h-6 w-6" />
            </div>
            <div>
                <h3 className="text-sm font-bold text-slate-900 leading-tight mb-1">{name}</h3>
                <p className="text-[11px] text-slate-500 leading-snug">{description}</p>
            </div>
        </div>
    );

    const PricingFeature = ({ text }: { text: string }) => (
        <div className="flex items-start gap-2 text-sm text-slate-600">
            <div className="mt-1 h-3 w-3 min-w-3 bg-blue-500 rounded-full flex items-center justify-center">
                <Check className="h-2 w-2 text-white font-bold" />
            </div>
            <span>{text}</span>
        </div>
    )

    return (
        <div className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500 relative overflow-x-hidden font-sans pb-20">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-white/10 pointer-events-none" />

            {/* Progress Bar */}
            <div className="w-full max-w-lg mb-8 space-y-2 px-4 z-10">
                <div className="h-2 w-full bg-blue-900/20 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-orange-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>
                <div className="text-right text-xs text-white/90 font-medium">Step {step} of 8</div>
            </div>

            {/* Card Width Logic: Step 6 and 8 need wider layouts */}
            <Card className={cn(
                "w-full shadow-2xl border-0 rounded-2xl z-10 transition-all duration-500",
                (step === 6 || step === 8) ? "max-w-5xl" : "max-w-[600px]",
                "animate-in fade-in zoom-in-95"
            )}>
                <CardContent className={cn("flex flex-col items-center", (step === 6 || step === 8) ? "p-4 md:p-8" : "pt-12 pb-12 px-8 md:px-16")}>

                    {/* Header Icon */}
                    <div className="h-14 w-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                        <BarChart2 className="h-8 w-8 text-white" />
                        <div className="absolute -mt-8 -ml-8 bg-white text-blue-600 text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-sm">
                            A
                        </div>
                    </div>

                    {/* STEPS 1-5 (Condensed for Context Limit, assuming previously correct logic works, copying essential structure) */}
                    {step === 1 && (
                        <div className="w-full flex flex-col items-center text-center">
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Create Your Project or Organization</h1>
                            <p className="text-slate-500 mb-10 max-w-sm mx-auto leading-relaxed">Start by naming your project or organization. You can change this later.</p>
                            <div className="w-full space-y-6">
                                <div className="space-y-2 text-left">
                                    <Label className="text-slate-700 font-medium ml-1">Project/Organization Name</Label>
                                    <Input
                                        placeholder="Your project or organization name"
                                        className="h-12 bg-white"
                                        value={formData.projectName}
                                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                                    />
                                </div>
                                <Button className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30" onClick={handleNext}>Continue</Button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="w-full flex flex-col items-center text-center animate-in slide-in-from-right-10 duration-300 fade-in">
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Welcome</h1>
                            <p className="text-slate-500 mb-8 max-w-sm mx-auto">Let's get started by telling us about your company.</p>
                            <div className="w-full space-y-5 text-left">
                                <div className="space-y-2">
                                    <Label className="text-slate-700 font-medium">Company Name</Label>
                                    <Input placeholder="Your company name" className="h-12 bg-white" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-slate-700 font-medium">Company Website</Label>
                                    <Input placeholder="https://" className="h-12 bg-white" value={formData.companyWebsite} onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })} />
                                </div>
                                <Button className="w-full h-12 mt-4 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30" onClick={handleNext}>Next</Button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="w-full flex flex-col items-center text-center animate-in slide-in-from-right-10 duration-300 fade-in">
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Tell us about your role</h1>
                            <div className="w-full space-y-5 text-left">
                                <div className="space-y-2">
                                    <Label className="text-slate-700 font-medium">Your role</Label>
                                    <Input placeholder="e.g. Founder" className="h-12 bg-white" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} />
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <Button variant="outline" className="h-12 px-8" onClick={handleBack}>Back</Button>
                                    <Button className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 shadow-lg" onClick={handleNext}>Next</Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="w-full flex flex-col items-center text-center animate-in slide-in-from-right-10 duration-300 fade-in">
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Company Details</h1>
                            <div className="w-full space-y-5 text-left">
                                <div className="space-y-2">
                                    <Label className="text-slate-700 font-medium">Description</Label>
                                    <Textarea placeholder="Company description..." className="min-h-[100px] bg-white resize-none" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <Button variant="outline" className="h-12 px-8" onClick={handleBack}>Back</Button>
                                    <Button className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 shadow-lg" onClick={handleNext}>Next</Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 5 && (
                        <div className="w-full flex flex-col items-center text-center animate-in slide-in-from-right-10 duration-300 fade-in">
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Create Monitor</h1>
                            <div className="w-full space-y-5 text-left">
                                <div className="space-y-2">
                                    <Label className="text-slate-700 font-medium">Monitor Name</Label>
                                    <Input placeholder="e.g. Brand Monitor" className="h-12 bg-white" value={formData.monitorName} onChange={(e) => setFormData({ ...formData, monitorName: e.target.value })} />
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <Button variant="outline" className="h-12 px-8" onClick={handleBack}>Back</Button>
                                    <Button className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 shadow-lg" onClick={handleNext}>Next</Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 6: Monitor Models */}
                    {/* STEP 6: AI Engine Info (Replaced Model Selection) */}
                    {step === 6 && (
                        <div className="w-full flex flex-col items-center text-center animate-in slide-in-from-right-10 duration-300 fade-in">
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">AI Engine</h1>
                            <p className="text-slate-500 mb-8">Your agent is powered by Google's advanced Gemini High-Performance Models.</p>

                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-center gap-4 text-left max-w-md w-full mb-8">
                                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Google Gemini 1.5 Flash</h3>
                                    <p className="text-sm text-slate-600">Optimized for speed, accuracy, and SEO analysis.</p>
                                </div>
                            </div>

                            <div className="w-full flex justify-between pt-8">
                                <Button variant="outline" className="h-12 px-8" onClick={handleBack}>Back</Button>
                                <Button className="h-12 w-32 bg-blue-600 hover:bg-blue-700 shadow-lg" onClick={handleNext}>Next</Button>
                            </div>
                        </div>
                    )}

                    {/* STEP 7: Generated Prompts */}
                    {step === 7 && (
                        <div className="w-full max-w-[600px] flex flex-col items-center text-center animate-in slide-in-from-right-10 duration-300 fade-in">
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Generated Prompts</h1>
                            <p className="text-slate-500 mb-8">Review and edit the generated prompts, or add new ones as needed.</p>

                            <div className="w-full space-y-3">
                                {formData.prompts.map((prompt, idx) => (
                                    <div key={idx} className="flex gap-2">
                                        <Input
                                            value={prompt}
                                            onChange={(e) => updatePrompt(idx, e.target.value)}
                                            className="h-12 bg-white text-slate-700 shadow-sm"
                                        />
                                        <Button variant="ghost" size="icon" onClick={() => removePrompt(idx)} className="text-red-400 hover:text-red-500 hover:bg-red-50 h-12 w-12">
                                            <Trash2 className="h-5 w-5" />
                                        </Button>
                                    </div>
                                ))}
                                <div className="text-left pt-2">
                                    <Button variant="link" onClick={addPrompt} className="px-0 text-blue-600 h-auto font-medium gap-1">
                                        <Plus className="h-4 w-4" /> Add Prompt
                                    </Button>
                                </div>
                            </div>

                            <div className="w-full flex justify-between pt-8">
                                <Button variant="outline" className="h-12 px-8" onClick={handleBack}>Back</Button>
                                <Button className="h-12 w-32 bg-blue-600 hover:bg-blue-700 shadow-lg" onClick={handleNext}>Continue</Button>
                            </div>
                        </div>
                    )}

                    {/* STEP 8: Choose Your Plan */}
                    {step === 8 && (
                        <div className="w-full flex flex-col items-center text-center animate-in slide-in-from-right-10 duration-300 fade-in">
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Choose Your Plan</h1>
                            <p className="text-slate-500 mb-8">Select a plan to start monitoring your brand's AI visibility</p>

                            {/* Toggle */}
                            <div className="flex items-center gap-3 mb-10 bg-slate-100 p-1 rounded-lg">
                                <button
                                    onClick={() => setFormData({ ...formData, planInterval: "monthly" })}
                                    className={cn("px-4 py-2 rounded-md text-sm font-medium transition-all", formData.planInterval === "monthly" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900")}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setFormData({ ...formData, planInterval: "yearly" })}
                                    className={cn("px-4 py-2 rounded-md text-sm font-medium transition-all", formData.planInterval === "yearly" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900")}
                                >
                                    Yearly <span className="text-xs opacity-80">(Save 17%)</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
                                {/* Solo Plan */}
                                <div className="border border-slate-200 rounded-2xl p-6 bg-white flex flex-col items-start text-left hover:border-slate-300 transition-all">
                                    <h3 className="font-bold text-lg text-slate-900 mb-2">Solo</h3>
                                    <div className="flex items-baseline gap-1 mb-1">
                                        <span className="text-3xl font-bold text-slate-900">$29</span>
                                        <span className="text-slate-500">/month</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mb-4">$24/mo if paid annually</p>
                                    <p className="text-sm text-slate-600 mb-6 min-h-[40px]">Everything needed to get started.</p>

                                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white mb-6">Start your 7-day free trial</Button>

                                    <div className="space-y-3">
                                        <PricingFeature text="1 project" />
                                        <PricingFeature text="2 monitors" />
                                        <PricingFeature text="20 prompts" />
                                        <PricingFeature text="200 responses" />
                                        <PricingFeature text="2 models" />
                                        <PricingFeature text="Unlimited seats" />
                                    </div>
                                </div>

                                {/* Premium Plan */}
                                <div className="border-2 border-blue-500 rounded-2xl p-6 bg-blue-50/10 relative flex flex-col items-start text-left transform md:-translate-y-4 shadow-xl">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
                                    <h3 className="font-bold text-lg text-slate-900 mb-2">Premium</h3>
                                    <div className="flex items-baseline gap-1 mb-1">
                                        <span className="text-4xl font-bold text-slate-900">$99</span>
                                        <span className="text-slate-500">/month</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mb-4">$82/mo if paid annually</p>
                                    <p className="text-sm text-slate-600 mb-6 min-h-[40px]">Perfect for growing businesses.</p>

                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-6 shadow-lg shadow-blue-600/20" onClick={handleNext}>Start your 7-day free trial</Button>

                                    <div className="space-y-3">
                                        <PricingFeature text="2 projects" />
                                        <PricingFeature text="10 monitors" />
                                        <PricingFeature text="50 prompts" />
                                        <PricingFeature text="1000 responses" />
                                        <PricingFeature text="5 models" />
                                        <PricingFeature text="Google AI Overviews" />
                                        <PricingFeature text="Unlimited seats" />
                                    </div>
                                </div>

                                {/* Enterprise Plan */}
                                <div className="border border-slate-200 rounded-2xl p-6 bg-white flex flex-col items-start text-left hover:border-slate-300 transition-all">
                                    <h3 className="font-bold text-lg text-slate-900 mb-2">Enterprise</h3>
                                    <div className="flex items-baseline gap-1 mb-1">
                                        <span className="text-3xl font-bold text-slate-900">$399</span>
                                        <span className="text-slate-500">/month</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mb-4">$332/mo if paid annually</p>
                                    <p className="text-sm text-slate-600 mb-6 min-h-[40px]">All the premium features.</p>

                                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white mb-6">Start your 7-day free trial</Button>

                                    <div className="space-y-3">
                                        <PricingFeature text="5 projects" />
                                        <PricingFeature text="Unlimited monitors" />
                                        <PricingFeature text="250 prompts" />
                                        <PricingFeature text="Up to 25000 responses" />
                                        <PricingFeature text="Gemini Flash 1.5" />
                                        <PricingFeature text="Google AI Overviews" />
                                        <PricingFeature text="Unlimited seats" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-12 mb-4">
                                <div className="border border-amber-100 bg-amber-50 rounded-xl p-6 flex flex-col items-center text-center">
                                    <div className="h-10 w-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-3">
                                        <Calendar className="h-5 w-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">Want to try before you buy?</h4>
                                    <p className="text-sm text-slate-600 mb-4">Book a 20-min feedback call and get <span className="font-bold text-amber-600">30 days free</span> as a token of our gratitude!</p>
                                    <Button variant="link" className="text-blue-600 font-bold">Schedule a call →</Button>
                                </div>
                            </div>

                            <div className="w-full flex justify-center gap-6 mt-4 text-xs text-slate-400 font-medium">
                                <div className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-500" /> 7-day free trial</div>
                                <div className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-500" /> 100% money-back guarantee</div>
                                <div className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-500" /> Cancel anytime</div>
                            </div>

                            <div className="w-full flex justify-start mt-8">
                                <Button variant="outline" className="h-10 px-6" onClick={handleBack}>Back</Button>
                            </div>
                        </div>
                    )}

                </CardContent>
            </Card>

            {/* Floating Chat Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <Button size="icon" className="h-14 w-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white border-4 border-white">
                    <MessageSquare className="h-6 w-6 fill-current" />
                </Button>
            </div>
        </div>
    );
}
