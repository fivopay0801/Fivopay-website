import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, FileCheck, AlertTriangle, Clock } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const certifications = [
  { name: "PCI DSS", detail: "Level 1 Certified", status: "Certified" },
  { name: "ISO 27001", detail: "Information Security", status: "Verified" },
  { name: "SOC 2 Type II", detail: "Audited & Compliant", status: "Protected" },
  { name: "AES-256", detail: "Military-grade Encryption", status: "Active" },
];

const features = [
  { icon: Lock, label: "Multi-factor Authentication" },
  { icon: Eye, label: "Real-time Fraud Detection" },
  { icon: Shield, label: "End-to-end Encryption" },
  { icon: FileCheck, label: "Regular Security Audits" },
  { icon: AlertTriangle, label: "Compliance Monitoring" },
  { icon: Clock, label: "24/7 Security Operations" },
];

const SecuritySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Bank-Level Security &{" "}
              <span className="gradient-text">Compliance</span>
            </h2>
            <p
              className={`text-lg text-muted-foreground mb-8 leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Your data and transactions are protected by industry-leading security measures 
              and certifications. We implement multiple layers of security to ensure your 
              financial data remains safe and compliant with global standards.
            </p>

            {/* Feature Grid */}
            <div
              className={`grid grid-cols-2 gap-4 mb-8 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {features.map((feature, index) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary border border-border"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <feature.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            <Link to="/security">
              <Button variant="gradient" size="lg">
                Learn More About Security
              </Button>
            </Link>
          </div>

          {/* Certifications Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="p-6 rounded-2xl bg-card shadow-card border border-border hover-lift group"
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {cert.status}
                  </span>
                  <Shield className="h-5 w-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
