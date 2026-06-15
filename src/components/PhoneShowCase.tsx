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
  const l1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.3, 1], [1, 1, 0, 0, 0]);
  const l1Y = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.3, 1], [0, 0, -40, -40, -40]);
  const l1Blur = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.3, 1], ["blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)", "blur(12px)"]);

  const l2Opacity = useTransform(scrollYProgress, [0, 0.25, 0.3, 0.55, 0.6, 1], [0, 0, 1, 1, 0, 0]);
  const l2Y = useTransform(scrollYProgress, [0, 0.25, 0.3, 0.55, 0.6, 1], [40, 40, 0, 0, -40, -40]);
  const l2Blur = useTransform(scrollYProgress, [0, 0.25, 0.3, 0.55, 0.6, 1], ["blur(12px)", "blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)"]);

  const l3Opacity = useTransform(scrollYProgress, [0, 0.6, 0.65, 1], [0, 0, 1, 1]);
  const l3Y = useTransform(scrollYProgress, [0, 0.6, 0.65, 1], [40, 40, 0, 0]);
  const l3Blur = useTransform(scrollYProgress, [0, 0.6, 0.65, 1], ["blur(12px)", "blur(12px)", "blur(0px)", "blur(0px)"]);

  // --- RIGHT COLUMN NARRATIVES ---
  const r1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.3, 1], [1, 1, 0, 0, 0]);
  const r1Y = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.3, 1], [0, 0, -40, -40, -40]);
  const r1Blur = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.3, 1], ["blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)", "blur(12px)"]);

  const r2Opacity = useTransform(scrollYProgress, [0, 0.25, 0.3, 0.55, 0.6, 1], [0, 0, 1, 1, 0, 0]);
  const r2Y = useTransform(scrollYProgress, [0, 0.25, 0.3, 0.55, 0.6, 1], [40, 40, 0, 0, -40, -40]);
  const r2Blur = useTransform(scrollYProgress, [0, 0.25, 0.3, 0.55, 0.6, 1], ["blur(12px)", "blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)"]);

  const r3Opacity = useTransform(scrollYProgress, [0, 0.6, 0.65, 1], [0, 0, 1, 1]);
  const r3Y = useTransform(scrollYProgress, [0, 0.6, 0.65, 1], [40, 40, 0, 0]);
  const r3Blur = useTransform(scrollYProgress, [0, 0.6, 0.65, 1], ["blur(12px)", "blur(12px)", "blur(0px)", "blur(0px)"]);

  return (
    <section id="showcase" ref={containerRef} className="relative h-[300vh] w-full bg-[#F7F7F7]">
      {/* Sticky Viewport Core */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between relative">
          
          {/* --- LEFT COLUMN: Primary Narrative (Actions) --- */}
          <div className="hidden lg:block w-[350px] relative h-[320px]">
            {/* Step 1 Left */}
            <motion.div style={{ opacity: l1Opacity, y: l1Y, filter: l1Blur }} className="absolute inset-0 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-300 text-xs font-bold text-zinc-500 tabular-nums">01</span>
                <span className="text-xs font-bold tracking-widest uppercase text-[#0088AA]">Live Routing</span>
              </div>
              <h3 className="text-4xl font-medium text-zinc-950 leading-[1.1] tracking-tight">Focus on driving.</h3>
              <p className="text-lg text-zinc-500 font-medium mt-4 leading-relaxed">
                Keep your hands on the wheel. The app handles the parents automatically so you are never distracted.
              </p>
            </motion.div>

            {/* Step 2 Left */}
            <motion.div style={{ opacity: l2Opacity, y: l2Y, filter: l2Blur }} className="absolute inset-0 flex flex-col justify-center pointer-events-none">
              <div className="flex items-center gap-4 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-300 text-xs font-bold text-zinc-500 tabular-nums">02</span>
                <span className="text-xs font-bold tracking-widest uppercase text-[#0088AA]">Smart Triggers</span>
              </div>
              <h3 className="text-4xl font-medium text-zinc-950 leading-[1.1] tracking-tight">Automated alerts.</h3>
              <p className="text-lg text-zinc-500 font-medium mt-4 leading-relaxed">
                MyRide Transit triggers precise SMS and push notifications to guardians exactly as you approach.
              </p>
            </motion.div>

            {/* Step 3 Left */}
            <motion.div style={{ opacity: l3Opacity, y: l3Y, filter: l3Blur }} className="absolute inset-0 flex flex-col justify-center pointer-events-none">
              <div className="flex items-center gap-4 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-300 text-xs font-bold text-zinc-500 tabular-nums">03</span>
                <span className="text-xs font-bold tracking-widest uppercase text-[#0088AA]">Analytics</span>
              </div>
              <h3 className="text-4xl font-medium text-zinc-950 leading-[1.1] tracking-tight">End your day faster.</h3>
              <p className="text-lg text-zinc-500 font-medium mt-4 leading-relaxed">
                Instant daily reports, digital roll calls, and route analytics generated automatically when you park.
              </p>
            </motion.div>
          </div>

          {/* --- CENTER COLUMN: Phone Mockup Container --- */}
          <div className="relative z-10 shrink-0 mx-auto">
            {/* The Phone Hardware Frame */}
            <div className="w-[320px] h-[660px] bg-zinc-950 rounded-[3rem] p-2.5 shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_30px_60px_rgba(0,0,0,0.4)] relative border-[4px] border-zinc-800 ring-1 ring-white/10">
              {/* Hardware Buttons */}
              <div className="absolute top-32 -left-[6px] w-[3px] h-8 bg-zinc-700 rounded-l-md" />
              <div className="absolute top-44 -left-[6px] w-[3px] h-12 bg-zinc-700 rounded-l-md" />
              <div className="absolute top-60 -left-[6px] w-[3px] h-12 bg-zinc-700 rounded-l-md" />
              <div className="absolute top-48 -right-[6px] w-[3px] h-16 bg-zinc-700 rounded-r-md" />
              
              <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden relative shadow-[inset_0_0_10px_rgba(0,0,0,0.1)]">
                
                {/* Dynamic Island */}
                <div className="absolute top-3 inset-x-0 flex justify-center z-50">
                  <div className="w-28 h-[28px] bg-black rounded-full flex items-center justify-between px-3 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0088AA]/40 shadow-[0_0_8px_#0088AA]" />
                  </div>
                </div>
                
                {/* Status Bar */}
                <div className="absolute top-4 left-7 right-6 flex justify-between z-40 text-[12px] font-semibold text-zinc-900 mix-blend-difference">
                  <span className="tabular-nums tracking-tight">10:30</span>
                  <div className="flex gap-1.5 items-center opacity-90">
                    <svg className="w-4 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21L2 6C4.8 3.5 8.2 2 12 2s7.2 1.5 10 4l-10 15z"/></svg>
                    <svg className="w-5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                  </div>
                </div>

                {/* Sliding Viewport Window */}
                <motion.div className="w-full h-[300%] flex flex-col" style={{ y: phoneY }}>
                  
                  {/* --- INTERNAL VIEW 1: Realistic Navigation Map --- */}
                  <div className="h-1/3 w-full bg-[#E5E3DF] relative flex flex-col overflow-hidden">
                    {/* Map Texture / Roads */}
                    <div className="absolute inset-0 z-0 opacity-50">
                      <svg className="w-[150%] h-[150%] -top-10 -left-10" viewBox="0 0 100 100" fill="none">
                        <path d="M-10 40 L40 60 L120 20" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30 110 L50 40 L100 50" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 80 Q 40 40, 80 10" stroke="#0088AA" strokeWidth="3.5" strokeLinecap="round" />
                        <path d="M10 80 Q 40 40, 48 45" stroke="#0088AA" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="1 4" className="opacity-40" />
                      </svg>
                    </div>

                    {/* Navigation Puck */}
                    <div className="absolute top-[48%] left-[55%] -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#0088AA] rounded-full opacity-30 animate-ping" />
                        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center transform -rotate-12">
                          <div className="w-4 h-4 bg-[#0088AA] rounded-full border-2 border-white shadow-inner" />
                        </div>
                      </div>
                    </div>

                    {/* Top Floating Panel */}
                    <div className="absolute top-12 inset-x-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 p-4 z-20 flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-full bg-[#0088AA]/10 flex items-center justify-center text-[#0088AA]">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-zinc-900 font-bold text-lg leading-none">Nairobi Academy</span>
                        <span className="text-zinc-500 font-medium text-sm mt-1">1.2 km • 4 mins</span>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="absolute bottom-4 inset-x-4 bg-zinc-900 rounded-[1.5rem] p-2 flex items-center justify-between z-20 shadow-xl">
                      <div className="flex items-center gap-3 pl-3">
                        <div className="w-2 h-2 rounded-full bg-[#FBA51C] shadow-[0_0_8px_#FBA51C] animate-pulse" />
                        <span className="text-white font-semibold text-sm">Live Routing</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* --- INTERNAL VIEW 2: Realistic Notifications (Lock Screen Style) --- */}
                  <div className="h-1/3 w-full bg-zinc-950 relative flex flex-col pt-24 px-4 overflow-hidden">
                    {/* Soft blurred wallpaper background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0088AA]/30 to-zinc-950 z-0" />
                    
                    <div className="relative z-10 flex flex-col gap-3 w-full">
                      <div className="text-white/40 text-[11px] font-medium text-center mb-1">Wednesday, October 14</div>
                      
                      {/* iOS Style Notification 1 */}
                      <div className="w-full bg-white/10 backdrop-blur-2xl p-3.5 rounded-[1.25rem] shadow-lg border border-white/10 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 bg-[#0088AA] rounded flex items-center justify-center shadow-sm">
                              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </div>
                            <span className="text-[11px] font-medium text-white/70 tracking-wide">MYRIDE TRANSIT</span>
                          </div>
                          <span className="text-[11px] font-medium text-white/40">now</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-white leading-tight">Guardian Alert Sent</span>
                          <span className="text-sm text-white/80 leading-tight mt-0.5">Automated SMS delivered to Sarah&apos;s parents: &quot;Sarah has arrived at the destination&quot;</span>
                        </div>
                      </div>

                      {/* iOS Style Notification 2 */}
                      <div className="w-full bg-white/10 backdrop-blur-2xl p-3.5 rounded-[1.25rem] shadow-lg border border-white/10 flex flex-col gap-2 opacity-60">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 bg-[#0088AA] rounded flex items-center justify-center shadow-sm">
                              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </div>
                            <span className="text-[11px] font-medium text-white/70 tracking-wide">MYRIDE TRANSIT</span>
                          </div>
                          <span className="text-[11px] font-medium text-white/40">1m ago</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-white leading-tight">Stop Approaching</span>
                          <span className="text-sm text-white/80 leading-tight mt-0.5">Entering geofence for Kilimani Pick-up Point B.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* --- INTERNAL VIEW 3: Polished SaaS Dashboard --- */}
                  <div className="h-1/3 w-full bg-white relative flex flex-col pt-14 px-5 pb-6">
                    <div className="flex items-center justify-between mb-5 mt-2">
                      <h4 className="text-xl font-bold tracking-tight text-zinc-900">Daily Summary</h4>
                      <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {/* Stat Card 1 */}
                      <div className="bg-zinc-50 border border-zinc-100 p-3.5 rounded-2xl flex flex-col justify-between h-[100px] shadow-sm">
                        <div className="w-7 h-7 rounded-full bg-[#0088AA]/10 flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-[#0088AA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <div>
                          <div className="text-2xl font-bold tracking-tight text-zinc-900 tabular-nums leading-none">42</div>
                          <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mt-1">Students</div>
                        </div>
                      </div>
                      
                      {/* Stat Card 2 */}
                      <div className="bg-gradient-to-br from-[#0088AA] to-[#006680] p-3.5 rounded-2xl flex flex-col justify-between h-[100px] text-white shadow-lg shadow-[#0088AA]/20 border border-[#0088AA]/50">
                        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                        </div>
                        <div>
                          <div className="text-2xl font-bold tracking-tight text-white tabular-nums leading-none">100%</div>
                          <div className="text-[10px] font-bold text-white/80 uppercase tracking-wider mt-1">Alerts Sent</div>
                        </div>
                      </div>
                    </div>

                    {/* Premium Smooth Area Chart */}
                    <div className="w-full h-[110px] bg-white border border-zinc-100 rounded-2xl overflow-hidden relative flex flex-col shadow-sm">
                      <div className="absolute top-3 left-3 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Efficiency</div>
                      <div className="absolute top-2 right-3 text-sm font-bold text-zinc-900">98.4%</div>
                      
                      <div className="absolute bottom-0 inset-x-0 h-16">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
                          <defs>
                            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#0088AA" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#0088AA" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {/* Smooth Bezier Curve Chart */}
                          <path d="M0 50 L0 30 C 20 10, 40 40, 60 20 C 80 0, 90 15, 100 5 L 100 50 Z" fill="url(#chartFill)" />
                          <path d="M0 30 C 20 10, 40 40, 60 20 C 80 0, 90 15, 100 5" fill="none" stroke="#0088AA" strokeWidth="2" strokeLinecap="round" />
                          <circle cx="100" cy="5" r="2.5" fill="#FBA51C" stroke="white" strokeWidth="1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 inset-x-0 flex justify-center z-50">
                  <div className="w-32 h-[4px] bg-zinc-950/30 mix-blend-difference rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Benefit Narrative (Results) --- */}
          <div className="hidden lg:block w-[340px] relative h-[300px] text-right">
            {/* Step 1 Right */}
            <motion.div style={{ opacity: r1Opacity, y: r1Y, filter: r1Blur }} className="absolute inset-0 flex flex-col justify-center items-end pointer-events-none">
              <div className="flex items-center justify-end gap-4 mb-5">
                <span className="text-xs font-bold tracking-widest uppercase text-[#0088AA]">The Result</span>
              </div>
              <h3 className="text-4xl font-serif text-zinc-900 leading-[1.1]">Real-time accuracy.</h3>
              <p className="text-lg text-zinc-500 font-medium mt-4 leading-relaxed">
                Guardians see exactly where the van is on the map, instantly eliminating the &quot;where are you?&quot; texts.
              </p>
            </motion.div>

            {/* Step 2 Right */}
            <motion.div style={{ opacity: r2Opacity, y: r2Y, filter: r2Blur }} className="absolute inset-0 flex flex-col justify-center items-end pointer-events-none">
              <div className="flex items-center justify-end gap-4 mb-5">
                <span className="text-xs font-bold tracking-widest uppercase text-[#0088AA]">Zero Input</span>
              </div>
              <h3 className="text-4xl font-serif text-zinc-900 leading-[1.1]">Zero distractions.</h3>
              <p className="text-lg text-zinc-500 font-medium mt-4 leading-relaxed">
                You don&apos;t push a single button while driving. Background geo-fencing does all the heavy lifting.
              </p>
            </motion.div>

            {/* Step 3 Right */}
            <motion.div style={{ opacity: r3Opacity, y: r3Y, filter: r3Blur }} className="absolute inset-0 flex flex-col justify-center items-end pointer-events-none">
              <div className="flex items-center justify-end gap-4 mb-5">
                <span className="text-xs font-bold tracking-widest uppercase text-[#0088AA]">Compliance</span>
              </div>
              <h3 className="text-4xl font-serif text-zinc-900 leading-[1.1]">Export ready.</h3>
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