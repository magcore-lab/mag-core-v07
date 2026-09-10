"use client";
import { useState } from "react";

export default function Page() {
  const [hover, setHover] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between py-10 px-6 overflow-hidden">
      <div className="w-full flex justify-between text-[10px] tracking-[0.3em] opacity-60">
        <span>LAB_SYSTEM // 01</span>
        <span>MAG CORE LAB</span>
      </div>

      {/* CORE + 7 ONDES */}
      <div
        className="relative w-[70vw] max-w-[520px] aspect-square mx-auto cursor-pointer my-10 flex items-center justify-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onTouchStart={() => setHover(!hover)}
      >
        {/* 7 ONDES - visibles uniquement ON */}
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`absolute inset-0 rounded-full border border-white/20 transition-all duration-1000 ${
              hover? "animate-[pulseWave_3s_ease-out_infinite]" : "opacity-0 scale-75"
            }`}
            style={{
              animationDelay: `${i * 0.35}s`,
              borderWidth: `${1 + i * 0.2}px`,
            }}
          />
        ))}

        {/* CORE */}
        <div className="relative w-[58%] h-[58%]">
          <img
            src="/mag-core-engine-1k.webp"
            alt="OFF"
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-[1200ms] ${hover? "opacity-0 scale-90 blur-[12px]" : "opacity-100 scale-100"}`}
          />
          <img
            src="/core-on-white-pur.png"
            alt="ON"
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-[1200ms] ${hover? "opacity-100 scale-100 drop-shadow-[0_0_120px_rgba(255,255,255,0.95)]" : "opacity-0 scale-90 blur-[20px]"}`}
          />
        </div>

        {/* Glow global */}
        <div className={`absolute inset-0 -z-10 blur-[90px] rounded-full scale-[1.8] transition-all duration-[1200ms] ${hover? "opacity-100 bg-white/[0.18]" : "opacity-0"}`} />
      </div>

      <div className="text-center space-y-3 z-10">
        <h1 className="text-[18px] md:text-[22px] tracking-[0.4em] font-light leading-relaxed">
          MAG CORE V08<br />MULTIVERSE_OS - EN DIRECT
        </h1>
        <p className="text-[10px] tracking-[0.25em] opacity-50 h-3">
          {hover? "CORE ON • 7 ONDES • BLANC PUR ULTRA LUMINEUX" : "CORE OFF • 7 ONDES EN VEILLE • TOUCH TO IGNITE"}
        </p>
      </div>

      <div className="flex gap-6 text-[11px] tracking-widest opacity-70 mt-10">
        <span>LAB 01</span><span>PROJECTS 02</span><span>DROP 03</span><span>STATUS</span>
      </div>

      <style jsx>{`
        @keyframes pulseWave {
          0% { transform: scale(0.75); opacity: 0; }
          15% { opacity: 0.5; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </main>
  );
}
