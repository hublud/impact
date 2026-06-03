"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play()
            .then(() => setIsPlaying(true))
            .catch((err) => console.log("Autoplay prevented:", err));
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.4, // Trigger play when 40% of video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error(err));
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background decoration */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-primary-green/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-10 top-10 w-96 h-96 bg-secondary-green/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-green font-display font-semibold uppercase tracking-widest text-sm mb-3 block"
          >
            Behind the Scenes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-dark-text mb-5"
          >
            Experience Our Operations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-secondary-text leading-relaxed font-light"
          >
            Watch how our local smallholder farmer partners, modern parboiling facilities, and strict quality control processes deliver stone-free long grain parboiled rice to markets across Nigeria.
          </motion.p>
        </div>

        {/* Video Player Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-100 group"
        >
          <video
            ref={videoRef}
            src="/images/operations-showcase.mp4"
            className="w-full h-full object-cover cursor-pointer"
            loop
            muted
            playsInline
            onClick={togglePlay}
          />

          {/* Interactive controls overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Play/Pause Button Indicator (visible when paused or hover) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              onClick={togglePlay}
              className={`p-5 rounded-full bg-white/95 text-primary-green hover:text-secondary-green hover:scale-105 transition-all duration-300 shadow-xl pointer-events-auto backdrop-blur-sm cursor-pointer ${
                isPlaying ? "opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100" : "opacity-100 scale-100"
              }`}
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current translate-x-0.5" />}
            </button>
          </div>

          {/* Mute/Unmute Control (bottom right) */}
          <div className="absolute bottom-6 right-6 z-20">
            <button
              onClick={toggleMute}
              className="p-3 rounded-full bg-slate-950/65 text-white hover:bg-slate-900/80 transition-colors pointer-events-auto cursor-pointer border border-white/10"
              aria-label={isMuted ? "Unmute Video" : "Mute Video"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>

          {/* Bottom Title bar */}
          <div className="absolute bottom-6 left-6 text-left text-white hidden md:block">
            <span className="text-[10px] text-gold-accent font-semibold tracking-widest uppercase block mb-0.5">
              Impact Grains Showcase
            </span>
            <p className="text-sm font-medium tracking-wide">
              Empowering Local Agriculture & Distribution
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
