export default function Drop(){
 return(
  <main className="min-h-screen bg-black text-white flex flex-col">
   <div className="border-b border-white/10 px-6 py-4 flex justify-between text-[11px] tracking-[0.3em] text-neutral-500">
    <a href="/multiverse">← CORE</a><span className="text-red-500/60">DROP_V07 // LOCKED</span>
   </div>
   <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
    <p className="text-[11px] tracking-[0.4em] text-red-500">NEXT RELEASE</p>
    <h1 className="text-7xl md:text-8xl font-black mt-6">DROP<span className="text-red-500">03</span></h1>
    <div className="mt-12 rounded-[32px] bg-[#1a1a1a] border border-white/10 px-10 py-12">
      <p className="text-5xl md:text-6xl font-mono tracking-wider">00:14:22:08</p>
      <p className="mt-4 text-[10px] tracking-[0.3em] text-neutral-500">DAYS : HOURS : MIN : SEC</p>
    </div>
    <button className="mt-12 bg-white text-black rounded-full px-10 py-4 text-[11px] font-bold tracking-widest">JOIN VAULT →</button>
    <p className="mt-6 text-[10px] text-neutral-600 tracking-widest">WHITELIST ONLY // 47 SPOTS LEFT</p>
   </div>
  </main>
 )
}
