"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";

const DrillingModel = ({ path, position, rotation, scale }: {
    path: string,
    position: [number, number, number],
    rotation: [number, number, number],
    scale: number
}) => {
    const { scene } = useGLTF(path);
    const clonedScene = useMemo(() => scene.clone(), [scene]);

    // No useFrame animation - models are static

    return (
        <group position={position} rotation={rotation} scale={[scale, scale, scale]}>
            <primitive object={clonedScene} />
        </group>
    );
};

export const DrillingStory = () => {
    // Static Scene - No scrolling logic
    return (
        <group>
            {/* Cinematic Lighting */}
            <ambientLight intensity={1.5} />
            <spotLight position={[0, 15, 10]} intensity={4} angle={0.4} penumbra={1} color="#48CAE4" />
            <pointLight position={[-15, 10, 5]} intensity={2} color="#FFD700" />
            <pointLight position={[15, 10, 5]} intensity={2} color="#26C6DA" />

            <Stars radius={60} depth={40} count={4000} factor={4} saturation={0} fade speed={1.2} />
            <Sparkles count={120} scale={20} size={1.5} speed={0.4} opacity={0.3} color="#D2B48C" />

            <Suspense fallback={null}>
                {/* New Model: trkman.glb - Positioned on Left */}
                <DrillingModel
                    path="/trkman.glb"
                    position={[6, -3, 0]} // Brought closer and up
                    rotation={[0, Math.PI / 4, 0]}
                    scale={2.2}
                />

                {/* Ground/Digging Model: dig.glb - Positioned Right (Side-by-Side) */}
                <DrillingModel
                    path="/dig.glb"
                    position={[12, -3, 0]} // Minor distance added
                    rotation={[0, Math.PI / 4, 0]}
                    scale={10.5}
                />
            </Suspense>

            {/* Models Removed by User Request */}
            <group />
        </group>
    );
};

// Preload models at module-load time so they're in cache when Canvas mounts
// The HTML <link rel="preload"> in layout.tsx also starts the network fetch earlier
useGLTF.preload("/trkman.glb");
useGLTF.preload("/dig.glb");

