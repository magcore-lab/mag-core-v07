export default function DropPage() {
  return (
    <main style={{minHeight:'100vh', background:'#000', color:'#fff', fontFamily:'monospace', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div style={{border:'1px solid #222', background:'#0A0A0A', padding:'32px', textAlign:'center', maxWidth:'400px'}}>
        <h1 style={{fontSize:'40px', fontWeight:'900', margin:0}}>DROP</h1>
        <p style={{fontSize:'10px', opacity:0.4, marginTop:'8px', letterSpacing:'3px'}}>MAG CORE V07 ACCESS GATE</p>
        <div style={{marginTop:'24px', background:'#000', border:'1px solid #111', padding:'12px', fontSize:'11px', textAlign:'left', lineHeight:'2'}}>
          <div>checking allowlist standby</div>
          <div>quota DEPASSE 05 09</div>
          <div>next window 06 09 12 10 EU PARIS</div>
          <div style={{marginTop:'10px', color:'#7CFF9C'}}>system ready for V08</div>
        </div>
        <div style={{marginTop:'20px', display:'flex', gap:'8px', justifyContent:'center'}}>
          <a href="/projects" style={{border:'1px solid #333', padding:'8px 12px', color:'#fff', textDecoration:'none', fontSize:'10px'}}>ARCHIVE</a>
          <a href="/multiverse" style={{background:'#FF0033', padding:'8px 12px', color:'#fff', textDecoration:'none', fontSize:'10px'}}>ENTER</a>
        </div>
      </div>
    </main>
  );
}
