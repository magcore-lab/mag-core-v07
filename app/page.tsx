'use client';
import dynamic from 'next/dynamic';
const CoreVR = dynamic(()=>import('./CoreVR'),{ssr:false});

export default function Page(){
 return (
  <main style={{width:'100vw',height:'100vh',background:'#000',position:'relative',overflow:'hidden'}}>
   <CoreVR/>
   <div style={{position:'absolute',top:24,right:28,display:'flex',gap:8,alignItems:'center',fontFamily:'JetBrains Mono',fontSize:12,color:'#ff0000',fontWeight:700}}>
    <span style={{width:8,height:8,borderRadius:'50%',background:'#ff0000',boxShadow:'0 0 8px #ff0000',display:'inline-block',animation:'blink 1s infinite'}}></span>REC
   </div>
   <div style={{position:'absolute',bottom:72,left:'50%',transform:'translateX(-50%)',textAlign:'center',fontFamily:'JetBrains Mono',color:'#fff'}}>
    <div style={{letterSpacing:'0.4em',fontSize:15,opacity:0.9,textShadow:'0 0 12px #00ffff'}}>NOYAU ENERGIE MAITRISE</div>
    <div style={{fontSize:10,opacity:0.4,marginTop:10}}>sovereign pearl core stable — RED 70% — FOND NOIR CINEMA #000</div>
   </div>
   <div style={{position:'absolute',bottom:20,left:20,fontFamily:'JetBrains Mono',fontSize:9,color:'#fff',opacity:0.3}}>MCE-CORE-007 v2.1 | 42°C RED REC | FLUX 100% | SHIELD 100% | VR READY</div>
   <style>{`@keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}} html,body{background:#000000}`}</style>
  </main>
 )
}
