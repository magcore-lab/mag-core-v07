export default function Page() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center relative">
      <div className="absolute w-[900px] h-[900px] bg-orange-600/25 blur-[140px] rounded-full" />
      <img src="/magma_core_realistic_transparent.png" alt="MAG CORE" className="w-[min(72vw,620px)] h-auto z-10" style={{filter:'drop-shadow(0 0 100px rgba(255,69,0,0.9))'}} />
      <p className="mt-8 font-mono text-[10px] tracking-[0.4em] text-white/40 z-10">MAG CORE V07 — MULTIVERSE_OS // READY</p>
      <a href="/multiverse" className="mt-6 px-8 py-3 bg-[#ff3b30] rounded-full text-white text-xs tracking-widest z-10">ENTER THE MULTIVERSE</a>
    </main>
  )
}
