"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// The review data
const testimonials = [
  {
    name: "David O.",
    role: "Independent Operator",
    route: "Kilimani Route",
    content: "I used to get 15 texts every morning asking 'Where are you?'. Now, my phone is completely silent. It is absolute magic.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Fleet Owner",
    route: "Westlands & Surrounds",
    content: "The automated daily reports saved me 3 hours of paperwork a week. Parents love the transparency, and my drivers love the zero-distraction mode.",
    rating: 5,
  },
  {
    name: "James M.",
    role: "School Transport Driver",
    route: "Nairobi South",
    content: "Geo-fencing does all the work. I don't even have to look at the app once the route starts. The guardians are always outside waiting when I pull up.",
    rating: 5,
  },
  {
    name: "Grace W.",
    role: "Independent Operator",
    route: "Lavington Area",
    content: "Upgrading to MyRide Transit is the best investment I've made for my business. I've actually gained more clients because parents trust the live tracking.",
    rating: 5,
  },
  {
    name: "Peter N.",
    role: "Van Owner",
    route: "Karen District",
    content: "No more clipboard roll calls. The digital manifest is so fast, and sending that 'Boarding Confirmed' alert gives everyone immediate peace of mind.",
    rating: 5,
  },
];

// Helper to render the stars
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-500" : "text-zinc-200"}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Reusable Testimonial Card
function TestimonialCard({ data }: { data: typeof testimonials[0] }) {
  return (
    <div className="w-[350px] md:w-[450px] shrink-0 bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,99,93,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-grab active:cursor-grabbing flex flex-col justify-between h-full group">
      <div>
        <StarRating rating={data.rating} />
        <p className="text-lg md:text-xl text-zinc-950 font-medium leading-snug tracking-tight">
        &quot;{data.content}&quot;
        </p>
      </div>
      
      <div className="mt-8 flex items-center gap-4 border-t border-zinc-100 pt-6">
        <div className="w-12 h-12 rounded-full bg-[#EAF2F1] text-[#00635D] flex items-center justify-center font-bold text-lg border border-[#00635D]/10 group-hover:bg-[#00635D] group-hover:text-white transition-colors duration-300">
          {data.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-zinc-950 text-sm">{data.name}</h4>
          <p className="text-xs font-semibold text-zinc-500">{data.role} • <span className="font-normal text-zinc-400">{data.route}</span></p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [isHoveredTop, setIsHoveredTop] = useState(false);
  const [isHoveredBottom, setIsHoveredBottom] = useState(false);

  // We duplicate the array so the marquee loops seamlessly
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full py-32 bg-[#F7F7F7] relative overflow-hidden flex flex-col items-center">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
       
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-950 mb-6">
            Don&apos;t just take our word for it 
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container with Edge Masks */}
      <div className="relative w-full flex flex-col gap-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pb-10">
        
        {/* TOP ROW: Scrolls Left */}
        <div 
          className="flex w-fit"
          onMouseEnter={() => setIsHoveredTop(true)}
          onMouseLeave={() => setIsHoveredTop(false)}
        >
          <motion.div
            animate={{ x: isHoveredTop ? "0%" : "-50%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            // Style applied when paused vs playing
            style={{ x: "0%" }}
            className={`flex gap-8 px-4 ${isHoveredTop ? "[animation-play-state:paused]" : ""}`}
          >
            {doubledTestimonials.map((item, idx) => (
              <TestimonialCard key={`top-${idx}`} data={item} />
            ))}
          </motion.div>
        </div>

        {/* BOTTOM ROW: Scrolls Right */}
        <div 
          className="flex w-fit ml-[-500px]" // Offset so the rows don't look perfectly aligned
          onMouseEnter={() => setIsHoveredBottom(true)}
          onMouseLeave={() => setIsHoveredBottom(false)}
        >
          <motion.div
            animate={{ x: isHoveredBottom ? "0%" : "50%" }}
            initial={{ x: "0%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45, // Slightly different speed creates a parallax feel
                ease: "linear",
              },
            }}
            className={`flex gap-8 px-4`}
          >
            {/* Reverse the array for the bottom row so different cards show */}
            {[...doubledTestimonials].reverse().map((item, idx) => (
              <TestimonialCard key={`bottom-${idx}`} data={item} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}