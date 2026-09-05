export default function Lab(){
 return(
  <main className="min-h-screen bg-black text-white">
   <div className="border-b border-white/10 px-6 py-4 flex justify-between text-[11px] tracking-[0.3em] text-neutral-500">
    <a href="/multiverse">← CORE</a><span className="text-red-500/60">LAB_V07 // ACTIVE</span>
   </div>
   <div className="p-6 md:p-10 max-w-6xl mx-auto">
    <h1 className="text-6xl font-black">LAB<span className="text-red-500">01</span></h1>
    <p className="text-neutral-500 tracking-widest text-xs mt-2">EXPERIMENTS / R&D / PROTOTYPES</p>
    <div className="mt-12 grid md:grid-cols-2 gap-6">
     <div className="rounded-[32px] bg-[#3a1a12] border border-white/5 p-8"><p className="text-[10px] text-red-400">EXP-07 // LIVE</p><h3 className="text-2xl font-bold mt-8">NEURAL GHOST</h3><p className="text-sm text-neutral-400 mt-2">Agent autonome V07</p></div>
     <div className="rounded-[32px] bg-[#1a1a1a] border border-white/5 p-8"><p className="text-[10px] text-neutral-500">EXP-08 // WIP</p><h3 className="text-2xl font-bold mt-8">VOICE CORE</h3><p className="text-sm text-neutral-400 mt-2">TTS temps réel</p></div>
    </div>
   </div>
  </main>
 )
}
