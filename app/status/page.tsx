export default function StatusPage() {
  return (
    <main style={{
      minHeight:'100vh', background:'#000', color:'#fff', 
      fontFamily:'monospace', padding:'32px 20px'
    }}>
      <div style={{maxWidth:'700px', margin:'0 auto'}}>
        
        {/* TITLE */}
        <div style={{display:'flex', gap:'16px', alignItems:'baseline', marginBottom:'8px'}}>
          <h1 style={{fontSize:'56px', fontWeight:'900', margin:0, letterSpacing:'-2px'}}>MAG CORE</h1>
          <h1 style={{fontSize:'56px', fontWeight:'900', margin:0, color:'#FF0033'}}>STATUS</h1>
        </div>
        <p style={{fontSize:'12px', opacity:0.4, letterSpacing:'2px', marginBottom:'32px'}}>
          mag-core-v07.vercel.app / EU Paris / LIVE / 776c1d8
        </p>

        {/* SEO CORE BOX */}
        <div style={{
          border:'1px solid #1A1A1A', background:'#0A0A0A', 
          padding:'20px', marginBottom:'24px'
        }}>
          <p style={{margin:'0 0 16px 0', fontSize:'12px', opacity:0.5}}>SEO CORE</p>
          <p style={{margin:'6px 0', fontSize:'14px'}}>robots.ts - <span style={{color:'#7CFF9C'}}>LIVE</span></p>
          <p style={{margin:'6px 0', fontSize:'14px'}}>sitemap.ts - <span style={{color:'#7CFF9C'}}>6 URLs</span></p>
          <p style={{margin:'6px 0', fontSize:'14px'}}>Search Console - <span style={{color:'#7CFF9C'}}>SUCCES</span></p>
          <p style={{margin:'6px 0', fontSize:'14px'}}>Quota - <span style={{color:'#FFD700'}}>DEPASSE 05/09 - RESET 06/09 12:10</span></p>
        </div>

        {/* ROUTES */}
        <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
          
          <div style={{border:'1px solid #222', background:'#111', padding:'16px', display:'flex', justifyContent:'space-between'}}>
            <span>/ - HOME</span>
            <span style={{color:'#7CFF9C'}}>OPERATIONAL - INDEXEE</span>
          </div>

          <div style={{border:'1px solid #333', background:'#0F0F0F', padding:'16px', display:'flex', justifyContent:'space-between'}}>
            <span>/multiverse</span>
            <span style={{color:'#FFD700'}}>DETECTEE - EN ATTENTE</span>
          </div>

          <div style={{border:'1px solid #333', background:'#0F0F0F', padding:'16px', display:'flex', justifyContent:'space-between'}}>
            <span>/lab</span>
            <span style={{color:'#FFD700'}}>DETECTEE - EN ATTENTE</span>
          </div>

          <div style={{border:'1px solid #333', background:'#0F0F0F', padding:'16px', display:'flex', justifyContent:'space-between'}}>
            <span>/projects</span>
            <span style={{color:'#FFD700'}}>DETECTEE - EN ATTENTE</span>
          </div>

          <div style={{border:'1px solid #333', background:'#0F0F0F', padding:'16px', display:'flex', justifyContent:'space-between'}}>
            <span>/drop</span>
            <span style={{color:'#FFD700'}}>DETECTEE - EN ATTENTE</span>
          </div>

          <div style={{border:'1px solid #7CFF9C44', background:'#07120A', padding:'16px', display:'flex', justifyContent:'space-between'}}>
            <span>/status</span>
            <span style={{color:'#7CFF9C'}}>OPERATIONAL - LIVE</span>
          </div>

        </div>

        {/* PROGRESS BAR */}
        <div style={{marginTop:'32px'}}>
          <p style={{fontSize:'11px', opacity:0.5, marginBottom:'8px'}}>INDEXATION PROGRESS - 2/6</p>
          <div style={{width:'100%', height:'4px', background:'#1A1A1A'}}>
            <div style={{width:'33%', height:'100%', background:'#7CFF9C', boxShadow:'0 0 10px #7CFF9C'}} />
          </div>
          <p style={{fontSize:'10px', opacity:0.3, marginTop:'8px'}}>NEXT RESET: 06/09 12:10 - 4 URLs restantes</p>
        </div>

        <div style={{marginTop:'24px', fontSize:'11px', opacity:0.3}}>
          <a href="/multiverse" style={{color:'#fff', marginRight:'16px'}}>← MULTIVERSE</a>
          <a href="/" style={{color:'#fff'}}>HOME</a>
        </div>

      </div>
    </main>
  );
}
