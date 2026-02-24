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
            // Slightly pulled back from previous [11,5,11] — models still big but not overwhelming
            position={isMobile ? [16, 7, 16] : [14, 6, 14]}
            fov={isMobile ? 65 : 55}
        />
    );
}

// Fires callback on the very first frame after Suspense content is ready
function SceneReadyNotifier({ onReady }: { onReady: () => void }) {
    useEffect(() => {
        const raf = requestAnimationFrame(onReady);
        return () => cancelAnimationFrame(raf);
    }, [onReady]);
    return null;
}

// Accepts splashDone so it can combine model-ready + splash-ended into one opacity
const BorewellScene = ({ splashDone }: { splashDone: boolean }) => {
    const [isMobileDevice, setIsMobileDevice] = useState(false);
    const [modelsReady, setModelsReady] = useState(false);

    useEffect(() => {
        setIsMobileDevice(window.innerWidth < 768);
    }, []);

    const handleReady = useCallback(() => setModelsReady(true), []);

    // Both conditions must be true before we show anything
    const isVisible = modelsReady && splashDone;

    if (isMobileDevice) return null;

    return (
        <div style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0, left: 0,
            zIndex: 1,
            // Single opacity controls everything — no visibility:hidden flash
            opacity: isVisible ? 1 : 0,
            // Faster fade: 0.25s feels instant but still smooth
            transition: "opacity 0.25s ease-out",
            // Pointer events only when visible — prevents click-through during load
            pointerEvents: isVisible ? "auto" : "none",
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
