'use client'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'

function QuantumCore() {
  const ref = useRef<any>(null)
  useFrame(({ clock }) => {
    if (ref.current) {
      const s = 1 + Math.sin(clock.elapsedTime * 1.5) * 0.08
      ref.current.scale.set(s, s, s)
    }
  })
  return (
    <mesh ref={ref} position={[0, 0, -1.5]}>
      <sphereGeometry args={[0.28, 32, 32]} />
      <meshStandardMaterial color="#A51205" emissive="#FF5514" emissiveIntensity={1.2} roughness={0.2} />
    </mesh>
  )
}

export default function MagCoreUltimate() {
  const [mode, setMode] = useState<'normal'|'sbs'|'360'|'safe'>('normal')
  return (
    <section className="relative w-full h-[90vh] bg-black overflow-hidden border border-white/10 rounded-2xl">
      <div className="absolute inset-0">
        <Canvas>
          <QuantumCore />
          <ambientLight intensity={0.3} />
          <pointLight position={[0,0,2]} color="#FF3C14" intensity={2} />
        </Canvas>
      </div>

      <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[460px] h-[260px] border-2 border-white rounded-xl bg-[#0c1424]/80 backdrop-blur">
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-white/40">TOP • +18°</span>
      </motion.div>

      <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:0.2}}
        className="absolute top-1/2 -translate-y-1/2 left-[10%] w-[420px] h-[240px] border-2 border-white rounded-xl bg-[#0c1424]/80 backdrop-blur">
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-white/40">LEFT • -28°</span>
      </motion.div>

      <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{delay:0.4}}
        className="absolute top-1/2 -translate-y-1/2 right-[10%] w-[420px] h-[240px] border-2 border-white rounded-xl bg-[#0c1424]/80 backdrop-blur">
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-white/40">RIGHT • +28°</span>
      </motion.div>

      <div className="absolute bottom-[10%] left-0 right-0">
        <div className="w-[80%] mx-auto h-[2px] bg-white" />
        <div className="w-[85%] mx-auto h-[1px] bg-white/50 mt-4" />
        <h1 className="text-center mt-6 text-4xl font-black text-white" style={{textShadow:'0 0 20px #FF3C14'}}>MAG CORE ENGINE</h1>
        <p className="text-center text-white/50 text-[10px] tracking-[0.3em] mt-1">QUANTUM FUSION • SYSTEM ONLINE • V0.7 • NO WATERMARK • RECUL 10%</p>
      </div>

      <div className="absolute top-4 right-4 flex flex-col gap-2 bg-black/80 backdrop-blur p-2 rounded-xl border border-white/10">
        <button onClick={()=>setMode('360')} className={`px-3 py-1.5 rounded text-xs ${mode==='360'?'bg-[#00FF88] text-black':'bg-white/10 text-white'}`}>360°</button>
        <button onClick={()=>setMode('sbs')} className={`px-3 py-1.5 rounded text-xs ${mode==='sbs'?'bg-[#00FF88] text-black':'bg-white/10 text-white'}`}>SBS</button>
        <button onClick={()=>setMode('safe')} className={`px-3 py-1.5 rounded text-xs ${mode==='safe'?'bg-[#00FF88] text-black':'bg-white/10 text-white'}`}>Safe Zones</button>
      </div>
    </section>
  )
}s
