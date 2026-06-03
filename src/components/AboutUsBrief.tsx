"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutUsBrief() {
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
    <section className="relative py-24 flex flex-col items-center justify-center text-white overflow-hidden bg-slate-950">
      {/* Background Image of Raw Rice in Hands */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rice.webp"
          alt="Impact Grains Premium Quality Rice"
          fill
          className="object-cover object-center opacity-30 select-none scale-102"
        />
        {/* Dark overlay for absolute readability */}
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-bold tracking-tight mb-4"
        >
          About Us
        </motion.h2>

        {/* Thin Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-48 h-px bg-white/30 mb-8"
        />

        {/* Core Paragraphs */}
        <div className="flex flex-col gap-6 text-base sm:text-lg leading-relaxed font-light text-slate-100 max-w-3xl mb-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At Impact Grains, we are committed to delivering tasty, healthy, and high-quality food across Africa. Through sustainable production, efficient distribution, and innovative digitization, we aim to transform the food we eat for the better.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            By partnering with local farmers and communities, we promote responsible farmland use and minimize post-harvest waste. Together, we’re creating a future where every meal supports healthier lives and sustainable practices.
          </motion.p>
        </div>

        {/* Distributor Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 bg-[#166534] hover:bg-[#15803d] text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-green-950/20 transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer"
          >
            Become a Distributor
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
