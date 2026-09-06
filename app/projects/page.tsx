export default function ProjectsPage() {
  return (
    <main style={{minHeight:'100vh', background:'#000', color:'#fff', fontFamily:'monospace', padding:'32px 20px'}}>
      <div style={{maxWidth:'900px', margin:'0 auto', textAlign:'center'}}>
        
        <div style={{
          width:'120px', height:'120px', margin:'0 auto 24px auto',
          borderRadius:'50%',
          background:'radial-gradient(circle at 30% 30%, #FF8A00, #FF3300 30%, #4A0A00 65%, #000 100%)',
          boxShadow:'0 0 30px #FF3300CC, 0 0 60px #FF330088, 0 0 100px #FF330044',
          position:'relative'
        }}>
          <div style={{
            position:'absolute', inset:'-10px',
            borderRadius:'50%',
            background:'radial-gradient(circle, #FF330040, transparent 70%)',
            filter:'blur(12px)'
          }} />
        </div>

        <h1 style={{fontSize:'64px', fontWeight:'900', margin:0, letterSpacing:'-3px'}}>PROJECTS</h1>
        <p style={{color:'#FF0033', letterSpacing:'4px', fontSize:'12px', marginTop:'8px'}}>_V07 / ARCHIVE / DROP ENGINE</p>
        
        <div style={{marginTop:'40px', display:'flex', flexDirection:'column', gap:'12px', textAlign:'left'}}>
          <div style={{border:'1px solid #222', background:'#0A0A0A', padding:'20px'}}>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', opacity:0.5}}>
              <span>DROP-001 // V07</span><span style={{color:'#7CFF9C'}}>LIVE - 06/09</span>
            </div>
            <h3 style={{margin:'12px 0 4px 0', fontSize:'20px'}}>MAG CORE - MULTIVERSE_OS</h3>
            <p style={{fontSize:'11px', opacity:0.6}}>mag-core-v07.vercel.app - 6 routes - SEO CORE LIVE</p>
          </div>
          <div style={{border:'1px solid #1A1A1A', background:'#080808', padding:'20px', opacity:0.6}}>
            <div style={{fontSize:'11px', opacity:0.5}}>DROP-002 // V08 - 06/09</div>
            <h3 style={{margin:'12px 0 4px 0'}}>NEURAL LEAK</h3>
            <p style={{fontSize:'11px'}}>BUILDING IN /lab - EXP-02</p>
          </div>
          <div style={{border:'1px solid #1A1A1A', background:'#080808', padding:'20px', opacity:0.4}}>
            <div style={{fontSize:'11px'}}>DROP-003 // V08.1</div>
            <h3 style={{margin:'12px 0 4px 0'}}>GLITCH PROTOCOL</h3>
            <p style={{fontSize:'11px'}}>QUEUED - EXP-01 ACTIVE</p>
          </div>
        </div>

        <div style={{marginTop:'32px', fontSize:'11px', opacity:0.3}}>
          <a href="/multiverse" style={{color:'#fff', marginRight:'16px'}}>← MULTIVERSE</a>
          <a href="/status" style={{color:'#fff'}}>STATUS →</a>
        </div>
      </div>
    </main>
  );
}
