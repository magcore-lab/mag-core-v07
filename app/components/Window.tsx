"use client";
import { motion } from "framer-motion";
export default function Window({ id, title, onClose, children }: any) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] max-w-[90vw] z-50">
      <div className="border-2 border-white rounded-xl bg-[#0c1424]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(80,150,255,0.2)] overflow-hidden">
        <div className="flex justify-between items-center px-4 py-2 border-b border-white/20"><span className="font-mono text-[10px] text-white/70 tracking-widest">{title}</span><button onClick={onClose} className="w-6 h-6 rounded-full bg-white/10 text-white/50">✕</button></div>
        <div className="p-6 font-mono text-sm text-white/90">{children}</div>
      </div>
    </motion.div>
  );
}
