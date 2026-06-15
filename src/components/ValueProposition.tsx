"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const customEase = [0.16, 1, 0.3, 1] as const;

// --- OPERATOR DATA: Updated for Accountability & Communication ---
const operatorFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6v6l4 2"/></svg>
    ),
    title: "Automated routing & alerts",
    description: "Geofences trigger ETA updates automatically, keeping your hands on the wheel.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="7" x2="12" y2="13"/></svg>
    ),
    title: "Instant broadcast messaging",
    description: "Immediately notify all parents of traffic, delays, or emergencies with a single tap.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    title: "Absolute child accountability",
    description: "Digital roll calls ensure every student is accounted for, prioritizing safety and care.",
  },
];

// --- GUARDIAN DATA ---
const guardianFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
    ),
    title: "Rich push notifications",
    description: "Receive crisp, instant updates right on your lock screen as the vehicle approaches.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/></svg>
    ),
    title: "Live GPS tracking",
    description: "Tap any notification to view a secure, live-updating map of the van's exact location.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    ),
    title: "Boarding confirmations",
    description: "Rest easy with automated alerts the moment your child safely boards or exits the van.",
  },
];

export default function ValueProposition() {
  const [activeTab, setActiveTab] = useState<"operator" | "guardian">("operator");

  return (
    <section className="w-full py-32 bg-white relative flex flex-col items-center px-6 lg:px-12">
      
      {/* --- PREMIUM MINIMALIST HEADER --- */}
      <div className="w-full max-w-4xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-5xl md:text-4xl lg:text-6xl font-medium tracking-tighter text-zinc-950 mb-8 leading-[1.05]"
        >
          Unified at the core. Unique by design.
        </motion.h2>

        {/* --- PROFESSIONAL SEGMENTED CONTROL --- */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
          className="inline-flex items-center p-1.5 bg-zinc-100 rounded-full ring-1 ring-zinc-200/50"
        >
          {["operator", "guardian"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "operator" | "guardian")}
              className={`relative px-8 py-3 rounded-full text-sm font-semibold capitalize transition-colors duration-300 z-10 ${
                activeTab === tab ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              For {tab}s
            </button>
          ))}
        </motion.div>
      </div>

      {/* --- THE INTERACTIVE CANVAS --- */}
      <div className="w-full max-w-6xl mx-auto relative h-[680px] lg:h-[640px] rounded-[3rem] bg-[#F7F7F8] ring-1 ring-zinc-200/60 shadow-[inset_0_2px_10px_rgba(255,255,255,1),0_20px_50px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
        
        <AnimatePresence mode="wait">
          {activeTab === "operator" ? (
            <motion.div
              key="operator"
              initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: customEase }}
              className="absolute inset-0 w-full h-full flex flex-col lg:flex-row items-center justify-between p-10 lg:p-16 gap-12"
            >
              {/* Left: Narrative */}
              <div className="w-full lg:w-5/12 flex flex-col justify-center gap-6">
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#1B4C2E]/10 text-[#1B4C2E] flex items-center justify-center mb-4 shadow-inner">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-zinc-950 mb-2">Command & Care.</h3>
                  <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-4">
                    Ensure absolute accountability for every child on board while keeping parents informed. Broadcast delays instantly or let background automation handle the routine updates.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  {operatorFeatures.map((item, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white p-4 rounded-2xl ring-1 ring-zinc-200/50 shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex items-start gap-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.6, ease: customEase }}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#1B4C2E]/10 text-[#1B4C2E] flex items-center justify-center shrink-0 shadow-inner">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-900 mb-1">{item.title}</h4>
                        <p className="text-xs text-zinc-500 font-medium leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Operator UI Mockup */}
              {/* Right: Technical UI Mockup (Redesigned for Premium SaaS feel) */}
              <div className="w-full lg:w-7/12 h-full bg-[#09090B] rounded-3xl p-2 shadow-2xl border border-zinc-800/80 flex flex-col relative overflow-hidden ring-1 ring-black">
                
                {/* Inner Bezel (Mimics hardware/screen edge) */}
                <div className="flex-1 bg-[#0F0F11] rounded-[1.5rem] border border-white/5 relative overflow-hidden flex flex-col p-6">
                  
                  {/* --- BACKGROUND: Minimalist Topographic Grid --- */}
                  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
                    {/* Abstract glowing route line in the background */}
                    <svg className="absolute w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                       <motion.path 
                         d="M -50 350 C 100 350, 150 150, 250 200 S 350 50, 450 100" 
                         fill="none" 
                         stroke="#1B4C2E" 
                         strokeWidth="2"
                         className="opacity-40"
                       />
                       <motion.circle 
                         cx="250" cy="200" r="4" fill="#10B981" 
                         animate={{ scale: [1, 2, 1], opacity: [1, 0.5, 1] }} 
                         transition={{ duration: 2, repeat: Infinity }}
                       />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-transparent to-[#0F0F11]" />
                  </div>

                  {/* --- HEADER: Route & Status --- */}
                  <div className="relative z-10 flex items-start justify-between mb-8">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-semibold tracking-tight text-lg leading-none">Waiyaki Way Line</h4>
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-400 border border-zinc-700">R-034</span>
                      </div>
                      <span className="text-zinc-500 font-medium text-xs">Driver: David K. • Vehicle: KCA 123X</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest leading-none mt-0.5">Live</span>
                    </div>
                  </div>

                  {/* --- MIDDLE: Split View (Timeline & Telemetry) --- */}
                  <div className="relative z-10 flex flex-1 gap-6 mb-6">
                    
                    {/* Left: Live Route Timeline */}
                    <div className="w-1/2 flex flex-col gap-0 relative">
                      {/* Vertical connecting line */}
                      <div className="absolute left-[11px] top-4 bottom-8 w-[2px] bg-zinc-800 rounded-full z-0" />
                      
                      {[
                        { name: "Westlands Primary", time: "07:45 AM", status: "completed" },
                        { name: "Sarit Centre Drop", time: "08:12 AM", status: "completed" },
                        { name: "Nairobi Academy", time: "ETA 08:22 AM", status: "active" },
                        { name: "Lavington Hub", time: "ETA 08:45 AM", status: "pending" },
                      ].map((stop, i) => (
                        <div key={i} className="flex items-start gap-4 relative z-10 mb-6 last:mb-0">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-[3px] border-[#0F0F11] ${
                            stop.status === 'completed' ? 'bg-zinc-700' : 
                            stop.status === 'active' ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]' : 'bg-zinc-900 border-zinc-700'
                          }`}>
                            {stop.status === 'completed' && <svg className="w-3 h-3 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5l10 -10"/></svg>}
                            {stop.status === 'active' && <div className="w-2 h-2 bg-white rounded-full animate-ping" />}
                          </div>
                          <div className="flex flex-col pt-0.5">
                            <span className={`text-sm font-semibold tracking-tight ${stop.status === 'pending' ? 'text-zinc-500' : 'text-zinc-200'}`}>{stop.name}</span>
                            <span className={`text-[10px] font-mono ${stop.status === 'active' ? 'text-emerald-400 font-bold' : 'text-zinc-600'}`}>{stop.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right: Key Telemetry Metrics */}
                    <div className="w-1/2 flex flex-col gap-3">
                      <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-4 backdrop-blur-md">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Accountability</span>
                          <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <div className="text-3xl font-medium tracking-tighter text-white tabular-nums">14<span className="text-sm text-zinc-600 font-normal">/15</span></div>
                        <div className="text-[11px] text-emerald-400 font-medium mt-1">All boarded kids verified</div>
                      </div>

                      <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-4 backdrop-blur-md">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Parent Sync</span>
                          <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                        </div>
                        <div className="text-3xl font-medium tracking-tighter text-white tabular-nums">100<span className="text-xl">%</span></div>
                        <div className="text-[11px] text-zinc-500 font-medium mt-1">Delivery rate • 0 errors</div>
                      </div>
                    </div>

                  </div>

                  {/* --- BOTTOM: The Sleek Command Bar --- */}
                  {/* Replaces the old bulky broadcast box with a high-end "Command Palette" style input */}
                  <div className="relative z-20 mt-auto">
                    <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-1.5 flex items-center shadow-lg shadow-black/50 ring-1 ring-white/5">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 ml-1">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                      </div>
                      
                      <div className="flex-1 px-3 flex flex-col justify-center">
                         <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Broadcast Alert</span>
                         <span className="text-sm font-medium text-zinc-300 truncate">Traffic delay on Waiyaki...</span>
                      </div>

                      <button className="bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold px-5 py-2.5 rounded-xl transition-colors shadow-sm flex items-center gap-1.5 shrink-0">
                        Send
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="guardian"
              initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: customEase }}
              className="absolute inset-0 w-full h-full flex flex-col lg:flex-row-reverse items-center justify-between p-10 lg:p-16 gap-12"
            >
              {/* Right: Narrative */}
              <div className="w-full lg:w-5/12 flex flex-col justify-center gap-6">
                 <div className="flex flex-col gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 shadow-inner">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight text-zinc-950 mb-2">Total peace of mind.</h3>
                    <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-4">
                        Never wonder where the van is again. Receive beautiful, instant notifications on your lock screen with live tracking links the moment they approach.
                    </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  {guardianFeatures.map((item, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white p-4 rounded-2xl ring-1 ring-zinc-200/50 shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex items-start gap-4"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.6, ease: customEase }}
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-inner">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-900 mb-1">{item.title}</h4>
                        <p className="text-xs text-zinc-500 font-medium leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Left: Consumer iOS Lock Screen Mockup */}
              <div className="w-full lg:w-7/12 h-full bg-zinc-900 rounded-3xl p-3 shadow-2xl border border-zinc-800 flex flex-col items-center relative overflow-hidden">
                {/* Cinematic iOS Wallpaper Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4facfe] via-[#818cf8] to-[#fbc2eb] opacity-80" />
                
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative z-10 flex flex-col font-sans">
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 pt-3 text-white text-[11px] font-semibold mix-blend-overlay">
                    <span>MTN</span>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21L2 6C4.8 3.5 8.2 2 12 2s7.2 1.5 10 4l-10 15z"/></svg>
                      <svg className="w-5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                    </div>
                  </div>

                  {/* Lock Screen Time */}
                  <div className="flex flex-col items-center mt-8 mb-12">
                    <span className="text-white/90 text-sm font-medium tracking-wide">Wednesday, June 11</span>
                    <span className="text-white text-[72px] font-medium tracking-tighter leading-none mix-blend-overlay">08:14</span>
                  </div>

                  {/* Notifications Stack */}
                  <div className="flex-1 px-4 flex flex-col gap-2 overflow-y-auto">
                    
                    {/* Notification 1: Arrival Alert */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                      className="w-full bg-white/70 backdrop-blur-2xl rounded-3xl p-3 shadow-lg flex gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#1B4C2E] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </div>
                      <div className="flex flex-col flex-1 pt-0.5">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-zinc-900 tracking-tight">MyRide Transit</span>
                          <span className="text-[10px] text-zinc-500 font-medium">now</span>
                        </div>
                        <span className="text-[13px] font-bold text-zinc-900 leading-tight mb-0.5">Approaching Stop 4</span>
                        <span className="text-[13px] text-zinc-700 leading-snug">The van is 2 minutes away. Tap here to view the live tracking map.</span>
                      </div>
                    </motion.div>

                    {/* Notification 2: Broadcast / Delay Alert */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 25 }}
                      className="w-full bg-white/70 backdrop-blur-2xl rounded-3xl p-3 shadow-lg flex gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                      </div>
                      <div className="flex flex-col flex-1 pt-0.5">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-zinc-900 tracking-tight">Driver Broadcast</span>
                          <span className="text-[10px] text-zinc-500 font-medium">10m ago</span>
                        </div>
                        <span className="text-[13px] font-bold text-zinc-900 leading-tight mb-0.5">Traffic Update</span>
                        <span className="text-[13px] text-zinc-700 leading-snug">&quot;Heavy traffic on Waiyaki Way. We are running 15m late.&quot;</span>
                      </div>
                    </motion.div>

                    {/* Notification 3: Boarding Confirmation */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 1.3, type: "spring", stiffness: 300, damping: 25 }}
                      className="w-full bg-white/70 backdrop-blur-2xl rounded-3xl p-3 shadow-lg flex gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#33CE6B] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5l10 -10"/></svg>
                      </div>
                      <div className="flex flex-col flex-1 pt-0.5">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-zinc-900 tracking-tight">MyRide Transit</span>
                          <span className="text-[10px] text-zinc-500 font-medium">1h ago</span>
                        </div>
                        <span className="text-[13px] font-bold text-zinc-900 leading-tight mb-0.5">Sarah K. Boarded</span>
                        <span className="text-[13px] text-zinc-700 leading-snug">Sarah has been safely checked in by the driver.</span>
                      </div>
                    </motion.div>

                  </div>

                  {/* Home Indicator */}
                  <div className="w-32 h-1.5 bg-white/50 rounded-full mx-auto mb-2" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}