"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted] = useState(false);

  // Live Nairobi Time for the studio aesthetic
  const getNairobiTime = () =>
    new Date().toLocaleTimeString("en-US", {
      timeZone: "Africa/Nairobi",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  
  const [time, setTime] = useState(getNairobiTime);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getNairobiTime());
    }, 60000);
  
    return () => clearInterval(interval);
  }, []);

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Download", "Waitlist"],
    },
    {
      title: "Company",
      links: ["About Us", "Contact", "Careers", "Brand Kit"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];

  return (
    <footer className="relative w-full bg-zinc-950 text-white pt-32 pb-8 px-6 lg:px-12 overflow-hidden rounded-t-[3rem] mt-[-2rem] z-20">
      
      {/* Ambient Brand Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00635D]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col">
        
        {/* --- TOP SECTION: Massive Final CTA --- */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 border-b border-zinc-800 pb-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <h2 className="text-5xl md:text-7xl lg:text-[88px] font-medium tracking-tighter leading-[0.95] mb-6">
              Your route, <br />
              <span className="font-serif text-[#00635D] italic">simplified.</span>
            </h2>
            <p className="text-xl text-zinc-400 font-medium max-w-md mx-auto lg:mx-0">
              Join thousands of independent operators driving smarter with MyRide Transit.
            </p>
          </motion.div>

          {/* App Download Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
          >
            {/* iOS Button */}
            <button className="flex items-center justify-center sm:justify-start gap-4 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white group-hover:scale-110 transition-transform">
                <path d="M16.365 21.444c-1.282.88-2.61.85-3.864.01-1.3-.85-2.607-.822-3.926 0-1.272.802-2.528.875-3.795-.015C3.39 19.932.73 14.153 2.87 9.805c.803-1.636 2.062-2.73 3.65-2.81 1.258-.063 2.45.74 3.73.74 1.256 0 2.66-.91 4.103-.765 1.458.146 2.646.85 3.42 2.064-2.574 1.503-2.127 5.176.634 6.27-.63 1.96-1.574 3.99-2.042 6.14zM11.966 6.8c-.147-1.895 1.348-3.69 3.256-3.8.216 2.01-1.488 3.86-3.256 3.8z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold mb-0.5">Download on the</div>
                <div className="text-lg font-bold leading-none text-white">App Store</div>
              </div>
            </button>

            {/* Android Button */}
            <button className="flex items-center justify-center sm:justify-start gap-4 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white group-hover:scale-110 transition-transform">
                <path d="M3.13 2.064c-.4.283-.63.76-.63 1.408v17.056c0 .647.23 1.124.63 1.408l.05.04 8.783-8.783v-.386L3.18 2.023l-.05.04zm9.643 9.644l2.977 2.976 3.633-2.064c1.036-.587 1.036-1.547 0-2.135L15.75 8.42l-2.977 2.976-.002.312zM12.44 11.375L4.01 2.946c-.23-.23-.62-.23-.85 0L12.44 11.375zm0 1.25l-9.28 9.28c.23.23.62.23.85 0l8.43-8.43.002-.85z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold mb-0.5">Get it on</div>
                <div className="text-lg font-bold leading-none text-white">Google Play</div>
              </div>
            </button>
          </motion.div>
        </div>

        {/* --- MIDDLE SECTION: Link Grid --- */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 py-20 border-b border-zinc-800">
          
          {/* Brand & Socials */}
          <div className="flex flex-col gap-6 lg:max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#00635D] rounded-lg rounded-tr-none flex items-center justify-center shadow-lg" />
              <span className="text-2xl font-bold tracking-tight text-white">MyRide Transit</span>
            </div>
            <p className="text-zinc-400 font-medium text-sm leading-relaxed">
              Focus on the road. We handle the calls. The premier platform for independent transport providers.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <button key={social} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#00635D] hover:border-[#00635D] transition-all">
                  {/* Replace with actual social SVGs if desired. Using a generic dot for now */}
                  <span className="w-2 h-2 rounded-full bg-currentColor" />
                </button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-wrap gap-16 lg:gap-24">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-5">
                <h4 className="text-sm font-bold tracking-widest uppercase text-white">{section.title}</h4>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-zinc-400 font-medium hover:text-[#00635D] transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM SECTION: Copyright & Context --- */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-zinc-500">
          <p>© {new Date().getFullYear()} MyRide Transit. All rights reserved.</p>
          
          {/* Live Studio Time & Location Context */}
          {mounted && (
            <div className="flex items-center gap-2">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00635D] opacity-70"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00635D]"></span>
              </span>
              <span>Nairobi</span>
              <span className="tabular-nums text-zinc-400">{time}</span>
            </div>
          )}
        </div>

      </div>
    </footer>
  );
}