"use client";

import { motion, Variants } from "framer-motion";

export default function BentoFeatures() {
  // Use 'as const' to tell TypeScript this is a strict tuple, preventing transition type errors
  const customEase = [0.16, 1, 0.3, 1] as const;

  // Explicitly type your variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: customEase } },
  };

  // Define child hover variants explicitly to satisfy strict TS
  const message1Variants: Variants = { hover: { x: -10 } };
  const message2Variants: Variants = { hover: { x: -20 } };
  const batteryFillVariants: Variants = { hover: { y: "0%" } };
  const graphVariants: Variants = { hover: { y: -10, scale: 1.05 } };

  return (
    <section className="w-full py-32 bg-[#F7F7F7] relative flex flex-col items-center px-6 lg:px-12 overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-950 mb-6">
            Everything you need. <br />
            <span className="font-serif text-[#00635D] italic">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-lg text-zinc-500 font-medium">
            Designed specifically for independent operators. No bloated enterprise software, just the tools required to run your route flawlessly.
          </p>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]"
      >
        
        {/* CARD 1: Offline Mode (Spans 2 columns on desktop) */}
        <motion.div 
          variants={itemVariants}
          whileHover="hover"
          className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-zinc-200/60 shadow-sm relative overflow-hidden group cursor-default"
        >
          {/* Subtle Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00635D]/0 via-transparent to-[#00635D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-[#00635D] group-hover:text-white transition-colors duration-500">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/></svg>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-950">Works offline.</h3>
              <p className="text-zinc-500 font-medium mt-2 max-w-sm">
                Driving through dead zones? The app caches your route and queues SMS alerts to send the second you regain signal.
              </p>
            </div>
            
            {/* Animated Graphic */}
            <div className="absolute right-0 bottom-0 w-64 h-48 translate-x-10 translate-y-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700 ease-out">
              <div className="w-full h-full bg-zinc-50 rounded-tl-3xl border-t border-l border-zinc-200 p-6 flex flex-col gap-3 shadow-[-10px_-10px_30px_rgba(0,0,0,0.03)]">
                {/* Fake Queued Messages */}
                <motion.div variants={message1Variants} className="bg-white p-3 rounded-xl shadow-sm border border-zinc-100 flex justify-between items-center">
                  <div className="w-20 h-2 bg-zinc-200 rounded-full" />
                  <div className="w-4 h-4 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
                </motion.div>
                <motion.div variants={message2Variants} className="bg-white p-3 rounded-xl shadow-sm border border-zinc-100 flex justify-between items-center opacity-70">
                  <div className="w-16 h-2 bg-zinc-200 rounded-full" />
                  <div className="w-4 h-4 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: Battery Optimized (Tall card, spans 2 rows) */}
        <motion.div 
          variants={itemVariants}
          whileHover="hover"
          className="md:row-span-2 bg-zinc-950 rounded-[2.5rem] p-10 border border-zinc-800 shadow-xl relative overflow-hidden group cursor-default text-white"
        >
          {/* Animated Glow on Hover */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00635D]/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="16" height="10" rx="2" ry="2"/><line x1="22" y1="11" x2="22" y2="13"/></svg>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Battery optimized.</h3>
            <p className="text-zinc-400 font-medium mt-2">
              GPS tracking drains batteries. We rebuilt the location engine to use 60% less power than standard navigation apps.
            </p>

            {/* Animated Battery Graphic */}
            <div className="mt-auto pt-10 flex justify-center">
              <div className="relative w-32 h-48 rounded-[2rem] border-4 border-zinc-800 p-2 overflow-hidden bg-black">
                {/* Battery Nub */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-zinc-800 rounded-t-lg" />
                {/* Liquid Fill */}
                <motion.div 
                  variants={batteryFillVariants}
                  initial={{ y: "60%" }}
                  transition={{ duration: 1.5, ease: customEase }}
                  className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#00635D] to-emerald-400 rounded-[1.5rem]"
                />
                {/* Percentage Text */}
                <div className="absolute inset-0 flex items-center justify-center z-10 mix-blend-overlay">
                  <span className="text-4xl font-bold tracking-tighter tabular-nums">98%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 3: Digital Manifest */}
        <motion.div 
          variants={itemVariants}
          whileHover="hover"
          className="bg-white rounded-[2.5rem] p-10 border border-zinc-200/60 shadow-sm relative overflow-hidden group cursor-default"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-[#00635D] group-hover:text-white transition-colors duration-500">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-950">Digital manifests.</h3>
            <p className="text-zinc-500 font-medium mt-2">
              Ditch the clipboard. Mark students present with a single tap.
            </p>
          </div>
          
          {/* Animated Avatars */}
          <div className="absolute bottom-6 right-6 flex -space-x-3">
            {[1, 2, 3].map((i) => {
              // Extract the avatar variants inside the map to maintain type safety
              const avatarVariants: Variants = { hover: { y: -5, x: i * 5 } };
              return (
                <motion.div 
                  key={i}
                  variants={avatarVariants}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="w-12 h-12 rounded-full border-4 border-white bg-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-500 shadow-md"
                >
                  {i === 1 ? 'JD' : i === 2 ? 'SK' : 'AM'}
                </motion.div>
              );
            })}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-[#00635D] flex items-center justify-center text-xs font-bold text-white shadow-md z-10">
              +39
            </div>
          </div>
        </motion.div>

        {/* CARD 4: Route Optimization */}
        <motion.div 
          variants={itemVariants}
          whileHover="hover"
          className="bg-white rounded-[2.5rem] p-10 border border-zinc-200/60 shadow-sm relative overflow-hidden group cursor-default"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-[#00635D] group-hover:text-white transition-colors duration-500">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-950">Smart routing.</h3>
            <p className="text-zinc-500 font-medium mt-2">
              Automatic route adjustments based on morning traffic conditions.
            </p>
          </div>

          {/* Animated Line Graph Graphic */}
          <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden rounded-b-[2.5rem]">
            <motion.svg 
              variants={graphVariants}
              transition={{ duration: 0.7, ease: customEase }}
              className="absolute bottom-0 w-full h-full text-[#00635D]/10 group-hover:text-[#00635D]/20 transition-colors duration-500" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none"
            >
              <path d="M0 100 C 20 60, 40 80, 60 40 C 80 10, 90 20, 100 0 L 100 100 Z" fill="currentColor" />
              <path d="M0 100 C 20 60, 40 80, 60 40 C 80 10, 90 20, 100 0" stroke="#00635D" strokeWidth="2" />
            </motion.svg>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}