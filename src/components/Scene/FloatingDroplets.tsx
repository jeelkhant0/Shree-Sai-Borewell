"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const FloatingDroplets = ({ count = 400 }) => {
    const meshRef = useRef<THREE.InstancedMesh>(null);

    // Generate random positions spread across the entire scene volume
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            // Wide distribution to cover background
            const x = (Math.random() - 0.5) * 60; // Wide X
            const y = Math.random() * 30 - 5;     // Height from ground to sky
            const z = (Math.random() - 0.5) * 40 - 10; // Depth (mostly background)

            const speed = 0.2 + Math.random() * 0.5;
            const scale = 0.2 + Math.random() * 0.6; // Small droplets
            const timeOffset = Math.random() * 100;

            temp.push({ x, y, z, speed, scale, timeOffset });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state, delta) => {
        const mesh = meshRef.current;
        if (!mesh) return;

        particles.forEach((particle, i) => {
            // Slow vertical float + gentle horizontal sway
            const time = state.clock.elapsedTime * 0.5 + particle.timeOffset;

            // Float up slowly, wrap around if too high
            let newY = particle.y + Math.sin(time * 0.5) * 2;

            // Gentle sway
            const newX = particle.x + Math.sin(time * 0.3) * 2;
            const newZ = particle.z + Math.cos(time * 0.2) * 1;

            dummy.position.set(newX, newY, newZ);

            // Pulse scale slightly for "wobble" effect
            const s = particle.scale + Math.sin(time * 2) * 0.05;
            dummy.scale.set(s, s, s);

            dummy.rotation.x = time * 0.2;
            dummy.rotation.z = time * 0.1;

            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
        });

        mesh.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]} position={[0, 0, 0]}>
            <sphereGeometry args={[1, 16, 16]} />
            {/* High Quality Water Material */}
            <meshPhysicalMaterial
                color="#ffffff"
                transmission={0.95}  // Transparent glass-like
                opacity={1}
                metalness={0.1}
                roughness={0}      // Perfectly smooth
                ior={1.33}         // Water Refraction
                thickness={1.5}    // Volume
                clearcoat={1}      // Wet look
                clearcoatRoughness={0}
                envMapIntensity={1.5}
            />
        </instancedMesh>
    );
};
