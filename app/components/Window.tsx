"use client";
import { motion } from "framer-motion";
export default function Window({ title, onClose, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] max-w-[92vw] z-50"
    >
      <div className="relative border-[2px] border-white rounded-[14px] bg-[#0a1628]/85 backdrop-blur-[22px] shadow-[0_0_50px_rgba(120,180,255,0.25),inset_0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden">
        <div className="flex justify-between items-center px-5 py-2.5 border-b border-white/20 bg-white/[0.04]">
          <span className="font-mono text-[10px] tracking-[0.18em] text-white/70 uppercase">{title}</span>
          <button onClick={onClose} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white/60 flex items-center justify-center text-[11px]">✕</button>
        </div>
        <div className="p-7 font-mono text-[13px] leading-relaxed text-white/85">{children}</div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#A51205]/50 to-transparent" />
      </div>
    </motion.div>
  );
}
