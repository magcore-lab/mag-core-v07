
"use client";
import Orb from "./Orb";
import Window from "./Window";
import { useState } from "react";
export default function Desktop() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="relative min-h-screen bg-[#050a14] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(165,18,5,0.15),_transparent_70%)]" />
      <button onClick={() => setOpen(open? null : "LAB")} className="z-10"><Orb /></button>
      <div className="z-10 mt-8 flex gap-3 font-mono text-[10px]">
        {["LAB","PROJECTS","DROP","STATUS"].map(id => (
          <button key={id} onClick={() => setOpen(id)} className="px-4 py-2 border border-white/20 rounded-full bg-white/5 text-white/70 hover:bg-white/10">{id}</button>
        ))}
      </div>
      {open && <Window id={open} title={`${open} • MAG CORE V0.7 • 1.5m VR`} onClose={() => setOpen(null)}><div className="text-white/80">Module {open} — bordure blanche 2px, safe zone ±15°, focus 1.5m.<br/>Rouge maîtrisé #A51205 • Quantum Fusion</div></Window>}
      <div className="absolute bottom-6 font-mono text-[8px] text-white/20">MAG CORE ENGINE • V0.7 • NO WATERMARK • 1.5m VR</div>
    </div>
  );
}
