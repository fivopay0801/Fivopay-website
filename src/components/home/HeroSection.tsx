import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Financial technology visualization" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div
              className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {/* <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span className="text-sm text-muted-foreground">
                Trusted by <span className="font-semibold text-foreground">200+</span> financial institutions worldwide
              </span> */}
            </div>

            {/* Main Headline */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Complete{" "}
              <span className="gradient-text">Financial Solutions</span>
              <br />
              For Modern Banking
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              From Cooperative Societies to Core Banking and Ethical Finance—comprehensive 
              SaaS solutions for all financial institutions. Making Banking Easier.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link to="/products">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Schedule Demo
                </Button>
              </Link>
            </div>

            {/* Feature Pills */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/80 backdrop-blur-sm shadow-lg border border-border">
                <Shield className="h-4 w-4 text-brand-blue" />
                <span className="text-sm font-medium">Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/80 backdrop-blur-sm shadow-lg border border-border">
                <Zap className="h-4 w-4 text-brand-cyan" />
                <span className="text-sm font-medium">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/80 backdrop-blur-sm shadow-lg border border-border">
                <Users className="h-4 w-4 text-brand-purple" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main Stats Card */}
              <div className="relative z-20 bg-card/90 backdrop-blur-md rounded-2xl shadow-2xl border border-border overflow-hidden">
                <div className="p-4 border-b border-border bg-muted/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-accent/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-secondary/30">
                  <div className="space-y-4">
                    {[
                      { label: "Total Transactions", value: "₹12.5Cr", change: "+12.5%" },
                      { label: "Active Accounts", value: "24,580", change: "+8.2%" },
                      { label: "Processing Time", value: "0.3s", change: "-15%" },
                    ].map((stat, i) => (
                      <div key={i} className="p-4 rounded-xl bg-card shadow-sm border border-border hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                            <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                          </div>
                          <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded-full">{stat.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge - PCI DSS */}
              <div className="absolute -left-6 top-1/4 z-30 animate-float">
                <div className="p-4 rounded-xl bg-card/95 backdrop-blur-sm shadow-xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg gradient-primary">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold block">PCI DSS</span>
                      <p className="text-xs text-muted-foreground">Level 1 Certified</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Transactions */}
              <div className="absolute -right-4 bottom-1/4 z-30 animate-float animation-delay-300">
                <div className="p-4 rounded-xl bg-card/95 backdrop-blur-sm shadow-xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg gradient-accent">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold block">500k+</span>
                      <p className="text-xs text-muted-foreground">Daily Transactions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
