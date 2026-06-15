"use client";

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

// Use 'as const' to strictly type the easing array as a tuple
const customEase = [0.16, 1, 0.3, 1] as const;

// --- HELPER: Perfect Upright Orbit Logic ---
function OrbitItem({
  startAngle,
  duration,
  reverse = false,
  children,
}: {
  startAngle: number;
  duration: number;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 pointer-events-none z-20"
    >
      <div className="absolute inset-0" style={{ transform: `rotate(${startAngle}deg)` }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <motion.div
            animate={{ rotate: reverse ? 360 : -360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            <div style={{ transform: `rotate(-${startAngle}deg)` }}>
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// --- HELPER: High-Density Integration Node ---
function IntegrationNode({
  icon,
  label,
  status,
  color,
  statusColor,
}: {
  icon: ReactNode;
  label: string;
  status: string;
  color: string;
  statusColor: string;
}) {
  return (
    <div className="flex items-center gap-3 p-2.5 pr-5 bg-white/80 backdrop-blur-2xl border border-white rounded-2xl shadow-[0_12px_40px_-12px_rgba(0,99,93,0.2)] hover:scale-105 hover:bg-white transition-all duration-300 cursor-default ring-1 ring-zinc-950/5 group">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-inner ${color}`}>
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-sm font-bold text-zinc-900 leading-none mb-1">{label}</span>
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${statusColor} animate-pulse`} />
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none">{status}</span>
        </div>
      </div>
    </div>
  );
}

export default function ConnectedEcosystem() {
  
  // Explicitly type the graph animation variants to satisfy TS
  const getGraphVariants = (height: number): Variants => ({
    animate: {
      height: [`${height}%`, `${height * 0.5}%`, `${height}%`],
    },
  });

  return (
    <section className="relative w-full py-32 bg-[#F7F7F7] overflow-hidden flex items-center min-h-[100vh] border-y border-zinc-200/50">
      
      {/* --- AMBIENT CORE GLOW --- */}
      <div className="absolute top-1/2 left-[50%] lg:left-[25%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1B4C2E]/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      {/* --- ROTATING DATA RINGS --- */}
      <div className="absolute top-1/2 left-[50%] lg:left-[25%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-0 pointer-events-none">
        
        {/* Ring 1 (Inner) */}
        <div className="absolute w-[450px] h-[450px] rounded-full border border-zinc-300/60 border-dashed animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[450px] h-[450px] rounded-full">
          <OrbitItem startAngle={45} duration={50}>
             <IntegrationNode 
               label="SMS Gateway" 
               status="Connected"
               color="bg-blue-50 text-blue-600 border border-blue-100"
               statusColor="bg-emerald-500"
               icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>}
             />
          </OrbitItem>
        </div>

        {/* Ring 2 (Middle) */}
        <div className="absolute w-[750px] h-[750px] rounded-full border border-zinc-300/60 border-dashed animate-[spin_80s_linear_infinite_reverse]" />
        <div className="absolute w-[750px] h-[750px] rounded-full">
          <OrbitItem startAngle={180} duration={65} reverse>
             <IntegrationNode 
               label="WhatsApp API" 
               status="Syncing..."
               color="bg-emerald-50 text-emerald-600 border border-emerald-100"
               statusColor="bg-amber-400"
               icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 21c-1.308 0-2.585-.346-3.729-1l-4.148 1.089 1.109-4.043a9.782 9.782 0 0 1-1.34-4.996C3.923 6.64 8.287 2.276 13.689 2.276c5.402 0 9.766 4.364 9.766 9.765 0 5.401-4.364 9.765-9.766 9.765l-1.658-.006z"/></svg>}
             />
          </OrbitItem>
          <OrbitItem startAngle={320} duration={65} reverse>
             <IntegrationNode 
               label="Live Telemetry" 
               status="Active"
               color="bg-red-50 text-red-600 border border-red-100"
               statusColor="bg-emerald-500"
               icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>}
             />
          </OrbitItem>
        </div>

        {/* Ring 3 (Outer) */}
        <div className="absolute w-[1050px] h-[1050px] rounded-full border border-zinc-300/60 border-dashed animate-[spin_100s_linear_infinite]" />
        <div className="absolute w-[1050px] h-[1050px] rounded-full">
          <OrbitItem startAngle={75} duration={85}>
             <IntegrationNode 
               label="School Portal" 
               status="Connected"
               color="bg-amber-50 text-amber-600 border border-amber-100"
               statusColor="bg-emerald-500"
               icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z"/></svg>}
             />
          </OrbitItem>
          <OrbitItem startAngle={240} duration={85}>
             <IntegrationNode 
               label="AWS Export" 
               status="Standby"
               color="bg-zinc-100 text-zinc-700 border border-zinc-200"
               statusColor="bg-zinc-400"
               icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>}
             />
          </OrbitItem>
        </div>

        {/* Masking Gradient: Fades rings perfectly into the #F7F7F7 background */}
        <div className="absolute inset-0 w-[1200px] h-[1200px] [mask-image:radial-gradient(ellipse_45%_45%_at_50%_50%,transparent_20%,black_100%)] bg-[#F7F7F7]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-30 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        
        {/* LEFT COLUMN: System Hub Mockup */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
          
          <div className="relative w-[320px] h-[640px]">
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: customEase }}
              className="absolute inset-0 bg-white rounded-[3rem] p-3 shadow-[0_20px_50px_rgba(0,99,93,0.15)] border border-zinc-200 ring-1 ring-black/5"
            >
              <div className="w-full h-full bg-zinc-950 rounded-[2.5rem] overflow-hidden relative shadow-inner flex flex-col border border-zinc-800">
                
                {/* Dynamic Island */}
                <div className="absolute top-2 inset-x-0 flex justify-center z-50">
                  <div className="w-24 h-6 bg-black rounded-full border border-white/5" />
                </div>

                {/* System Hub Interface */}
                <div className="flex-1 pt-14 px-5 flex flex-col">
                  
                  {/* Status Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">System Hub</div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                        <span className="text-white text-sm font-semibold tracking-wide">All Systems Nominal</span>
                      </div>
                    </div>
                  </div>

                  {/* Live Traffic Graph */}
                  <div className="w-full bg-zinc-900 rounded-2xl p-4 border border-zinc-800 mb-6">
                    <div className="text-xs text-zinc-500 font-medium mb-3">Live API Traffic</div>
                    <div className="flex items-end justify-between gap-1.5 h-16">
                      {[30, 45, 25, 60, 80, 40, 90, 50, 75, 100, 65, 85].map((height, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: "10%" }}
                          variants={getGraphVariants(height)}
                          animate="animate"
                          transition={{ duration: 2 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                          className={`w-full rounded-sm ${i > 8 ? 'bg-[#1B4C2E]' : 'bg-zinc-700'}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Incoming Event Logs */}
                  <div className="flex flex-col gap-3">
                    <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Event Log</div>
                    
                    {[
                      { icon: "SMS", text: "Alert delivered to +254 712***", time: "Just now", color: "text-blue-400", bg: "bg-blue-400/10" },
                      { icon: "LOC", text: "Geofence breached: Zone A", time: "2s ago", color: "text-red-400", bg: "bg-red-400/10" },
                      { icon: "DB", text: "Manifest synced to cloud", time: "12s ago", color: "text-emerald-400", bg: "bg-emerald-400/10" },
                    ].map((log, i) => (
                      <div key={i} className="flex items-start gap-3 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800/50">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-black shrink-0 ${log.bg} ${log.color}`}>
                          {log.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-zinc-300 leading-tight">{log.text}</span>
                          <span className="text-[10px] text-zinc-600 mt-1">{log.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Enterprise Narrative --- */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            {/* Enterprise Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white shadow-sm mb-6 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B4C2E] opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1B4C2E]"></span>
              </span>
              <span className="text-[11px] font-bold tracking-widest uppercase text-zinc-600">Open Architecture</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-950 mb-6 leading-[1.05]">
              Connect your <br />
              <span className="font-serif text-[#1B4C2E] italic">entire route.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
              Sync parents, schools, and dispatch automatically. We handle the complex API routing so you can focus entirely on the road.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pb-10 border-b border-zinc-200">
               <button className="px-8 py-4 rounded-full bg-[#1B4C2E] text-white text-sm font-bold hover:bg-emerald-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_8px_24px_rgba(0,99,93,0.3)]">
                View developer docs
              </button>
              <button className="px-8 py-4 rounded-full bg-transparent text-zinc-900 text-sm font-bold hover:bg-zinc-100 transition-colors duration-300">
                Contact sales
              </button>
            </div>

            {/* Social Proof / Tech Stack Grid */}
            <div className="mt-10">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Built to integrate with</p>
              <div className="flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale">
                <div className="text-xl font-black font-serif tracking-tighter">AWS</div>
                <div className="text-xl font-black tracking-tight">Twilio</div>
                <div className="text-xl font-bold italic">Meta</div>
                <div className="text-xl font-black tracking-widest">STRIPE</div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}