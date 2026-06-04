"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative pt-16 pb-8 border-t border-slate-900 overflow-hidden">
      
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/logo.webp"
              alt="Impact Grains Logo"
              width={160}
              height={55}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Delivering tasty, healthy, and premium quality food across Africa. Sustainable farming parboiled rice, bran, and broken grains processed under global hygiene standards.
            </p>
            
            {/* Social media links */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-900 hover:bg-primary-green hover:text-white transition-colors duration-300 border border-slate-800"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 md:pl-8">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-light">
              {[
                { label: "Home", target: "home" },
                { label: "About", target: "about" },
                { label: "Products", target: "products" },
                { label: "Contact Us", target: "contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.target}`}
                    onClick={(e) => scrollToSection(e, link.target)}
                    className="hover:text-primary-green transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Offerings */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white">
              Our Products
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-light text-slate-400">
              <li>Empire Rice parboiled (long-grain)</li>
              <li>Reject Rice by-products</li>
              <li>Broken Rice grains</li>
              <li>Rice Bran animal feed</li>
            </ul>
          </div>

          {/* Contact info short */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm font-light text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-green flex-shrink-0 mt-0.5" />
                <span>1075 Joseph Gomwalk Street, Gudu, Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-green flex-shrink-0" />
                <a href="tel:+2349164655254" className="hover:text-primary-green transition-colors">
                  +234 916 465 5254
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-green flex-shrink-0" />
                <a href="mailto:impact@impactgrains.com" className="hover:text-primary-green transition-colors">
                  impact@impactgrains.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-light text-center sm:text-left">
            © 2026 Impact Grains. All Rights Reserved.
          </p>
          
          {/* Scroll back to top */}
          <button
            onClick={scrollToTop}
            className="group p-2.5 rounded-full bg-slate-900 hover:bg-primary-green border border-slate-800 text-slate-400 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
