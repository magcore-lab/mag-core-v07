export default function Page() {
  return (
    <main className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute w-[800px] h-[800px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />
      <img
        src="/magma_core_realistic_transparent.png"
        alt="MAG CORE"
        className="w-[min(70vw,520px)] h-auto object-contain z-10"
        style={{ filter: 'drop-shadow(0 0 80px rgba(255,69,0,0.8))' }}
      />
      <p className="absolute top-6 left-6 font-mono text-[10px] tracking-widest text-white/50">MAG CORE V07</p>
      <button className="absolute bottom-10 px-6 py-3 bg-[#ff3b30] text-white text-xs tracking-widest rounded-full z-10">
        ENTER THE MULTIVERSE
      </button>
    </main>
  );
}
