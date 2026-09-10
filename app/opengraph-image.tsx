import { ImageResponse } from "next/og"
export const runtime = "edge"
export const alt = "MAG CORE V07"
export const size = { width: 1200, height: 630 }
export const contentType = "image/webp"
export default function OG(){
  return new ImageResponse(
    <div style={{background:"black",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <img src="https://mag-core-v07.vercel.app/mag-core-engine-1k.webp" width={800} height={500} alt="MAG CORE" />
      <div style={{color:"white",fontSize:28,letterSpacing:8,marginTop:20,fontFamily:"monospace"}}>MAG CORE ENGINE</div>
    </div>, { width:1200, height:630 }
  )
}
