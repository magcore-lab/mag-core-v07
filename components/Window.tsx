"use client";
import { motion } from "framer-motion";
import { useState } from "react";
type WindowProps = {
  id: string; title: string; children: React.ReactNode;
  onClose: (id: string) => void; onFocus: (id: string) => void; zIndex: number;
};
export default function Window({ id, title, children, onClose, onFocus, zIndex }: WindowProps) {
  const [pos] = useState({ x: 100, y: 100 });
  return (
    <motion.div
      drag dragMomentum={false} dragElastic={0}
      onDragStart={() => onFocus(id)} onMouseDown={() => onFocus(id)}
      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
      style={{ zIndex, x: pos.x, y: pos.y }}
      className="absolute w-[90vw] max-w-[560px] border border-white/10 bg-black/80 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 cursor-grab">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_8px_red]" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-white/70">{title}</span>
        </div>
        <button onClick={() => onClose(id)} className="font-mono text-[11px] text-white/40 hover:text-white/80">[CLOSE]</button>
      </div>
      <div className="p-6 font-mono text-sm text-white/80">{children}</div>
      <div className="border-t border-white/5 px-4 py-1.5 font-mono text-[9px] tracking-widest text-white/20">MAG_CORE // {id.toUpperCase()} // READY</div>
    </motion.div>
  );
}
