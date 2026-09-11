
"use client"
export default function Orb({ variant = "red" }: { variant?: "red" | "blue" }) {
  const isBlue = variant === "blue"
  return (
    <div style={{ position: "relative", width: 140, height: 140 }}>
      {/* glow maîtrisé */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        background: isBlue ? "#00D4FF" : "#A51205",
        filter: "blur(28px)", opacity: 0.22
      }} />
      {/* orb core petit */}
      <div style={{
        position: "relative", width: "100%", height: "100%", borderRadius: "50%",
        background: isBlue
          ? "radial-gradient(at 30% 30%, #7DDFFF, #00A8CC 35%, #083A4A 80%)"
          : "radial-gradient(at 30% 30%, #FF8A7A, #A51205 42%, #4A0802 82%)",
        boxShadow: "inset 0 0 18px rgba(255,255,255,0.5), 0 0 0 1px rgba(255,255,255,0.12)",
      }}>
        <div style={{
          position: "absolute", top: "18%", left: "22%", width: "28%", height: "28%",
          background: "radial-gradient(white, transparent 70%)", opacity: 0.65, borderRadius: "50%"
        }} />
      </div>
      {/* grain subtil sans SVG qui plante le build */}
      <div style={{
        position: "absolute", inset: -8, borderRadius: "50%", opacity: 0.04,
        background: "repeating-linear-gradient(0deg, white 0px, transparent 1px, transparent 2px)"
      }} />
      <div style={{
        position: "absolute", inset: -14, borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.07)"
      }} />
    </div>
  )
}
