"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// --- DATA ---
const testimonials = [
  {
    id: "1",
    name: "David O.",
    role: "Independent Operator",
    route: "Kilimani Route",
    content: "I used to get 15 texts every morning asking 'Where are you?'. Now, my phone is completely silent. It is absolute magic.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah K.",
    role: "Fleet Owner",
    route: "Westlands & Surrounds",
    content: "The automated daily reports saved me 3 hours of paperwork a week. Parents love transparency, drivers love zero-distraction mode.",
    rating: 5,
  },
  {
    id: "3",
    name: "James M.",
    role: "Transport Driver",
    route: "Nairobi South",
    content: "Geo-fencing does all the work. I don't look at the app once the route starts. Guardians are waiting when I pull up.",
    rating: 5,
  },
  {
    id: "4",
    name: "Grace W.",
    role: "Independent Operator",
    route: "Lavington Area",
    content: "Upgrading to MyRide Transit is the best investment I've made. Parents trust the live tracking, gaining me more clients.",
    rating: 5,
  },
];

// --- ICONS ---
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`w-6 h-6 ${filled ? "text-amber-400" : "text-zinc-200"}`} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const VerifiedBadge = () => (
  <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z" />
  </svg>
);

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
    filter: "blur(4px)",
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 150 : -150,
    opacity: 0,
    filter: "blur(4px)",
    scale: 0.9,
  }),
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false); // NEW: Track hover state

  // Wrap around index to create an infinite loop
  const activeIndex = Math.abs(page % testimonials.length);
  const activeTestimonial = testimonials[activeIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // NEW: Auto-play logic
  useEffect(() => {
    // If the user is hovering over the component, do not set the interval
    if (isHovered) return;

    // Advance the slide every 5 seconds (5000ms)
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    // Cleanup the interval when the component unmounts or dependencies change
    // Adding `page` to dependencies ensures the timer resets if the user manually clicks "Next"
    return () => clearInterval(interval);
  }, [isHovered, page]);

  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    // THE LIGHT BG: Pristine white with subtle depth
    <section className="w-full py-28 bg-white relative overflow-hidden flex flex-col items-center border-t border-zinc-100">
      
      {/* Ambient Mesh/Gradient Background Layer (Light Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-0 -left-[10%] w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-[10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px]" />
      </div>

      {/* Main Container: Attached Hover Events Here */}
      <div 
        className="w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col gap-16 relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* --- HEADER --- */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-950 mb-6">
            Don&apos;t just take our word for it
          </h2>
        </div>

        {/* --- CINEMATIC SPOTLIGHT CAROUSEL --- */}
        <div className="relative w-full min-h-[550px] md:min-h-[450px] mt-12 flex items-center justify-center">
          
          {/* THE LARGE QUOTE MARK: Giant, Translucent Watermark */}
          <div className="absolute -top-10 -left-6 md:-left-16 text-[500px] leading-none text-zinc-100/80 font-serif z-0 select-none pointer-events-none">
            &ldquo;
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: customEase }}
              className="absolute w-full z-10"
            >
              <div className="w-full flex flex-col h-full">
                
                <div className="flex gap-1 mb-10 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < activeTestimonial.rating} />
                  ))}
                </div>
                
                {/* Massive editorial serif typography (Dark text for light bg) */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl text-zinc-900 font-serif leading-[1.25] tracking-tight mb-16 text-center max-w-5xl mx-auto">
                  {activeTestimonial.content}
                </h3>
                
                {/* Metadata aligned cleanly at bottom-right */}
                <div className="mt-auto flex items-center gap-5 justify-end pt-10 border-t border-zinc-100 max-w-lg ml-auto w-full">
                  
                  {/* Premium Brand-Colored Avatar (Updated to Transit Primary) */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0088AA] to-[#006b87] text-white flex items-center justify-center font-bold text-2xl shadow-lg ring-4 ring-[#0088AA]/10">
                    {activeTestimonial.name.charAt(0)}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-zinc-950 text-xl leading-none">{activeTestimonial.name}</h4>
                      <VerifiedBadge />
                    </div>
                    <p className="text-sm font-medium text-zinc-500 mt-1.5 leading-none">
                      {activeTestimonial.role} • {activeTestimonial.route}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* --- CONTROLS --- */}
        <div className="flex items-center justify-between mt-8">
          
          {/* Progress Indicators */}
          <div className="flex items-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const newDirection = i > activeIndex ? 1 : -1;
                  setPage([i, newDirection]);
                }}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? "w-10 bg-[#1B4C2E]" : "w-2.5 bg-zinc-200 hover:bg-zinc-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="w-16 h-16 rounded-full border border-zinc-200 bg-white text-zinc-900 flex items-center justify-center transition-all duration-300 hover:bg-zinc-50 hover:shadow-md hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-16 h-16 rounded-full border border-zinc-200 bg-white text-zinc-900 flex items-center justify-center transition-all duration-300 hover:bg-zinc-50 hover:shadow-md hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}