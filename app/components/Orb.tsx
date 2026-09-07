"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.15;
    meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
    const s = 1 + Math.sin(t * 1.5) * 0.05;
    meshRef.current.scale.set(s, s, s);
    if (lightRef.current) lightRef.current.intensity = 2 + Math.sin(t * 2) * 0.5;
  });
  return (
    <>
      <pointLight ref={lightRef} color="#ff1a1a" intensity={2} distance={5} />
      <Sphere ref={meshRef} args={[1, 128, 128]}>
        <MeshDistortMaterial color="#ff1a1a" emissive="#ff0000" emissiveIntensity={0.8} roughness={0.2} metalness={0.1} distort={0.35} speed={2} />
      </Sphere>
      <Sphere args={[1.15, 64, 64]}><meshBasicMaterial color="#ff1a1a" transparent opacity={0.08} /></Sphere>
      <Sphere args={[1.35, 64, 64]}><meshBasicMaterial color="#ff1a1a" transparent opacity={0.03} /></Sphere>
    </>
  );
}
export default function Orb() {
  return (
    <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.2} />
        <AnimatedOrb />
      </Canvas>
    </div>
  );
}
