"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Core() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (meshRef.current) {
      const s = 1 + Math.sin(t * 1.5) * 0.08;
      meshRef.current.scale.set(s, s, s);
      meshRef.current.rotation.y = t * 0.15;
    }
    if (glowRef.current) {
      const s = 1.35 + Math.sin(t * 1.2) * 0.1;
      glowRef.current.scale.set(s, s, s);
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial color="#A51205" emissive="#FF3C14" emissiveIntensity={1.2} roughness={0.2} />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshBasicMaterial color="#FF5514" transparent opacity={0.25} />
      </mesh>
      <pointLight color="#FF3C14" intensity={2} distance={3} />
    </>
  );
}

export default function Orb() {
  return (
    <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
      <Canvas camera={{ position: [0, 0, 1.5], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.3} />
        <Core />
      </Canvas>
    </div>
  );
}
