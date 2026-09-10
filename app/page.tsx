// MAG CORE V08 - OFF (rouge) -> ON (blanc pur) au hover
<div className="group relative w-[70vw] max-w-[520px] aspect-square mx-auto cursor-pointer">
  {/* OFF - ton core rouge actuel */}
  <img
    src="/mag-core-engine-1k.webp"
    alt="MAG CORE OFF"
    className="absolute inset-0 w-full h-full object-contain transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-0 group-hover:scale-95 group-hover:blur-[10px]"
  />
  {/* ON - blanc pur ultra lumineux */}
  <img
    src="/core-on-1k.webp"
    alt="MAG CORE ON"
    className="absolute inset-0 w-full h-full object-contain opacity-0 scale-90 blur-[20px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0 drop-shadow-[0_0_120px_rgba(255,255,255,0.9)]"
  />
  {/* Glow blanc diffus */}
  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] bg-white/10 blur-[80px] rounded-full scale-150" />
</div>
