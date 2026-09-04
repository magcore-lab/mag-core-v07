"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MagmaCore() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050508] flex flex-col items-center justify-center p-4">
      <motion.div
        className="w-[min(420px,78vw)] h-[min(420px,78vw)] rounded-[32px] bg-gradient-to-br from-red-600 via-orange-600 to-red-900 shadow-[0_0_80px_rgba(220,38,0.6)] flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white font-black text-3xl tracking-widest">MAG CORE</span>
      </motion.div>
      <motion.button
        className="mt-10 px-8 py-4 bg-red-600 text-white rounded-full font-bold tracking-wider"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ENTER THE MULTIVERSE
      </motion.button>
      <p className="mt-4 text-white/40 text-xs">Core 420px locked • FX 50M • Ready</p>
    </div>
  );
}
