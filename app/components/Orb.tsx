
"use client";
import { motion } from "framer-motion";
export default function Orb() {
  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.12, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-44 h-44 rounded-full blur-[2px]"
        style={{ background: "radial-gradient(circle, #FF5514 0%, #A51205 40%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-28 h-28 rounded-full z-10"
        style={{
          background: "radial-gradient(circle at 32% 32%, #FF6A2E 0%, #FF3C14 18%, #A51205 52%, #5A0A02 82%, #2B0501 100%)",
          boxShadow: "0 0 25px #FF3C14, 0 0 55px #A51205, inset 0 0 20px rgba(255,255,255,0.25)",
        }}
      >
        <div className="absolute top-[22%] left-[28%] w-4 h-4 bg-white/80 rounded-full blur-[0.5px]" />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute w-[180px] h-[180px] rounded-full border border-[#FF3C14]/20"
        style={{ borderTopColor: "rgba(255,60,20,0.5)", borderRightColor: "transparent" }}
      />
    </div>
  );
}
