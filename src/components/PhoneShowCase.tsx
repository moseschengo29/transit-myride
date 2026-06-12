"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PhoneShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress across the 300vh track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- THE PHONE STEPPING TIMELINE ---
  const phoneY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.6, 0.7, 1],
    ["0%", "0%", "-33.333%", "-33.333%", "-66.666%", "-66.666%"]
  );

  // --- LEFT COLUMN NARRATIVES ---
  // We explicitly map the full 0-1 range for every item to guarantee no overlap.

  // Step 1: Active 0.0 to 0.20, fades out completely by 0.25, remains 0 forever
  const l1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.3, 1], [1, 1, 0, 0, 0]);
  const l1Y = useTransform(scrollYProgress,       [0, 0.2, 0.25, 0.3, 1], [0, 0, -40, -40, -40]);
  const l1Blur = useTransform(scrollYProgress,    [0, 0.2, 0.25, 0.3, 1], ["blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)", "blur(12px)"]);

  // Step 2: Hidden until 0.25, fades in by 0.30, fully visible, fades out by 0.60
  const l2Opacity = useTransform(scrollYProgress, [0, 0.25, 0.3, 0.55, 0.6, 1], [0, 0, 1, 1, 0, 0]);
  const l2Y = useTransform(scrollYProgress,       [0, 0.25, 0.3, 0.55, 0.6, 1], [40, 40, 0, 0, -40, -40]);
  const l2Blur = useTransform(scrollYProgress,    [0, 0.25, 0.3, 0.55, 0.6, 1], ["blur(12px)", "blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)"]);

  // Step 3: Hidden until 0.60, fades in by 0.65, stays visible to end
  const l3Opacity = useTransform(scrollYProgress, [0, 0.6, 0.65, 1], [0, 0, 1, 1]);
  const l3Y = useTransform(scrollYProgress,       [0, 0.6, 0.65, 1], [40, 40, 0, 0]);
  const l3Blur = useTransform(scrollYProgress,    [0, 0.6, 0.65, 1], ["blur(12px)", "blur(12px)", "blur(0px)", "blur(0px)"]);


  // --- RIGHT COLUMN NARRATIVES ---

  // Step 1 Right
  const r1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.3, 1], [1, 1, 0, 0, 0]);
  const r1Y = useTransform(scrollYProgress,       [0, 0.2, 0.25, 0.3, 1], [0, 0, -40, -40, -40]);
  const r1Blur = useTransform(scrollYProgress,    [0, 0.2, 0.25, 0.3, 1], ["blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)", "blur(12px)"]);

  // Step 2 Right
  const r2Opacity = useTransform(scrollYProgress, [0, 0.25, 0.3, 0.55, 0.6, 1], [0, 0, 1, 1, 0, 0]);
  const r2Y = useTransform(scrollYProgress,       [0, 0.25, 0.3, 0.55, 0.6, 1], [40, 40, 0, 0, -40, -40]);
  const r2Blur = useTransform(scrollYProgress,    [0, 0.25, 0.3, 0.55, 0.6, 1], ["blur(12px)", "blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)"]);

  // Step 3 Right
  const r3Opacity = useTransform(scrollYProgress, [0, 0.6, 0.65, 1], [0, 0, 1, 1]);
  const r3Y = useTransform(scrollYProgress,       [0, 0.6, 0.65, 1], [40, 40, 0, 0]);
  const r3Blur = useTransform(scrollYProgress,    [0, 0.6, 0.65, 1], ["blur(12px)", "blur(12px)", "blur(0px)", "blur(0px)"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full bg-[#F7F7F7]">
      
      {/* Sticky Viewport Core */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6 lg:px-12">
        
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between relative">
          
          {/* --- LEFT COLUMN: Primary Narrative (Actions) --- */}
          <div className="hidden lg:block w-[350px] relative h-[320px]">
            
            {/* Step 1 Left */}
            <motion.div
              style={{ opacity: l1Opacity, y: l1Y, filter: l1Blur }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-300 text-xs font-bold text-zinc-500 tabular-nums">01</span>
                <span className="text-xs font-bold tracking-widest uppercase text-[#00635D]">Live Routing</span>
              </div>
              <h3 className="text-4xl font-medium text-zinc-950 leading-[1.1] tracking-tight">Focus on driving.</h3>
              <p className="text-lg text-zinc-500 font-medium mt-4 leading-relaxed">
                Keep your hands on the wheel. The app handles the parents automatically so you are never distracted.
              </p>
            </motion.div>

            {/* Step 2 Left */}
            <motion.div
              style={{ opacity: l2Opacity, y: l2Y, filter: l2Blur }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none" 
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-300 text-xs font-bold text-zinc-500 tabular-nums">02</span>
                <span className="text-xs font-bold tracking-widest uppercase text-[#00635D]">Smart Triggers</span>
              </div>
              <h3 className="text-4xl font-medium text-zinc-950 leading-[1.1] tracking-tight">Automated alerts.</h3>
              <p className="text-lg text-zinc-500 font-medium mt-4 leading-relaxed">
                MyRide Transit triggers precise SMS and push notifications to guardians exactly as you approach.
              </p>
            </motion.div>

            {/* Step 3 Left */}
            <motion.div
              style={{ opacity: l3Opacity, y: l3Y, filter: l3Blur }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-300 text-xs font-bold text-zinc-500 tabular-nums">03</span>
                <span className="text-xs font-bold tracking-widest uppercase text-[#00635D]">Analytics</span>
              </div>
              <h3 className="text-4xl font-medium text-zinc-950 leading-[1.1] tracking-tight">End your day faster.</h3>
              <p className="text-lg text-zinc-500 font-medium mt-4 leading-relaxed">
                Instant daily reports, digital roll calls, and route analytics generated automatically when you park.
              </p>
            </motion.div>
          </div>

          {/* --- CENTER COLUMN: Phone Mockup Container --- */}
          <div className="relative z-10 shrink-0 mx-auto">
            <div className="w-[320px] h-[660px] bg-zinc-900 rounded-[3.2rem] p-3 shadow-2xl relative border border-zinc-800 ring-1 ring-white/10">
              <div className="absolute top-32 -left-[3px] w-[3px] h-12 bg-zinc-800 rounded-l-md" />
              <div className="absolute top-48 -left-[3px] w-[3px] h-12 bg-zinc-800 rounded-l-md" />
              <div className="absolute top-36 -right-[3px] w-[3px] h-16 bg-zinc-800 rounded-r-md" />
              
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative shadow-inner">
                {/* Dynamic Island Pin */}
                <div className="absolute top-2 inset-x-0 flex justify-center z-50">
                  <div className="w-28 h-[26px] bg-black rounded-full flex items-center justify-end px-3">
                    <div className="w-2 h-2 rounded-full bg-[#00635D]/40 shadow-[0_0_8px_#00635D]" />
                  </div>
                </div>
                
                {/* Status Bar */}
                <div className="absolute top-4 left-6 right-6 flex justify-between z-40 text-[11px] font-semibold text-zinc-900 mix-blend-difference">
                  <span className="tabular-nums">10:30</span>
                  <div className="flex gap-1.5 items-center">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21L2 6C4.8 3.5 8.2 2 12 2s7.2 1.5 10 4l-10 15z"/></svg>
                    <svg className="w-5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                  </div>
                </div>

                {/* Sliding Viewport Window */}
                <motion.div className="w-full h-[300%] flex flex-col" style={{ y: phoneY }}>
                  
                  {/* Internal View 1 */}
                  <div className="h-1/3 w-full bg-[#EFEFEF] relative flex flex-col">
                    <div className="absolute top-0 inset-x-0 h-28 bg-white/80 backdrop-blur-xl z-20 flex items-end px-5 pb-4 border-b border-zinc-200">
                      <h4 className="text-xl font-bold tracking-tight text-zinc-900">Current Route</h4>
                    </div>
                    <div className="flex-1 relative overflow-hidden pt-28">
                      <svg className="absolute inset-0 w-[150%] h-[150%] -left-10 -top-10 text-zinc-300" viewBox="0 0 100 100" fill="none">
                        <path d="M0 20 h100 M0 40 h100 M0 60 h100 M0 80 h100 M20 0 v100 M40 0 v100 M60 0 v100 M80 0 v100" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M10 90 Q 40 40, 80 10" stroke="#00635D" strokeWidth="3" strokeLinecap="round" className="opacity-40" />
                        <path d="M10 90 Q 40 40, 50 45" stroke="#00635D" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                        <div className="relative flex h-6 w-6 items-center justify-center">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00635D] opacity-40"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00635D] shadow-md border border-white"></span>
                        </div>
                      </div>
                      <div className="absolute bottom-5 left-4 right-4 bg-white p-4 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-zinc-100 flex items-center justify-between z-20">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-[#00635D] uppercase tracking-wider mb-0.5">Next Stop</span>
                          <span className="font-bold text-zinc-900 text-[15px] leading-tight">Nairobi Academy</span>
                          <span className="text-xs font-medium text-zinc-500 mt-0.5">0.8 km • 2 mins away</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#00635D]/10 flex items-center justify-center text-[#00635D]">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Internal View 2 */}
                  <div className="h-1/3 w-full bg-zinc-900 relative flex flex-col pt-32 px-4">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00635D]/20 to-zinc-950" />
                    <div className="relative z-10 flex flex-col gap-3">
                      <div className="text-white/50 text-xs font-medium text-center mb-2">Wednesday, 10:32 AM</div>
                      <div className="bg-white/90 backdrop-blur-xl p-4 rounded-[1.5rem] shadow-lg flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-[#00635D] rounded-md flex items-center justify-center shadow-sm">
                              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </div>
                            <span className="text-xs font-bold text-zinc-900">MyRide Transit</span>
                          </div>
                          <span className="text-[10px] font-medium text-zinc-500">now</span>
                        </div>
                        <div className="pl-7 flex flex-col">
                          <span className="text-sm font-bold text-zinc-900 leading-snug">Guardian Alert Sent</span>
                          <span className="text-xs text-zinc-600 leading-snug mt-0.5">Automated SMS delivered to Sarah&apos;s parents: &quot;Van is 2 mins away.&quot;</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Internal View 3 */}
                  <div className="h-1/3 w-full bg-white relative flex flex-col pt-16 px-5 pb-6">
                    <div className="flex items-center justify-between mb-6 mt-4">
                      <h4 className="text-2xl font-bold tracking-tight text-zinc-950">Daily Report</h4>
                      <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-zinc-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-zinc-50 border border-zinc-100 p-4 rounded-3xl flex flex-col justify-between h-32">
                        <div className="w-8 h-8 rounded-full bg-[#00635D]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#00635D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <div>
                          <div className="text-3xl font-bold tracking-tight text-zinc-900 tabular-nums">42</div>
                          <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Students</div>
                        </div>
                      </div>
                      <div className="bg-[#00635D] p-4 rounded-3xl flex flex-col justify-between h-32 text-white shadow-lg shadow-[#00635D]/20">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                        </div>
                        <div>
                          <div className="text-3xl font-bold tracking-tight text-white tabular-nums">100%</div>
                          <div className="text-[11px] font-semibold text-white/70 uppercase tracking-wider">Alerts Sent</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-24 bg-zinc-50 border border-zinc-100 rounded-3xl mt-auto overflow-hidden relative flex items-end">
                      <svg className="w-full h-16 text-[#00635D]/10" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M0 100 C 20 80, 40 90, 60 50 C 80 10, 90 20, 100 0 L 100 100 Z" />
                      </svg>
                      <svg className="absolute bottom-0 w-full h-16 text-[#00635D]" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M0 100 C 20 80, 40 90, 60 50 C 80 10, 90 20, 100 0" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 inset-x-0 flex justify-center z-50">
                  <div className="w-32 h-[5px] bg-zinc-950/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Benefit Narrative (Results) --- */}
          <div className="hidden lg:block w-[340px] relative h-[300px] text-right">
            
            {/* Step 1 Right */}
            <motion.div
              style={{ opacity: r1Opacity, y: r1Y, filter: r1Blur }}
              className="absolute inset-0 flex flex-col justify-center items-end pointer-events-none"
            >
              <div className="flex items-center justify-end gap-4 mb-5">
                <span className="text-xs font-bold tracking-widest uppercase text-[#00635D]">The Result</span>
              </div>
              <h3 className="text-4xl font-serif text-[#00635D] leading-[1.1]">Real-time accuracy.</h3>
              <p className="text-lg text-zinc-500 font-medium mt-4 leading-relaxed">
                Guardians see exactly where the van is on the map, instantly eliminating the &quot;where are you?&quot; texts.
              </p>
            </motion.div>

            {/* Step 2 Right */}
            <motion.div
              style={{ opacity: r2Opacity, y: r2Y, filter: r2Blur }}
              className="absolute inset-0 flex flex-col justify-center items-end pointer-events-none"
            >
              <div className="flex items-center justify-end gap-4 mb-5">
                <span className="text-xs font-bold tracking-widest uppercase text-[#00635D]">Zero Input</span>
              </div>
              <h3 className="text-4xl font-serif text-[#00635D] leading-[1.1]">Zero distractions.</h3>
              <p className="text-lg text-zinc-500 font-medium mt-4 leading-relaxed">
                You don&apos;t push a single button while driving. Background geo-fencing does all the heavy lifting.
              </p>
            </motion.div>

            {/* Step 3 Right */}
            <motion.div
              style={{ opacity: r3Opacity, y: r3Y, filter: r3Blur }}
              className="absolute inset-0 flex flex-col justify-center items-end pointer-events-none"
            >
              <div className="flex items-center justify-end gap-4 mb-5">
                <span className="text-xs font-bold tracking-widest uppercase text-[#00635D]">Compliance</span>
              </div>
              <h3 className="text-4xl font-serif text-[#00635D] leading-[1.1]">Export ready.</h3>
              <p className="text-lg text-zinc-500 font-medium mt-4 leading-relaxed">
                Share beautiful compliance reports and attendance records with your schools in one click.
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}