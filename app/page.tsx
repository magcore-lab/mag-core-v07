// app/page.tsx
export default function Home() {
  return (
    <main style={{minHeight:'100vh', background:'#000', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'monospace'}}>
      <div style={{textAlign:'center'}}>
        <div style={{width:'80px', height:'80px', margin:'0 auto 20px', borderRadius:'50%', background:'radial-gradient(circle, #FF3300, #000)', boxShadow:'0 0 40px #FF3300'}} />
        <h1>MAG CORE V07</h1>
        <p style={{opacity:0.5, fontSize:'11px', marginTop:'8px'}}>MULTIVERSE_OS - LIVE</p>
        <div style={{marginTop:'20px', display:'flex', gap:'12px', justifyContent:'center', fontSize:'11px'}}>
          <a href="/projects" style={{color:'#fff'}}>PROJECTS</a>
          <a href="/drop" style={{color:'#fff'}}>DROP</a>
          <a href="/status" style={{color:'#fff'}}>STATUS</a>
        </div>
      </div>
    </main>
  );
}
