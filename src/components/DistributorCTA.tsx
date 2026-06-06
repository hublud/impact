"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function DistributorCTA() {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      const offset = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-tr from-primary-green via-primary-green to-secondary-green text-white overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-stripes" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#FFFFFF" strokeWidth="8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
        </svg>
      </div>

      {/* Floating golden/light green blur circles */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-gold-accent/15 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-light-green/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/25 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-light-green mb-6"
        >
          <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent animate-spin-slow" />
          Partner Network
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight max-w-3xl"
        >
          Become an Impact Grains Distributor
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-slate-100/90 leading-relaxed font-light max-w-2xl mb-10"
        >
          Join our growing network of trusted partners delivering premium parboiled rice and agricultural by-products across major markets in Africa. We support your business with reliable volumes, premium product quality, and direct marketing assistance.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-primary-green hover:text-secondary-green font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-102 hover:shadow-2xl active:scale-98 cursor-pointer"
          >
            Become a Distributor
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
