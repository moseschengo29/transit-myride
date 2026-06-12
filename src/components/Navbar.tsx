"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");

  // Live Nairobi time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        timeZone: "Africa/Nairobi",
        hour: "2-digit", 
        minute: "2-digit", 
        hour12: false 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll to trigger the morphing states
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
      setIsOpen(false); // Automatically close the menu if scrolled back to the top
    }
  });

  // Reusable custom easing curve strictly typed for Framer Motion
  const ease = [0.16, 1, 0.3, 1] as const;

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setIsOpen(false); // Close dropdown if it's open
    const element = document.getElementById(id);
    if (element) {
      // Offset slightly to account for the fixed navbar height
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-start z-50 pointer-events-none">
      
      {/* --- LEFT: Logo Box --- */}
      <div 
        className="flex items-center gap-1.5 cursor-pointer group pointer-events-auto"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {/* 'My' - Neutral weight for balance */}
        <span className="text-xl font-bold text-zinc-950 tracking-tight">
          My
        </span>
        
        {/* 'Ride' - Primary brand color */}
        <span className="text-xl font-bold text-[#00635D] tracking-tight">
          Ride
        </span>
        
        {/* The "Full Stop" - Using a slightly larger, deliberate dot */}
        <motion.div 
          whileHover={{ scale: 1.2, backgroundColor: "#004e49" }}
          className="rounded-full w-2 h-2 bg-[#00635D] mt-1.5 shadow-[0_0_8px_rgba(0,99,93,0.3)]" 
        />
      </div>

      {/* --- CENTER: Ultra-Clean Status & Support Pill --- */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease }}
            className="hidden lg:flex items-center p-1 pl-4 bg-white/50 backdrop-blur-2xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full absolute left-1/2 -translate-x-1/2 pointer-events-auto gap-4"
          >
            {/* 1. Context: Status, Location, Time */}
            <div className="flex items-center gap-3 cursor-default">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00635D] opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00635D]"></span>
              </div>
              
              <div className="flex items-center gap-1.5 text-[13px] font-medium tracking-tight">
                <span className="text-zinc-500">Nairobi</span>
                <span className="text-zinc-900 tabular-nums">{time}</span>
              </div>
            </div>

            <div className="w-[1px] h-3 bg-zinc-200" />

            {/* 2. Action: Support Link */}
            <a 
              href="mailto:hello@myridetransit.com"
              className="flex items-center gap-1.5 bg-white text-zinc-900 text-[13px] font-medium px-3.5 py-1.5 rounded-full shadow-sm hover:text-[#00635D] transition-colors group"
            >
              Support
              <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#00635D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- RIGHT: The Morphing Nav Container --- */}
      <motion.div
        layout
        transition={{ duration: 0.5, ease }}
        className={`bg-white shadow-sm border border-zinc-100 pointer-events-auto overflow-hidden origin-top-right ${
          !isScrolled 
            ? "rounded-full p-1.5 pl-6" 
            : isOpen
            ? "rounded-3xl p-2 w-[200px]" 
            : "rounded-2xl w-14 h-14" 
        }`}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          
          {/* STATE 1: Full Desktop Nav */}
          {!isScrolled && (
            <motion.div
              key="desktop-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-6 h-full text-zinc-950"
            >
              <button onClick={() => scrollToSection("features")} className="text-sm font-semibold hover:text-[#00635D] transition-colors whitespace-nowrap">Features</button>
              <button onClick={() => scrollToSection("pricing")} className="text-sm font-semibold hover:text-[#00635D] transition-colors whitespace-nowrap">Pricing</button>
              <button onClick={() => scrollToSection("download")} className="bg-[#00635D] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#004e49] transition-colors flex items-center gap-2 whitespace-nowrap">
                Get Started
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </button>
            </motion.div>
          )}

          {/* STATE 2: Collapsed Hamburger Menu */}
          {isScrolled && !isOpen && (
            <motion.div
              key="hamburger"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center cursor-pointer group"
              onClick={() => setIsOpen(true)}
            >
              <div className="flex flex-col gap-1.5 items-end">
                <div className="w-6 h-[2px] bg-zinc-900 rounded-full" />
                <div className="w-4 h-[2px] bg-zinc-900 rounded-full group-hover:w-6 transition-all duration-300" />
                <div className="w-6 h-[2px] bg-zinc-900 rounded-full" />
              </div>
            </motion.div>
          )}

          {/* STATE 3: Open Dropdown Menu */}
          {isScrolled && isOpen && (
            <motion.div
              key="dropdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-1 p-2"
            >
              {/* Close Button Header */}
              <div className="flex justify-end mb-2">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              {/* Vertical Links */}
              <button onClick={() => scrollToSection("features")} className="text-left px-4 py-3 text-sm font-semibold rounded-xl text-zinc-950 hover:bg-zinc-50 transition-colors">Features</button>
              <button onClick={() => scrollToSection("pricing")} className="text-left px-4 py-3 text-sm font-semibold rounded-xl text-zinc-950 hover:bg-zinc-50 transition-colors">Pricing</button>
              <div className="h-px w-full bg-zinc-100 my-1" />
              <button onClick={() => scrollToSection("download")} className="bg-[#00635D] text-white text-sm font-semibold px-4 py-3 rounded-xl hover:bg-[#004e49] transition-colors mt-1">
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}