
"use client"
import { useState } from "react"
import Link from "next/link"

const SUNS = [
  { id: "off", label: "SUN 0 - OFF", desc: "Vantablack. Origin. Reset. Code noir pur, base system.", color: "border-zinc-800" },
  { id: "veille", label: "SUN 50 - VEILLE", desc: "Half-lit. Watching. Lab mode actif, en attente.", color: "border-yellow-500/40" },
  { id: "active", label: "SUN 100 - ACTIVE", desc: "Double Gold. Full power. Drop imminent.", color: "border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.2)]" },
]

export default function Lab() {
  const [active, setActive] = useState("veille")
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <Link href="/" className="text-[10px] tracking-[0.4em] text-zinc-600 hover:text-yellow-500">← CORE</Link>
      <h1 className="text-5xl tracking-[0.3em] mt-8">/LAB</h1>
      <p className="text-zinc-500 text-sm tracking-widest mt-2">MAG CORE OS v07 — ATELIER SUN</p>

      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-6xl">
        {SUNS.map(s => (
          <button key={s.id} onClick={()=>setActive(s.id)}
            className={`text-left border bg-zinc-950 p-8 transition ${s.color} ${active===s.id? "opacity-100" : "opacity-60 hover:opacity-90"}`}>
            <p className="text-yellow-500 text-xs">{s.id.toUpperCase()}</p>
            <h2 className="text-xl mt-3 tracking-widest">{s.label}</h2>
            <p className="text-zinc-500 text-sm mt-4 leading-relaxed">{s.desc}</p>
            {active===s.id && <p className="mt-6 text-[10px] tracking-[0.3em] text-yellow-500">ACTIVE →</p>}
          </button>
        ))}
      </div>

      <div className="mt-16 border border-zinc-900 p-6 max-w-6xl">
        <p className="text-xs text-zinc-600 tracking-widest">SYSTEM LOG</p>
        <p className="text-sm text-zinc-400 mt-3 font-mono">{`> SUN_MODE=${active.toUpperCase()} // ready for /drop and /multiverse build`}</p>
      </div>
    </div>
  )
}
