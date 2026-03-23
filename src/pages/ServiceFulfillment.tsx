import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

const ServiceFulfillment = () => {
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
                            Service <span className="gradient-text">Fulfillment</span>
                        </h1>

                        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                            <p>Last Updated: March 20, 2026</p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">1. Service Delivery</h2>
                            <p>
                                SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED provides digital financial technology services and software-as-a-service (SaaS) platforms. As such, there are no physical goods to be shipped.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">2. Delivery Timeline</h2>
                            <p className="bg-secondary p-4 rounded-lg border border-border">
                                <strong>Timeline:</strong> Upon successful payment and account setup, service access is typically granted **immediately** or within **24 to 48 hours** for enterprise configurations that require manual setup.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">3. Delivery Method</h2>
                            <p>
                                Credentials and access links will be sent to the registered email address provided during the signup or onboarding process.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">4. Delays</h2>
                            <p>
                                In case of any technical delays in service fulfillment, customers will be notified via email within 24 hours of the expected delivery time.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">5. Contact Information</h2>
                            <p>
                                If you haven't received access to your service within the specified timeline, please reach out to us at fivopay0801@gmail.com.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceFulfillment;
