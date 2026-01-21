'use client';

import { load } from '@cashfreepayments/cashfree-js';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface CashfreeCheckoutProps {
    orderPromise: () => Promise<any>; // Function that returns a promise resolving to { payment_session_id: string }
    onSuccess?: () => void;
    onFailure?: (error: any) => void;
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

export const CashfreeCheckout = ({ orderPromise, onSuccess, onFailure, children, className, disabled }: CashfreeCheckoutProps) => {
    const [cashfree, setCashfree] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const initializeSDK = async () => {
            try {
                const cashfreeInstance = await load({
                    mode: process.env.NEXT_PUBLIC_CASHFREE_MODE === 'PRODUCTION' ? 'production' : 'sandbox'
                });
                setCashfree(cashfreeInstance);
            } catch (error) {
                console.error('Cashfree SDK failed to load', error);
            }
        };
        initializeSDK();
    }, []);

    const handleCheckout = async () => {
        if (!cashfree) return;
        setLoading(true);

        try {
            const orderData = await orderPromise();

            if (!orderData || !orderData.payment_session_id) {
                throw new Error("Invalid order data received");
            }

            const checkoutOptions = {
                paymentSessionId: orderData.payment_session_id,
                redirectTarget: "_self", // or "_blank", or container ID
            };

            cashfree.checkout(checkoutOptions).then((result: any) => {
                if (result.error) {
                    // This will handle the error when payment failed
                    if (onFailure) onFailure(result.error);
                }
                if (result.redirect) {
                    // This will be called when payment is redirected
                    console.log("Payment Redirected");
                }
            });

        } catch (error) {
            console.error("Payment Error", error);
            if (onFailure) onFailure(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            onClick={handleCheckout}
            disabled={loading || !cashfree || disabled}
            className={className}
        >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {children || 'Pay Now'}
        </Button>
    );
};
