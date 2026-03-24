import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

const PrivacyPolicy = () => {
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
                            Privacy <span className="gradient-text">Policy</span>
                        </h1>

                        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                            <p>Last Updated: March 20, 2026</p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">1. Introduction</h2>
                            <p>
                                SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">2. Information We Collect</h2>
                            <p>
                                We collect information that you provides directly to us, such as when you create an account, use our services, or contact us for support. This may include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                                <li>Business information (Company name, registration details)</li>
                                <li>Financial information for transaction processing</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-foreground mt-8">3. Use of Information</h2>
                            <p>
                                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">4. Data Sharing with Payment Partners</h2>
                            <p className="bg-secondary p-4 rounded-lg border border-border">
                                <strong>Important:</strong> To process your payments securely, we share relevant transaction and personal data with our payment aggregation partner. Your data is handled in accordance with their security standards and our commitment to data protection.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">5. Cookies</h2>
                            <p>
                                We use cookies and similar tracking technologies to track the activity on our service and hold certain information to improve your experience.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">6. Security</h2>
                            <p>
                                We implement industry-standard security measures, including SSL encryption, to protect your data. However, no method of transmission over the Internet is 100% secure.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">7. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at info@fivopay.com.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PrivacyPolicy;
