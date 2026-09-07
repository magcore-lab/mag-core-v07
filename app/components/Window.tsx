"use client";
import { motion } from "framer-motion";

export default function Window({ id, title, children, onClose, zIndex }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.96 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      style={{ zIndex, position: 'absolute', top: '18svh', left: '50%', x: '-50%', width: 'min(92vw, 560px)', background: 'rgba(10,10,10,0.82)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div style={{display:'flex', justifyContent:'space-between', padding:'10px 14px', borderBottom:'1px solid rgba(255,255,255,0.06)', fontFamily:'monospace', fontSize:10, letterSpacing:'0.2em', color:'#888'}}>
        <span>{title}</span>
        <button onClick={() => onClose(null)} style={{background:'none', border:'none', color:'#888', cursor:'pointer'}}>[ CLOSE ]</button>
      </div>
      <div style={{padding:'22px', color:'#d0d0d0', fontFamily:'monospace', fontSize:12, lineHeight:1.6}}>{children}</div>
    </motion.div>
  );
}
