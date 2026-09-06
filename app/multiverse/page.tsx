import Link from "next/link";

export default function MultiversePage() {
  return (
    <main style={{
      minHeight:'100vh', 
      background:'#000', 
      color:'#fff', 
      fontFamily:'monospace',
      position:'relative',
      overflow:'hidden'
    }}>
      {/* BACKGROUND LAVA GLOW */}
      <div style={{
        position:'absolute', top:'-50%', left:'-20%', width:'140%', height:'140%',
        background:'radial-gradient(circle at 30% 30%, #FF1A1A22 0%, #000 60%)',
        pointerEvents:'none'
      }} />

      <div style={{position:'relative', maxWidth:'1100px', margin:'0 auto', padding:'40px 24px'}}>
        
        {/* HEADER */}
        <div style={{marginBottom:'48px'}}>
          <div style={{display:'flex', alignItems:'baseline', gap:'16px'}}>
            <h1 style={{fontSize:'84px', fontWeight:'900', letterSpacing:'-4px', lineHeight:0.9, margin:0}}>
              MULTIVERSE
            </h1>
          </div>
          <h2 style={{fontSize:'84px', fontWeight:'900', color:'#FF0033', letterSpacing:'-4px', lineHeight:0.9, margin:0, textShadow:'0 0 40px #FF0033AA'}}>
            _V07
          </h2>
          <p style={{marginTop:'16px', fontSize:'14px', letterSpacing:'4px', opacity:0.5}}>
            Etat du systeme / Sante / Multiverse_OS // READY
          </p>
        </div>

        {/* GRID V07 */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'16px'}}>

          <Link href="/status" style={{textDecoration:'none', color:'#fff'}}>
            <div style={{
              border:'1px solid #222', background:'#0A0A0A', padding:'24px',
              transition:'all 0.2s', cursor:'pointer'
            }}>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', opacity:0.4}}>
                <span>04 // CORE</span>
                <span style={{color:'#7CFF9C'}}>● LIVE</span>
              </div>
              <h3 style={{fontSize:'28px', fontWeight:'900', margin:'16px 0 8px 0'}}>STATUT</h3>
              <p style={{fontSize:'12px', opacity:0.6, lineHeight:1.5}}>Etat du systeme / Sante → ENTRER<br/>SEO CORE / ROBOTS / SITEMAP</p>
              <div style={{marginTop:'20px', height:'2px', background:'linear-gradient(90deg, #7CFF9C, transparent)'}} />
            </div>
          </Link>

          <Link href="/evidence" style={{textDecoration:'none', color:'#fff'}}>
            <div style={{
              border:'1px solid #FF003322', background:'#110000', padding:'24px',
              boxShadow:'0 0 30px #FF003311 inset'
            }}>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', opacity:0.4}}>
                <span>05 // C2PA</span>
                <span style={{color:'#FF0033'}}>● SECURE</span>
              </div>
              <h3 style={{fontSize:'28px', fontWeight:'900', margin:'16px 0 8px 0'}}>PREUVES</h3>
              <p style={{fontSize:'12px', opacity:0.6, lineHeight:1.5}}>Manifeste C2PA / Attestation<br/>Preuve d'authenticite MAG CORE</p>
              <div style={{marginTop:'20px', height:'2px', background:'linear-gradient(90deg, #FF0033, transparent)'}} />
            </div>
          </Link>

          <Link href="/lab" style={{textDecoration:'none', color:'#fff'}}>
            <div style={{border:'1px solid #222', background:'#0A0A0A', padding:'24px'}}>
              <div style={{fontSize:'11px', opacity:0.4}}>03 // EXP</div>
              <h3 style={{fontSize:'28px', fontWeight:'900', margin:'16px 0 8px 0'}}>LAB</h3>
              <p style={{fontSize:'12px', opacity:0.6}}>Zone experimentale / 4 EXP ACTIVE</p>
              <div style={{marginTop:'20px', height:'2px', background:'linear-gradient(90deg, #FFD700, transparent)'}} />
            </div>
          </Link>

          <Link href="/projects" style={{textDecoration:'none', color:'#fff'}}>
            <div style={{border:'1px solid #222', background:'#0A0A0A', padding:'24px'}}>
              <div style={{fontSize:'11px', opacity:0.4}}>02 // DROP</div>
              <h3 style={{fontSize:'28px', fontWeight:'900', margin:'16px 0 8px 0'}}>PROJECTS</h3>
              <p style={{fontSize:'12px', opacity:0.6}}>Releases / Drops V07-V08</p>
              <div style={{marginTop:'20px', height:'2px', background:'#444 0%, transparent 100%'}} />
            </div>
          </Link>

        </div>

        {/* FOOTER TERMINAL */}
        <div style={{marginTop:'48px', borderTop:'1px solid #111', paddingTop:'16px', fontSize:'10px', opacity:0.3, display:'flex', gap:'24px'}}>
          <span>mag-core-v07.vercel.app</span>
          <span>EU PARIS</span>
          <span style={{color:'#7CFF9C'}}>OPERATIONAL</span>
          <span>776c1d8 → NEXT</span>
        </div>

      </div>
    </main>
  );
}
