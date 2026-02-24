"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function ResponsiveFooterCamera() {
    const { width } = useThree((state) => state.viewport);
    const isMobile = width < 6;
    return (
        <PerspectiveCamera
            makeDefault
            position={isMobile ? [20, 16, 20] : [15, 12, 15]}
            fov={isMobile ? 50 : 40}
        />
    );
}

function OilRigModel(props: any) {
    const { scene } = useGLTF("/3d/oil_rig_-_low_poly.glb");
    const ref = useRef<THREE.Group>(null);

    useFrame(() => {
        if (ref.current) ref.current.rotation.y += 0.005;
    });

    return (
        <group ref={ref} {...props}>
            <primitive object={scene} scale={0.05} />
        </group>
    );
}

export default function BorewellFooterScene() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileDevice, setIsMobileDevice] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Don't render 3D on mobile — saves GPU, battery, memory
        setIsMobileDevice(window.innerWidth < 768);

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} style={{ height: '100%', width: '100%', minHeight: '300px' }}>
            {/* On mobile: show a static visual instead of 3D canvas */}
            {isMobileDevice ? (
                <div style={{
                    height: '100%',
                    minHeight: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'radial-gradient(circle at center, rgba(38,198,218,0.08) 0%, transparent 70%)',
                    borderRadius: '16px',
                    border: '1px solid rgba(38,198,218,0.1)',
                    color: 'rgba(38,198,218,0.4)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                }}>
                    🔩 Precision Drilling
                </div>
            ) : isVisible ? (
                <Canvas
                    dpr={[1, 1.2]}
                    gl={{ antialias: false, powerPreference: "high-performance", stencil: false }}
                    performance={{ min: 0.5 }}
                >
                    <ResponsiveFooterCamera />
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <spotLight position={[-5, 5, 5]} angle={0.3} intensity={0.8} />
                        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
                            <OilRigModel position={[0, -3, 0]} />
                        </Float>
                        <OrbitControls
                            enableZoom={false}
                            autoRotate
                            autoRotateSpeed={0.5}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 3}
                        />
                    </Suspense>
                </Canvas>
            ) : null}
        </div>
    );
}
