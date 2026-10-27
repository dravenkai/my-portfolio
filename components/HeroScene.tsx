"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group } from "three";

function Sculpture() {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.35;
    group.current.rotation.x = Math.sin(t * 0.4) * 0.18;
  });

  return (
    <group ref={group}>
      <mesh>
        <torusKnotGeometry args={[0.78, 0.22, 160, 18]} />
        <meshStandardMaterial color="#143f45" metalness={0.62} roughness={0.24} />
      </mesh>
      <mesh rotation={[Math.PI / 2.3, 0.2, 0]}>
        <torusGeometry args={[1.42, 0.02, 16, 90]} />
        <meshStandardMaterial color="#8a6430" metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh position={[1.15, 0.72, 0.2]}>
        <octahedronGeometry args={[0.16, 0]} />
        <meshStandardMaterial color="#d7c4a3" metalness={0.3} roughness={0.35} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 36 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
      aria-hidden
    >
      <ambientLight intensity={1.35} />
      <directionalLight position={[3.5, 4, 5]} intensity={2.5} />
      <directionalLight position={[-3, -1, -2]} intensity={0.55} color="#f0ddb8" />
      <Sculpture />
    </Canvas>
  );
}
