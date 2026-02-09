import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Wallet, 
  CreditCard, 
  ArrowRight, 
  Check,
  Users,
  PieChart,
  Bell,
  Globe,
  Smartphone,
  BarChart3,
  Shield
} from "lucide-react";
import { useEffect, useState } from "react";

const products = [
  {
    id: "cooperative",
    icon: Building2,
    title: "Cooperative Management",
    tagline: "Complete society operations and member management",
    description: "Comprehensive financial cooperative society management with member services, share management, dividend distribution, and complete loan processing capabilities.",
    features: [
      "Member registration & KYC management",
      "Share capital tracking & management",
      "Automated dividend calculation",
      "Loan origination & processing",
      "Multi-tier approval workflows",
      "Document management system",
      "SMS & email notifications",
      "Financial reporting & analytics",
    ],
    gradient: "from-brand-blue to-brand-cyan",
  },
  {
    id: "ethical",
    icon: Wallet,
    title: "Ethical Banking",
    tagline: "Sharia-compliant banking solutions",
    description: "Complete Islamic banking solution with profit-sharing accounts, Qard Hasan loans, automated Zakat calculations, and full Sharia compliance monitoring.",
    features: [
      "Mudarabah & Musharakah accounts",
      "Qard Hasan loan management",
      "Automated Zakat calculations",
      "Profit & loss sharing automation",
      "Sharia compliance monitoring",
      "investment products",
      "Halal portfolio management",
      "Fatwa management system",
    ],
    gradient: "from-brand-purple to-brand-magenta",
  },
  {
    id: "core",
    icon: CreditCard,
    title: "Core Banking Platform",
    tagline: "Enterprise-grade banking infrastructure",
    description: "Full-featured core banking system with payments, lending, multi-branch support, real-time transaction processing, and comprehensive reporting.",
    features: [
      "Real-time transaction processing",
      "Multi-branch & multi-currency",
      "Payment gateway integration",
      "Lending & credit management",
      "Interest calculation engine",
      "Regulatory reporting",
      "ATM & card management",
      "Mobile & internet banking",
    ],
    gradient: "from-brand-cyan to-brand-blue",
  },
];

const additionalFeatures = [
  { icon: Users, title: "Multi-Tenant", description: "Serve multiple institutions from a single platform" },
  { icon: PieChart, title: "Advanced Analytics", description: "Real-time dashboards and custom reports" },
  { icon: Bell, title: "Smart Notifications", description: "Automated alerts via SMS, email, and push" },
  { icon: Globe, title: "Multi-Language", description: "Support for regional languages and currencies" },
  { icon: Smartphone, title: "Mobile-First", description: "Native mobile apps for iOS and Android" },
  { icon: BarChart3, title: "API Integration", description: "RESTful APIs for third-party integration" },
  { icon: Shield, title: "Compliance Ready", description: "Built-in regulatory compliance tools" },
  { icon: CreditCard, title: "Payment Rails", description: "UPI, IMPS, NEFT, RTGS integration" },
];

const Products = () => {
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
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Our <span className="gradient-text">Products</span>
            </h1>
            <p
              className={`text-lg md:text-xl text-muted-foreground transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Comprehensive financial solutions designed for modern banking institutions. 
              Choose the platform that fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.gradient} mb-6 shadow-lg`}>
                    <product.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    {product.title}
                  </h2>
                  <p className="text-lg text-primary font-medium mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <Link to="/contact">
                    <Button variant="gradient" size="lg">
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className={`bg-card rounded-2xl p-8 shadow-card border border-border ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <h3 className="text-lg font-semibold mb-6">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className={`p-1 rounded-full bg-gradient-to-br ${product.gradient} mt-0.5`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Platform <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              All products come with enterprise-grade features built-in
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-card shadow-card border border-border hover-lift"
              >
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Schedule a personalized demo to see how our products can transform your operations.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
