"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// --- EXPANDED, ROBUST FAQ DATA ---
const faqData = [
  {
    category: "Platform & Setup",
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
    questions: [
      {
        q: "Do parents need to download the app?",
        a: "No. This is the magic of MyRide Transit. Guardians receive standard SMS text messages with secure web links to track the van. You never have to force parents to install or update another app.",
      },
      {
        q: "Are the tracking links secure?",
        a: "Yes. Tracking links are uniquely generated for each active route and expire immediately once the route is marked as complete. Only authorized guardians with the link can view the van's location.",
      },
      {
        q: "Can multiple guardians get alerts for one student?",
        a: "Absolutely. You can attach up to three phone numbers per student, ensuring both parents and a secondary caregiver receive the automated ETA alerts simultaneously.",
      },
    ],
  },
  {
    category: "Technical & Hardware",
    questions: [
      {
        q: "What happens if I drive through a dead zone?",
        a: "MyRide is built for the real world. If you lose cellular service, the app continues tracking via GPS offline. It securely caches your alerts and sends them the exact millisecond your signal returns.",
      },
      {
        q: "Will this drain my phone battery?",
        a: "We engineered our location engine specifically for older devices and long routes. MyRide Transit uses 60% less battery than standard navigation apps like Google Maps or Waze.",
      },
      {
        q: "Does the app require a special type of phone?",
        a: "No special hardware is required. The driver app runs perfectly on any iOS device (iPhone 8 or newer) and any Android device running Android 9.0 or higher.",
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  // Store expanded state using a unique string combining category + index
  const [expandedId, setExpandedId] = useState<string | null>(`${faqData[0].category}-0`);

  const customEase = [0.16, 1, 0.3, 1] as const;

  // Get the currently active list of questions
  const activeQuestions = faqData.find((d) => d.category === activeCategory)?.questions || [];

  return (
    <section className="w-full py-32 bg-[#F7F7F7] relative flex flex-col items-center px-6 lg:px-12">
      
      {/* --- HEADER --- */}
      <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-950 mb-6">
            Got questions? <br />
            <span className="font-serif text-[#00635D] italic">We&apos;ve got answers.</span>
          </h2>
          <p className="text-lg text-zinc-500 font-medium max-w-xl mx-auto">
            Everything you need to know about setting up your route, managing parents, and the technology behind MyRide Transit.
          </p>
        </motion.div>
      </div>

      {/* --- TWO-COLUMN LAYOUT --- */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10 items-start">
        
        {/* LEFT COLUMN: Animated Category Tabs */}
        <div className="w-full lg:w-1/3 sticky top-32 flex flex-col gap-2">
          {faqData.map((data) => {
            const isActive = activeCategory === data.category;
            return (
              <button
                key={data.category}
                onClick={() => {
                  setActiveCategory(data.category);
                  setExpandedId(null); // Close all when switching tabs
                }}
                className={`relative w-full text-left px-6 py-4 rounded-2xl transition-colors duration-300 ${
                  isActive ? "text-[#00635D]" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {/* The "Sliding" Active Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeFaqTab"
                    className="absolute inset-0 bg-white border border-zinc-200 shadow-sm rounded-2xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 text-lg font-semibold tracking-tight">
                  {data.category}
                </span>
              </button>
            );
          })}

          {/* Contact Support Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-[#00635D] rounded-3xl p-8 text-white shadow-xl shadow-[#00635D]/20"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Still have questions?</h4>
            <p className="text-white/80 text-sm font-medium leading-relaxed mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our Nairobi-based support team is available 24/7.
            </p>
            <button className="w-full py-3 rounded-xl bg-white text-[#00635D] text-sm font-bold hover:bg-zinc-100 transition-colors">
              Chat with us
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The Accordion List */}
        <div className="w-full lg:w-2/3 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: customEase }}
              className="flex flex-col border-t border-zinc-200"
            >
              {activeQuestions.map((faq, index) => {
                const uniqueId = `${activeCategory}-${index}`;
                const isOpen = expandedId === uniqueId;
                
                return (
                  <div key={index} className="border-b border-zinc-200">
                    <button
                      onClick={() => setExpandedId(isOpen ? null : uniqueId)}
                      className="w-full py-6 flex items-center justify-between text-left group"
                    >
                      <span className="text-lg md:text-xl font-semibold text-zinc-950 group-hover:text-[#00635D] transition-colors pr-8">
                        {faq.q}
                      </span>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "backOut" }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[#00635D] text-white" : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200"}`}
                      >
                        {/* Plus/Minus Icon morph */}
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <motion.path 
                            animate={{ d: isOpen ? "M5 12h14" : "M12 5v14M5 12h14" }}
                            transition={{ duration: 0.3 }}
                          />
                        </svg>
                      </motion.div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: customEase }}
                          className="overflow-hidden"
                        >
                          <p className="text-zinc-500 text-lg font-medium leading-relaxed pb-8 pr-8 md:pr-12">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}