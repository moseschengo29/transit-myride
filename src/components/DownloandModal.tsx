"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { useIsClient } from "../hooks/useIsClient";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: ModalProps) {
  const isClient = useIsClient();

  // Aggressive Scroll Locking
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isClient || !isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-zinc-100 flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100/80 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 transition-colors z-10"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Left Side: Buttons */}
            <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-2">Get the app</h3>
              <p className="text-zinc-500 text-sm mb-8">Download MyRide Transit to manage your routes efficiently.</p>

              <div className="flex flex-col gap-3">
                <button className="flex items-center p-4 rounded-2xl border border-zinc-200 hover:border-[#1B4C2E] hover:shadow-[0_4px_20px_rgba(0,99,93,0.08)] group transition-all text-left bg-white">
                  <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 group-hover:bg-[#1B4C2E] group-hover:text-white transition-colors mr-4">
                  <FaApple />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">Download for iOS</div>
                    <div className="text-xs text-zinc-500 mt-0.5">App Store</div>
                  </div>
                </button>

                <button className="flex items-center p-4 rounded-2xl border border-zinc-200 hover:border-[#1B4C2E] hover:shadow-[0_4px_20px_rgba(0,99,93,0.08)] group transition-all text-left bg-white">
                  <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 group-hover:bg-[#1B4C2E] group-hover:text-white transition-colors mr-4">
                  <IoLogoGooglePlaystore />

                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">Download for Android</div>
                    <div className="text-xs text-zinc-500 mt-0.5">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Side: QR Code Panel */}
            <div className="bg-zinc-50 border-t md:border-t-0 md:border-l border-zinc-100 p-8 md:p-10 flex flex-col items-center justify-center text-center sm:w-[280px]">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-200 mb-6">
                {/* Simulated SVG QR Code for Premium look */}
                <svg className="w-32 h-32 text-zinc-900" viewBox="0 0 100 100" fill="currentColor">
                  {/* Top Left Square */}
                  <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4"/>
                  <rect x="10" y="10" width="15" height="15" />
                  {/* Top Right Square */}
                  <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4"/>
                  <rect x="75" y="10" width="15" height="15" />
                  {/* Bottom Left Square */}
                  <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4"/>
                  <rect x="10" y="75" width="15" height="15" />
                  {/* Abstract QR Patterns */}
                  <rect x="40" y="5" width="8" height="8" />
                  <rect x="52" y="5" width="12" height="8" />
                  <rect x="40" y="17" width="24" height="8" />
                  <rect x="5" y="40" width="15" height="8" />
                  <rect x="25" y="40" width="8" height="22" />
                  <rect x="40" y="32" width="24" height="24" />
                  <rect x="70" y="40" width="25" height="8" />
                  <rect x="70" y="55" width="8" height="40" />
                  <rect x="85" y="55" width="10" height="10" />
                  <rect x="85" y="72" width="10" height="23" />
                  <rect x="40" y="65" width="8" height="30" />
                  <rect x="55" y="65" width="8" height="15" />
                  <rect x="55" y="85" width="8" height="10" />
                </svg>
              </div>
              <div className="text-sm font-semibold text-zinc-900">Scan to install</div>
              <div className="text-xs text-zinc-500 mt-1">Point your camera at the code to download instantly.</div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body // This pushes the modal entirely outside your main app hierarchy
  );
}