"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// --- REUSABLE SVG ICONS ---
const QRIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <path d="M7 7h.01M18 7h.01M18 18h.01M7 18h.01" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// --- REUSABLE CARD CONTENT ---

// Card 1: The Operator (Teal Palette #0088AA)
const Card1Content = () => (
  <>
    <div>
      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-6 backdrop-blur-sm border border-white/10 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      <h3 className="text-3xl font-bold tracking-tight text-white mb-2">Driver App</h3>
      <p className="text-teal-50 font-medium text-sm leading-relaxed opacity-90">
        Zero-touch tracking. Background geofencing automatically notifies parents as you approach, so you can keep your eyes safely on the road.
      </p>
    </div>
    <div className="mt-8 border-t border-white/20 pt-5 flex items-center justify-between">
      <span className="text-[11px] font-bold uppercase tracking-widest text-teal-100">For Operators</span>
      <div className="flex gap-2">
        <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm ring-1 ring-white/20" title="Show QR Code">
          <QRIcon />
        </button>
        <a href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 h-10 rounded-full bg-white hover:bg-zinc-50 text-[#0088AA] text-xs font-bold transition-colors shadow-sm">
          <DownloadIcon />
          Driver App
        </a>
      </div>
    </div>
  </>
);

// Card 2: The School (Dark Green Palette #1B4C2E)
const Card2Content = () => (
  <>
    <div>
      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-6 backdrop-blur-sm border border-white/10 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
      </div>
      <h3 className="text-3xl font-bold tracking-tight text-white mb-2">Compliance</h3>
      <p className="text-emerald-50/80 font-medium text-sm leading-relaxed">
        Audit-ready compliance. Instantly generate secure attendance logs and manifest reports. Ditch the clipboard and eliminate liability blind spots.
      </p>
    </div>
    <div className="mt-8 border-t border-white/20 pt-5 flex items-center justify-between">
      <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-200">For Schools</span>
      <div className="flex gap-2">
        <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm ring-1 ring-white/10" title="Scan for Access">
          <QRIcon />
        </button>
        <a href="https://school.myridetransit.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 h-10 rounded-full bg-white hover:bg-zinc-100 text-[#1B4C2E] text-xs font-bold transition-colors shadow-sm">
          <ExternalLinkIcon />
          Portal
        </a>
      </div>
    </div>
  </>
);

// Card 3: The Guardian (Orange Palette #FBA51C)
const Card3Content = () => (
  <>
    <div>
      <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center text-zinc-950 mb-6 backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:bg-white/50 transition-all duration-300">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </div>
      <h3 className="text-3xl font-bold tracking-tight text-zinc-950 mb-2">Guardian App</h3>
      <p className="text-orange-950/80 font-medium text-sm leading-relaxed">
        Complete peace of mind. Track rides in real-time, view driver profiles, and get instant push notifications when your child arrives safely.
      </p>
    </div>
    <div className="mt-8 border-t border-orange-950/10 pt-5 flex items-center justify-between">
      <span className="text-[11px] font-bold uppercase tracking-widest text-orange-950/70">For Guardians</span>
      <div className="flex gap-2">
        <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-zinc-950 flex items-center justify-center transition-colors shadow-sm ring-1 ring-orange-950/10" title="Scan tracking link">
          <QRIcon />
        </button>
        <a href="https://track.myridetransit.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 h-10 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-colors shadow-sm">
          <DownloadIcon />
          Guardian App
        </a>
      </div>
    </div>
  </>
);

export default function FeatureStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress through the tall container (Only affects Desktop view)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- DESKTOP TRANSFORMATIONS ---
  const card1Scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const card1X = useTransform(scrollYProgress, [0, 1], ["0%", "-105%"]);
  const card1Rotate = useTransform(scrollYProgress, [0, 1], [0, -6]);

  const card2Scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const card2X = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const card2Rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const card3Scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const card3X = useTransform(scrollYProgress, [0, 1], ["0%", "105%"]);
  const card3Rotate = useTransform(scrollYProgress, [0, 1], [0, 6]);

  return (
    <section ref={containerRef} className="relative h-auto md:h-[300vh] bg-[#F7F7F8] w-full">
      
      {/* ==================================================== */}
      {/* MOBILE LAYOUT: Sticky Vertical Stack                 */}
      {/* ==================================================== */}
      <div className="flex md:hidden flex-col items-center pt-24 pb-48 px-4 w-full">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium tracking-tight text-zinc-950 mb-4">
            One platform.<br/>Three ecosystems.
          </h2>
          <p className="text-lg text-zinc-500 font-medium max-w-sm mx-auto">
            Scroll to unpack the tools powering modern student transportation.
          </p>
        </div>

        <div className="w-full flex flex-col gap-6 relative">
          {/* Card 1: Sticks at the very top */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            className="sticky top-24 w-full max-w-[360px] mx-auto min-h-[420px] bg-[#0088AA] rounded-[2.5rem] p-8 shadow-2xl border border-[#006b87] flex flex-col justify-between text-white z-10"
          >
            <Card1Content />
          </motion.div>

          {/* Card 2: Sticks slightly below Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            className="sticky top-32 w-full max-w-[360px] mx-auto min-h-[420px] bg-[#1B4C2E] rounded-[2.5rem] p-8 shadow-2xl border border-[#004e49] flex flex-col justify-between text-white z-20"
          >
            <Card2Content />
          </motion.div>

          {/* Card 3: Sticks slightly below Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            className="sticky top-40 w-full max-w-[360px] mx-auto min-h-[420px] bg-[#FBA51C] rounded-[2.5rem] p-8 shadow-2xl border border-[#d98b10] flex flex-col justify-between z-30"
          >
            <Card3Content />
          </motion.div>
        </div>
      </div>

      {/* ==================================================== */}
      {/* DESKTOP LAYOUT: Sticky Fan-Out Animation             */}
      {/* ==================================================== */}
      <div className="hidden md:block sticky top-0 h-screen w-full overflow-hidden px-4">
        <div className="h-full flex flex-col items-center justify-center">
          
          {/* Header */}
          <div className="text-center z-40 px-6 pointer-events-none mb-16">
            <h2 className="text-5xl lg:text-6xl font-medium tracking-tight text-zinc-950 mb-4">
              One platform. Three ecosystems.
            </h2>
            <p className="text-xl text-zinc-500 font-medium max-w-xl mx-auto">
              Scroll to unpack the tools powering modern student transportation.
            </p>
          </div>

          {/* Animated Card Deck */}
          <div className="relative w-full max-w-[380px] lg:max-w-[400px] h-[450px] flex items-center justify-center shrink-0">
            
            {/* Card 1: Teal */}
            <motion.div
              style={{ scale: card1Scale, y: card1Y, x: card1X, rotate: card1Rotate, zIndex: 10 }}
              className="absolute inset-0 origin-bottom"
            >
              <motion.div 
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full h-full bg-[#0088AA] rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,136,170,0.3)] hover:shadow-[0_30px_60px_rgba(0,136,170,0.4)] border border-[#006b87] flex flex-col justify-between group text-white cursor-default"
              >
                <Card1Content />
              </motion.div>
            </motion.div>

            {/* Card 2: Green */}
            <motion.div
              style={{ scale: card2Scale, y: card2Y, x: card2X, rotate: card2Rotate, zIndex: 20 }}
              className="absolute inset-0 origin-bottom"
            >
              <motion.div 
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full h-full bg-[#1B4C2E] rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(27,76,46,0.3)] hover:shadow-[0_30px_60px_rgba(27,76,46,0.4)] border border-[#004e49] flex flex-col justify-between group text-white cursor-default"
              >
                <Card2Content />
              </motion.div>
            </motion.div>

            {/* Card 3: Orange */}
            <motion.div
              style={{ scale: card3Scale, y: card3Y, x: card3X, rotate: card3Rotate, zIndex: 30 }}
              className="absolute inset-0 origin-bottom"
            >
              <motion.div 
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full h-full bg-[#FBA51C] rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(251,165,28,0.3)] hover:shadow-[0_30px_60px_rgba(251,165,28,0.4)] border border-[#d98b10] flex flex-col justify-between group cursor-default"
              >
                <Card3Content />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}