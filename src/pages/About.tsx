import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Award, Globe, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge financial technology solutions.",
  },
  {
    icon: Heart,
    title: "Customer Centric",
    description: "Every decision we make is guided by how it benefits our customers and their end-users.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We believe in open communication, honest pricing, and clear documentation.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients to understand their unique needs and challenges.",
  },
];

const milestones = [
  { year: "2025", title: "Company Founded", description: "FivoPay established by CEO Amin Shaikh with a vision to transform banking." },
  { year: "2025", title: "First Product Launch", description: "Cooperative Management platform launched to serve financial cooperatives." },
  { year: "2025", title: "100+ Institutions", description: "Crossed milestone of 100 financial institutions trusting our platform." },
  { year: "2025", title: "Global Expansion", description: "Expanding services across multiple regions with localized solutions." },
];

const team = [

  { name: "Technology Team", role: "Engineering", description: "50+ engineers building the future of banking" },
  { name: "Customer Success", role: "Support", description: "24/7 dedicated support for all clients" },
];

const About = () => {
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
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              About <span className="gradient-text">FivoPay</span>
            </h1>
            <p
              className={`text-lg md:text-xl text-muted-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              Making Banking Easier. We're on a mission to transform financial services
              with innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Technology & Compliance Section - Premium Redesign */}
      <section className="py-24 relative overflow-hidden bg-background">
        {/* Background Mesh Gradients */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-cyan/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 text-primary animate-in fade-in slide-in-from-bottom-3 duration-1000">
              <Shield className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Enterprise Security</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Technology & <span className="gradient-text">Compliance</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Card: Core Mission */}
            <div className="lg:col-span-2 group">
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-primary/20 via-border to-brand-cyan/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5">
                <div className="relative bg-card/60 backdrop-blur-xl p-8 md:p-12 rounded-[calc(1.5rem-1px)] h-full border border-white/5">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                    <Shield className="h-48 w-48 text-primary" />
                  </div>

                  <div className="relative z-10">
                    <p className="text-2xl md:text-3xl font-semibold leading-tight mb-8 text-foreground tracking-tight">
                      "We specialize in <span className="text-primary font-bold">secure, payment-driven business solutions</span>—designing websites and mobile applications with <span className="gradient-text">banking-grade architecture</span>."
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                      <div>
                        <h4 className="text-foreground font-bold mb-3 flex items-center gap-2">
                          <div className="w-1 h-4 bg-primary rounded-full" />
                          Software Infrastructure
                        </h4>
                        <p>
                          FivoPay is a mission-critical technology provider. We build and maintain the robust digital
                          pipelines that power modern financial institutions with 99.9% availability.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold mb-3 flex items-center gap-2">
                          <div className="w-1 h-4 bg-brand-cyan rounded-full" />
                          Seamless Integration
                        </h4>
                        <p>
                          Our solutions are designed to integrate perfectly with global banking standards while
                          providing local-first excellence in regulatory compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Compliance Focus */}
            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-secondary/30 border border-border/50 backdrop-blur-md relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Operational Model
                </h3>
                <div className="space-y-4">
                  <div className="bg-background/40 p-5 rounded-2xl border border-border/40">
                    <p className="text-sm font-medium text-foreground mb-1">Infrastructure Only</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Our platform provides the specialized technical frameworks and cloud-native software.
                    </p>
                  </div>
                  <div className="bg-primary/5 p-5 rounded-2xl border border-primary/20">
                    <p className="text-sm font-bold text-primary mb-1">Fund Management</p>
                    <p className="text-xs text-foreground font-semibold leading-relaxed mb-2">
                      We do not hold or manage customer funds directly.
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-tight">
                      * Licensed Aggregators Only
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-blue/10 to-transparent border border-white/5 flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Global Standard</p>
                  <p className="text-sm font-medium">PCI-DSS Ready Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-white/90 leading-relaxed">
                To empower financial institutions with cutting-edge technology that simplifies
                complex banking operations, enhances customer experience, and drives sustainable
                growth across all types of financial services.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-magenta text-white">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-white/90 leading-relaxed">
                To become the leading financial technology partner for institutions worldwide,
                setting new standards in banking innovation while maintaining the highest levels
                of security, compliance, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-card shadow-card border border-border hover-lift text-center"
              >
                <div className="inline-flex p-4 rounded-xl gradient-primary mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 rounded-full gradient-primary border-4 border-background" />

                    <div className="p-6 rounded-xl bg-card shadow-card border border-border">
                      <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                      <h3 className="text-lg font-bold mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The people behind FivoPay's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-xl bg-card shadow-card border border-border text-center hover-lift"
              >
                <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">200+</div>
              <p className="text-muted-foreground">Institutions Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50+</div>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">5+</div>
              <p className="text-muted-foreground">Countries</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Journey
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Partner with us to transform your financial operations
            </p>
            <Link to="/contact">
              <Button size="xl" className="bg-white text-primary hover:bg-white/90">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
