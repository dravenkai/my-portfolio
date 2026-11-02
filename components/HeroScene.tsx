"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group } from "three";

function Sculpture({ motion }: { motion: boolean }) {
  const group = useRef<Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    const spin = motion ? t * 0.28 : 0.4;
    group.current.rotation.y = spin + pointer.x * 0.45;
    group.current.rotation.x = (motion ? Math.sin(t * 0.35) * 0.18 : 0.15) + pointer.y * 0.2;
  });

  return (
    <group ref={group}>
      <mesh>
        <torusKnotGeometry args={[0.72, 0.2, 180, 20]} />
        <meshStandardMaterial color="#ff5a1f" metalness={0.72} roughness={0.22} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial color="#8ef0c8" wireframe />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.4, 0.2]}>
        <torusGeometry args={[1.7, 0.015, 16, 120]} />
        <meshStandardMaterial color="#e7c27a" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function HeroScene({ motion = true }: { motion?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.4], fov: 38 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
      style={{ width: "100%", height: "100%", touchAction: "pan-y" }}
      aria-hidden
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 3, 5]} intensity={2.4} color="#fff4ea" />
      <pointLight position={[-3, -1, 2]} intensity={8} color="#8ef0c8" />
      <Sculpture motion={motion} />
    </Canvas>
  );
}
