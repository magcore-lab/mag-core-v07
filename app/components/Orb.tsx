
"use client";
import { motion } from "framer-motion";
export default function Orb() {
  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center">
      <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }} className="w-28 h-28 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #FF5514, #A51205 65%, #3A0803)", boxShadow: "0 0 30px #FF3C14, 0 0 70px #A51205" }} />
      <motion.div animate={{ scale: [1.4, 1.7, 1.4], opacity: [0.35, 0.12, 0.35] }} transition={{ duration: 3, repeat: Infinity }} className="absolute w-28 h-28 rounded-full bg-[#FF3C14]/50 blur-sm" />
    </div>
  );
}
