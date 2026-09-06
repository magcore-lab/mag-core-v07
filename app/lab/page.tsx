import Link from "next/link";

export default function LabPage() {
  const exps = [
    {
      id: "EXP-01",
      title: "GLITCH PROTOCOL",
      status: "ACTIVE",
      log: "Injection de bruit visuel dans le core",
      color: "#FF0033"
    },
    {
      id: "EXP-02", 
      title: "NEURAL LEAK",
      status: "STANDBY",
      log: "Fuite mémoire multiverse détectée 04:22",
      color: "#FFD700"
    },
    {
      id: "EXP-03",
      title: "DROP ENGINE",
      status: "BUILDING",
      log: "Générateur de releases auto V08",
      color: "#7CFF9C"
    },
    {
      id: "EXP-04",
      title: "C2PA MANIFEST",
      status: "ACTIVE",
      log: "Attestation preuve /evidence",
      color: "#FF0033"
    }
  ];

  return (
    <main style={{minHeight:'100vh', background:'#000', color:'#fff', padding:'24px', fontFamily:'monospace'}}>
      <div style={{maxWidth:'1000px', margin:'0 auto'}}>
        
        {/* HEADER */}
        <div style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #222', paddingBottom:'20px', marginBottom:'32px'}}>
          <div>
            <h1 style={{fontSize:'48px', fontWeight:'900', letterSpacing:'-2px'}}>LAB<span style={{color:'#FF0033'}}>_V07</span></h1>
            <p style={{fontSize:'12px', opacity:0.5}}>MAG CORE / EXPERIMENTAL ZONE / EU PARIS</p>
          </div>
          <div style={{textAlign:'right', fontSize:'11px'}}>
            <p>STATUS: <span style={{color:'#7CFF9C'}}>OPERATIONAL</span></p>
            <p style={{color:'#FF0033'}}>● REC LIVE</p>
            <Link href="/status" style={{color:'#fff', opacity:0.5, textDecoration:'underline', marginTop:'8px', display:'block'}}>→ STATUS</Link>
          </div>
        </div>

        {/* GRID */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'12px'}}>
          {exps.map(exp => (
            <div key={exp.id} style={{border:'1px solid #1A1A1A', background:'#0A0A0A', padding:'20px', position:'relative'}}>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'10px', opacity:0.5, marginBottom:'16px'}}>
                <span>{exp.id}</span>
                <span style={{color: exp.color}}>{exp.status}</span>
              </div>
              <h2 style={{fontSize:'18px', fontWeight:'900', marginBottom:'8px'}}>{exp.title}</h2>
              <p style={{fontSize:'11px', opacity:0.6, lineHeight:'1.4'}}>> {exp.log}</p>
              <div style={{marginTop:'20px', height:'2px', width:'100%', background:`linear-gradient(90deg, ${exp.color}, transparent)`}} />
            </div>
          ))}
        </div>

        {/* TERMINAL */}
        <div style={{marginTop:'40px', border:'1px solid #222', background:'#111', padding:'16px', fontSize:'11px', opacity:0.7, lineHeight:'1.8'}}>
          <p>> lab initialized... ok</p>
          <p>> loading exps 4/4... done</p>
          <p>> connecting to /multiverse... <span style={{color:'#7CFF9C'}}>connected</span></p>
          <p>> awaiting input from /drop... <span style={{color:'#FFD700'}}>standby</span></p>
          <p style={{marginTop:'8px', opacity:0.4}}>_</p>
        </div>

        <div style={{marginTop:'24px', display:'flex', gap:'12px'}}>
          <Link href="/multiverse" style={{border:'1px solid #222', padding:'10px 16px', color:'#fff', textDecoration:'none', fontSize:'12px'}}>← MULTIVERSE</Link>
          <Link href="/projects" style={{border:'1px solid #222', padding:'10px 16px', color:'#fff', textDecoration:'none', fontSize:'12px'}}>PROJECTS →</Link>
        </div>

      </div>
    </main>
  );
}
