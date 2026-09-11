
"use client";
import { motion } from "framer-motion";
export default function Orb() {
  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-28 h-28 rounded-full"
        style={{ background: "radial-gradient(circle at 30% 30%, #FF5514, #A51205 65%, #3A0803)", boxShadow: "0 0 30px #FF3C14, 0 0 70px #A51205" }}
      />
      <motion.div animate={{ scale: [1.3, 1.6, 1.3], opacity: [0.4, 0.15, 0.4] }} transition={{ duration: 3, repeat: Infinity }} className="absolute w-28 h-28 rounded-full bg-[#FF3C14]/40 blur-sm" />
    </div>
  );
}
