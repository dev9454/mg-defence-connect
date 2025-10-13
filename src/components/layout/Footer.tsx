import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/90f87e2c-53cc-48f6-9483-cd7d2913f56f.png" 
                alt="MG Technicals Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">MG Technicals</h3>
                <p className="text-sm opacity-90">Defence Manufacturing Excellence</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Serving Indian Defence Forces for over 30 years with indigenous solutions 
              for electrical & electromechanical assemblies.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">ISO 9001:2015 Certified</span>
              <span className="text-tricolor-saffron">●</span>
              <span className="font-semibold">DGQA Approved</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/about" className="block text-sm hover:text-tricolor-saffron transition-colors">
                About Us
              </Link>
              <Link to="/products" className="block text-sm hover:text-tricolor-saffron transition-colors">
                Products & Services
              </Link>
              <Link to="/quality" className="block text-sm hover:text-tricolor-saffron transition-colors">
                Quality Policy
              </Link>
              <Link to="/achievements" className="block text-sm hover:text-tricolor-saffron transition-colors">
                Achievements
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Expertise</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Electric Motors</li>
              <li className="opacity-90">Pumps & Systems</li>
              <li className="opacity-90">Fans & Blowers</li>
              <li className="opacity-90">Electromagnets</li>
              <li className="opacity-90">Limit Switches</li>
              <li className="opacity-90">Reverse Engineering</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="opacity-90">Industrial Area, Kanpur</p>
                  <p className="opacity-90">Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p>+91-512-1234567</p>
                  <p className="opacity-90">+91-512-7654321</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p>info@mgtechnicals.in</p>
                  <p className="opacity-90">sales@mgtechnicals.in</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <p className="opacity-90">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">
              © 2024 MG Technicals. All rights reserved. | Proudly serving Indian Defence Forces since 1999.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="opacity-90">🇮🇳 Made in India</span>
              <span className="text-tricolor-saffron">●</span>
              <span className="opacity-90">For India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;