export default function StatusPage() {
  return (
    <main style={{minHeight:'100vh', background:'#000', color:'#fff', padding:'24px', fontFamily:'monospace'}}>
      <div style={{maxWidth:'800px', margin:'0 auto'}}>
        <h1 style={{fontSize:'36px', fontWeight:'900'}}>MAG CORE <span style={{color:'#FF0033'}}>STATUS</span></h1>
        <p style={{fontSize:'12px', opacity:0.5, marginBottom:'24px'}}>mag-core-v07.vercel.app / EU Paris / LIVE</p>
        
        <div style={{border:'1px solid #222', background:'#111', padding:'16px', marginBottom:'24px'}}>
          <p style={{fontSize:'12px', marginBottom:'8px'}}>SEO CORE</p>
          <p style={{fontSize:'12px'}}>robots.ts - <span style={{color:'#7CFF9C'}}>LIVE</span></p>
          <p style={{fontSize:'12px'}}>sitemap.ts - <span style={{color:'#7CFF9C'}}>6 URLs</span></p>
          <p style={{fontSize:'12px'}}>Search Console - <span style={{color:'#7CFF9C'}}>SUCCES</span></p>
          <p style={{fontSize:'12px'}}>Quota - <span style={{color:'#FFD700'}}>DEPASSE 05/09 - RESET 06/09 12:10</span></p>
        </div>

        <div style={{display:'grid', gap:'8px'}}>
          <div style={{border:'1px solid #222', padding:'12px', background:'#0A0A0A'}}> / - HOME - OPERATIONAL - INDEXEE</div>
          <div style={{border:'1px solid #222', padding:'12px', background:'#0A0A0A'}}> /multiverse - DETECTEE - EN ATTENTE</div>
          <div style={{border:'1px solid #222', padding:'12px', background:'#0A0A0A'}}> /lab - DETECTEE - EN ATTENTE</div>
          <div style={{border:'1px solid #222', padding:'12px', background:'#0A0A0A'}}> /projects - DETECTEE - EN ATTENTE</div>
          <div style={{border:'1px solid #222', padding:'12px', background:'#0A0A0A'}}> /drop - DETECTEE - EN ATTENTE</div>
          <div style={{border:'1px solid #222', padding:'12px', background:'#0A0A0A'}}> /status - OPERATIONAL - LIVE</div>
        </div>
      </div>
    </main>
  );
}
