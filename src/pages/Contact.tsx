import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Building2,
  MessageSquare,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@fivopay.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 8265025883",
    description: "Mon-Fri from 9am to 6pm IST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Pune, Maharashtra",
    description: "India",
  },
  {
    icon: Clock,
    title: "Support Hours",
    value: "24/7 Available",
    description: "For enterprise clients",
  },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p
              className={`text-lg md:text-xl text-muted-foreground transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Ready to transform your financial operations? Our team is here to help 
              you find the perfect solution for your institution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company Name</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 1234 567 890"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out through any of these channels
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-xl bg-card shadow-card border border-border hover-lift"
                  >
                    <div className="inline-flex p-3 rounded-lg gradient-primary mb-4">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-primary font-medium mb-1">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="p-6 rounded-xl bg-secondary border border-border">
                <h3 className="font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                  >
                    <Building2 className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Schedule a Demo</p>
                      <p className="text-xs text-muted-foreground">See our platform in action</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                  >
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Request Pricing</p>
                      <p className="text-xs text-muted-foreground">Get a custom quote</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/918265025883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium text-sm">Chat on WhatsApp</p>
                      <p className="text-xs text-muted-foreground">Message us instantly</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - 10 Biz Park, Viman Nagar, Pune */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Our Location</h2>
            <p className="text-muted-foreground">
              10 Biz Park, Viman Nagar, Pune, India &mdash; approx.{" "}
              18.57&deg; N, 73.91&deg; E
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-muted">
            <div className="relative w-full h-80 md:h-[420px]">
              <iframe
                title="FivoPay Office - 10 Biz Park, Viman Nagar, Pune"
                src="https://www.google.com/maps?q=18.57,73.91&z=15&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
