"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BarChart2, CheckCircle2, MessageSquare, XCircle } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [step, setStep] = useState<"register" | "verify">("register");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const router = useRouter();

    // Password validation state
    const hasMinLength = password.length >= 6;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, validation and API call here
        setStep("verify");
    };

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock verification
        router.push("/onboarding");
    };

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }

        // Auto-redirect if all fields are filled
        if (value && index === 5 && newOtp.every(d => d.length > 0)) {
            router.push("/onboarding");
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-400 p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500 opacity-100 -z-10" />

            {/* Floating Chat Button */}
            <div className="absolute bottom-6 right-6 z-20">
                <Button size="icon" className="h-14 w-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white border-4 border-white">
                    <MessageSquare className="h-6 w-6 fill-current" />
                </Button>
            </div>

            {step === "register" ? (
                <Card className="w-full max-w-[480px] shadow-2xl border-0 rounded-2xl">
                    <CardHeader className="space-y-2 flex flex-col items-center pt-10 pb-6">
                        <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <BarChart2 className="h-7 w-7 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-center tracking-tight text-slate-900">Create your account</CardTitle>
                        <CardDescription className="text-center text-slate-500 text-base">
                            Sign up to get started with SEO Forge.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5 px-8 md:px-12">
                        <form onSubmit={handleRegister} className="space-y-4">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name" className="text-slate-700 font-medium">First Name</Label>
                                    <Input id="first-name" placeholder="First name" className="h-11 bg-slate-50 border-slate-200" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name" className="text-slate-700 font-medium">Last Name</Label>
                                    <Input id="last-name" placeholder="Last name" className="h-11 bg-slate-50 border-slate-200" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        className="h-11 bg-slate-50 border-slate-200"
                                        required
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="........"
                                        className="h-11 bg-slate-50 border-slate-200"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Requirements */}
                            <div className="space-y-2 pt-2">
                                <RequirementItem isValid={hasMinLength} text="At least 6 characters" />
                                <RequirementItem isValid={hasNumber} text="At least 1 number" />
                                <RequirementItem isValid={hasSpecialChar} text="At least 1 special character" />
                            </div>

                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-11 text-base font-semibold shadow-lg shadow-blue-600/20" size="lg">
                                Create account
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center pb-10 pt-2">
                        <p className="text-sm text-slate-500 font-medium">
                            Already have an account?{" "}
                            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-bold">
                                Sign in
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            ) : (
                <Card className="w-full max-w-[500px] shadow-2xl border-0 rounded-2xl">
                    <CardContent className="pt-10 pb-10 px-8 md:px-12 flex flex-col items-center text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
                            Check your email,<br />
                            {email || "codumodu20@gmail.com"} and<br />
                            type in the verification code
                        </h2>

                        <p className="text-slate-500 mb-8 font-medium">
                            Please check your <span className="text-red-500 font-bold">spam</span> folder too
                        </p>

                        <form onSubmit={handleVerify} className="w-full space-y-8">
                            <div className="flex justify-center gap-3">
                                {otp.map((digit, idx) => (
                                    <Input
                                        key={idx}
                                        ref={el => { inputRefs.current[idx] = el }}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={e => handleOtpChange(idx, e.target.value)}
                                        onKeyDown={e => handleKeyDown(idx, e)}
                                        className="w-12 h-14 text-center text-2xl font-bold bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                    />
                                ))}
                            </div>

                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-11 text-base font-semibold shadow-lg shadow-blue-600/20" size="lg">
                                Verify Email
                            </Button>

                            <button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline">
                                Resend code
                            </button>
                        </form>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

function RequirementItem({ isValid, text }: { isValid: boolean; text: string }) {
    return (
        <div className="flex items-center gap-2 text-xs">
            {isValid ? (
                <CheckCircle2 className="h-4 w-4 text-slate-900 fill-slate-900 stroke-white" />
            ) : (
                <XCircle className="h-4 w-4 text-slate-300" />
            )}
            <span className={cn("transition-colors", isValid ? "text-slate-900 font-medium" : "text-slate-500")}>
                {text}
            </span>
        </div>
    )
}
