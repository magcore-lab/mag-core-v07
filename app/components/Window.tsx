"use client";
import { motion } from "framer-motion";
type Props = { id: string; title: string; children: any; onClose: (id: string) => void; onFocus: (id: string) => void; zIndex: number; };
export default function Window({ id, title, children, onClose, onFocus, zIndex }: Props) {
  return (
    <motion.div drag dragMomentum={false} dragElastic={0} onMouseDown={() => onFocus(id)} style={{ zIndex }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="absolute w-[90vw] max-w-[560px] border border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 cursor-grab">
        <span className="font-mono text-[11px] tracking-[0.2em] text-white/70">{title}</span>
        <button onClick={() => onClose(id)} className="font-mono text-[11px] text-white/40">[CLOSE]</button>
      </div>
      <div className="p-6 font-mono text-sm text-white/80">{children}</div>
    </motion.div>
  );
}
