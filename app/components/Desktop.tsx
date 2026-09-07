"use client";
export default function Desktop(){
  return (
    <div style={{background:'black',height:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', overflow:'hidden'}}>
      <div style={{width:130,height:130,borderRadius:'50%',background:'radial-gradient(circle, #ff4a2a 0%, #a00000 100%)',boxShadow:'0 0 90px #ff2000'}} />
      <h1 style={{color:'white',fontFamily:'monospace',marginTop:28,letterSpacing:'0.4em',fontSize:22}}>MAG CORE V07</h1>
      <p style={{color:'#666',fontFamily:'monospace',fontSize:10,marginTop:8,letterSpacing:'0.3em'}}>MULTIVERSE_OS - LIVE</p>
      <div style={{display:'flex',gap:18,marginTop:30,color:'white',fontFamily:'monospace',fontSize:11,opacity:0.8}}>
        <span>LAB 01</span><span>PROJECTS 02</span><span>DROP 03</span>
      </div>
    </div>
  )
}
