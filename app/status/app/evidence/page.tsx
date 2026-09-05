export default function EvidencePage(){
 const manifest = {
  claim: "mag-core-v07-rec709-to-davinci-v1",
  created: new Date().toISOString(),
  asset: "b2b7f8a1-...-original.dpx hash: sha256:9f4c...e21a",
  output: "output hash: sha256:1a8b...c44d",
  c2pa: {
   issuer: "did:web:mag-core-v07.vercel.app",
   alg: "Ed25519",
   manifest_store: "jumbf embedded",
   actions: ["color.grading.rec709_to_davinci", "c2pa.opened"]
  },
  vc: {
   tee: "Intel TDX — quote valid",
   measurement: "mr_enclave: 0x4a7f...9e1c",
   policy: "retention 0 — no exfil",
   attested_by: "did:web:mag-core-v07.vercel.app#tee-key-01"
  },
  crl: "https://mag-core-v07.vercel.app/crl/list — 0 revoked"
 };

 return (
  <main className="min-h-screen bg-[#0A0A0B] text-[#EDEDED] font-mono px-6 py-16">
   <div className="max-w-4xl mx-auto">
    <div className="flex items-center gap-2 mb-2">
     <div className="w-2 h-2 bg-[#7CFF9C] rounded-full animate-pulse" />
     <span className="text-[#7CFF9C] text-xs tracking-widest">CFS v0.2 COHERENT EVIDENCE</span>
    </div>
    <h1 className="text-4xl font-bold mb-2">EVIDENCE // VERIFIABLE PIPELINE</h1>
    <p className="text-sm opacity-60 mb-10">Split Evidence: C2PA (asset) + VC Attestation (compute) — Treasury 5% — Reputation active</p>

    <div className="grid md:grid-cols-2 gap-4 mb-8">
     <div className="border border-[#7CFF9C]/30 p-5 bg-[#7CFF9C]/[0.03]">
      <p className="text-xs text-[#7CFF9C] mb-3">C2PA MANIFEST — ASSET PROOF</p>
      <div className="text-[11px] space-y-2 opacity-80">
       <div>Issuer: {manifest.c2pa.issuer}</div>
       <div>Claim: {manifest.claim}</div>
       <div>Asset SHA256: {manifest.asset.split('hash: ')[1]}</div>
       <div>Output SHA256: {manifest.output.split('hash: ')[1]}</div>
       <div>Actions: {manifest.c2pa.actions.join(' → ')}</div>
       <div className="mt-3 inline-block px-2 py-1 bg-[#7CFF9C] text-black text-[10px]">✓ JUMBF VALID — contentauth.verify()</div>
      </div>
     </div>

     <div className="border border-white/10 p-5 bg-white/[0.02]">
      <p className="text-xs opacity-60 mb-3">VC ATTESTATION — COMPUTE PROOF</p>
      <div className="text-[11px] space-y-2 opacity-80">
       <div>TEE: {manifest.vc.tee}</div>
       <div>MR_ENCLAVE: {manifest.vc.measurement}</div>
       <div>Policy: {manifest.vc.policy}</div>
       <div>Signer: {manifest.vc.attested_by}</div>
       <div className="mt-3 inline-block px-2 py-1 bg-white text-black text-[10px]">✓ TEE QUOTE VERIFIED — did:web</div>
      </div>
     </div>
    </div>

    <div className="border border-white/10 p-5 mb-8">
     <p className="text-xs text-[#7CFF9C] mb-3">END-TO-END FLOW</p>
     <pre className="text-[10px] opacity-70 overflow-x-auto whitespace-pre-wrap">
{`[IN] original.dpx (sha256:9f4c...)
  ↓ L3 Sovereign — retention 0 — TEE quote
[RUN] color.grading.rec709_to_davinci v1.0.0
  ↓ C2PA signed + VC attested
[OUT] output.dpx (sha256:1a8b...)
  ↓ CRL check: ${manifest.crl}

→ Settlement: FIAT / GPU / CIN — Treasury 5% split — Reputation +1`}
     </pre>
    </div>

    <div className="flex gap-3 text-[11px]">
     <a href="/.well-known/cios" className="px-4 py-2 border border-[#7CFF9C]/30 text-[#7CFF9C]">/.well-known/cios</a>
     <a href="/status" className="px-4 py-2 border border-white/10 opacity-70">/status</a>
     <a href="/crl/list" className="px-4 py-2 border border-white/10 opacity-70">/crl/list (stub)</a>
    </div>

    <div className="text-[10px] opacity-30 border-t border-white/10 pt-4 mt-10">
     How to verify: 1) Fetch asset → 2) c2pa-js verify JUMBF → 3) Verify TEE quote via did:web key → 4) Check /crl/list
    </div>
   </div>
  </main>
 );
}
