import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="FivoPay" className="h-12 w-auto bg-white rounded-lg p-2" />
            <p className="text-background/70 text-sm leading-relaxed">
              Making Banking Easier. Complete financial solutions for cooperative societies, core banking, and ethical finance.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-background/70 hover:text-background transition-colors text-sm">
                  Cooperative Management
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-background transition-colors text-sm">
                  Ethical Banking
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-background transition-colors text-sm">
                  Core Banking Platform
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-background transition-colors text-sm">
                  Payment Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-background/70 hover:text-background transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-background/70 hover:text-background transition-colors text-sm">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-background transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-background transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="h-4 w-4 shrink-0" />
                <span>fivopay0801@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 8292355155</span>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="h-4 w-4 shrink-0 mt-1" />
                <span>10 Biz Park, Viman Nagar, Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link to="/privacy-policy" className="text-background/50 hover:text-background text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-background/50 hover:text-background text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/refund-policy" className="text-background/50 hover:text-background text-sm transition-colors">
              Refund Policy
            </Link>
            <Link to="/service-fulfillment" className="text-background/50 hover:text-background text-sm transition-colors">
              Fulfillment Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
