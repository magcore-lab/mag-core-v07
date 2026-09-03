'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
export default function MagmaCore(){
  const { scrollY } = useScroll()
  const y = useSpring(useTransform(scrollY, [0,400], [0, -40]), { stiffness:80, damping:20 })
  const scale = useSpring(useTransform(scrollY, [0,600], [1, 0.92]), { stiffness:120, damping:18 })
  return (
    <div className="relative flex items-center justify-center">
      <motion.div style={{ y, scale }} className="tron-ring absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" animate={{ rotate: 360 }} transition={{ duration:30, repeat:Infinity, ease:'linear' }}>
        <div className="absolute inset-0 rounded-full border border-[#C9A86A]/10" />
        <div className="absolute inset-0">{Array.from({length:32}).map((_,i)=>(<div key={i} className="absolute left-1/2 top-0 w-px h-[6px] bg-[#C9A86A]/20 origin-bottom" style={{ transform:`translateX(-50%) rotate(${i*11.25}deg)`}} />))}</div>
      </motion.div>
      <motion.div style={{ y, scale }} className="core-420 relative rounded-full z-10" initial={{ scale:0.92, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ type:'spring', stiffness:90, damping:16 }}>
        <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 35% 30%, #FFD9A0 0%, #FF7A2A 18%, #7A1A07 42%, #0D0404 70%)', boxShadow: '0 0 30px rgba(255,122,42,0.22)' }} />
      </motion.div>
    </div>
  )
}
