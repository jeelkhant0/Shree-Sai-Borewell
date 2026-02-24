import React, { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, PerspectiveCamera, Float } from "@react-three/drei";
import * as THREE from "three";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ErrorBoundary from "../UI/ErrorBoundary";
import { motion, AnimatePresence } from "framer-motion";

const MODELS = [
    {
        name: "Industrial Pipes",
        path: "/3d/industrial_pipes_pack.glb",
        rotationSpeed: 0.003,
        scale: 0.005,
        position: [0, 0, 0],
        emoji: "🔧",
    },
    {
        name: "Old Water Pump",
        path: "/3d/old_water_pump.glb",
        rotationSpeed: 0.005,
        scale: 7.0,
        position: [0, -3.5, 0],
        emoji: "💧",
    },
    {
        name: "Drilling Rig",
        path: "/3d/Tract2.glb",
        rotationSpeed: 0.004,
        scale: 1.5,
        position: [0, -3, 0],
        emoji: "🏗️",
    },
    {
        name: "Oil Rig",
        path: "/3d/oil_rig_-_low_poly.glb",
        rotationSpeed: 0.006,
        scale: 0.5,
        position: [0, -3, 0],
        emoji: "⛽",
    }
];

function ResponsiveAboutCamera() {
    const { width } = useThree((state) => state.viewport);
    const isMobile = width < 6;
    const isTablet = width >= 6 && width < 10;

    return (
        <PerspectiveCamera
            makeDefault
            position={isMobile ? [18, 14, 18] : isTablet ? [14, 10, 14] : [10, 8, 10]}
            fov={isMobile ? 50 : 45}
        />
    );
}

const Model = ({ path, rotationSpeed, scale, position }: {
    path: string; rotationSpeed: number; scale: number; position: number[];
}) => {
    const { scene } = useGLTF(path) as any;
    const ref = useRef<THREE.Group>(null);
    const clonedScene = useMemo(() => scene.clone(), [scene]);

    useFrame(() => {
        if (ref.current) ref.current.rotation.y += rotationSpeed;
    });

    return (
        <group ref={ref} scale={[scale, scale, scale]} position={position as any}>
            <primitive object={clonedScene} />
        </group>
    );
};

/* Lightweight mobile card — shown instead of WebGL on phones */
const MobileModelCard = ({ model, onPrev, onNext, index, total }: {
    model: typeof MODELS[0];
    onPrev: () => void;
    onNext: () => void;
    index: number;
    total: number;
}) => (
    <div style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '1rem',
        background: 'radial-gradient(circle at center, rgba(38,198,218,0.07) 0%, transparent 70%)',
        borderRadius: '16px', padding: '2rem',
    }}>
        <div style={{ fontSize: '4rem', lineHeight: 1 }}>{model.emoji}</div>
        <div style={{
            fontSize: '1.1rem', fontWeight: 700, color: '#00D1FF',
            letterSpacing: '0.05em', textTransform: 'uppercase', textAlign: 'center',
        }}>
            {model.name}
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
            {Array.from({ length: total }).map((_, i) => (
                <div key={i} style={{
                    width: i === index ? '16px' : '8px', height: '8px',
                    borderRadius: '9999px', transition: 'all 0.3s',
                    background: i === index ? '#00D1FF' : 'rgba(255,255,255,0.2)',
                }} />
            ))}
        </div>

        {/* Prev / Next buttons */}
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
            {[onPrev, onNext].map((fn, bi) => (
                <button key={bi} onClick={fn} aria-label={bi === 0 ? "Previous" : "Next"}
                    style={{
                        padding: '0.75rem', borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'white', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                    {bi === 0 ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
                </button>
            ))}
        </div>
    </div>
);

const About3DSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Skip WebGL on mobile devices — major performance gain
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Only render WebGL when the section is in the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const nextModel = () => setCurrentIndex((prev) => (prev + 1) % MODELS.length);
    const prevModel = () => setCurrentIndex((prev) => (prev - 1 + MODELS.length) % MODELS.length);

    useEffect(() => {
        if (!isAutoPlaying || !isVisible) return;
        const interval = setInterval(nextModel, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, isVisible]);

    return (
        <div
            ref={containerRef}
            style={{ height: '100%', width: '100%', position: 'relative' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Mobile: CSS card — no WebGL */}
            {isMobile ? (
                <MobileModelCard
                    model={MODELS[currentIndex]}
                    onPrev={prevModel}
                    onNext={nextModel}
                    index={currentIndex}
                    total={MODELS.length}
                />
            ) : (
                <>
                    <ErrorBoundary>
                        {isVisible && (
                            <Canvas
                                shadows={false}
                                dpr={[1, 1.2]}
                                gl={{
                                    antialias: false,
                                    powerPreference: "high-performance",
                                    stencil: false,
                                }}
                                performance={{ min: 0.5 }}
                            >
                                <ResponsiveAboutCamera />
                                <Suspense fallback={null}>
                                    <ambientLight intensity={1.5} />
                                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                                    <pointLight position={[-10, -10, -10]} intensity={0.8} />

                                    <Center top key={currentIndex}>
                                        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
                                            <Model
                                                path={MODELS[currentIndex].path}
                                                rotationSpeed={MODELS[currentIndex].rotationSpeed}
                                                scale={MODELS[currentIndex].scale}
                                                position={MODELS[currentIndex].position}
                                            />
                                        </Float>
                                    </Center>

                                    <OrbitControls
                                        enableZoom={false}
                                        maxPolarAngle={Math.PI / 1.7}
                                        minPolarAngle={Math.PI / 3}
                                        enableDamping
                                        dampingFactor={0.05}
                                    />
                                </Suspense>
                            </Canvas>
                        )}
                    </ErrorBoundary>

                    {/* Prev/Next buttons — desktop only */}
                    <div style={{
                        position: 'absolute', bottom: '1rem', left: '50%',
                        transform: 'translateX(-50%)', display: 'flex',
                        alignItems: 'center', gap: '1.5rem', zIndex: 10,
                    }}>
                        {[prevModel, nextModel].map((fn, bi) => (
                            <button
                                key={bi}
                                onClick={fn}
                                aria-label={bi === 0 ? "Previous model" : "Next model"}
                                style={{
                                    padding: '0.75rem', borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(6px)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    color: 'white', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {bi === 0 ? <ChevronLeft size={28} /> : <ChevronRight size={28} />}
                            </button>
                        ))}
                    </div>

                    {/* Model title badge */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                position: 'absolute', bottom: '5rem', left: '50%',
                                transform: 'translateX(-50%)',
                                padding: '0.5rem 1.5rem', borderRadius: '9999px',
                                background: 'rgba(0,42,58,0.8)', backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(0,209,255,0.3)', color: '#00D1FF',
                                fontSize: '0.875rem', fontWeight: 'bold',
                                letterSpacing: '0.05em', textTransform: 'uppercase',
                                zIndex: 10, whiteSpace: 'nowrap',
                            }}
                        >
                            {MODELS[currentIndex].name}
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress dots */}
                    <div style={{
                        position: 'absolute', top: '1rem', right: '1rem',
                        display: 'flex', flexDirection: 'column', gap: '0.5rem', zIndex: 10,
                    }}>
                        {MODELS.map((_, i) => (
                            <div key={i} style={{
                                width: '6px', height: i === currentIndex ? '16px' : '6px',
                                borderRadius: '9999px', transition: 'all 0.3s ease',
                                background: i === currentIndex ? '#00D1FF' : 'rgba(255,255,255,0.2)',
                            }} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default About3DSlideshow;
