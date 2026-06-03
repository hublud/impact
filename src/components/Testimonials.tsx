"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mahmud Musa",
    role: "Family Head & Consumer",
    content: "When i first came across Empire Rice, i found it hard to believe that our locally sourced rice could be this fantastic. The rice is so white after cook and more importantly, it is stone free, Empire Rice is truly for every home.",
    theme: "Stone-Free Rice",
  },
  {
    name: "Kayode Ojo",
    role: "Regular Customer",
    content: "My experience with Empire Rice has simply been exceptional. it's quality, texture and taste is second to none, from day one i said there was no going back.",
    theme: "Great Taste & Quality",
  },
  {
    name: "Mr Emeka",
    role: "Premium Home Cook",
    content: "No wonder you said the rice EMPIRE RICE is next to none when it comes to rice family Before now, I don't really like our local rice, but this is exceptional in terms of free stone and sands, not sticky/gumy and it remains single after cooking Not like our regular local rice that turn to mud In the pot after cooking. Very tasty!!! In all sincerity, the product is superb and I will start recommending it to my family and friends.",
    theme: "Superb Separation",
  },
  {
    name: "Madam Nkem",
    role: "Household Consumer",
    content: "Usually, when get used to a particular product it's hard to change to another. But I had the opportunity to try one of the Best Rice (Empire Parboiled Rice). Just the perfect result anyone would've hoped for. Zero dirt, and everything came out separated!.",
    theme: "Zero Dirt, Perfect Result",
  },
  {
    name: "Chinyere",
    role: "Restaurant Owner",
    content: "My name is Chinyere, I was cooking another brand before in my restaurant but it use to gum together, one day I came to the market to buy spices and I saw people buying Empire Rice, I decided to share one bag with another woman who also need half bag, When I got home and cooked it the next day, it was totally different, it didn't gum, it was also separated, and my customers told me it has a very nice local taste, that I should be cooking it",
    theme: "Ideal for Restaurants",
  },
  {
    name: "AffaGold Foods",
    role: "Foodstuff Dealer & Distributor",
    content: "Some months ago a neighbor came over to my shop talking about Empire Rice. That there's is rice she bought and uses and how lovely it was after preparation. I was curious to know as a dealer. I bought a quantity to test and it was amazing. I totally was converted from a popular brand to Empire Rice. More especially the type of customer service rendered by IMPACT GRAINS. Thanks for providing great product and great service.",
    theme: "Exceptional Service",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto scroll effect
  useEffect(() => {
    const timer = setInterval(slideNext, 7000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const selectIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-slate-100 select-none pointer-events-none">
        <Quote className="w-48 h-48 opacity-10" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-green font-display font-semibold uppercase tracking-widest text-sm mb-3 block"
          >
            Customer Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-dark-text"
          >
            What Our Partners Say
          </motion.h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative min-h-[420px] sm:min-h-[350px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-4xl p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="inline-block bg-light-green text-primary-green text-xs font-bold px-3 py-1 rounded-full border border-primary-green/10">
                    {activeTestimonial.theme}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-base md:text-lg text-slate-700 leading-relaxed font-light mb-8 italic">
                  "{activeTestimonial.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200/60">
                <div>
                  <h4 className="font-display font-bold text-base text-dark-text">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-xs text-secondary-text font-light">
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 -mx-4 md:-mx-12 flex justify-between pointer-events-none">
            <button
              onClick={slidePrev}
              className="p-3 rounded-full bg-white shadow-md border border-slate-100 hover:bg-slate-50 text-dark-text transition-all hover:scale-105 pointer-events-auto cursor-pointer focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={slideNext}
              className="p-3 rounded-full bg-white shadow-md border border-slate-100 hover:bg-slate-50 text-dark-text transition-all hover:scale-105 pointer-events-auto cursor-pointer focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => selectIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary-green w-6"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
