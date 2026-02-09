import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  Eye, 
  FileCheck, 
  AlertTriangle, 
  Clock,
  Server,
  Key,
  Database,
  Fingerprint,
  ArrowRight,
  Check
} from "lucide-react";
import { useEffect, useState } from "react";

const certifications = [
  { 
    name: "PCI DSS Level 1", 
    description: "Highest level of payment card security certification",
    icon: CreditCard,
  },
  { 
    name: "ISO 27001", 
    description: "International standard for information security management",
    icon: Shield,
  },
  { 
    name: "SOC 2 Type II", 
    description: "Comprehensive audit of security, availability & confidentiality",
    icon: FileCheck,
  },
  { 
    name: "GDPR Compliant", 
    description: "Full compliance with EU data protection regulations",
    icon: Lock,
  },
];

const securityFeatures = [
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description: "Military-grade encryption for all data at rest and in transit. Your sensitive information is protected with the strongest encryption standards.",
  },
  {
    icon: Fingerprint,
    title: "Multi-Factor Authentication",
    description: "Advanced MFA options including biometrics, OTP, and hardware tokens to ensure only authorized access to your systems.",
  },
  {
    icon: Eye,
    title: "Real-Time Fraud Detection",
    description: "AI-powered monitoring systems detect and prevent fraudulent activities in real-time, protecting your institution and customers.",
  },
  {
    icon: Database,
    title: "Secure Data Centers",
    description: "Tier-4 data centers with physical security, redundant power, and climate control. Geographic distribution for disaster recovery.",
  },
  {
    icon: Key,
    title: "Access Control",
    description: "Role-based access control with granular permissions. Complete audit trails for all user activities and system changes.",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Regular penetration testing, vulnerability assessments, and continuous monitoring. DDoS protection and WAF included.",
  },
];

const complianceItems = [
  "Regular third-party security audits",
  "Automated compliance monitoring",
  "Data residency options",
  "Privacy by design principles",
  "Incident response protocols",
  "Security awareness training",
  "Vendor security assessments",
  "Business continuity planning",
];

import { CreditCard } from "lucide-react";

const Security = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,64,175,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,175,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl gradient-primary mb-6">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Enterprise-Grade <span className="gradient-text">Security</span>
            </h1>
            <p
              className={`text-lg md:text-xl text-muted-foreground transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Your data protection is our top priority. We implement multiple layers 
              of security to ensure your financial data remains safe and compliant.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We maintain the highest security certifications in the industry
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="p-6 rounded-xl bg-card shadow-card border border-border hover-lift text-center group"
              >
                <div className="inline-flex p-4 rounded-xl bg-secondary mb-4 group-hover:bg-muted transition-colors">
                  <cert.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security <span className="gradient-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive security measures to protect your institution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-card shadow-card border border-border hover-lift"
              >
                <div className="inline-flex p-3 rounded-lg gradient-primary mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Compliance & <span className="gradient-text">Governance</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We maintain rigorous compliance standards and governance practices to ensure 
                your institution meets all regulatory requirements. Our platform is designed 
                with compliance built-in, not bolted-on.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {complianceItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="p-1 rounded-full gradient-primary">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="p-8 rounded-2xl bg-card shadow-xl border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl gradient-primary">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">24/7 Security Operations</h3>
                    <p className="text-sm text-muted-foreground">Continuous monitoring</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-secondary">
                    <span className="text-sm">Threat Detection</span>
                    <span className="text-sm font-semibold text-primary">Active</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-secondary">
                    <span className="text-sm">DDoS Protection</span>
                    <span className="text-sm font-semibold text-primary">Active</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-secondary">
                    <span className="text-sm">Encryption Status</span>
                    <span className="text-sm font-semibold text-primary">AES-256</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-secondary">
                    <span className="text-sm">Last Audit</span>
                    <span className="text-sm font-semibold text-muted-foreground">Jan 2025</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 p-4 rounded-xl gradient-primary text-primary-foreground shadow-lg">
                <Clock className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions About Security?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Our security team is ready to discuss your specific requirements
            </p>
            <Link to="/contact">
              <Button size="xl" className="bg-white text-primary hover:bg-white/90">
                Contact Security Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Security;
