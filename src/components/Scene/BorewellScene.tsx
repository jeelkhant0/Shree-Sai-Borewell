"use client";

import React, { Suspense, useState, useEffect, useCallback } from "react";
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
            // Moved camera much closer — models now fill more of the viewport
            position={isMobile ? [16, 7, 16] : [11, 5, 11]}
            fov={isMobile ? 65 : 55}
        />
    );
}

// Notifies parent when models are fully loaded and rendered
function SceneReadyNotifier({ onReady }: { onReady: () => void }) {
    const { gl } = useThree();
    useEffect(() => {
        // Wait one frame after first render to ensure models are on GPU
        let raf: number;
        const handleReady = () => {
            raf = requestAnimationFrame(() => {
                onReady();
            });
        };
        handleReady();
        return () => cancelAnimationFrame(raf);
    }, [onReady]);
    return null;
}

const BorewellScene = () => {
    const [isMobileDevice, setIsMobileDevice] = useState(false);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setIsMobileDevice(window.innerWidth < 768);
    }, []);

    const handleReady = useCallback(() => {
        // Smooth fade-in once models are parsed & on GPU
        setOpacity(1);
    }, []);

    if (isMobileDevice) return null;

    return (
        <div style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0, left: 0,
            zIndex: 1,
            opacity,
            // Smooth fade — eliminates the visible "pop"
            transition: "opacity 0.5s ease-in-out",
        }}>
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

                {/* Suspense wraps model loading — SceneReadyNotifier fires after models render */}
                <Suspense fallback={null}>
                    <DrillingStory />
                    <SceneReadyNotifier onReady={handleReady} />
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
