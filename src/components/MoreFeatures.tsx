"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// --- FEATURE DATA MAPPED TO YOUR IMAGES ---
const features = [
  {
    id: "start",
    title: "Start Trip",
    subtitle: "Initiate your morning or afternoon route with a single tap to begin broadcasting ETAs.",
    image: "/StartTrip.webp",
  },
  {
    id: "gps",
    title: "Live GPS Tracking",
    subtitle: "Real-time location updates keep guardians informed and reduce anxious phone calls.",
    image: "/GPS.webp",
  },
  {
    id: "edit",
    title: "Edit Trip Details",
    subtitle: "Flexibly manage passengers, reorder stops, and adapt to last-minute schedule changes.",
    image: "/EditTrip.webp",
  },
  {
    id: "end",
    title: "End Trip & Confirm",
    subtitle: "Securely close out your route and instantly trigger arrival confirmations for all parents.",
    image: "/EndTrip.webp",
  },
  {
    id: "history",
    title: "Trip History & Logs",
    subtitle: "Access complete historical data, compliance logs, and past route analytics at a glance.",
    image: "/TripHistory.webp",
  }
];

export default function MoreFeatures() {
  // Track which feature is currently active
  const [activeFeature, setActiveFeature] = useState(0);

  const nextFeature = () => setActiveFeature((prev) => (prev + 1) % features.length);
  const prevFeature = () => setActiveFeature((prev) => (prev - 1 + features.length) % features.length);

  return (
    // Solid Premium Green Background
    <section id="features" className="w-full py-24 lg:py-32 relative flex flex-col items-center px-4 md:px-6 lg:px-12 overflow-hidden bg-[#004e49]">
      
      {/* Subtle top noise/gradient for texture */}
      <div className="absolute top-0 inset-x-0 h-[300px] bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      
      {/* --- HEADER --- */}
      <div className="w-full max-w-6xl mx-auto mb-12 lg:mb-12 relative z-10 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }} // Hardware Acceleration
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4 lg:mb-6">
            And that&apos;s not all.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-emerald-50/80 font-medium max-w-2xl mx-auto lg:mx-0">
            MyRide Transit packs enterprise-grade tools into a single app, giving you total control over your fleet.
          </p>
        </motion.div>
      </div>

      {/* --- TWO COLUMN LAYOUT --- */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-24 relative z-10">
        
        {/* --- DESKTOP ONLY: Full Interactive List (Left Column) --- */}
        <div className="hidden lg:flex w-full lg:w-1/2 flex-col justify-center gap-3">
          {features.map((feature, index) => {
            const isActive = activeFeature === index;
            
            return (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveFeature(index)}
                className="relative cursor-pointer py-6 px-8 rounded-[2rem] group"
              >
          
                {isActive && (
                  <motion.div
                    layoutId="activeFeatureDarkBg"
                    className="absolute inset-0 bg-black/30 shadow-inner border border-white/10 rounded-[2rem] -z-10"
                    initial={false}
                    transition={{ duration: 0.3, ease: "easeOut" }} // Removed expensive spring physics
                    style={{ willChange: "transform, opacity" }} // GPU Acceleration
                  />
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 pr-6">
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-white/60 group-hover:text-white/90"}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm font-medium transition-colors duration-300 leading-relaxed ${isActive ? "text-emerald-50/90" : "text-emerald-50/40"}`}>
                      {feature.subtitle}
                    </p>
                  </div>
                  
                  {/* Arrow Indicator */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? "bg-white text-[#1B4C2E] shadow-lg" : "opacity-0 -translate-x-4"}`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- MOBILE ONLY: Controls & Text View (Top Column) --- */}
        <div className="flex lg:hidden flex-col items-center text-center w-full gap-6 mb-4">
          
          {/* Swipe/Click Controls (Moved to Top) */}
          <div className="flex items-center gap-6">
            <button 
              onClick={prevFeature} 
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors active:scale-95 shadow-sm ring-1 ring-white/10"
              aria-label="Previous feature"
            >
              <svg className="w-5 h-5 pr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2.5">
              {features.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveFeature(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === activeFeature ? "w-8 bg-white" : "w-2.5 bg-white/30"}`} 
                  aria-label={`Go to feature ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextFeature} 
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors active:scale-95 shadow-sm ring-1 ring-white/10"
              aria-label="Next feature"
            >
              <svg className="w-5 h-5 pl-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="min-h-[100px] flex flex-col justify-start w-full px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: "transform, opacity" }} // Hardware Acceleration
                className="flex flex-col gap-3"
              >
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {features[activeFeature].title}
                </h3>
                <p className="text-sm font-medium text-emerald-50/80 leading-relaxed max-w-sm mx-auto">
                  {features[activeFeature].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- CENTERED/RIGHT: Dynamic Phone Mockup (Bottom on Mobile) --- */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <div className="relative w-[280px] h-[540px] md:w-[320px] md:h-[620px] lg:w-[340px] lg:h-[680px]">
            {/* Edge-to-edge clean border */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ willChange: "transform, opacity" }} // Force GPU to handle this transition
                  className="w-full h-full absolute inset-0"
                >
                  <Image
                    src={features[activeFeature].image}
                    alt={features[activeFeature].title}
                    fill
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 340px"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}