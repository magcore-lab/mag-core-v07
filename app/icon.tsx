
import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";
export const alt = "MAG CORE V08 - BLACK EDITION | FIELD_OS - Core Icon - 7 ondes blanches pur";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 320,
            height: 320,
            borderRadius: 9999,
            background: "white",
            boxShadow: "0 0 80px rgba(255,255,255,0.9)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
