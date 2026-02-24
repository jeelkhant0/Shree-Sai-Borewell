"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
    Cylinder,
    Sparkles,
    Float,
    Text3D,
    Center,
    MeshTransmissionMaterial,
    useTexture,
    Billboard
} from "@react-three/drei";
import * as THREE from "three";

export function DrillingScene() {
    const drillRef = useRef<THREE.Group>(null);
    const layersRef = useRef<THREE.Group>(null);
    const textRef = useRef<THREE.Group>(null);
    // Split refs for position (parent) and rotation (mesh)
    const logoGroupRef = useRef<THREE.Group>(null);
    const logoMeshRef = useRef<THREE.Mesh>(null);

    const logoTexture = useTexture("/shreesailogo.webp");

    // Configure texture for maximum quality
    useEffect(() => {
        if (logoTexture) {
            logoTexture.anisotropy = 16;
            logoTexture.minFilter = THREE.LinearFilter;
            logoTexture.magFilter = THREE.LinearFilter;
            logoTexture.colorSpace = THREE.SRGBColorSpace;
            logoTexture.needsUpdate = true;
        }
    }, [logoTexture]);

    const [sceneState, setSceneState] = useState<'intro' | 'bang'>('intro');
    const [bangScale, setBangScale] = useState(1);

    const { width } = useThree((state) => state.viewport);
    const isMobile = width < 6;
    const isTablet = width >= 6 && width < 12;

    // Dynamic scaling factors
    const textScale = isMobile ? (width / 8) : Math.min(1, width / 12);
    const modelScale = Math.min(1, width / 10);

    // Timeline for story mode - Slowed down
    useEffect(() => {
        console.log("Starting Splash Story Mode...");

        // 1. Reveal Brand
        const bangTimer = setTimeout(() => {
            console.log("BANG! Revealing brand...");
            setSceneState('bang');
            // Balanced scale for mobile to avoid clipping
            setBangScale(isMobile ? 1.1 : 2.0);
        }, 5000);

        return () => {
            clearTimeout(bangTimer);
        };
    }, [isMobile]);

    // Create screw-like drill geometry manually for artistic effect
    const drillParts = useMemo(() => {
        const parts = [];
        for (let i = 0; i < 15; i++) {
            parts.push({
                y: i * 0.2,
                rotation: (i * Math.PI) / 4,
            });
        }
        return parts;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Drill movement
        if (drillRef.current) {
            drillRef.current.rotation.y = time * 15;
            drillRef.current.position.x = Math.sin(time * 50) * 0.01;
            drillRef.current.position.z = Math.cos(time * 50) * 0.01;
        }

        // Background layers scrolling
        if (layersRef.current) {
            layersRef.current.position.y += 0.05;
            if (layersRef.current.position.y > 4) {
                layersRef.current.position.y = 0;
            }
        }

        // Camera shake and scale animation for the "bang"
        if (sceneState === 'bang') {
            // Slower decay for a more cinematic "lingering" impact
            setBangScale(prev => Math.max(1, prev - 0.05));

            // Impact shake - stronger when scale is high
            if (bangScale > 1.1) {
                state.camera.position.x += (Math.random() - 0.5) * 0.15 * (bangScale - 1);
                state.camera.position.y += (Math.random() - 0.5) * 0.15 * (bangScale - 1);
            }

            if (logoGroupRef.current && logoMeshRef.current) {
                // Apply 'bang' scale to the logo group as well to match the entrance impact
                logoGroupRef.current.scale.set(bangScale, bangScale, bangScale);
            }
        }
    });

    const glassProps = {
        backside: true,
        samples: 8,
        thickness: 0.5,
        chromaticAberration: 0.05,
        anisotropy: 0.1,
        distortion: 0.05,
        distortionScale: 0.1,
        temporalDistortion: 0.1,
        iridescence: 0.1,
        clearcoat: 1,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        color: "#ffffff" as any,
        emissive: "#ffffff" as any,
        emissiveIntensity: 0.5,
    };

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#48CAE4" />
            {/* Stage-managed Glass Text & Logo - Move to Z=1.3 to appear IN FRONT of drill */}
            <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.2}>
                <group position={[0, isMobile ? 0.3 : 0.4, 1.3]}>
                    <group scale={[bangScale, bangScale, bangScale]}>
                        {/* Static Logo - Positioned to the LEFT of the center-of-text */}
                        {sceneState === 'bang' && (
                            <group ref={logoGroupRef} position={[isMobile ? -0.8 : -1.4, 0.3, 0.5]}>
                                <Billboard follow={true}>
                                    <mesh ref={logoMeshRef}>
                                        <planeGeometry args={[(isMobile ? 0.4 : 1.0) * textScale, (isMobile ? 0.4 : 1.0) * textScale]} />
                                        <meshBasicMaterial map={logoTexture} transparent opacity={1} toneMapped={false} />
                                    </mesh>
                                </Billboard>
                            </group>
                        )}

                        <Center top={false} bottom={false}>
                            <Text3D
                                font="/fonts/droid_serif_bold.typeface.json"
                                size={sceneState === 'intro'
                                    ? (isMobile ? 0.20 : 0.25) * textScale
                                    : (isMobile ? 0.28 : 0.35) * textScale
                                }
                                height={0.2}
                                curveSegments={12}
                                bevelEnabled
                                bevelThickness={0.03}
                                bevelSize={0.02}
                            >
                                {sceneState === 'intro' ? "Welcome to the world of" : "SHREE SAI BOREWELL"}
                                <meshPhysicalMaterial
                                    color="#D4AF37"
                                    metalness={1}
                                    roughness={0.1}
                                    emissive="#4b3621"
                                    emissiveIntensity={0.2}
                                    envMapIntensity={2}
                                    clearcoat={1}
                                    clearcoatRoughness={0.1}
                                />
                            </Text3D>
                        </Center>
                    </group>
                </group>
            </Float>

            {/* Drill Bit */}
            <group ref={drillRef} position={[0, -1, 0]}>
                <Cylinder args={[0.08, 0.08, 4, 16]} position={[0, 1, 0]}>
                    <meshStandardMaterial color="#FFC300" metalness={1} roughness={0.1} emissive="#FFB700" emissiveIntensity={0.2} />
                </Cylinder>

                {drillParts.map((part, i) => (
                    <group key={i} position={[0, part.y - 1, 0]} rotation={[0, part.rotation, 0]}>
                        <mesh position={[0.15, 0, 0]} rotation={[0.5, 0, 0]}>
                            <boxGeometry args={[0.3, 0.05, 0.1]} />
                            <meshStandardMaterial color="#DAA520" metalness={0.8} roughness={0.2} />
                        </mesh>
                    </group>
                ))}

                <Cylinder args={[0, 0.15, 0.5, 16]} position={[0, -1.25, 0]}>
                    <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.1} />
                </Cylinder>
            </group>

            {/* Particles */}
            <group position={[0, -1.5, 0]}>
                <Sparkles count={100} scale={1.5} size={3} speed={2} color="#5D4037" noise={1} />
                <Sparkles count={50} scale={2} size={2} speed={3} color="#A1887F" noise={2} />
            </group>

            {/* Background */}
            <group ref={layersRef}>
                {[-8, -5, -2, 1, 4].map((y, i) => (
                    <group key={i} position={[0, y, 0]}>
                        <Cylinder args={[5, 5, 0.1, 32, 1, true]}>
                            <meshStandardMaterial
                                color={i % 2 === 0 ? "#263238" : "#37474f"}
                                transparent
                                opacity={0.3}
                                wireframe
                            />
                        </Cylinder>
                    </group>
                ))}
            </group>

            <mesh position={[0, 0, -5]}>
                <planeGeometry args={[20, 20]} />
                <meshBasicMaterial color="#001e2b" transparent opacity={0.5} />
            </mesh>
        </group>
    );
}
