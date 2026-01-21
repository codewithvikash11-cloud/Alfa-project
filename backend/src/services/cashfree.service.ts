import { Cashfree, CFEnvironment } from "cashfree-pg";
import { config } from '../config/env';
import logger from '../utils/logger';

// Initialize Cashfree instance
const cashfree = new Cashfree(
    config.cashfreeEnv === 'PRODUCTION' ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX,
    config.cashfreeAppId,
    config.cashfreeSecretKey
);

export const createOrder = async (orderId: string, amount: number, customerId: string, customerPhone: string, returnUrl: string) => {
    try {
        const request = {
            order_amount: amount,
            order_currency: "INR",
            order_id: orderId,
            customer_details: {
                customer_id: customerId,
                customer_phone: customerPhone,
            },
            order_meta: {
                return_url: returnUrl,
            }
        };

        const response = await cashfree.PGCreateOrder(request);
        return response.data;
    } catch (error: any) {
        logger.error(`Cashfree Create Order Error: ${error.message}`, error.response?.data);
        throw new Error(error.response?.data?.message || 'Error creating payment order');
    }
};

export const verifyPayment = async (orderId: string) => {
    try {
        const response = await cashfree.PGOrderFetchPayments(orderId);
        return response.data;
    } catch (error: any) {
        logger.error(`Cashfree Verify Payment Error: ${error.message}`, error.response?.data);
        throw new Error('Error verifying payment');
    }
};
