"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const empireHighlights = [
  "100% Stone-Free",
  "Premium Long Grain",
  "Rich Natural Taste",
  "Hygienically Processed",
  "Locally Produced",
  "Globally Competitive Quality",
];

const byproductsList = [
  { name: "Reject Rice", desc: "Perfect for alternative feed formulations and starch industrial applications." },
  { name: "Broken Rice", desc: "Premium broken grains ideal for food processing, flour mills, and traditional recipes." },
  { name: "Rice Bran", desc: "Nutrient-rich bran layer, highly sought after for animal feed and oil extraction." },
];

export default function Products() {
  const handleScrollToSection = (targetId: string) => {
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

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Background radial soft light green blur */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-green/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-green font-display font-semibold uppercase tracking-widest text-sm mb-3 block"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-dark-text mb-5"
          >
            Premium Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-secondary-text leading-relaxed font-light"
          >
            Food products carefully processed to meet the highest standards of quality and taste.
          </motion.p>
        </div>

        {/* Product 1: Empire Rice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-28">
          {/* Packaging mockup left side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-xl group">
              <Image
                src="/images/empire rice.webp"
                alt="Empire Rice Parboiled Bag"
                fill
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-103"
              />
              {/* Gold decorative ribbon */}
              <div className="absolute top-4 right-4 bg-gold-accent text-slate-900 text-xs font-bold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-sm">
                Bestseller
              </div>
            </div>
          </motion.div>

          {/* Info right side */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-accent font-display font-semibold uppercase tracking-widest text-xs mb-3 block"
            >
              Flagship Product
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl font-bold text-dark-text mb-5"
            >
              EMPIRE RICE
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-secondary-text leading-relaxed font-light mb-8"
            >
              Empire Rice is a reliable choice for premium quality. Grown in carefully selected fields, our parboiled white long-grain rice is 100% stone-free, making it ideal for daily meals, family gatherings, restaurants, and celebrations. With its natural taste, superior quality, and healthy benefits, Empire Rice reflects our commitment to providing food families can trust.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {empireHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-light-green text-primary-green flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-dark-text">{highlight}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Product 2: By-Products */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Info left side */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-green font-display font-semibold uppercase tracking-widest text-xs mb-3 block"
            >
              Essential Agricultural Output
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl font-bold text-dark-text mb-5"
            >
              Rice By-Products
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-secondary-text leading-relaxed font-light mb-8"
            >
              Premium quality by-products available through our trusted distribution network. Perfect for agricultural feed, oil mills, and industrial milling production.
            </motion.p>

            {/* List with descriptions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-5 mb-8"
            >
              {byproductsList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                  <div className="h-6 w-1 bg-primary-green rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-semibold text-sm text-dark-text mb-1">{item.name}</h4>
                    <p className="text-xs text-secondary-text leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Photo on mobile: below the list, above the button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="block lg:hidden w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group border border-slate-150 relative mb-8 mx-auto"
            >
              <Image
                src="/images/by-products.jpg"
                alt="Rice By-Products Processing"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </motion.div>

            {/* CTA to Distributor */}
            <motion.button
              onClick={() => handleScrollToSection("contact")}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-full text-sm transition-transform hover:scale-102 shadow-md active:scale-98"
            >
              Become a Distributor
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Photo right side (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group border border-slate-150">
              <Image
                src="/images/by-products.jpg"
                alt="Rice By-Products Processing"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
