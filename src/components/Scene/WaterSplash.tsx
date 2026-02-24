"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const WaterSplash = ({ count = 800 }) => {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const lightRef = useRef<THREE.PointLight>(null);

    // Generate random initial positions and velocities
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 10;
            const y = Math.random() * 10; // Start at various heights
            const z = (Math.random() - 0.5) * 5;
            const speed = 0.1 + Math.random() * 0.3;
            const factor = 0.5 + Math.random() * 1.5; // Random size

            temp.push({ x, y, z, speed, factor, time: Math.random() * 100 });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state, delta) => {
        const mesh = meshRef.current;
        if (!mesh) return;

        particles.forEach((particle, i) => {
            // Update time
            particle.time += delta * 2;

            // Circular / Fountain motion equation
            const t = particle.time + i; // Offset

            dummy.position.set(
                Math.sin(t * 0.3) * 5 + (i % 2 === 0 ? 5 : -5), // Spread across background
                Math.abs(Math.sin(t * 0.5)) * 8 - 2, // Up and down motion
                Math.cos(t * 0.2) * 5 - 5 // Behind rig
            );

            const scale = (Math.sin(t) + 1.5) * 0.15; // Pulse size
            dummy.scale.set(scale, scale, scale);

            dummy.rotation.x += delta;
            dummy.rotation.z += delta;

            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
        });

        mesh.instanceMatrix.needsUpdate = true;
    });

    return (
        <>
            <instancedMesh ref={meshRef} args={[undefined, undefined, count]} position={[0, 0, -5]}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshPhysicalMaterial
                    color="#a5f3fc" // Cyan-ish water
                    transmission={0.9} // Glass-like
                    opacity={0.8}
                    metalness={0.1}
                    roughness={0.05}
                    ior={1.33} // Water index of refraction
                    thickness={2}
                    transparent
                    emissive="#22d3ee"
                    emissiveIntensity={0.2}
                />
            </instancedMesh>

            {/* Dynamic Light for the splash */}
            <pointLight ref={lightRef} position={[0, -2, -5]} color="#67e8f9" intensity={3} distance={15} />
        </>
    );
};
