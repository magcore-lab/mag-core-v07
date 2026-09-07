"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Window from "./Window";
import { motion, AnimatePresence } from "framer-motion";
const Orb = dynamic(() => import("./Orb"), { ssr: false });

type OpenWindow = { id: string; title: string; content: React.ReactNode; };

export default function Desktop() {
  const [windows, setWindows] = useState<OpenWindow[]>([]);
  const [z, setZ] = useState<Record<string, number>>({});
  const [topZ, setTopZ] = useState(10);

  const focus = (id: string) => { setTopZ(topZ+1); setZ({...z, [id]: topZ+1}); };
  const open = (w: OpenWindow) => {
    if (windows.find(x => x.id === w.id)) { focus(w.id); return; }
    setWindows([...windows, w]); setZ({...z, [w.id]: topZ+1}); setTopZ(topZ+1);
  };
  const close = (id: string) => setWindows(windows.filter(w => w.id!== id));

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Orb />
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 text-center">
          <h1 className="font-mono text-[22px] tracking-[0.4em]">MAG CORE V07</h1>
          <p className="mt-2 font-mono text-[10px] tracking-[0.3em] text-white/40">MULTIVERSE_OS - LIVE</p>
          <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-red-500/60">BUILD_READY // V07</p>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-xl">
        <button onClick={() => open({ id: "lab", title: "LAB_01 // EXPERIMENTS", content: <div className="space-y-2 text-[11px]"><div>EXP_001 // SHADER_ORB ● ACTIVE</div><div>EXP_002 // GLITCH_FX ● TESTING</div><div>EXP_003 // PORTAL ○ QUEUED</div></div> })} className="font-mono text-[11px] px-3 py-1.5 hover:bg-white/10 rounded-full">LAB 01</button>
        <button onClick={() => open({ id: "projects", title: "PROJECTS_02 // ARCHIVE", content: <div>MAG_CORE_V07 — The OS you are inside right now. BUILD d0c78d7</div> })} className="font-mono text-[11px] px-3 py-1.5 hover:bg-white/10 rounded-full">PROJECTS 02</button>
        <button onClick={() => open({ id: "drop", title: "DROP_03 // ACCESS", content: <div className="text-center"><div>🔒 ACCESS DENIED</div><input placeholder="ACCESS_CODE" className="mt-4 w-full border border-white/10 bg-black px-3 py-2 text-center font-mono text-[11px] outline-none" /></div> })} className="font-mono text-[11px] px-3 py-1.5 hover:bg-white/10 rounded-full">DROP 03</button>
        <div className="h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_10px_red] ml-2" />
      </div>

      <div className="absolute top-0 flex w-full justify-between border-b border-white/5 bg-black/50 px-6 py-2 font-mono text-[10px] text-white/30"><span>MAG_CORE_V07 / MULTIVERSE_OS</span><span>LAB 01 / PROJECTS 02 / DROP 03</span></div>

      <AnimatePresence>{windows.map(w => (<Window key={w.id} id={w.id} title={w.title} onClose={close} onFocus={focus} zIndex={z[w.id]||10}>{w.content}</Window>))}</AnimatePresence>
    </div>
  );
}
