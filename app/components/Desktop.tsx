
"use client";
import Orb from "./Orb";
import Window from "./Window";
import { useState } from "react";
export default function Desktop() {
  const [o, setO] = useState<string|null>(null);
  return (
    <div className="min-h-screen bg-[#050a14] flex flex-col items-center justify-center">
      <button onClick={()=>setO(o?null:"LAB")}><Orb /></button>
      <div className="mt-8 flex gap-2 font-mono text-[10px]">
        {["LAB","PROJECTS","DROP","STATUS"].map(id=><button key={id} onClick={()=>setO(id)} className="px-3 py-1 border border-white/20 rounded-full bg-white/5 text-white/70">{id}</button>)}
      </div>
      {o && <Window title={o+" • MAG CORE V0.7 • 1.5m VR"} onClose={()=>setO(null)}><div>Module {o} — #A51205 maîtrisé</div></Window>}
    </div>
  );
}
