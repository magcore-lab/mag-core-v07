"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Window from "./Window";
import { motion, AnimatePresence } from "framer-motion";
const Orb = dynamic(() => import("./Orb"), { ssr: false });
type W = { id: string; title: string; content: any; };
export default function Desktop() {
  const [wins, setWins] = useState<W[]>([]);
  const [z, setZ] = useState<Record<string, number>>({});
  const [topZ, setTopZ] = useState(10);
  const focus = (id: string) => { setTopZ(topZ+1); setZ({...z, [id]: topZ+1}); };
  const open = (w: W) => { if (wins.find(x=>x.id===w.id)) { focus(w.id); return; } setWins([...wins,w]); setZ({...z,[w.id]:topZ+1}); setTopZ(topZ+1); };
  const close = (id: string) => setWins(wins.filter(w=>w.id!==id));
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Orb />
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.5}} className="mt-8 text-center">
          <h1 className="font-mono text-[22px] tracking-[0.4em]">MAG CORE V07</h1>
          <p className="mt-2 font-mono text-[10px] tracking-[0.3em] text-white/40">MULTIVERSE_OS - LIVE</p>
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-xl">
        <button onClick={()=>open({id:"lab",title:"LAB_01",content:<div>EXP_001 ORB ● ACTIVE</div>})} className="font-mono text-[11px] px-3 py-1.5 rounded-full hover:bg-white/10">LAB 01</button>
        <button onClick={()=>open({id:"projects",title:"PROJECTS_02",content:<div>PROJECTS ARCHIVE</div>})} className="font-mono text-[11px] px-3 py-1.5 rounded-full hover:bg-white/10">PROJECTS 02</button>
        <button onClick={()=>open({id:"drop",title:"DROP_03",content:<div>ACCESS DENIED</div>})} className="font-mono text-[11px] px-3 py-1.5 rounded-full hover:bg-white/10">DROP 03</button>
        <div className="h-2 w-2 animate-pulse rounded-full bg-red-500 ml-2" />
      </div>
      <AnimatePresence>{wins.map(w=><Window key={w.id} id={w.id} title={w.title} onClose={close} onFocus={focus} zIndex={z[w.id]||10}>{w.content}</Window>)}</AnimatePresence>
    </div>
  );
}
