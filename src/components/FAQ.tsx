"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqData = [
  {
    category: "Platform & Setup",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    questions: [
      {
        q: "How long does it take to set up my route?",
        a: "Most independent operators are fully set up in under 10 minutes. Simply input your stops into the dashboard, assign the students, and you're ready for your next morning run.",
      },
      {
        q: "Is there a limit to how many students I can add?",
        a: "No. Our platform supports unlimited students per route. Whether you drive a 7-seater or a 30-seater bus, the system scales effortlessly.",
      },
      {
        q: "Do I need to sign a long-term contract?",
        a: "Not at all. MyRide Transit operates on a flexible, month-to-month basis. You can pause or cancel your account directly from your dashboard at any time.",
      },
    ],
  },
  {
    category: "Parents & Guardians",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    questions: [
      {
        q: "How do I track my child's ride?",
        a: "Through the dedicated MyRide Guardian app. Once logged in, you can view the vehicle's real-time location on a live map and receive instant push notifications the moment your child arrives safely at their destination.",
      },
      {
        q: "How do I know who is driving my child?",
        a: "Peace of mind is our priority. The Guardian app displays the assigned driver's profile—including their name, photo, and vehicle details—for every trip. You always know exactly who is in charge of your child at any given moment.",
      },
      {
        q: "Can I contact the driver if there's an issue or schedule change?",
        a: "Yes. The Guardian app provides a direct, secure line of communication to the active driver. If you need to relay urgent information or check on your child, you can easily reach out to them directly through the app.",
      },
      {
        q: "Can both parents get alerts for the same student?",
        a: "Absolutely. Multiple authorized guardians can download the app and link to the same student, ensuring both parents or a secondary caregiver receive the live tracking and arrival alerts simultaneously.",
      },
    ],
  },
  {
    category: "Hardware & Tech",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    questions: [
      {
        q: "What happens if the driver goes through a dead zone?",
        a: "MyRide is built for the real world. If the driver loses cellular service, their app continues tracking via GPS offline. It securely caches the alerts and sends them the exact millisecond the signal returns.",
      },
      {
        q: "Will this drain my phone battery?",
        a: "We engineered our location engine specifically for long routes. Both the Operator and Guardian apps use highly optimized tracking to minimize battery consumption compared to standard navigation apps.",
      },
      {
        q: "Does the app require a special type of phone?",
        a: "No special hardware is required. The apps run perfectly on modern iOS devices (iPhone 8 or newer) and any Android device running Android 9.0 or higher.",
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const customEase = [0.16, 1, 0.3, 1] as const;
  const activeQuestions = faqData.find((d) => d.category === activeCategory)?.questions || [];

  return (
    <section id="faqs" className="w-full py-32 bg-[#FAFAFC] relative flex flex-col items-center px-6 lg:px-12 border-t border-zinc-100 overflow-hidden">
      
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1B4C2E]/20 to-transparent" />
      
      <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: customEase }} // Sped up slightly for performance
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Common questions. <br />
            <span className="font-serif text-[#1B4C2E] italic">Clear answers.</span>
          </h2>
        </motion.div>
      </div>

      <div className="w-full max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ willChange: "transform, opacity" }}
          className="flex p-1.5 bg-white border border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-full mb-12 overflow-x-auto scrollbar-hide max-w-full"
        >
          {faqData.map((data) => {
            const isActive = activeCategory === data.category;
            return (
              <button
                key={data.category}
                onClick={() => {
                  setActiveCategory(data.category);
                  setExpandedIndex(0); // Reset to first question
                }}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-colors duration-300 whitespace-nowrap outline-none ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFaqPill"
                    className="absolute inset-0 bg-[#1B4C2E] rounded-full shadow-sm"
                    transition={{ duration: 0.3, ease: customEase }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className={isActive ? "text-emerald-300" : "text-zinc-400"}>{data.icon}</span>
                  {data.category}
                </span>
              </button>
            );
          })}
        </motion.div>

        <div className="w-full min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: customEase }}
              className="flex flex-col"
              style={{ willChange: "transform, opacity" }}
            >
              {activeQuestions.map((faq, index) => {
                const isOpen = expandedIndex === index;
                return (
                  <motion.div
                    layout
                    key={index}
                    className={`group cursor-pointer overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] ring-1 ring-zinc-200/80 rounded-[2rem] my-4"
                        : "border-b border-zinc-200 rounded-none hover:bg-zinc-100/50"
                    }`}
                    onClick={() => setExpandedIndex(isOpen ? null : index)}
                  >
                    <div className={`w-full flex items-center justify-between text-left outline-none transition-all duration-300 ${
                      isOpen ? "p-6 sm:p-8 pb-4" : "py-6 px-4"
                    }`}>
                      <span className={`text-lg md:text-xl font-semibold tracking-tight pr-8 transition-colors duration-300 ${
                        isOpen ? "text-[#1B4C2E]" : "text-zinc-900"
                      }`}>
                        {faq.q}
                      </span>
                      
                      <motion.div
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }} // Removed backOut spring
                        className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
                          isOpen ? "bg-emerald-50 text-[#1B4C2E]" : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200 group-hover:text-zinc-900"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: customEase }}
                          style={{ willChange: "height, opacity" }} // Force GPU to handle accordion sliding
                        >
                          <p className="text-zinc-500 text-base md:text-lg leading-relaxed px-6 sm:px-8 pb-8">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: customEase }}
        style={{ willChange: "transform, opacity" }}
        className="w-full max-w-4xl mx-auto mt-4 relative rounded-[2rem] overflow-hidden shadow-sm border border-zinc-200 bg-white"
      >
        <div className="px-8 py-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
          <div className="flex items-center gap-6">
            <div className="hidden md:flex w-16 h-16 rounded-full bg-[#1B4C2E]/5 text-[#1B4C2E] items-center justify-center shrink-0">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold tracking-tight text-zinc-950 mb-1">Need specific technical help?</h4>
              <p className="text-zinc-500 font-medium text-sm md:text-base">
                Our Nairobi-based support team is available 24/7.
              </p>
            </div>
          </div>
          
          <button className="shrink-0 px-8 py-4 rounded-full bg-zinc-950 text-white font-bold hover:bg-zinc-800 transition-colors duration-300 shadow-sm">
            Chat with Support
          </button>
        </div>
      </motion.div>
      
    </section>
  );
}