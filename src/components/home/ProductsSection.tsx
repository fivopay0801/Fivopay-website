import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Wallet, CreditCard } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const products = [
  {
    icon: Building2,
    title: "Cooperative Management",
    description: "Complete financial cooperative society management with member services, share management, and dividend distribution.",
    features: ["Member Management", "Share Tracking", "Dividend Automation", "Loan Processing"],
    gradient: "from-brand-blue to-brand-cyan",
  },
  {
    icon: Wallet,
    title: "Ethical Banking",
    description: "Sharia-compliant banking solutions with profit-sharing, Qard Hasan loans, and automated Zakat calculations.",
    features: ["Profit Sharing", "Qard Hasan", "Zakat Automation", "Compliance Tools"],
    gradient: "from-brand-purple to-brand-magenta",
  },
  {
    icon: CreditCard,
    title: "Core Banking Platform",
    description: "Complete banking solution with payments, lending, multi-branch support, and real-time transaction processing.",
    features: ["Payment Gateway", "Multi-Branch", "Real-time Processing", "Lending Module"],
    gradient: "from-brand-cyan to-brand-blue",
  },
];

const ProductsSection = () => {
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Everything You Need in{" "}
            <span className="gradient-text">One Platform</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Streamline your banking operations with our comprehensive suite of tools and services
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group relative bg-card rounded-2xl p-8 shadow-card border border-border hover-lift transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${product.gradient} mb-6 shadow-lg`}>
                <product.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/products">
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>

              {/* Hover gradient border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity -z-10`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link to="/products">
            <Button variant="gradient" size="lg">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
