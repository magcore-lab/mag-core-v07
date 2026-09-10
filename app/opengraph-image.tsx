import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MAG CORE V08 - BLACK EDITION | FIELD_OS - 7 ondes blanches pur ultra lumineuses, noyau Vantablack, noir cinéma total - LAB_SYSTEM // 01";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: "black", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <div style={{ width: 420, height: 420, borderRadius: 999, background: "white", boxShadow: "0 0 120px white", display: "flex" }} />
        <div style={{ color: "white", fontSize: 42, letterSpacing: "0.4em", marginTop: 40 }}>MAG CORE V08 | FIELD_OS</div>
        <div style={{ color: "white", opacity: 0.5, fontSize: 18, letterSpacing: "0.3em", marginTop: 10 }}>7 ONDES • BLANC PUR ULTRA LUMINEUX</div>
      </div>
    )
  );
}
