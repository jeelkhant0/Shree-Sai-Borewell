"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Box, Torus, Cone } from "@react-three/drei";

const IconModel = ({ type }: { type: string }) => {
    const meshRef = useRef<any>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
        }
    });

    const materialProps = { color: "#48CAE4", roughness: 0.2, metalness: 0.8 };

    if (type === "drill") {
        return (
            <group ref={meshRef}>
                <Cone args={[0.8, 2, 8]} position={[0, 0, 0]} rotation={[Math.PI, 0, 0]}>
                    <meshStandardMaterial {...materialProps} color="#D4AF37" />
                </Cone>
            </group>
        );
    }
    if (type === "survey") {
        return (
            <group ref={meshRef}>
                <Sphere args={[1, 16, 16]} scale={0.8}>
                    <MeshDistortMaterial color="#48CAE4" speed={2} distort={0.3} />
                </Sphere>
                <Torus args={[1.2, 0.1, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#fff" />
                </Torus>
            </group>
        );
    }
    if (type === "cleaning") {
        return (
            <group ref={meshRef}>
                <Torus args={[0.8, 0.3, 16, 32]}>
                    <meshStandardMaterial color="#0077B6" />
                </Torus>
                <Box args={[0.2, 2, 0.2]} rotation={[0, 0, Math.PI / 4]}>
                    <meshStandardMaterial color="#fff" />
                </Box>
            </group>
        )
    }
    if (type === "recharge") {
        return (
            <group ref={meshRef}>
                <Sphere args={[0.8, 16, 16]} position={[0, -0.5, 0]}>
                    <meshStandardMaterial color="#8D99AE" />
                </Sphere>
                <Cone args={[0.5, 1, 16]} position={[0, 0.5, 0]}>
                    <meshStandardMaterial color="#48CAE4" transparent opacity={0.8} />
                </Cone>
            </group>
        )
    }
    if (type === "pump") {
        return (
            <group ref={meshRef}>
                <Box args={[1, 1, 1]}>
                    <meshStandardMaterial color="#555" />
                </Box>
                <CylinderIcon />
            </group>
        )
    }

    return <Sphere args={[1, 32, 32]} ref={meshRef}><meshStandardMaterial color="hotpink" /></Sphere>;
};

const CylinderIcon = () => (
    <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.6, 16]} />
        <meshStandardMaterial color="#D4AF37" />
    </mesh>
)

const Service3DIcon = ({ type }: { type: string }) => {
    return (
        <div style={{ width: 100, height: 100, margin: '0 auto' }}>
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={2} />
                <IconModel type={type} />
            </Canvas>
        </div>
    );
};

export default Service3DIcon;
