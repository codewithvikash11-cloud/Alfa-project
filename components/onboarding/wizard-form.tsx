"use client";

import { useOnboarding } from "@/components/onboarding/onboarding-context";
import { Step1Project } from "@/components/onboarding/steps/step-1";
import { Step2Company } from "@/components/onboarding/steps/step-2";
import { Step3Role } from "@/components/onboarding/steps/step-3";
import { Step4Description } from "@/components/onboarding/steps/step-4";
import { Step5Monitor } from "@/components/onboarding/steps/step-5";
import { Step6AIConfig } from "@/components/onboarding/steps/step-6";
import { Step7Review } from "@/components/onboarding/steps/step-7";
import { Step8Finish } from "@/components/onboarding/steps/step-8";

export default function WizardForm() {
    const { step } = useOnboarding();

    switch (step) {
        case 1:
            return <Step1Project />;
        case 2:
            return <Step2Company />;
        case 3:
            return <Step3Role />;
        case 4:
            return <Step4Description />;
        case 5:
            return <Step5Monitor />;
        case 6:
            return <Step6AIConfig />;
        case 7:
            return <Step7Review />;
        case 8:
            return <Step8Finish />;
        default:
            return <Step1Project />;
    }
}
