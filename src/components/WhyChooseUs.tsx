"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, Shield, Truck, Handshake, Users, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Sparkles,
    title: "Premium Quality Products",
    desc: "Every batch of Empire Rice is processed to meet the highest standard of color, purity, and parboiled excellence.",
  },
  {
    icon: Shield,
    title: "Sustainable Supply Chain",
    desc: "From seed selection to harvest storage, our supply chain reduces waste, preserves land, and values resource use.",
  },
  {
    icon: Truck,
    title: "Trusted Distribution Network",
    desc: "Seamless logistics that deliver on time, ensuring shelves remain stocked and restaurants are supplied.",
  },
  {
    icon: Handshake,
    title: "Reliable Partnerships",
    desc: "We prioritize local distributor growth, providing transparent pricing, steady volumes, and marketing support.",
  },
  {
    icon: Users,
    title: "Industry Expertise",
    desc: "Led by a skilled agricultural and food production team that understands local needs and global quality indices.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth Support",
    desc: "We work actively alongside our partners to expand markets, optimize distribution routes, and increase profitability.",
  },
];

export default function WhyChooseUs() {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative side accent blur */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary-green/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-secondary-green/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-green font-display font-semibold uppercase tracking-widest text-sm mb-3 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-dark-text mb-5"
          >
            We're Your Impact Partner
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-secondary-text leading-relaxed font-light"
          >
            We work alongside distributors and partners to help them optimize and grow their businesses sustainably. At Impact Grains, we're dedicated to providing high-quality food products that meet global standards while supporting long-term business success.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm font-semibold text-primary-green mt-4 border-l-2 border-primary-green pl-4 italic"
          >
            "Our commitment is to deliver high-quality Nigerian rice for a delightful dining experience."
          </motion.p>
        </div>

        {/* 6 Grid Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200/80 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* Icon block with gradient border */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-green/10 to-secondary-green/10 flex items-center justify-center text-primary-green mb-6 group-hover:from-primary-green group-hover:to-secondary-green group-hover:text-white transition-all duration-300 shadow-sm">
                  <card.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h3 className="font-display font-semibold text-lg text-dark-text mb-3 tracking-wide">
                  {card.title}
                </h3>
                <p className="text-sm text-secondary-text leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
              
              {/* Bottom decorative bar */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-primary-green to-secondary-green rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
