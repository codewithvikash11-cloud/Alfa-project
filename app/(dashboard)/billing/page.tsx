import { CashfreeCheckout } from "@/components/payment/CashfreeCheckout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function BillingPage() {
    const createSubscriptionOrder = async () => {
        const response = await fetch('/api/payment/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ plan: 'PRO', billingInterval: 'MONTHLY' })
        });
        if (!response.ok) throw new Error('Failed to create order');
        return response.json();
    };

    return (
        <div className="space-y-10 pb-10">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Simple, transparent pricing</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Choose the plan that's right for your business. Start for free, upgrade when you grow.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {/* Free Plan */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Free Starter</CardTitle>
                        <CardDescription>Perfect for trying out the platform.</CardDescription>
                        <div className="mt-4">
                            <span className="text-4xl font-bold">$0</span><span className="text-muted-foreground">/mo</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> 1 Project</li>
                            <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> 3 AI Articles/mo</li>
                            <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> Basic Analytics</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" variant="outline">Current Plan</Button>
                    </CardFooter>
                </Card>

                {/* Pro Plan */}
                <Card className="border-primary shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl">POPULAR</div>
                    <CardHeader>
                        <CardTitle className="text-xl">Pro</CardTitle>
                        <CardDescription>For growing businesses and creators.</CardDescription>
                        <div className="mt-4">
                            <span className="text-4xl font-bold">$29</span><span className="text-muted-foreground">/mo</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> 5 Projects</li>
                            <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> 50 AI Articles/mo</li>
                            <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> Competitor Tracking</li>
                            <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> Priority Support</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <CashfreeCheckout
                            orderPromise={createSubscriptionOrder}
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            Upgrade to Pro
                        </CashfreeCheckout>
                    </CardFooter>
                </Card>

                {/* Agency Plan */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Agency</CardTitle>
                        <CardDescription>For agencies managing multiple clients.</CardDescription>
                        <div className="mt-4">
                            <span className="text-4xl font-bold">$99</span><span className="text-muted-foreground">/mo</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> Unlimited Projects</li>
                            <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> Unlimited Articles</li>
                            <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> White Labeling</li>
                            <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> API Access</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" variant="outline">Contact Sales</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
