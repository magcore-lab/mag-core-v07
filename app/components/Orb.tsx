
"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MagCoreQuantum() {
  const coreRef = useRef<THREE.Mesh>(null);
  const glow1Ref = useRef<THREE.Mesh>(null);
  const glow2Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 120;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 0.6 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      pos[i*3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i*3+2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (coreRef.current) {
      const s = 1 + Math.sin(t * 1.5) * 0.08;
      coreRef.current.scale.set(s,s,s);
      coreRef.current.rotation.y = t * 0.15;
    }
    if (glow1Ref.current) glow1Ref.current.scale.set(1.3 + Math.sin(t*1.2)*0.1, 1.3 + Math.sin(t*1.2)*0.1, 1.3 + Math.sin(t*1.2)*0.1);
    if (glow2Ref.current) glow2Ref.current.scale.set(1.7 + Math.sin(t*0.9)*0.15, 1.7 + Math.sin(t*0.9)*0.15, 1.7 + Math.sin(t*0.9)*0.15);
    if (particlesRef.current) particlesRef.current.rotation.y = t * 0.05;
  });

  return (
    <>
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.28, 64, 64]} />
        <meshStandardMaterial color="#A51205" emissive="#FF3C14" emissiveIntensity={1.4} roughness={0.15} metalness={0.3} />
      </mesh>
      <mesh ref={glow1Ref}>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshBasicMaterial color="#E03010" transparent opacity={0.35} />
      </mesh>
      <mesh ref={glow2Ref}>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshBasicMaterial color="#FF5514" transparent opacity={0.18} />
      </mesh>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particles.length/3} array={particles} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.015} color="#FF8860" transparent opacity={0.6} sizeAttenuation />
      </points>
      <pointLight color="#FF3C14" intensity={2.5} distance={3} decay={2} />
    </>
  );
}

export default function Orb() {
  return (
    <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
      <Canvas camera={{ position: [0, 0, 1.5], fov: 50 }} gl={{ alpha: true, antialias: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.2} />
        <MagCoreQuantum />
      </Canvas>
    </div>
  );
}
