import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

const RefundPolicy = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <Layout>
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-background" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h1 className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            Refund and <span className="gradient-text">Cancellation</span>
                        </h1>

                        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                            <p>Last Updated: March 20, 2026</p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">1. Cancellation Policy</h2>
                            <p>
                                Customers can cancel their service subscription at any time. However, cancellations made after the billing cycle has started will take effect from the next billing period. To cancel, please email support@fivopay.com.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">2. Refund Eligibility</h2>
                            <p>
                                Refunds are considered on a case-by-case basis. Generally, since FivoPay provides digital software-as-a-service (SaaS) products, refunds are only issued if:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>A double payment was made accidentally.</li>
                                <li>The service was not delivered due to a technical failure on our part.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-foreground mt-8">3. Refund Timeline</h2>
                            <p className="bg-secondary p-4 rounded-lg border border-border">
                                <strong>Processing Timeline:</strong> Once a refund request is approved, the refund will be initiated and processed within <strong>5 to 7 business days</strong>. The amount will be credited back to the original payment method used during the transaction.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">4. Dispute Fees</h2>
                            <p>
                                Any chargeback or dispute fees levied by payment gateways or banks during the refund process will be the responsibility of the customer.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">5. Contact Support</h2>
                            <p>
                                For any refund or cancellation queries, please contact our support team at fivopay0801@gmail.com or call +91 8292355155.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default RefundPolicy;
