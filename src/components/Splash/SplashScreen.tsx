"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [isFinishing, setIsFinishing] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Reduce splash from 3s → 1.5s total
        const SPLASH_DURATION = 1500;
        const start = Date.now();

        const progressInterval = setInterval(() => {
            const elapsed = Date.now() - start;
            const p = Math.min((elapsed / SPLASH_DURATION) * 100, 100);
            setProgress(p);
        }, 50);

        const timer = setTimeout(() => {
            setIsFinishing(true);
            setTimeout(onFinish, 300); // Shorter exit animation
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
                        background: 'linear-gradient(180deg, #0a1520 0%, #050c14 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: '2rem',
                        overflow: 'hidden',
                    }}
                >
                    {/* Subtle static background — no animated glow blobs */}
                    <div style={{
                        position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none',
                        background: 'radial-gradient(ellipse at 50% 0%, rgba(30, 111, 168, 0.07) 0%, transparent 60%)'
                    }} />

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        style={{ position: 'relative', zIndex: 1 }}
                    >
                        <div style={{
                            width: 120, height: 120, borderRadius: '50%',
                            border: '2px solid rgba(30, 111, 168, 0.35)',
                            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: 'rgba(0,30,43,0.8)',
                            backdropFilter: 'blur(10px)',
                        }}>
                            <Image
                                src="/SHREE_SAI_BOREWELL_FINAL_LOGO.png"
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
                            letterSpacing: '0.15em',
                            color: '#e8edf2',
                            textTransform: 'uppercase',
                            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                        }}>
                            Shree Sai Borewell
                        </div>
                        <div style={{
                            fontSize: '0.75rem',
                            letterSpacing: '0.3em',
                            color: 'rgba(155, 170, 184, 0.7)',
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
                                background: 'linear-gradient(90deg, #1e6fa8, #4a9dc7)',
                                borderRadius: '2px',
                                transition: 'width 0.05s linear',
                            }} />
                        </div>
                        <div style={{
                            fontSize: '0.65rem',
                            letterSpacing: '0.2em',
                            color: 'rgba(155, 170, 184, 0.6)',
                            textAlign: 'center',
                            marginTop: '0.5rem',
                            textTransform: 'uppercase',
                        }}>
                            Loading...
                        </div>
                    </motion.div>


                </motion.div>
            )}
        </AnimatePresence>
    );
}

