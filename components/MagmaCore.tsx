"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MagmaCore() {
  const [mounted, setMounted] = useState(false);
  const [entering, setEntering] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleEnter = () => {
    setEntering(true);
    setTimeout(() => router.push("/multiverse"), 700);
  };

  return (
    <div className={`min-h-screen bg-[#050508] flex flex-col items-center justify-center p-6 transition-all duration-700 ${entering? "scale-150 blur-xl opacity-0" : ""}`}>
      <motion.div
        className="w-[min(420px,78vw)] h-[min(420px,78vw)] rounded-[40px] bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-[0_0_100px_rgba(239,68,68,0.5)]"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white font-black tracking-[0.3em] text-3xl">MAG CORE</span>
      </motion.div>

      <motion.button
        onClick={handleEnter}
        whileTap={{ scale: 0.95 }}
        className="mt-12 bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-full font-bold tracking-wider"
      >
        {entering? "ENTERING..." : "ENTER THE MULTIVERSE"}
      </motion.button>

      <p className="mt-6 text-zinc-500 text-xs tracking-widest">Core 420px locked • FX 50M • Ready</p>
    </div>
  );
}
