"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

// Moved outside the component so it doesn't get recreated on every render
const getNairobiTime = () =>
  new Date().toLocaleTimeString("en-US", {
    timeZone: "Africa/Nairobi",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

export default function Footer() {
  // 1. Initialize the state with the time immediately (No empty string needed)
  const [time, setTime] = useState(getNairobiTime);

  useEffect(() => {
    // 2. The effect is NOW ONLY used for the interval. No synchronous setState!
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
      
      {/* Radial gradient replaces expensive blur */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B4C2E]/20 via-zinc-950/0 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col">
        
        {/* --- TOP SECTION: Massive Final CTA --- */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 border-b border-zinc-800 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="text-center lg:text-left"
          >
            <h2 className="text-5xl md:text-7xl lg:text-[88px] font-medium tracking-tighter leading-[0.95] mb-6">
              Your route, <br />
              <span className="font-serif text-[#1B4C2E] italic">simplified.</span>
            </h2>
            <p className="text-xl text-zinc-400 font-medium max-w-md mx-auto lg:mx-0">
              Join thousands of independent operators driving smarter with MyRide Transit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
          >
            <button className="flex items-center justify-center sm:justify-start gap-4 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
              <FaApple className="text-2xl" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold mb-0.5">Download on the</div>
                <div className="text-lg font-bold leading-none text-white">App Store</div>
              </div>
            </button>

            <button className="flex items-center justify-center sm:justify-start gap-4 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
              <IoLogoGooglePlaystore className="text-2xl" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold mb-0.5">Get it on</div>
                <div className="text-lg font-bold leading-none text-white">Google Play</div>
              </div>
            </button>
          </motion.div>
        </div>

        {/* --- MIDDLE SECTION: Link Grid --- */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 py-20 border-b border-zinc-800">
          
          <div className="flex flex-col gap-6 lg:max-w-xs">
            <div className="flex items-center gap-3">
              <Image
                src="/Transit icon.png"
                alt="My Ride Logo"
                width={350}
                height={150}
                unoptimized
                className="h-9 md:h-6 w-auto"
                priority
              />
              <span className="text-2xl font-bold tracking-tight text-white">MyRide Transit</span>
            </div>
            <p className="text-zinc-400 font-medium text-sm leading-relaxed">
              Focus on the road. We handle the calls. The premier platform for independent transport providers.
            </p>
            <div className="flex gap-4 mt-2">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <button key={social} aria-label={social} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1B4C2E] hover:border-[#1B4C2E] transition-all">
                  <span className="w-2 h-2 rounded-full bg-currentColor" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-16 lg:gap-24">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-5">
                <h4 className="text-sm font-bold tracking-widest uppercase text-white">{section.title}</h4>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-zinc-400 font-medium hover:text-[#1B4C2E] transition-colors text-sm">
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
          
          {/* 3. Added suppressHydrationWarning to silence Next.js server/client mismatch complaints */}
          <div className="flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B4C2E] opacity-70"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#1B4C2E]"></span>
            </span>
            <span>Nairobi</span>
            <span suppressHydrationWarning className="tabular-nums text-zinc-400">{time}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}