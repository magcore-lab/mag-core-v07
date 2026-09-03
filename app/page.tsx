'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
const MagmaCore = dynamic(()=> import('@/components/MagmaCore'), { ssr:false })
export default function Page(){
  return (
    <main className="bg-[#050508] min-h-screen overflow-x-hidden">
      <section className="relative h-[100svh] w-full flex items-center justify-center">
        <div className="absolute inset-[clamp(12px,3vw,28px)] border border-[#C9A86A]/[0.07] pointer-events-none" />
        <div className="absolute top-[2.2rem] left-[2.6rem] font-mono text-[10px] text-[#C9A86A]/40">ALT 50M</div>
        <div className="relative z-20 flex flex-col items-center">
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="font-mono text-[10px] tracking-[0.35em] text-[#E0007A] mb-3">MEDIA PRESS</motion.div>
          <MagmaCore />
          <h1 className="text-[clamp(32px,8vw,88px)] font-extrabold tracking-[-0.04em] mt-10 text-center">MAG CORE</h1>
          <p className="font-mono text-[10px] tracking-[0.3em] text-white/50 mt-3">DRONE CINEMA / FRONTALE MAGMATIQUE / PLEIN ECRAN</p>
        </div>
      </section>
    </main>
  )
}
