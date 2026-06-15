"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, Variants } from "framer-motion";
import Image from "next/image";
import DownloadModal from "./DownloandModal";
import VideoModal from "./VideoDemoModal";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

// --- THE FLOWING STAT CARDS DATA ---
// (Note: This array is declared but not currently rendered in the JSX below. 
// You can map over it later if you decide to add the floating stats back!)
const floatingStats = [
  {
    id: 1,
    top: "15%",
    delay: 0,
    duration: 20, 
    content: (
      <div className="bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-white flex items-center gap-3 w-48">
        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
        </div>
        <div>
          <div className="text-sm font-bold text-zinc-900 leading-none mb-1">100% Sent</div>
          <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest leading-none">Alert Status</div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    top: "60%",
    delay: 5,
    duration: 25,
    content: (
      <div className="bg-white/90 backdrop-blur-xl p-4 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-white flex flex-col items-center justify-center gap-2">
        <div className="relative w-14 h-14 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#E4E4E7" strokeWidth="10" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="#1B4C2E" strokeWidth="10" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="40" />
          </svg>
          <span className="text-sm font-bold text-zinc-900 tabular-nums">92%</span>
        </div>
        <div className="text-[10px] text-zinc-900 font-bold tracking-tight uppercase">Efficiency</div>
      </div>
    ),
  },
  {
    id: 3,
    top: "35%",
    delay: 10,
    duration: 22,
    content: (
      <div className="bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-white flex items-center gap-3 w-52">
        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <div className="text-sm font-bold text-zinc-900 leading-none mb-1">0.8 km</div>
          <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest leading-none">Next Stop</div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    top: "75%",
    delay: 15,
    duration: 28,
    content: (
      <div className="bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-white flex items-center gap-3 w-48">
        <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 font-bold text-lg">
          42
        </div>
        <div>
          <div className="text-sm font-bold text-zinc-900 leading-none mb-1">Boarded</div>
          <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest leading-none">Roll Call</div>
        </div>
      </div>
    ),
  }
];

export default function HomeHero() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // --- 3D INTERACTIVE MOUSE TRACKING ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map mouse position to 3D rotation angles. 
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [25, 5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-25, 5]);

  // Apply spring physics for a smooth, heavy, premium feel
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate mouse position relative to the center of the element (-0.5 to 0.5)
    const xPct = (event.clientX - rect.left) / width - 0.5;
    const yPct = (event.clientY - rect.top) / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  }

  function handleMouseLeave() {
    // Return to the default resting slant when mouse leaves
    mouseX.set(0);
    mouseY.set(0);
  }

  // Use 'as const' to strictly type the easing array
  const customEase = [0.16, 1, 0.3, 1] as const;

  // Explicitly type variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: customEase } },
  };

  const randomNumber = 16

  return (
    <>
      <section className="relative w-full min-h-[110vh] flex flex-col items-center pt-32 overflow-hidden bg-[#FAFAFC]">
        
        {/* --- BACKGROUND HORIZON GLOW --- */}
        <div className="absolute bottom-0 inset-x-0 h-[600px] flex justify-center pointer-events-none z-0">
          <div className="absolute bottom-[-200px] w-[120%] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B4C2E]/20 via-emerald-400/5 to-transparent blur-[80px] rounded-[100%]" />
        </div>

        {/* --- TOP CONTENT: Typography & CTA --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-20 px-6"
        >
          <div className="mb-6 flex flex-col items-center justify-center">
            <div className="overflow-hidden pb-2">
              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-7xl lg:text-[84px] leading-[1.05] font-semibold tracking-tight text-zinc-950"
              >
                Your Connected
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4">
              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-7xl lg:text-[84px] leading-[1.05] font-semibold tracking-tight text-zinc-950"
              >
                Transport Hub
              </motion.h1>
            </div>
          </div>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg md:text-xl text-zinc-500 font-medium leading-relaxed mb-8"
          >
            Make sense of your routes, from live tracking to parent alerts, and
            everything in between.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-16"
          >
            {/* Primary CTA */}
            <button
              onClick={() => setIsDownloadOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1B4C2E] text-white text-sm font-semibold hover:bg-[#004e49] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out shadow-[0_8px_24px_rgba(0,99,93,0.25)] flex items-center justify-center gap-2"
            >
              Download the App
              <FaApple />
              <IoLogoGooglePlaystore />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => setIsVideoOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-zinc-900 text-sm font-semibold hover:bg-zinc-200/50 transition-colors duration-300 ease-out flex items-center justify-center gap-2 group"
            >
              <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-0.5">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
              See how it works
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-3 pt-6 border-t border-zinc-200/60 w-full max-w-md mx-auto"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-[13px] font-medium text-zinc-500">
              <strong className="text-zinc-900 font-bold tabular-nums">4.9/5</strong> rating from <strong className="text-zinc-900 font-bold tabular-nums">12,000+</strong> independent transport providers.
            </div>
          </motion.div>
        </motion.div>

        <div className="relative w-full max-w-7xl mx-auto h-[850px] md:h-[1050px] lg:h-[1150px] perspective-[100px] -mt-38">
            <div 
            className="absolute inset-0 flex justify-center items-end z-10"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            >
            <motion.div
                // Apply the spring-based 3D rotation from the mouse tracking
                style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                rotateZ: 2, // Slight constant diagonal tilt
                }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: customEase }}
                className="relative w-[380px] md:w-[500px] lg:w-[550px] h-[900px] md:h-[1100px] lg:h-[1200px] transform-style-3d cursor-crosshair"
            >
                <Image
                src="/Homepage.png"
                alt="MyRide Transit Interface"
                fill
                sizes="(max-width: 768px) 320px, 340px"
                className="object-contain drop-shadow-[-20px_40px_60px_rgba(0,0,0,0.3)] pointer-events-none"
                priority
                />
            </motion.div>
            </div>
        </div>      

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden lg:flex absolute bottom-32 right-8 bg-zinc-950 p-3 pr-6 rounded-2xl shadow-2xl items-center gap-4 z-40 border border-zinc-800"
        >
          <div className="w-16 h-16 bg-white rounded-xl p-1 flex items-center justify-center">
            <div className="w-full h-full grid grid-cols-4 gap-0.5">
              {[...Array(16)].map((_, i) => (
                <div key={i} className={`bg-zinc-950 rounded-sm ${randomNumber > 0.5 ? "opacity-100" : "opacity-0"}`} />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm">Download for iOS</span>
            <span className="text-zinc-400 text-xs">Get started with<br />MyRide Transit today.</span>
          </div>
        </motion.div>

        <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
        <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      </section>
    </>
  );
}