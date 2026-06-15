"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// --- CUSTOM SVG ICONS ---
const WhatsAppIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.472-1.761-1.645-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChatBubbleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // --- WHATSAPP CONFIGURATION ---
  // Format: country code + number (no plus sign, no spaces)
  const phoneNumber = "254700000000"; // <-- Replace with your actual MyRide support number
  const preFilledMessage = "Hi MyRide Support, I have a question about the platform.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(preFilledMessage)}`;

  // Premium physics for the popover animation
// Notice the 'as const' at the end
const springConfig = { type: "spring", damping: 25, stiffness: 300 } as const;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={springConfig}
            className="mb-4 w-[320px] bg-white/90 backdrop-blur-2xl border border-zinc-200/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1B4C2E] p-5 pb-6 relative overflow-hidden text-white">
              {/* Decorative background arcs */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-lg">👋</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm leading-tight">MyRide Support</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-medium text-emerald-50">Typically replies instantly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 bg-white">
              <div className="bg-zinc-50 border border-zinc-100 p-4 rounded-2xl rounded-tl-sm text-sm text-zinc-600 leading-relaxed shadow-sm mb-5">
                Hi there! Need help getting set up or have a question about pricing? Chat directly with our Nairobi-based team on WhatsApp.
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full h-12 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsAppIcon />
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (FAB) */}
      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-300 ${
          isOpen 
            ? "w-14 h-14 bg-white text-zinc-900 border border-zinc-200 rounded-full" 
            : "w-16 h-16 bg-[#1B4C2E] text-white rounded-[1.25rem] md:rounded-[1.5rem]"
        }`}
        aria-label="Toggle Support Chat"
      >
        {/* Subtle ping animation when closed to draw attention */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#1B4C2E]"></span>
          </span>
        )}

        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 0 : 1 }}
          className="absolute"
        >
          <ChatBubbleIcon />
        </motion.div>

        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 0 : -90, scale: isOpen ? 1 : 0 }}
          className="absolute"
        >
          <CloseIcon />
        </motion.div>
      </motion.button>
      
    </div>
  );
}