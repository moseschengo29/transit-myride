"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

// Reusable Hamburger component to keep the markup clean
const HamburgerIcon = () => (
  <div className="flex flex-col gap-1.5 items-end">
    <div className="w-6 h-[2px] bg-zinc-900 rounded-full" />
    <div className="w-4 h-[2px] bg-zinc-900 rounded-full group-hover:w-6 transition-all duration-300" />
    <div className="w-6 h-[2px] bg-zinc-900 rounded-full" />
  </div>
);

// Moved outside the component to prevent recreation on every render
const getNairobiTime = () =>
  new Date().toLocaleTimeString("en-US", {
    timeZone: "Africa/Nairobi",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // PERFORMANCE FIX: Initialize with time immediately and use suppressHydrationWarning in JSX
  const [time, setTime] = useState(getNairobiTime);
  
  // Reference to the morphing nav container to detect clicks outside
  const navRef = useRef<HTMLDivElement>(null);

  // Live Nairobi time updater
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getNairobiTime());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Track scroll to trigger the morphing states
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
      setIsOpen(false);
    }
  });

  const ease = [0.16, 1, 0.3, 1] as const;

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = 0;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-4 py-5 md:p-6 flex justify-between items-start z-50 pointer-events-none">
      
      {/* --- LEFT: Logo Box --- */}
      <div
        className="flex items-center cursor-pointer pointer-events-auto"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Image
          src="/Transit icon.png"
          alt="My Ride Logo"
          width={350}
          height={150}
          unoptimized // Added to prevent Next.js image optimization processing on static export
          className="h-9 md:h-12 w-auto"
          priority
        />
      </div>

      {/* --- CENTER: Ultra-Clean Status & Support Pill (Desktop Only) --- */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            // PERFORMANCE FIX: Removed `filter: "blur(4px)"` from exit animation
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease }}
            style={{ willChange: "transform, opacity" }} // Force GPU handling
            // PERFORMANCE FIX: Replaced `bg-white/50 backdrop-blur-2xl` with a crisp solid `bg-white/95`
            className="hidden lg:flex items-center p-1 pl-4 bg-white/95 border border-zinc-200 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full absolute left-1/2 -translate-x-1/2 pointer-events-auto gap-4"
          >
            <div className="flex items-center gap-3 cursor-default">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B4C2E] opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1B4C2E]"></span>
              </div>
              <div className="flex items-center gap-1.5 text-[13px] font-medium tracking-tight">
                <span className="text-zinc-500">Nairobi</span>
                <span suppressHydrationWarning className="text-zinc-900 tabular-nums">{time}</span>
              </div>
            </div>

            <div className="w-[1px] h-3 bg-zinc-200" />

            <a
              href="mailto:hello@myridetransit.com"
              className="flex items-center gap-1.5 bg-zinc-100/50 text-zinc-900 text-[13px] font-medium px-3.5 py-1.5 rounded-full shadow-sm hover:bg-zinc-100 hover:text-[#1B4C2E] transition-colors group"
            >
              Support
              <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#1B4C2E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- RIGHT: The Responsive Morphing Nav Container --- */}
      <motion.div
        ref={navRef}
        layout
        transition={{ duration: 0.4, ease }} // Slightly sped up layout transition
        style={{ willChange: "transform, width, height, border-radius" }} // Explicit GPU hints for morphing
        className={`bg-white shadow-sm border border-zinc-100 pointer-events-auto overflow-hidden origin-top-right flex items-center justify-center ${
          isOpen
            ? "rounded-3xl p-2 w-[200px]" // State 3: Open dropdown (All screens)
            : !isScrolled
            ? "rounded-2xl md:rounded-full w-12 h-12 md:w-auto md:h-auto md:pl-6 md:pr-1.5 md:py-1.5" // State 1: Mobile Hamburger / Desktop Pill
            : "rounded-2xl w-12 h-12 md:w-14 md:h-14" // State 2: Scrolled Hamburger (All screens)
        }`}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          
          {/* STATE 1: Desktop Full Nav / Mobile Hamburger */}
          {!isScrolled && !isOpen && (
            <motion.div
              key="desktop-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{ willChange: "transform, opacity" }}
              className="flex items-center justify-center w-full h-full"
            >
              {/* Desktop View */}
              <div className="hidden md:flex items-center gap-6 h-full text-zinc-950">
                <button onClick={() => scrollToSection("features")} className="text-sm font-semibold hover:text-[#1B4C2E] transition-colors whitespace-nowrap">Features</button>
                <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-semibold hover:text-[#1B4C2E] transition-colors whitespace-nowrap">How It Works</button>
                <button onClick={() => scrollToSection("showcase")} className="text-sm font-semibold hover:text-[#1B4C2E] transition-colors whitespace-nowrap">Showcase</button>
                <button onClick={() => scrollToSection("faqs")} className="text-sm font-semibold hover:text-[#1B4C2E] transition-colors whitespace-nowrap">FAQs</button>
                <button onClick={() => scrollToSection("download")} className="bg-[#1B4C2E] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#004e49] transition-colors flex items-center gap-2 whitespace-nowrap">
                  Get Started
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </button>
              </div>
              
              {/* Mobile View */}
              <div 
                className="flex md:hidden w-full h-full items-center justify-center cursor-pointer group"
                onClick={() => setIsOpen(true)}
              >
                <HamburgerIcon />
              </div>
            </motion.div>
          )}

          {/* STATE 2: Collapsed Hamburger Menu (When Scrolled) */}
          {isScrolled && !isOpen && (
            <motion.div
              key="hamburger"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
              style={{ willChange: "transform, opacity" }}
              className="w-full h-full flex items-center justify-center cursor-pointer group"
              onClick={() => setIsOpen(true)}
            >
              <HamburgerIcon />
            </motion.div>
          )}

          {/* STATE 3: Open Dropdown Menu */}
          {isOpen && (
            <motion.div
              key="dropdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ willChange: "opacity" }}
              className="flex flex-col gap-1 p-2 w-full"
            >
              {/* Close Button Header */}
              <div className="flex justify-end mb-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2e4838] hover:bg-[#1b4c2ee3] transition-colors text-white"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Vertical Links */}
              <button onClick={() => scrollToSection("features")} className="text-left px-4 py-3 text-sm font-semibold rounded-xl text-zinc-950 hover:bg-zinc-50 transition-colors">Features</button>
              <button onClick={() => scrollToSection("how-it-works")} className="text-left px-4 py-3 text-sm font-semibold rounded-xl text-zinc-950 hover:bg-zinc-50 transition-colors">How It Works</button>
              <button onClick={() => scrollToSection("showcase")} className="text-left px-4 py-3 text-sm font-semibold rounded-xl text-zinc-950 hover:bg-zinc-50 transition-colors">Showcase</button>
              <button onClick={() => scrollToSection("faqs")} className="text-left px-4 py-3 text-sm font-semibold rounded-xl text-zinc-950 hover:bg-zinc-50 transition-colors">FAQs</button>
              <div className="h-px w-full bg-zinc-100 my-1" />
              <button onClick={() => scrollToSection("download")} className="bg-[#1B4C2E] text-white text-sm font-semibold px-4 py-3 rounded-xl hover:bg-[#004e49] transition-colors mt-1">
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}