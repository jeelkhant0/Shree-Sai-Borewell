"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { DrillingStory } from "./DrillingStory";
import { useThree } from "@react-three/fiber";

function ResponsiveCamera() {
    const { width } = useThree((state) => state.viewport);
    const isMobile = width < 10;

    return (
        <PerspectiveCamera
            makeDefault
            position={isMobile ? [25, 12, 25] : [18, 8, 18]}
            fov={isMobile ? 60 : 50}
        />
    );
}

const BorewellScene = () => {
    const [shouldRender, setShouldRender] = useState(false);
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        // Skip WebGL on phones — saves GPU, battery, and prevents scroll jank
        const isMobile = window.innerWidth < 768;
        setIsMobileDevice(isMobile);

        if (!isMobile) {
            // Small delay so the main page paints first, then load 3D
            const t = setTimeout(() => setShouldRender(true), 400);
            return () => clearTimeout(t);
        }
    }, []);

    // Don't render anything on mobile — Hero looks fine without the 3D bg
    if (isMobileDevice || !shouldRender) return null;

    return (
        <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 1 }}>
            <Canvas
                dpr={[1, 1.2]}
                gl={{
                    powerPreference: "high-performance",
                    antialias: false,
                    stencil: false,
                    depth: true,
                }}
                performance={{ min: 0.5 }}
            >
                <ResponsiveCamera />
                <ambientLight intensity={1.2} color="#ccfbf1" />

                <directionalLight
                    position={[10, 20, 10]}
                    intensity={2.5}
                    color="#ffffff"
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                <pointLight position={[-10, 5, -10]} intensity={1.5} color="#26c6da" distance={100} />
                <spotLight position={[5, 10, -5]} angle={0.5} penumbra={1} intensity={2.5} color="#00e5ff" />

                <Suspense fallback={null}>
                    <DrillingStory />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2 - 0.05}
                    enableDamping
                    dampingFactor={0.05}
                />
            </Canvas>
        </div>
    );
};

export default BorewellScene;
