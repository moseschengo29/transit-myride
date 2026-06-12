"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Activate the Route",
      description: "When you start your day, tap 'Go Live'. This immediately initializes background geofencing on your pre-set route.",
      // Interactive Visual: A glowing map interface with a toggle switch
      visual: (
        <div className="w-full h-full bg-zinc-900 rounded-[2rem] p-8 relative overflow-hidden flex flex-col items-center justify-center border border-zinc-800 shadow-2xl">
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-20 h-20 bg-[#00635D]/20 rounded-full flex items-center justify-center relative"
            >
              <div className="absolute inset-0 rounded-full animate-ping border border-[#00635D]/50" />
              <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </motion.div>
            
            <div className="bg-zinc-800/80 backdrop-blur-md p-2 rounded-full w-40 flex items-center justify-end shadow-inner border border-zinc-700">
              <motion.div 
                initial={{ x: -80, backgroundColor: "#52525B" }}
                whileInView={{ x: 0, backgroundColor: "#34D399" }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
                className="w-10 h-10 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.4)] flex items-center justify-center text-zinc-900"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5l10 -10"/></svg>
              </motion.div>
            </div>
            <div className="text-emerald-400 text-sm font-bold tracking-widest uppercase">Session Started</div>
          </div>
        </div>
      )
    },
    {
      step: "02",
      title: "Automated Alerts",
      description: "As your van breaches the 1-kilometer geofence of a stop, the app automatically pushes notifications to waiting guardians.",
      // Interactive Visual: Radar ping triggering an SMS bubble
      visual: (
        <div className="w-full h-full bg-[#00635D]/5 rounded-[2rem] p-8 relative overflow-hidden flex items-center justify-center border border-[#00635D]/10">
          {/* Radar Rings */}
          <div className="absolute w-64 h-64 border border-[#00635D]/20 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
          <div className="absolute w-32 h-32 border border-[#00635D]/40 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]" />
          
          <div className="relative z-10 flex flex-col gap-3 w-full max-w-xs">
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-4 rounded-2xl rounded-bl-none shadow-lg border border-zinc-100 flex gap-3 items-start"
            >
              <div className="w-8 h-8 rounded-full bg-[#00635D] shrink-0 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 mb-0.5">MyRide Transit</p>
                <p className="text-sm text-zinc-600 font-medium leading-tight">Sarah&apos;s van is approaching. ETA: 2 mins.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="bg-white p-4 rounded-2xl rounded-bl-none shadow-lg border border-zinc-100 flex gap-3 items-start ml-8 opacity-80"
            >
              <div className="w-8 h-8 rounded-full bg-[#00635D] shrink-0 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 mb-0.5">MyRide Transit</p>
                <p className="text-sm text-zinc-600 font-medium leading-tight">Liam&apos;s van is approaching. ETA: 4 mins.</p>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      step: "03",
      title: "Digital Roll Call",
      description: "Upon arrival, tap the student's avatar to mark them present. Guardians instantly receive a boarding confirmation.",
      // Interactive Visual: Checklist with auto-checking items
      visual: (
        <div className="w-full h-full bg-white rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-center gap-3 border border-zinc-200 shadow-sm">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-bold text-xs shadow-sm">
                  {i === 1 ? 'JD' : i === 2 ? 'SK' : 'AM'}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="w-24 h-2.5 bg-zinc-300 rounded-full" />
                  <div className="w-16 h-2 bg-zinc-200 rounded-full" />
                </div>
              </div>
              <motion.div 
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: i * 0.3, type: "spring" }}
                className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5l10 -10"/></svg>
              </motion.div>
            </div>
          ))}
        </div>
      )
    },
    {
      step: "04",
      title: "Daily Report Ready",
      description: "When the route ends, a detailed daily report summarizing all alerts, pick-ups, and timings is generated automatically.",
      // Interactive Visual: Animated bar chart
      visual: (
        <div className="w-full h-full bg-zinc-950 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-end border border-zinc-800 shadow-2xl">
          <div className="absolute top-8 left-8 text-white">
            <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Route Efficiency</div>
            <div className="text-4xl font-bold tabular-nums">98.4%</div>
          </div>
          
          <div className="flex items-end justify-between gap-3 h-40 mt-12 w-full">
            {[40, 60, 45, 80, 55, 90, 100].map((height, i) => (
              <div key={i} className="w-full flex justify-center">
                <motion.div 
                  initial={{ height: "0%" }}
                  whileInView={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full max-w-[2rem] rounded-t-lg ${i === 6 ? 'bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]' : 'bg-[#00635D]'}`}
                />
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full py-32 bg-[#F7F7F7] relative flex flex-col items-center px-6 lg:px-12">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-950 mb-6">
            The road to peace of mind 
          </h2>
          <p className="text-lg text-zinc-500 font-medium max-w-xl mx-auto">
            We transformed complex logistics into four simple steps. You focus on the road, the app handles the parents.
          </p>
        </motion.div>
      </div>

      {/* --- STICKY STACKING CARDS CONTAINER --- */}
      <div className="w-full max-w-6xl mx-auto relative pb-[10vh]">
        {steps.map((step, index) => {
          // CSS Magic: Calculate the top offset for each card so they stack perfectly
          const topOffset = `calc(15vh + ${index * 2.5}rem)`;
          
          return (
            <div 
              key={index}
              className="sticky w-full mb-12 lg:mb-24 last:mb-0"
              style={{ top: topOffset }}
            >
              <div className="w-full bg-white rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-zinc-200/60 p-8 lg:p-12 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
                
                {/* Left Side: Text Narrative */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center text-xl font-bold text-zinc-400 tabular-nums shadow-inner">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-950 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Right Side: Animated Micro-Interaction */}
                <div className="w-full lg:w-1/2 h-[320px] rounded-[2rem] bg-zinc-50 border border-zinc-100/50 p-2">
                  {step.visual}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}