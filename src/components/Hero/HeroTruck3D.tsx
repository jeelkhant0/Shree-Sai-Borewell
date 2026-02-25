"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

/* ─── Truck model ─────────────────────────────────────────────────── */
const TruckModel = () => {
    const { scene } = useGLTF("/trkman.glb") as any;
    const clonedScene = useMemo(() => scene.clone(), [scene]);
    const groupRef = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (!groupRef.current) return;
        // Slower oscillation — ±90° over ~21 seconds per swing
        groupRef.current.rotation.y =
            Math.sin(clock.getElapsedTime() * 0.15) * (Math.PI / 4);
    });

    return (
        <group ref={groupRef} position={[0, -2.0, 0]} scale={[4.0, 4.0, 4.0]}>
            <primitive object={clonedScene} />
        </group>
    );
};

/* Preload so the model is ready before the canvas mounts */
useGLTF.preload("/trkman.glb");

/* ─── Scene wrapper ────────────────────────────────────────────────── */
const HeroTruck3D = () => (
    <Canvas
        camera={{ position: [0, 5, 14], fov: 55 }}
        gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        style={{ width: "100%", height: "100%", background: "transparent" }}
    >
        {/* Lighting — matches the site's teal/gold brand feel */}
        <ambientLight intensity={2.0} color="#cce8f4" />
        <directionalLight position={[-6, 12, 8]} intensity={4} color="#ffffff" />
        <spotLight
            position={[0, 18, 12]}
            intensity={6}
            angle={0.45}
            penumbra={0.8}
            color="#26C6DA"
        />
        <pointLight position={[4, -2, 6]} intensity={3} color="#FFD700" />
        <pointLight position={[12, 6, -4]} intensity={2} color="#84ffff" />

        <Suspense fallback={null}>
            <TruckModel />
        </Suspense>
    </Canvas>
);

export default HeroTruck3D;
