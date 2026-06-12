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
    image: "/StartTrip.png",
  },
  {
    id: "gps",
    title: "Live GPS Tracking",
    subtitle: "Real-time location updates keep guardians informed and reduce anxious phone calls.",
    image: "/GPS.png",
  },
  {
    id: "edit",
    title: "Edit Trip Details",
    subtitle: "Flexibly manage passengers, reorder stops, and adapt to last-minute schedule changes.",
    image: "/EditTrip.png",
  },
  {
    id: "end",
    title: "End Trip & Confirm",
    subtitle: "Securely close out your route and instantly trigger arrival confirmations for all parents.",
    image: "/EndTrip.png",
  },
  {
    id: "history",
    title: "Trip History & Logs",
    subtitle: "Access complete historical data, compliance logs, and past route analytics at a glance.",
    image: "/TripHistory.png",
  }
];

export default function MoreFeatures() {
  // Track which feature is currently hovered
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    // Solid Premium Green Background
    <section className="w-full py-32 relative flex flex-col items-center px-6 lg:px-12 overflow-hidden bg-[#004e49]">
      
      {/* Subtle top noise/gradient for texture */}
      <div className="absolute top-0 inset-x-0 h-[300px] bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

      {/* --- HEADER --- */}
      <div className="w-full max-w-6xl mx-auto mb-16 lg:mb-8 relative z-10 text-center lg:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
            And that&apos;s not all.
          </h2>
          <p className="text-lg lg:text-xl text-emerald-50/80 font-medium max-w-2xl">
            MyRide Transit packs enterprise-grade tools into a single app, giving you total control over your fleet.
          </p>
        </motion.div>
      </div>

      {/* --- TWO COLUMN LAYOUT (Restored) --- */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* --- LEFT COLUMN: Interactive List --- */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-3">
          {features.map((feature, index) => {
            const isActive = activeFeature === index;

            return (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveFeature(index)}
                className="relative cursor-pointer py-6 px-6 lg:px-8 rounded-[2rem] group"
              >
                {/* Premium Dark Frosted Glass Background for Active State */}
                {isActive && (
                  <motion.div
                    layoutId="activeFeatureDarkBg"
                    className="absolute inset-0 bg-black/20 backdrop-blur-md shadow-inner border border-white/10 rounded-[2rem] -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? "bg-white text-[#00635D] shadow-lg" : "opacity-0 -translate-x-4"}`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- RIGHT COLUMN: Dynamic Phone Mockup --- */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <div className="relative w-[320px] md:w-[340px] h-[680px] md:h-[720px]">
            
            <div className="absolute inset-0">
              
                {/* Animated Screen Content (Your Images) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full absolute inset-0"
                  >
                    <Image 
                      src={features[activeFeature].image}
                      alt={features[activeFeature].title}
                      fill
                      sizes="(max-width: 768px) 320px, 340px" // Added sizes prop here
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