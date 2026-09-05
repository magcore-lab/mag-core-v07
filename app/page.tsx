export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col font-sans selection:bg-[#ff0a1a]/30">
      {/* Glow behind core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,69,0,0.18)_0%,rgba(255,10,26,0.08)_30%,transparent_70%)] blur-[1px] -z-0" />

      {/* Perfect centered living core - NO BLACK FRAME */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 animate-[breathe_4s_ease-in-out_infinite]">
        <img
          src="/magma_core_realistic_transparent.png"
          alt="MAG CORE V07 Living Core"
          className="w-[min(70vw,640px)] h-auto object-contain select-none"
          style={{
            filter: 'drop-shadow(0 0 120px rgba(255,69,0,0.6)) drop-shadow(0 0 60px rgba(255,140,0,0.4))',
          }}
          draggable={false}
        />
      </div>

      {/* Top nav */}
      <nav className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-20">
        <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-500">MULTIVERSE_V07 // OPEN</span>
        <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_#34d399]" />
          SYSTEM ONLINE
        </div>
      </nav>

      {/* Title */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 text-center z-20 pointer-events-none">
        <p className="font-mono text-[12px] tracking-[0.4em] text-neutral-500 mb-2">MAG CORE</p>
        <h1 className="text-[64px] font-black text-white tracking-[-0.05em] leading-none">V07</h1>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 w-full flex flex-col items-center pb-12 gap-6 z-20">
        <p className="font-mono text-[11px] tracking-[0.2em] text-neutral-500 text-center px-4">
          MULTIVERSE OS — DOCUMENTAIRE TERRESTRE
        </p>

        <button className="group relative bg-[#ff0a1a] text-white px-12 py-4 rounded-full text-[13px] tracking-[0.15em] font-medium border border-white/20 shadow-[0_0_60px_rgba(255,10,26,0.7),inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_80px_rgba(255,10,26,0.9)] transition-all duration-300">
          <span className="relative z-10">ENTER THE MULTIVERSE</span>
          <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-60" />
        </button>

        <p className="font-mono text-[10px] tracking-widest text-neutral-600 text-center px-4">
          DRONE CINEMA / FRONTALE MAGMATIQUE / PLEIN ECRAN — 48.8566° N / 8K RAW
        </p>
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 120px rgba(255,69,0,0.6)) drop-shadow(0 0 60px rgba(255,140,0,0.4)) brightness(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.04);
            filter: drop-shadow(0 0 160px rgba(255,80,0,0.9)) drop-shadow(0 0 80px rgba(255,140,0,0.6)) brightness(1.15);
          }
        }
      `}</style>
    </main>
  );
}
