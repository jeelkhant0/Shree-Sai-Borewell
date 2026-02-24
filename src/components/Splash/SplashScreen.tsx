"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [isFinishing, setIsFinishing] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Reduce splash from 8s → 3s total
        const SPLASH_DURATION = 3000;
        const start = Date.now();

        const progressInterval = setInterval(() => {
            const elapsed = Date.now() - start;
            const p = Math.min((elapsed / SPLASH_DURATION) * 100, 100);
            setProgress(p);
        }, 50);

        const timer = setTimeout(() => {
            setIsFinishing(true);
            setTimeout(onFinish, 600); // Shorter exit animation
        }, SPLASH_DURATION);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, [onFinish]);

    return (
        <AnimatePresence>
            {!isFinishing && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
                        zIndex: 99999,
                        background: 'radial-gradient(circle at 50% 0%, #001e2b 0%, #000000 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: '2rem',
                        overflow: 'hidden',
                    }}
                >
                    {/* Subtle CSS-only animated background — no WebGL */}
                    <div style={{
                        position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none'
                    }}>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} style={{
                                position: 'absolute',
                                borderRadius: '50%',
                                background: `radial-gradient(circle, rgba(38,198,218,${0.04 + i * 0.01}) 0%, transparent 70%)`,
                                width: `${300 + i * 120}px`,
                                height: `${300 + i * 120}px`,
                                top: `${10 + i * 8}%`,
                                left: `${15 + i * 10}%`,
                                animation: `pulse-glow ${3 + i}s ease-in-out infinite alternate`,
                            }} />
                        ))}
                    </div>

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        style={{ position: 'relative', zIndex: 1 }}
                    >
                        <div style={{
                            width: 120, height: 120, borderRadius: '50%',
                            border: '2px solid rgba(38,198,218,0.4)',
                            boxShadow: '0 0 40px rgba(38,198,218,0.3), inset 0 0 20px rgba(38,198,218,0.05)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: 'rgba(0,30,43,0.8)',
                            backdropFilter: 'blur(10px)',
                        }}>
                            <Image
                                src="/logossb.webp"
                                alt="Shree Sai Borewell"
                                width={90}
                                height={90}
                                style={{ borderRadius: '50%', objectFit: 'contain' }}
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Brand Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
                    >
                        <div style={{
                            fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
                            fontWeight: 700,
                            letterSpacing: '0.25em',
                            color: '#e0f7fa',
                            textTransform: 'uppercase',
                            textShadow: '0 0 20px rgba(38,198,218,0.5)',
                        }}>
                            Shree Sai Borewell
                        </div>
                        <div style={{
                            fontSize: '0.75rem',
                            letterSpacing: '0.3em',
                            color: 'rgba(132, 255, 255, 0.6)',
                            marginTop: '0.4rem',
                            textTransform: 'uppercase',
                        }}>
                            Expert Borewell Drilling • Vadodara
                        </div>
                    </motion.div>

                    {/* Progress Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ position: 'relative', zIndex: 1, width: '180px' }}
                    >
                        <div style={{
                            height: '2px',
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '2px',
                            overflow: 'hidden',
                        }}>
                            <div style={{
                                height: '100%',
                                width: `${progress}%`,
                                background: 'linear-gradient(90deg, #26c6da, #84ffff)',
                                borderRadius: '2px',
                                transition: 'width 0.05s linear',
                                boxShadow: '0 0 8px rgba(38,198,218,0.8)',
                            }} />
                        </div>
                        <div style={{
                            fontSize: '0.65rem',
                            letterSpacing: '0.2em',
                            color: 'rgba(132,255,255,0.5)',
                            textAlign: 'center',
                            marginTop: '0.5rem',
                            textTransform: 'uppercase',
                        }}>
                            Loading...
                        </div>
                    </motion.div>

                    <style>{`
                        @keyframes pulse-glow {
                            from { opacity: 0.3; transform: scale(1); }
                            to { opacity: 0.7; transform: scale(1.05); }
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
