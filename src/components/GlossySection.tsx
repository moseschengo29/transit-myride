"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface GlossySectionProps {
  children: ReactNode;
  className?: string;
}

export default function GlossySection({ children, className = "" }: GlossySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start tracking when the top of the element hits the top of the viewport
    // End tracking when the bottom of the element hits the top of the viewport
    offset: ["start start", "end start"],
  });

  // Map the scroll progress to visual effects
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.section
      ref={containerRef}
      style={{
        opacity,
        scale,
        willChange: "transform, opacity", // PERFORMANCE OPTIMIZATION: Forces GPU to handle the scroll animations
      }}
      className={`relative w-full ${className}`}
    >

      <div className="absolute inset-0 bg-white/95 shadow-sm border border-zinc-200/60 rounded-[2.5rem] -z-10" />
      
      {children}
    </motion.section>
  );
}