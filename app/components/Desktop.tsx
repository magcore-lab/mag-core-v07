"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Window from "./Window";

type PanelId = "LAB" | "PROJECTS" | "DROP" | "STATUS" | null;

export default function Desktop() {
  const [active, setActive] = useState<PanelId>(null);

  return (
    <div style={{background:'#000', height:'100svh', width:'100vw', overflow:'hidden', position:'relative', paddingBottom:'env(safe-area-inset-bottom)'}}>
      
      <div style={{height:'100svh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{width:132, height:132, borderRadius:'50%', background:'radial-gradient(circle at 35% 35%, #ff6a4a 0%, #ff2a10 22%, #a00000 68%, #4a0000 100%)', boxShadow:'0 0 80px rgba(255,32,0,0.6), 0 0 140px rgba(255,32,0,0.25)'}}
        />
        <div style={{position:'absolute', width:380, height:380, borderRadius:'50%', background:'radial-gradient(circle, rgba(255,40,0,0.22) 0%, transparent 70%)', filter:'blur(20px)', top:'50%', left:'50%', transform:'translate(-50%,-55%)'}} />
        <h1 style={{color:'#fff', fontFamily:'monospace', fontSize:16, letterSpacing:'0.55em', fontWeight:400, marginTop:28, zIndex:2}}>MAG CORE V08</h1>
        <p style={{color:'#555', fontFamily:'monospace', fontSize:10, letterSpacing:'0.3em', marginTop:10, zIndex:2}}>MULTIVERSE_OS — EN DIRECT</p>
      </div>

      <AnimatePresence>
        {active === "LAB" && (
          <Window key="LAB" id="LAB" title="LAB_SYSTEM // 01" onClose={setActive} zIndex={10}>
            <strong>MAG CORE LAB</strong><br/><br/>Experimental creative environment.<br/>Systems, prototypes and new intelligence layers.
          </Window>
        )}
        {active === "PROJECTS" && (
          <Window key="PROJECTS" id="PROJECTS" title="PROJECTS_SYSTEM // 02" onClose={setActive} zIndex={10}>
            <strong>ACTIVE PROJECTS</strong><br/><br/>MAG CORE<br/>MAAGMAAT<br/>ATLAS<br/>MULTIVERSE_OS
          </Window>
        )}
        {active === "DROP" && (
          <Window key="DROP" id="DROP" title="DROP_SYSTEM // 03" onClose={setActive} zIndex={10}>
            <strong>DROP CHANNEL</strong><br/><br/>Incoming releases.<br/><br/>Music.<br/>Visuals.<br/>Transmissions.
          </Window>
        )}
        {active === "STATUS" && (
          <Window key="STATUS" id="STATUS" title="STATUS_SYSTEM // 04" onClose={setActive} zIndex={10}>
            <strong>SYSTEM STATUS</strong><br/><br/>● LIVE<br/><br/>MULTIVERSE_OS operational.<br/>Build: {`eba16dd → V08.0`}
          </Window>
        )}
      </AnimatePresence>

      <div style={{position:'fixed', bottom:'max(18px, env(safe-area-inset-bottom))', left:'50%', transform:'translateX(-50%)', display:'flex', gap:8, padding:8, background:'rgba(15,15,15,0.7)', backdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,0.07)', zIndex:20}}>
        <button onClick={() => setActive(active === "LAB" ? null : "LAB")} style={{background:active==="LAB"?"rgba(255,255,255,0.06)":"none", border:'none', color:active==="LAB"?"#fff":"#777", fontFamily:'monospace', fontSize:10, letterSpacing:'0.15em', padding:'10px 14px', minHeight:44, cursor:'pointer'}}>LAB 01</button>
        <button onClick={() => setActive(active === "PROJECTS" ? null : "PROJECTS")} style={{background:active==="PROJECTS"?"rgba(255,255,255,0.06)":"none", border:'none', color:active==="PROJECTS"?"#fff":"#777", fontFamily:'monospace', fontSize:10, letterSpacing:'0.15em', padding:'10px 14px', minHeight:44, cursor:'pointer'}}>PROJECTS 02</button>
        <button onClick={() => setActive(active === "DROP" ? null : "DROP")} style={{background:active==="DROP"?"rgba(255,255,255,0.06)":"none", border:'none', color:active==="DROP"?"#fff":"#777", fontFamily:'monospace', fontSize:10, letterSpacing:'0.15em', padding:'10px 14px', minHeight:44, cursor:'pointer'}}>DROP 03</button>
        <button onClick={() => setActive(active === "STATUS" ? null : "STATUS")} style={{background:active==="STATUS"?"rgba(255,255,255,0.06)":"none", border:'none', color:active==="STATUS"?"#fff":"#777", fontFamily:'monospace', fontSize:10, letterSpacing:'0.15em', padding:'10px 14px', minHeight:44, cursor:'pointer'}}>STATUS</button>
      </div>
    </div>
  );
}
