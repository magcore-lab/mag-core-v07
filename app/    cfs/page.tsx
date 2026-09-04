
export default function CFSPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-[#EDEDED] selection:bg-[#7CFF9C] selection:text-black font-sans antialiased">
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/10 z-[100]"><div className="h-full bg-[#7CFF9C] w-[100%]"></div></div>
      <div className="mx-auto max-w-[840px] px-6 py-20 md:py-28">
        <header className="mb-20">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em]">
            <span className="text-[#7CFF9C]">CIOS FEDERATION SPEC</span>
            <span className="h-px w-8 bg-white/20"></span>
            <span className="text-white/40">v0.1 COHERENT</span>
            <span className="ml-auto rounded-full border border-[#7CFF9C]/30 bg-[#7CFF9C]/10 px-2 py-0.5 text-[#7CFF9C]">LIVE</span>
          </div>
          <h1 className="mt-8 text-[42px] md:text-[64px] font-black leading-[0.9] tracking-[-0.04em]">De la Rupture<br/>à la <span className="text-[#7CFF9C]">Circulation.</span></h1>
          <p className="mt-6 max-w-[520px] text-[16px] leading-relaxed text-white/60">MAG CORE ne scale plus en grossissant. Il scale en se répliquant. 4 actes, 1 protocole.</p>
        </header>

        <section className="mb-24">
          <div className="mb-8 flex items-baseline gap-4"><span className="font-mono text-[11px] text-[#7CFF9C]">ACT I — 01</span><h2 className="text-2xl font-bold">RUPTURE</h2><span className="font-mono text-[11px] text-white/30">WHY</span></div>
          <div className="rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
            <p className="text-[18px] leading-[1.5] font-medium">Le LLM monolithique est mort. Ce qui émerge est un maillage d’agents qui négocient, délèguent et exécutent — <span className="text-white">un Agentic Mesh.</span></p>
            <div className="mt-8 grid md:grid-cols-3 gap-4 font-mono text-[12px]">
              <div className="rounded-xl bg-black border border-white/10 p-4"><div className="text-white/40">MCP</div><div className="mt-1 text-white">Contexte & tools</div></div>
              <div className="rounded-xl bg-black border border-white/10 p-4"><div className="text-white/40">A2A / ANP</div><div className="mt-1 text-white">Agents parlent aux agents</div></div>
              <div className="rounded-xl bg-[#7CFF9C] text-black p-4"><div className="opacity-60">CIOS</div><div className="mt-1 font-bold">Couche créative</div></div>
            </div>
            <div className="mt-10 grid gap-3 text-sm">
              <div className="flex gap-3"><span className="text-[#7CFF9C] font-mono text-xs">a)</span><span><b className="text-white">Souveraineté.</b> <span className="text-white/60">BYOI. On-premise, VPC, confidential.</span></span></div>
              <div className="flex gap-3"><span className="text-[#7CFF9C] font-mono text-xs">b)</span><span><b className="text-white">Partage monétisable.</b> <span className="text-white/60">Agent-as-a-Service, policy ne voyage pas.</span></span></div>
              <div className="flex gap-3"><span className="text-[#7CFF9C] font-mono text-xs">c)</span><span><b className="text-white">Certification.</b> <span className="text-white/60">C2PA + VC à chaque saut.</span></span></div>
            </div>
          </div>
          <div className="mt-6 font-mono text-[11px] text-white/30">→ Si la fédération est la réponse, le contrat en est le langage.</div>
        </section>

        <section className="mb-24">
          <div className="mb-8 flex items-baseline gap-4"><span className="font-mono text-[11px] text-[#7CFF9C]">ACT II — 02</span><h2 className="text-2xl font-bold">PROTOCOLE</h2><span className="font-mono text-[11px] text-white/30">HOW</span></div>
          <div className="rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
            <p className="text-white/80">Chaque <b className="text-white">nœud de capacité</b> expose un Contrat Fédéré.</p>
            <pre className="mt-6 overflow-auto rounded-xl bg-black p-5 font-mono text-[12px] border border-white/10">{`contract: {
  capability: "color.grading.rec709_to_davinci",
  policy: { region: "EU", retention: "0", byo_model: true },
  metering: { unit: "second", price: { fiat: 0.02, gpu: 0.1, cin: 1 } },
  revocation: "crl.cios.network/list"
}`}</pre>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-[10px]"><span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Intent</span><span className="py-1 text-white/20">→</span><span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Policy</span><span className="py-1 text-white/20">→</span><span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Discovery</span><span className="py-1 text-white/20">→</span><span className="rounded-full bg-[#7CFF9C] text-black px-3 py-1">Contract</span><span className="py-1 text-white/20">→</span><span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">A2A</span><span className="py-1 text-white/20">→</span><span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">C2PA Seal</span><span className="py-1 text-white/20">→</span><span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Settlement</span></div>
          </div>
          <div className="mt-6 font-mono text-[11px] text-white/30">→ Si le contrat est le langage, la gouvernance est celui qui l’applique.</div>
        </section>

        <section className="mb-24">
          <div className="mb-8 flex items-baseline gap-4"><span className="font-mono text-[11px] text-[#7CFF9C]">ACT III — 03</span><h2 className="text-2xl font-bold">ORDRE</h2><span className="font-mono text-[11px] text-white/30">WHO</span></div>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><div className="font-mono text-[10px] text-white/40">L1 COMPLIANT</div><div className="mt-2 font-bold">Interop</div></div>
            <div className="rounded-2xl border border-[#7CFF9C]/30 bg-[#7CFF9C]/10 p-6"><div className="font-mono text-[10px] text-[#7CFF9C]">L2 TRUSTED</div><div className="mt-2 font-bold">Confidentiel + audité</div></div>
            <div className="rounded-2xl border border-white/10 bg-white text-black p-6"><div className="font-mono text-[10px] opacity-50">L3 SOVEREIGN</div><div className="mt-2 font-bold">Peut certifier</div></div>
          </div>
          <div className="mt-6 rounded-xl border border-white/10 bg-black p-4 font-mono text-[11px] flex justify-between"><span className="text-white/40">Phase 1: MAG CORE root</span><span className="text-[#7CFF9C]">→ Phase 2: Conseil W3C</span></div>
        </section>

        <section className="mb-24">
          <div className="mb-8 flex items-baseline gap-4"><span className="font-mono text-[11px] text-[#7CFF9C]">ACT IV — 04</span><h2 className="text-2xl font-bold">FLUX</h2><span className="font-mono text-[11px] text-white/30">SUSTAIN</span></div>
          <div className="rounded-[20px] bg-[#7CFF9C] text-black p-8 md:p-10">
            <div className="font-mono text-[11px] opacity-60">CAPABILITY AS ASSET</div>
            <div className="mt-2 text-3xl font-black leading-[0.9]">On ne vend plus du TJM.<br/>On loue une capacité avec SLA.</div>
            <div className="mt-8 grid md:grid-cols-3 gap-3 font-mono text-[11px]">
              <div className="rounded-xl bg-black text-white p-4"><div className="opacity-50">FIAT</div><div className="font-bold">Stripe</div></div>
              <div className="rounded-xl bg-black text-white p-4"><div className="opacity-50">GPU</div><div className="font-bold">Akash / Render</div></div>
              <div className="rounded-xl bg-white text-black p-4"><div className="opacity-50">CIN</div><div className="font-bold">Staking / Slashing</div></div>
            </div>
            <div className="mt-8 border-t border-black/20 pt-4 font-black">La plateforme extrait la valeur. Le protocole la fait circuler.</div>
          </div>
        </section>

        <footer className="font-mono text-[10px] text-white/30 text-center">CFS v0.1 COHERENT — 4 actes, 1 protocole. // MAG CORE</footer>
      </div>
    </main>
  );
}
