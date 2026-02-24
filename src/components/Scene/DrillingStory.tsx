"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Sparkles, Stars, Float } from "@react-three/drei";
import * as THREE from "three";

const DrillingModel = ({ path, position, rotation, scale }: {
    path: string;
    position: [number, number, number];
    rotation: [number, number, number];
    scale: number;
}) => {
    const { scene } = useGLTF(path);
    const clonedScene = useMemo(() => scene.clone(), [scene]);
    return (
        <group position={position} rotation={rotation} scale={[scale, scale, scale]}>
            <primitive object={clonedScene} />
        </group>
    );
};

// Parent group that slowly rotates the whole scene for depth/life
const SceneRotator = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<THREE.Group>(null);
    useFrame(({ clock }) => {
        if (ref.current) {
            // Very slow gentle oscillation — left to right, like a camera pan
            ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.08) * 0.25;
        }
    });
    return <group ref={ref}>{children}</group>;
};

export const DrillingStory = () => {
    return (
        <group>
            {/* Rich cinematic lighting */}
            <ambientLight intensity={2.0} color="#cce8f4" />

            {/* Key light — strong from upper-left */}
            <directionalLight
                position={[-8, 12, 8]}
                intensity={4}
                color="#ffffff"
            />

            {/* Cyan rim light — gives the deep-water/tech feel */}
            <spotLight
                position={[0, 18, 12]}
                intensity={6}
                angle={0.45}
                penumbra={0.8}
                color="#26C6DA"
            />

            {/* Warm golden fill from below — ground bounce */}
            <pointLight position={[4, -2, 6]} intensity={3} color="#FFD700" />
            {/* Cool accent from right */}
            <pointLight position={[20, 8, -4]} intensity={2} color="#84ffff" />

            {/* Background stars */}
            <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={0.8} />

            {/* Subtle dust particles around the scene */}
            <Sparkles count={80} scale={12} size={2} speed={0.2} opacity={0.25} color="#26C6DA" />

            {/* Slow pan animation wraps both models */}
            <SceneRotator>
                {/* Drilling Truck — bigger scale, brought to center-right */}
                <Float speed={0.8} rotationIntensity={0} floatIntensity={0.4}>
                    <DrillingModel
                        path="/trkman.glb"
                        position={[3.5, -2.5, 0]}
                        rotation={[0, Math.PI / 5, 0]}
                        scale={3.5}
                    />
                </Float>

                {/* Ground / Excavation — larger, placed right of truck */}
                <DrillingModel
                    path="/dig.glb"
                    position={[10, -2.5, -1]}
                    rotation={[0, Math.PI / 5, 0]}
                    scale={15}
                />
            </SceneRotator>
        </group>
    );
};

// Preload at module-load time — models are in cache before Canvas mounts
useGLTF.preload("/trkman.glb");
useGLTF.preload("/dig.glb");
