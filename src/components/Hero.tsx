"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Award } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    icon: Award,
    title: "Premium Quality",
    desc: "100% stone-free parboiled grains",
  },
  {
    icon: ShieldCheck,
    title: "Sustainable Farming",
    desc: "Empowering local communities & land",
  },
  {
    icon: CheckCircle2,
    title: "Trusted Distribution",
    desc: "Across major markets in Africa",
  },
];

interface Particle {
  width: number;
  height: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  xRange: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = [...Array(15)].map(() => ({
      width: Math.random() * 8 + 4,
      height: Math.random() * 8 + 4,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 5,
      xRange: Math.random() * 40 - 20,
    }));
    setParticles(generated);
  }, []);

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
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-900 text-white pt-20"
    >
      {/* Background Image with Dark Green Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sliders-1.jpg"
          alt="Impact Grains Sustainable Agriculture"
          fill
          priority
          className="object-cover object-center opacity-40 scale-105 select-none"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-green/90 via-primary-green/80 to-secondary-green/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      {/* Floating Grain Particles */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-400/20"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, particle.xRange, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col flex-1 justify-center w-full">
        <div className="max-w-3xl flex flex-col items-start gap-6 mt-10 md:mt-20">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-light-green"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-pulse" />
            Transforming Africa's Food Future
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white"
          >
            Delivering Taste, <br className="hidden sm:inline" />
            Health & <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-green to-gold-accent">African Excellence</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-2xl font-light"
          >
            Sustainable production, efficient distribution, and agricultural innovation. Empowering local communities to secure a healthier food future.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollToSection("contact")}
              className="inline-flex items-center justify-center gap-2 bg-gold-accent hover:bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg shadow-gold-accent/20 transition-all duration-300 hover:scale-102 active:scale-98"
            >
              Become a Distributor
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScrollToSection("products")}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Explore Products
            </button>
          </motion.div>
        </div>

        {/* Stats Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 md:mt-24 w-full"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group flex flex-col md:flex-row items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-gold-accent/15 text-gold-accent group-hover:bg-gold-accent/25 transition-colors">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display font-semibold text-lg text-white mb-1">
                  {stat.title}
                </h3>
                <p className="text-sm text-slate-300 leading-normal font-light">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bounce scroll down button */}
      <motion.button
        onClick={() => handleScrollToSection("about")}
        className="absolute bottom-6 z-10 flex flex-col items-center gap-1.5 cursor-pointer text-slate-300/80 hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll Down</span>
        <ChevronDown className="w-5 h-5 text-gold-accent" />
      </motion.button>
    </section>
  );
}
