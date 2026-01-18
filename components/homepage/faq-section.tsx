"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"; // Assuming this component exists or standard Shadcn

export function FAQSection() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container px-4 mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">Everything you need to know about the product and billing.</p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left">How does the AI Article Writer work?</AccordionTrigger>
                        <AccordionContent>
                            Our AI analyzes the top 10 search results for your target keyword, identifies content gaps, and generates a comprehensive, SEO-optimized article that is ready to publish.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left">Can I change plans anytime?</AccordionTrigger>
                        <AccordionContent>
                            Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left">Is there a free trial?</AccordionTrigger>
                        <AccordionContent>
                            Absolutely! We offer a 14-day free trial on all plans. No credit card required to sign up.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left">Do you support languages other than English?</AccordionTrigger>
                        <AccordionContent>
                            Yes, our AI agents are fluent in over 25 languages including Spanish, French, German, Italian, and Portuguese.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
