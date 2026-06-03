"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Leaf, Cpu, Award, Users } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Sustainable Agriculture",
    desc: "Supporting responsible farming practices and efficient land utilization to protect the ecosystem.",
    color: "from-green-500/20 to-emerald-500/20 text-green-700",
  },
  {
    icon: Cpu,
    title: "Food Innovation",
    desc: "Using technology and digitization to streamline supply chains, maximize yield, and improve food accessibility.",
    color: "from-blue-500/20 to-indigo-500/20 text-blue-700",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Maintaining the absolute highest international food standards from crop harvesting directly to the consumer.",
    color: "from-amber-500/20 to-orange-500/20 text-amber-700",
  },
  {
    icon: Users,
    title: "Community Impact",
    desc: "Empowering local smallholder farmers, creating sustainable jobs, and strengthening regional economies.",
    color: "from-purple-500/20 to-pink-500/20 text-purple-700",
  },
];

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative SVG grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#111827" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image with overlays */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 group">
              <Image
                src="/images/service-image.jpg"
                alt="Impact Grains Sustainable Rice Cultivation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-green/60 to-transparent mix-blend-multiply" />
            </div>
            
            {/* Small decorative float card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[220px] border border-white/10"
            >
              <h4 className="font-display font-semibold text-lg text-gold-accent mb-1">Sustainable</h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Minimizing post-harvest waste & promoting responsible farmland preservation.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Mission and Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-green font-display font-semibold uppercase tracking-widest text-sm mb-3 block"
            >
              From Farm To Market
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-dark-text mb-6"
            >
              Transforming the Food We Eat for the Better
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-secondary-text leading-relaxed font-light mb-8"
            >
              We bring high quality food to the African market in a manner that is sustainable environmentally, economically, and socially.
            </motion.p>

            {/* Pillar Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200/80 transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-xl w-fit bg-gradient-to-br ${pillar.color} mb-4 transition-transform duration-300 group-hover:scale-105`}>
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-dark-text mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-secondary-text leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
