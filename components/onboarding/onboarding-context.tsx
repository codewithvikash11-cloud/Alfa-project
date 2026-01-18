"use client";

import React, { createContext, useContext, useState } from "react";

interface OnboardingData {
    projectOrganization: string;
    companyName: string;
    website: string;
    role: string;
    companySize: string;
    traffic: string;
    description: string;
    keyFeatures: string[];
    monitorUrl: string;
    monitorKeywords: string[];
    aiTone: string;
    aiLanguage: string;
}

interface OnboardingContextType {
    step: number;
    data: OnboardingData;
    setStep: (step: number) => void;
    updateData: (data: Partial<OnboardingData>) => void;
    nextStep: () => void;
    prevStep: () => void;
}

const defaultData: OnboardingData = {
    projectOrganization: "",
    companyName: "",
    website: "",
    role: "",
    companySize: "",
    traffic: "",
    description: "",
    keyFeatures: [],
    monitorUrl: "",
    monitorKeywords: [],
    aiTone: "Professional",
    aiLanguage: "English",
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<OnboardingData>(defaultData);

    const updateData = (newData: Partial<OnboardingData>) => {
        setData((prev) => ({ ...prev, ...newData }));
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => Math.max(1, prev - 1));

    return (
        <OnboardingContext.Provider value={{ step, setStep, data, updateData, nextStep, prevStep }}>
            {children}
        </OnboardingContext.Provider>
    );
}

export function useOnboarding() {
    const context = useContext(OnboardingContext);
    if (context === undefined) {
        throw new Error("useOnboarding must be used within an OnboardingProvider");
    }
    return context;
}
