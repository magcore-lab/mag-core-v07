
"use client";
import { useState } from "react";

export default function Page() {
  const [hover, setHover] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between py-10 px-6">
      {/* HEADER */}
      <div className="w-full flex justify-between text-[10px] tracking-[0.3em] opacity-60">
        <span>LAB_SYSTEM // 01</span>
        <span>MAG CORE LAB</span>
      </div>

      {/* CORE OFF -> ON */}
      <div
        className="group relative w-[70vw] max-w-[520px] aspect-square mx-auto cursor-pointer my-10"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onTouchStart={() => setHover(!hover)}
      >
        <img
          src="/mag-core-engine-1k.webp"
          alt="MAG CORE OFF"
          className={`absolute inset-0 w-full h-full object-contain transition-all duration-[1200ms] ${hover? "opacity-0 scale-95 blur-[10px]" : "opacity-100 scale-100"}`}
        />
        <img
          src="/core-on-white-pur.png"
          alt="MAG CORE ON"
          className={`absolute inset-0 w-full h-full object-contain transition-all duration-[1200ms] ${hover? "opacity-100 scale-100 drop-shadow-[0_0_120px_rgba(255,255,255,0.9)]" : "opacity-0 scale-90 blur-[20px]"}`}
        />
        <div className={`absolute inset-0 -z-10 blur-[80px] rounded-full scale-150 transition-opacity duration-[1200ms] ${hover? "opacity-100 bg-white/20" : "opacity-0"}`} />
      </div>

      {/* TITLE */}
      <div className="text-center space-y-2">
        <h1 className="text-[18px] md:text-[22px] tracking-[0.4em] font-light">
          MAG CORE V08 MULTIVERSE_OS - EN DIRECT
        </h1>
        <p className="text-[10px] tracking-widest opacity-40">
          {hover? "CORE ON • BLANC PUR ULTRA LUMINEUX" : "CORE OFF • TOUCH TO IGNITE"}
        </p>
      </div>

      {/* NAV */}
      <div className="flex gap-6 text-[11px] tracking-widest opacity-70 mt-10">
        <span>LAB 01</span>
        <span>PROJECTS 02</span>
        <span>DROP 03</span>
        <span>STATUS</span>
      </div>
    </main>
  );
}
