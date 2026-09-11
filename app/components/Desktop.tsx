"use client";
import Orb from "./Orb";
import Window from "./Window";
import { useState } from "react";

export default function Desktop() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="relative min-h-screen bg-[#050a14] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(165,18,5,0.15),_transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,_transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:40px_40px]" />

      <button onClick={() => setOpen(null)} className="z-20 cursor-pointer">
        <Orb />
      </button>

      <div className="z-20 mt-6 flex gap-2.5 font-mono text-[10px] tracking-widest">
        {["LAB","PROJECTS","DROP","STATUS"].map((id) => (
          <button key={id} onClick={() => setOpen(id)} className="px-4 py-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white bg-white/5 backdrop-blur">
            {id}
          </button>
        ))}
      </div>

      {open && (
        <Window title={`${open} • MAG CORE V0.7 • 1.5m VR • -28° / +18° / +28°`} onClose={() => setOpen(null)}>
          <div className="space-y-2">
            <div className="text-white">Module {open} — Quantum Fusion</div>
            <div className="text-white/60 text-[11px]">Bordure blanche 2px • Safe zone ±15° • 1.2m readable • #A51205 maîtrisé</div>
          </div>
        </Window>
      )}

      <div className="absolute bottom-5 font-mono text-[8px] tracking-[0.2em] text-white/20">
        MAG CORE ENGINE • QUANTUM FUSION • V0.7 • #A51205 MAÎTRISÉ • VR CINEMA #000
      </div>
    </div>
  );
}
