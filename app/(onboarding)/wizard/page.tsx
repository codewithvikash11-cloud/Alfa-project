import { OnboardingHeader } from "@/components/onboarding/onboarding-header";
import { OnboardingProvider } from "@/components/onboarding/onboarding-context";
import WizardForm from "@/components/onboarding/wizard-form";

export default function WizardPage() {
    return (
        <OnboardingProvider>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-950 dark:to-slate-900 flex flex-col">
                <OnboardingHeader />
                <main className="flex-1 flex flex-col items-center justify-center p-4 pt-20">
                    <WizardForm />
                </main>
            </div>
        </OnboardingProvider>
    );
}
