import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

const TermsConditions = () => {
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
                            Terms and <span className="gradient-text">Conditions</span>
                        </h1>

                        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                            <p>Last Updated: March 20, 2026</p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the website of FivoPay Solutions Pvt Ltd ("FivoPay"), you agree to be bound by these Terms and Conditions and all applicable laws and regulations.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">2. Use License</h2>
                            <p>
                                Permission is granted to temporarily download one copy of the materials on FivoPay's website for personal, non-commercial transitory viewing only.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">3. User Obligations</h2>
                            <p>
                                You agree not to use the website or services for any unlawful purpose. You are responsible for maintaining the confidentiality of any account details or passwords.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">4. Service Terms</h2>
                            <p>
                                FivoPay provides financial technology solutions. Specific service levels and uptime guarantees are governed by separate Service Level Agreements (SLA) signed during onboarding.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">5. Intellectual Property</h2>
                            <p>
                                All content, logos, and software on this website are the property of FivoPay Solutions Pvt Ltd and are protected by applicable copyright and trademark law.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">6. Limitations</h2>
                            <p>
                                In no event shall FivoPay or its partners be liable for any damages arising out of the use or inability to use the materials on FivoPay's website.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mt-8">7. Governing Law</h2>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Pune, Maharashtra.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TermsConditions;
