export default function DropPage() {
  return (
    <main style={{minHeight:'100vh', background:'#000', color:'#fff', fontFamily:'monospace', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px'}}>
      <div style={{maxWidth:'500px', width:'100%', textAlign:'center', border:'1px solid #FF003333', background:'#110000', padding:'40px 24px'}}>
        <div style={{width:'60px', height:'60px', margin:'0 auto 24px auto', borderRadius:'50%', background:'radial-gradient(circle, #FF3300, #000)', boxShadow:'0 0 40px #FF0033AA'}} />
        <h1 style={{fontSize:'42px', fontWeight:'900', margin:0}}>DROP</h1>
        <p style={{letterSpacing:'4px', fontSize:'10px', opacity:0.5, marginTop:'8px'}}>MAG CORE V07 - ACCESS GATE</p>
        <div style={{marginTop:'32px', border:'1px solid #222', background:'#000', padding:'16px', fontSize:'11px', textAlign:'left', lineHeight:'1.8'}}>
          <p>> checking allowlist... standby</p>
          <p>> quota - DEPASSE 05/09</p>
          <p>> next window: <span style={{color:'#FFD700'}}>06/09 12:10 EU PARIS</span></p>
          <p style={{marginTop:'12px', color:'#7CFF9C'}}>> system ready for V08</p>
        </div>
        <div style={{marginTop:'24px', display:'flex', gap:'12px', justifyContent:'center'}}>
          <a href="/projects" style={{border:'1px solid #222', padding:'10px 16px', color:'#fff', textDecoration:'none', fontSize:'11px'}}>ARCHIVE</a>
          <a href="/multiverse" style={{background:'#FF0033', padding:'10px 16px', color:'#fff', textDecoration:'none', fontSize:'11px'}}>ENTER</a>
        </div>
      </div>
    </main>
  );
}
