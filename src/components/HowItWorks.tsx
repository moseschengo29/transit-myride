"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const customEase = [0.16, 1, 0.3, 1] as const;

  // Track scroll progress to draw the "Route Line" down the middle
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const steps = [
    {
      step: "01",
      title: "Begin the session",
      description: "When you start your trip, simply tap 'Begin Session'. This instantly initializes background geofencing on your pre-set route. You focus on the road; we handle the rest.",
      visual: (
        <div className="w-full h-full bg-zinc-50/50 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center border border-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          {/* Abstract Map Grid */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          
          <div className="relative z-10 w-full max-w-[240px] flex flex-col items-center gap-8">
            {/* Animated Route Path */}
            <div className="w-full h-24 relative">
              <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
                <path d="M10 50 Q 50 10, 100 50 T 190 50" stroke="#E4E4E7" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 8" />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: customEase, delay: 0.2 }}
                  d="M10 50 Q 50 10, 100 50 T 190 50"
                  stroke="#00635D"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <motion.circle
                  initial={{ cx: 10, cy: 50 }}
                  animate={{ cx: [10, 100, 190], cy: [50, 50, 50] }}
                  transition={{ duration: 1.5, ease: customEase, delay: 0.2 }}
                  r="6"
                  fill="#00635D"
                  className="shadow-lg"
                />
              </svg>
            </div>
            
            {/* Clean iOS-style Toggle */}
            <div className="bg-white p-2 rounded-full w-40 flex items-center shadow-sm border border-zinc-200/60 relative">
              <span className="absolute left-5 text-[10px] font-bold text-zinc-400 tracking-widest">SESSION</span>
              <span className="absolute right-6 text-[10px] font-bold text-[#00635D] tracking-widest z-0">LIVE</span>
              <motion.div
                initial={{ x: 0, backgroundColor: "#E4E4E7" }}
                whileInView={{ x: 74, backgroundColor: "#00635D" }}
                // OPTIMIZATION: Removed heavy spring physics that triggered during scroll
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                style={{ willChange: "transform, background-color" }}
                className="w-8 h-8 rounded-full shadow-md flex items-center justify-center text-white relative z-10"
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </motion.div>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: "02",
      title: "Automated ETA Alerts",
      description: "As your van breaches the 1-kilometer geofence of a stop, the app automatically pushes exact ETA notifications to waiting guardians via SMS.",
      visual: (
        <div className="w-full h-full bg-white rounded-3xl p-6 relative overflow-hidden flex items-center justify-center border border-zinc-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          <div className="relative z-10 w-full max-w-[280px] flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: customEase }}
              style={{ willChange: "transform, opacity" }}
              className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100 flex gap-3 items-start relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00635D]" />
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">SMS Alert</p>
                  <span className="text-[10px] text-[#00635D] font-bold">Now</span>
                </div>
                <p className="text-sm text-zinc-900 font-medium leading-snug">Sarah&apos;s van is arriving. <span className="font-bold text-[#00635D]">ETA: 2 mins.</span></p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: customEase }}
              style={{ willChange: "transform, opacity" }}
              className="bg-white p-4 rounded-2xl border border-zinc-100 flex gap-3 items-start ml-8 relative overflow-hidden opacity-50"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-300" />
              <div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">MyRide Transit</p>
                <p className="text-sm text-zinc-500 font-medium leading-tight">Liam&apos;s van is approaching...</p>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      step: "03",
      title: "Digital Manifest",
      description: "Upon arrival, simply tap the student's avatar to mark them present. Ditch the clipboard and let guardians instantly receive a boarding confirmation.",
      visual: (
        <div className="w-full h-full bg-white rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-center border border-zinc-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Current Stop</h4>
            <span className="text-xs font-bold text-[#00635D] bg-emerald-50 px-2.5 py-1 rounded-full">3 Students</span>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { id: 1, name: "Jason D.", init: "JD" },
              { id: 2, name: "Sarah K.", init: "SK" },
              { id: 3, name: "Alex M.", init: "AM" }
            ].map((student, i) => (
              <div key={student.id} className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl border border-zinc-100/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 font-bold text-[10px] shadow-sm">
                    {student.init}
                  </div>
                  <span className="font-semibold text-sm text-zinc-900">{student.name}</span>
                </div>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  // OPTIMIZATION: Removed heavy spring physics
                  transition={{ duration: 0.3, delay: i * 0.15, ease: "easeOut" }}
                  style={{ willChange: "transform, opacity" }}
                  className="w-6 h-6 bg-[#00635D] text-white rounded-full flex items-center justify-center shadow-sm"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10"/>
                  </svg>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      step: "04",
      title: "Instant Analytics",
      description: "When the route ends, a detailed daily report summarizing all alerts, pick-ups, and timings is generated automatically. Export it to schools in one click.",
      visual: (
        <div className="w-full h-full bg-white rounded-3xl p-8 relative overflow-hidden flex flex-col border border-zinc-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
          <div className="flex items-start justify-between mb-8 relative z-10">
            <div>
              <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1">Weekly Efficiency</div>
              <div className="text-4xl font-semibold text-zinc-950 tabular-nums tracking-tight">98.4%</div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
              <svg className="w-3 h-3 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
              <span className="text-[10px] font-bold text-emerald-700">2.1%</span>
            </div>
          </div>
          
          {/* Animated Line Chart */}
          <div className="mt-auto h-32 w-full relative">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00635D" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#00635D" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                d="M 0 50 C 20 40, 30 45, 50 25 C 70 5, 80 15, 100 0 L 100 50 L 0 50 Z"
                fill="url(#chartGradient)"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: customEase, delay: 0.2 }}
                d="M 0 50 C 20 40, 30 45, 50 25 C 70 5, 80 15, 100 0"
                fill="none"
                stroke="#00635D"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <motion.circle
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                // OPTIMIZATION: Removed heavy spring physics
                transition={{ duration: 0.3, delay: 1.5, ease: "easeOut" }}
                cx="100" cy="0" r="3" fill="#00635D" stroke="white" strokeWidth="1.5"
                className="shadow-sm"
              />
            </svg>
          </div>
        </div>
      ),
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-24 bg-[#FAFAFC] relative overflow-hidden border-t border-zinc-100">
      
      <div className="max-w-3xl mx-auto text-center mb-24 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: customEase }}
          style={{ willChange: "transform, opacity" }} // Hardware Acceleration
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-950 mb-6 leading-tight">
            The road to peace of mind.
          </h2>
          <p className="text-lg text-zinc-500 font-medium max-w-xl mx-auto leading-relaxed">
            We transformed complex logistics into four simple steps. You focus on driving, the platform handles the parents.
          </p>
        </motion.div>
      </div>

      {/* --- SCROLLYTELLING TIMELINE --- */}
      <div ref={containerRef} className="relative max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Background Track Line */}
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 md:-translate-x-1/2 rounded-full" />
        
        {/* Animated Fill Line */}
        {/* PERFORMANCE OPTIMIZATION: Crucial willChange tag. Scrolling scaleY without GPU acceleration forces CPU repaints */}
        <motion.div
          style={{ 
            scaleY: scrollYProgress, 
            transformOrigin: "top", 
            willChange: "transform" 
          }}
          className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#00635D] md:-translate-x-1/2 z-10 rounded-full"
        />

        {/* The Steps */}
        <div className="flex flex-col gap-24 md:gap-32 relative z-20">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.step} className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Center Node (Number) */}
                <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                  <motion.div
                    initial={{ scale: 0, backgroundColor: "#ffffff", borderColor: "#E4E4E7", color: "#A1A1AA" }}
                    whileInView={{ scale: 1, backgroundColor: "#00635D", borderColor: "#004e49", color: "#ffffff" }}
                    viewport={{ margin: "-200px" }}
                    transition={{ duration: 0.4, ease: customEase }}
                    style={{ willChange: "transform, background-color" }} // Hardware Acceleration
                    className="w-12 h-12 rounded-full border-[3px] flex items-center justify-center font-bold text-sm shadow-md"
                  >
                    {step.step}
                  </motion.div>
                </div>

                {/* Left/Right Text Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center pl-20 pr-6 md:px-16 lg:px-24 mb-10 md:mb-0">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: customEase }}
                    style={{ willChange: "transform, opacity" }} // Hardware Acceleration
                    className={`flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}
                  >
                    <h3 className="text-2xl md:text-3xl lg:text-[32px] font-semibold tracking-tight text-zinc-900 mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-zinc-500 font-medium leading-relaxed max-w-[420px]">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Left/Right Interactive Visual Container */}
                <div className="w-full md:w-1/2 flex justify-center pl-20 pr-6 md:px-16 lg:px-24">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
                    style={{ willChange: "transform, opacity" }} // Hardware Acceleration
                    className="w-full max-w-[400px] h-[320px] lg:h-[360px]"
                  >
                    {step.visual}
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}