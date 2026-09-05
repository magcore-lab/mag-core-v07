export default function StatusPage(){
 return (
  <main className="min-h-screen bg-[#0A0A0B] text-[#EDEDED] font-mono px-6 py-16">
   <div className="max-w-3xl mx-auto">
    <div className="flex items-center gap-2 mb-2">
     <div className="w-2 h-2 bg-[#7CFF9C] rounded-full animate-pulse" />
     <span className="text-[#7CFF9C] text-xs tracking-widest">OPERATIONAL</span>
    </div>
    <h1 className="text-4xl font-bold mb-2">MAG CORE // STATUS</h1>
    <p className="text-sm opacity-60 mb-10">L3_SOVEREIGN ROOT — mag-core-v07.vercel.app — 7cb5cfd</p>

    <div className="border border-[#7CFF9C]/20 p-5 mb-6 bg-[#7CFF9C]/[0.03]">
     <div className="flex justify-between items-center">
      <span className="text-sm">mag-core-root-v07</span>
      <span className="text-xs px-2 py-1 bg-[#7CFF9C] text-black">L3 SOVEREIGN — LIVE</span>
     </div>
     <div className="mt-3 text-[11px] opacity-60 grid grid-cols-2 gap-2">
      <span>Region: EU (Paris)</span><span>Uptime: 99.99%</span>
      <span>Policy: retention 0</span><span>Latency p95: 42ms</span>
     </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
     <div className="border border-white/10 p-4">
      <div className="text-xs opacity-60 mb-2">L1 COMPLIANT</div>
      <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"/> <span className="text-xs">paris.node.01 — 68ms</span></div>
     </div>
     <div className="border border-[#7CFF9C]/30 p-4 bg-white/[0.02]">
      <div className="text-xs text-[#7CFF9C] mb-2">L2 TRUSTED</div>
      <div className="flex items-center gap-2"><div className="w-2 h-2 bg-[#7CFF9C] rounded-full animate-pulse"/> <span className="text-xs">seoul.dsp.enclave — 112ms</span></div>
     </div>
     <div className="border border-white/10 p-4">
      <div className="text-xs opacity-60 mb-2">L3 SOVEREIGN</div>
      <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"/> <span className="text-xs">mtl.calib.root — 24ms</span></div>
     </div>
    </div>

    <div className="border border-white/10 p-5 mb-8">
     <p className="text-xs text-[#7CFF9C] mb-3">VERIFICATION</p>
     <div className="space-y-2 text-xs">
      <div className="flex justify-between"><span className="opacity-60">C2PA Manifest</span><span className="text-[#7CFF9C]">✓ VALID</span></div>
      <div className="flex justify-between"><span className="opacity-60">VC Attestation (TEE)</span><span className="text-[#7CFF9C]">✓ VALID</span></div>
      <div className="flex justify-between"><span className="opacity-60">CRL / Revocation</span><span className="text-[#7CFF9C]">✓ 0 revoked</span></div>
      <div className="flex justify-between"><span className="opacity-60">Settlement Rails</span><span className="opacity-80">FIAT / GPU / CIN — OK</span></div>
     </div>
    </div>

    <div className="text-[10px] opacity-30 border-t border-white/10 pt-4">
     CFS v0.2 COHERENT — Evidence Split: C2PA (asset) + VC (compute). Treasury: 5% — Reputation: active.
    </div>
   </div>
  </main>
 );
}
