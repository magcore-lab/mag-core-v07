"use client"
import Link from "next/link"

export default function Multiverse(){
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* HEADER */}
      <div className="p-6 flex justify-between items-center border-b border-white/10">
        <Link href="/" className="text-xs tracking-[0.3em] text-white/50 hover:text-white">← CORE</Link>
        <span className="text-[10px] tracking-[0.4em] text-red-500/70">MULTIVERSE_V07 // OPEN</span>
      </div>

      {/* TITLE */}
      <div className="px-6 pt-12 pb-8">
        <h1 className="text-5xl font-black tracking-tighter">MULTI<span className="text-red-500">VERSE</span></h1>
        <p className="text-white/40 text-xs mt-2 tracking-widest">SELECT A DIMENSION TO ENTER</p>
      </div>

      {/* GRID 3 PORTALS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 flex-1">
        {[
          { id:"LAB", desc:"Experiments / R&D / Prototypes", color:"from-orange-500/20 to-red-500/20", border:"hover:border-orange-500/50" },
          { id:"PROJECTS", desc:"Deployed Systems / Builds / Drops", color:"from-red-500/20 to-orange-500/20", border:"hover:border-red-500/50" },
          { id:"DROP", desc:"Vault / Assets / Exclusive", color:"from-white/10 to-white/5", border:"hover:border-white/30" },
        ].map((p)=>(
          <Link key={p.id} href={`/${p.id.toLowerCase()}`}
            className={`group relative rounded-[24px] border border-white/10 bg-gradient-to-br ${p.color} ${p.border} p-8 flex flex-col justify-between min-h-[280px] transition-all duration-500 hover:scale-[0.98]`}>
            <div className="flex justify-between">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] tracking-widest text-white/30">0{["1","2","3"][["LAB","PROJECTS","DROP"].indexOf(p.id)]}</span>
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight group-hover:tracking-widest transition-all">{p.id}</h2>
              <p className="text-xs text-white/40 mt-2">{p.desc}</p>
            </div>
            <div className="text-[10px] tracking-[0.3em] text-white/20 group-hover:text-white/60">ENTER →</div>
            {/* GLOW */}
            <div className="absolute -inset-px rounded-[24px] bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/20 group-hover:to-orange-500/20 blur-xl -z-10 transition-all" />
          </Link>
        ))}
      </div>

      <div className="p-6 text-center text-[10px] tracking-[0.5em] text-white/20">MAG_CORE_V07 // PARIS</div>
    </main>
  )
}
