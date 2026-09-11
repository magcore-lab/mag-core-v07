"use client";
import { useState } from "react";
import Orb from "./Orb";
import Window from "./Window";

export default function Desktop() {
  const [open, setOpen] = useState<string | null>(null);
  
  return (
    <div style={{ 
      background: '#000000', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Orb = click to close */}
      <button onClick={() => setOpen(null)} style={{ zIndex: 20, background: 'transparent', border: 'none', cursor: 'pointer' }}>
        <Orb />
      </button>

      <div style={{ zIndex: 20, marginTop: '24px', display: 'flex', gap: '10px', fontFamily: 'monospace', fontSize: '10px', letterSpacing: '2px' }}>
        {["LAB","PROJECTS","DROP","STATUS"].map((id) => (
          <button key={id} onClick={() => setOpen(id)} style={{
            padding: '8px 16px', borderRadius: '9999px',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(4px)', cursor: 'pointer'
          }}>{id}</button>
        ))}
      </div>

      {open && (
        <Window title={`${open} • MAG CORE V0.8 BLACK EDITION • #000 VR CINEMA • 1.5m`} onClose={() => setOpen(null)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ color: 'white' }}>Module {open} — Quantum Fusion</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px' }}>
              Fond #000 pur • Orb #A51205 maîtrisé • Bordure blanche 2px • Safe zone ±15° • 1.2m readable
            </div>
          </div>
        </Window>
      )}

      <div style={{ position: 'absolute', bottom: '20px', fontFamily: 'monospace', fontSize: '8px', letterSpacing: '3px', color: 'rgba(255,255,255,0.15)' }}>
        MAG CORE ENGINE • V0.8 BLACK EDITION • #000 • VR CINEMA • #A51205
      </div>
    </div>
  );
}
