
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Window from "./Window";
import Orb from "./Orb"; // ton Orb devient le MAG CORE

type PanelId = "LAB" | "PROJECTS" | "DROP" | "STATUS" | null;

export default function Desktop() {
  const [active, setActive] = useState<PanelId>(null);

  return (
    <div style={{background:'#000', height:'100svh', width:'100vw', overflow:'hidden', position:'relative'}}>
      
      {/* MAG CORE ENGINE - ton Orb fusionné */}
      <div style={{height:'100svh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{width:132, height:132, borderRadius:'50%', cursor:'pointer'}}
          onClick={() => setActive(active ? null : "STATUS")}
        >
          <Orb />
        </motion.div>

        <h1 style={{color:'#fff', fontFamily:'monospace', fontSize:16, letterSpacing:'0.2em', marginTop:24}}>
          MAG CORE ENGINE
        </h1>
        <p style={{color:'#555', fontFamily:'monospace', fontSize:10, letterSpacing:'0.3em', marginTop:8}}>
          QUANTUM FUSION • V0.7 • NO WATERMARK • 1.5m VR
        </p>
      </div>

      <AnimatePresence>
        {active === "LAB" && (
          <Window key="LAB" id="LAB" title="LAB_SYSTEM // 01" onClose={()=>setActive(null)}>
            <strong>MAG CORE LAB</strong><br/><br/>Experimental creative lab.<br/>3 écrans parallèles • #A51205 mastered • Tron FX complets
          </Window>
        )}
        {active === "PROJECTS" && (
          <Window key="PROJECTS" id="PROJECTS" title="PROJECTS_SYSTEM // 02" onClose={()=>setActive(null)}>
            <strong>ACTIVE PROJECTS</strong><br/><br/>MAG CORE<br/>MAAGM • VR 360° • SBS Stereo
          </Window>
        )}
        {active === "DROP" && (
          <Window key="DROP" id="DROP" title="DROP_SYSTEM // 03" onClose={()=>setActive(null)}>
            <strong>DROP CHANNEL</strong><br/><br/>Incoming releases.<br/>Equirect 4K • SBS Full • GitHub Pages ready
          </Window>
        )}
        {active === "STATUS" && (
          <Window key="STATUS" id="STATUS" title="STATUS_SYSTEM // 04" onClose={()=>setActive(null)}>
            <strong>SYSTEM STATUS</strong><br/><br/>• LIVE<br/>• MULTI-CORE<br/>• 1.2m text readable • ±15° safe • 10% recul<br/>• No watermark
          </Window>
        )}
      </AnimatePresence>

      {/* Dock */}
      <div style={{position:'fixed', bottom:'max(18px, env(safe-area-inset-bottom))', left:'50%', transform:'translateX(-50%)', display:'flex', gap:12, background:'rgba(0,0,0,0.8)', padding:'8px 16px', borderRadius:12, border:'1px solid rgba(255,255,255,0.1)'}}>
        <button onClick={()=> setActive(active === "LAB" ? null : "LAB")} style={{color:'#fff', background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', padding:'6px 12px', borderRadius:8, fontFamily:'monospace', fontSize:10}}>LAB</button>
        <button onClick={()=> setActive(active === "PROJECTS" ? null : "PROJECTS")} style={{color:'#fff', background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', padding:'6px 12px', borderRadius:8, fontFamily:'monospace', fontSize:10}}>PROJECTS</button>
        <button onClick={()=> setActive(active === "DROP" ? null : "DROP")} style={{color:'#fff', background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', padding:'6px 12px', borderRadius:8, fontFamily:'monospace', fontSize:10}}>DROP</button>
        <button onClick={()=> setActive(active === "STATUS" ? null : "STATUS")} style={{color:'#fff', background:'rgba(255,60,20,0.2)', border:'1px solid rgba(255,60,20,0.4)', padding:'6px 12px', borderRadius:8, fontFamily:'monospace', fontSize:10}}>STATUS</button>
      </div>
    </div>
  );
}
