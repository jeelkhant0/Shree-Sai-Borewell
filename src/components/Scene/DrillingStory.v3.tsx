"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Float, Sparkles, Stars, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const DrillingModel = ({ path, position, rotation, scale, animationType }: {
    path: string,
    position: [number, number, number],
    rotation: [number, number, number],
    scale: number,
    animationType: 'driller' | 'support'
}) => {
    const { scene } = useGLTF(path);
    const clonedScene = useMemo(() => scene.clone(), [scene]);
    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.elapsedTime;

        // Base animation
        if (animationType === 'driller') {
            ref.current.rotation.y += 0.01;
            ref.current.position.y = position[1] + Math.sin(t * 8) * 0.1;
        } else {
            ref.current.position.y = position[1] + Math.cos(t * 1.5) * 0.1;
        }

        // Story Animation Cycle (20 seconds)
        const cycle = 20;
        const progress = (t % cycle) / cycle;

        const startX = animationType === 'driller' ? -20 : 20;
        const endX = animationType === 'driller' ? -3 : 3;

        if (progress < 0.25) {
            // Phase 1: Moving in (0-5s)
            const p = progress / 0.25;
            ref.current.position.x = startX + (endX - startX) * p;
        } else if (progress < 0.75) {
            // Phase 2: Drilling together (5-15s)
            ref.current.position.x = endX;
            // Oscillate depth
            const drillP = (progress - 0.25) / 0.5;
            ref.current.position.y = position[1] + Math.sin(t * 12) * 0.05 - (Math.sin(drillP * Math.PI) * 2);
        } else {
            // Phase 3: Move out (15-20s)
            const p = (progress - 0.75) / 0.25;
            ref.current.position.x = endX + (startX - endX) * p;
        }
    });

    return (
        <group ref={ref} position={position} rotation={rotation} scale={[scale, scale, scale]}>
            <primitive object={clonedScene} />
        </group>
    );
};

export const DrillingStory = () => {
    return (
        <group>
            {/* Cinematic Lighting for the rigs */}
            <ambientLight intensity={1.5} />
            <spotLight position={[0, 10, 10]} intensity={5} angle={0.4} penumbra={1} color="#48CAE4" castShadow />
            <pointLight position={[-10, 5, 5]} intensity={3} color="#FFD700" />
            <pointLight position={[10, 5, 5]} intensity={3} color="#26C6DA" />

            <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={150} scale={15} size={3} speed={0.8} color="#A1887F" />

            <Suspense fallback={null}>
                {/* Model A: base_basic_shaded.glb - Scaled for visibility */}
                <DrillingModel
                    path="/base_basic_shaded.glb"
                    position={[-4, -3, 2]}
                    rotation={[0, Math.PI / 4, 0]}
                    scale={1.5} // Increased scale to 1.5 for presence
                    animationType="driller"
                />

                {/* Model B: base_basic_pbr.glb */}
                <DrillingModel
                    path="/base_basic_pbr.glb"
                    position={[4, -3, 2]}
                    rotation={[0, -Math.PI / 4, 0]}
                    scale={1.5}
                    animationType="support"
                />

                <ContactShadows position={[0, -5, 0]} opacity={0.4} scale={40} blur={2} far={10} />
            </Suspense>
        </group>
    );
};

// Preload for better performance
useGLTF.preload("/base_basic_shaded.glb");
useGLTF.preload("/base_basic_pbr.glb");
