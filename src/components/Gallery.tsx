"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  { src: "/images/gallery 4.jpg", alt: "Stone-Free Parboiling Inspection", title: "Hygienic Sieve Control" },
  { src: "/images/gallery.jpg", alt: "Empire Rice Raw Grains", title: "Premium Grains Selection" },
  { src: "/images/gallery 5.jpg", alt: "Fresh Agricultural Farmland", title: "Responsible Agriculture" },
  { src: "/images/gallery-10.jpg", alt: "Sealed bags of Empire Rice prepared for dispatch", title: "Distribution Ready Stocks" },
  { src: "/images/gallery 6.jpg", alt: "Hygienic Grain Processing Plant", title: "Milling Facility Processing" },
  { src: "/images/gallery-14.jpg", alt: "Loading bulk distribution orders for regional partners", title: "Logistics Fleet Transport" },
  { src: "/images/gallery-9.jpg", alt: "Precision sorting of processed parboiled long grain rice", title: "Quality Control & Sorting" },
  { src: "/images/gallery 8.jpg", alt: "Local Community Farmer Teams", title: "Community Farmer Partners" },
  { src: "/images/gallery-11.jpg", alt: "Local field sourcing and community grain collection", title: "Harvest & Field Operations" },
  { src: "/images/gallery 7.jpg", alt: "Premium Quality Testing", title: "Purity & Density Assured" },
  { src: "/images/gallery-12.jpg", alt: "De-husking and polishing process within the mill", title: "Modern Milling Automation" },
  { src: "/images/gallery-13.jpg", alt: "Testing grain hardness and moisture level parameters", title: "Moisture & Texture Testing" },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-green font-display font-semibold uppercase tracking-widest text-sm mb-3 block"
          >
            Visual Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-dark-text mb-5"
          >
            Impact Grains Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-secondary-text leading-relaxed font-light"
          >
            Take a visual tour of our operations—from local rice cultivation to final packaging, and see the dedicated hands bringing high quality food to African families.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setActiveImage(item.src)}
              className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-lg border border-slate-100 break-inside-avoid"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={500}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex justify-between items-center text-white">
                  <div>
                    <span className="text-[10px] text-gold-accent font-semibold tracking-widest uppercase mb-1 block">
                      Operations
                    </span>
                    <h4 className="font-display font-semibold text-sm tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                  <div className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus:outline-none"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Fullscreen Image Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-default"
            >
              <Image
                src={activeImage}
                alt="Enlarged gallery view"
                fill
                className="object-contain"
                priority
              />
              {/* Caption details at bottom of lightbox */}
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm p-4 text-center border-t border-white/5">
                <p className="text-white text-sm font-medium tracking-wide">
                  {galleryItems.find((item) => item.src === activeImage)?.title}
                </p>
                <p className="text-xs text-slate-400 font-light mt-1">
                  {galleryItems.find((item) => item.src === activeImage)?.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
