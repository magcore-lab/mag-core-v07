
import { ImageResponse } from "next/og"
export const runtime = "edge"
export const size = { width: 512, height: 512 }
export const contentType = "image/png"
export default function Icon(){
  return new ImageResponse(
    <div style={{background:"black",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <img src="https://mag-core-v07.vercel.app/core-off-512.webp" width="512" height="512" alt="" />
    </div>, { ...{width:512,height:512} }
  )
}
