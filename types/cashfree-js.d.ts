declare module '@cashfreepayments/cashfree-js' {
    export interface Cashfree {
        checkout(options: any): Promise<any>;
    }
    export function load(options: { mode: 'production' | 'sandbox' }): Promise<Cashfree>;
}
