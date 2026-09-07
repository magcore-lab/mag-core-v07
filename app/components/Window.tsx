"use client";
export default function Window({id,title,children,onClose,onFocus,zIndex}:any){
  return (
    <div style={{zIndex, position:'absolute', top:'20%', left:'20%', width:'60vw', maxWidth:560, border:'1px solid #222', background:'rgba(0,0,0,0.85)', backdropFilter:'blur(10px)'}}>
      <div style={{display:'flex', justifyContent:'space-between', padding:'8px 12px', borderBottom:'1px solid #222', fontFamily:'monospace', fontSize:11, color:'#999'}}>
        <span>{title}</span><button onClick={()=>onClose(id)}>[CLOSE]</button>
      </div>
      <div style={{padding:20, color:'#ccc', fontFamily:'monospace'}}>{children}</div>
    </div>
  )
}
