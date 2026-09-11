"use client";
import { motion } from "framer-motion";

export default function Orb() {
  return (
    <div className="relative w-[280px] h-[280px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-32 h-32 rounded-full bg-[#A51205] shadow-[0_0_30px_#FF3C14,0_0_60px_#FF3C14]"
        style={{ background: "radial-gradient(circle at 30% 30%, #FF5514, #A51205 60%, #5A0A02)" }}
      />
      <motion.div
        animate={{ scale: [1.3, 1.5, 1.3], opacity: [0.3, 0.15, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute w-32 h-32 rounded-full bg-[#FF5514] blur-[2px]"
      />
    </div>
  );
}
