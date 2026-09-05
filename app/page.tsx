export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Glow behind core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Perfect centered living core - NO BLACK FRAME */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src="/magma_core_realistic_transparent.png"
          alt="MAG CORE V07 Living Core"
          className="w-[min(70vw,640px)] h-auto object-contain select-none"
          style={{
            filter: 'drop-shadow(0 0 120px rgba(255,69,0,0.8)) drop-shadow(0 0 60px rgba(255,120,0,0.6))',
          }}
          draggable={false}
        />
      </div>

      {/* Top nav */}
      <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <span className="font-mono text-[11px] tracking-[0.3em] text-white/60">MAG CORE V07</span>
        <span className="font-mono text-[10px] text-white/40">Core 420px locked • FX 50M • Ready</span>
      </nav>

      {/* Bottom CTA */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button className="px-8 py-3 bg-[#ff3b30] hover:bg-[#ff4d40] text-white text-[11px] tracking-[0.2em] font-mono rounded-full transition-colors">
          ENTER THE MULTIVERSE
        </button>
      </div>
    </main>
  );
}
