"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
    {
        name: "Industrial Pipes",
        image: "/about/about-pipes.jpg",
        emoji: "🔧",
    },
    {
        name: "Drilling Rig",
        image: "/about/about-drilling.jpg",
        emoji: "🏗️",
    },
];

const About3DSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    // Auto-play every 2 seconds
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(next, 3000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, currentIndex]);

    const variants = {
        enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
        center: { opacity: 1, x: 0 },
        exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
    };

    return (
        <div
            style={{ height: "100%", width: "100%", position: "relative", display: "flex", flexDirection: "column" }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Image area — top 75%, padded so full image is visible */}
            <div style={{ position: "relative", flex: "1 1 75%", overflow: "hidden", borderRadius: "12px", padding: "1rem" }}>
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.40, ease: "easeInOut" }}
                        style={{ position: "absolute", inset: "2rem" }}
                    >
                        <Image
                            src={SLIDES[currentIndex].image}
                            alt={SLIDES[currentIndex].name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={100}
                            style={{ objectFit: "contain", objectPosition: "center" }}
                            priority={currentIndex === 0}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Progress dots — right side, inside image area */}
                <div style={{
                    position: "absolute", top: "50%", right: "0.75rem",
                    transform: "translateY(-50%)",
                    display: "flex", flexDirection: "column", gap: "0.5rem", zIndex: 10,
                }}>
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                            aria-label={`Go to slide ${i + 1}`}
                            style={{
                                width: "6px",
                                height: i === currentIndex ? "18px" : "6px",
                                borderRadius: "9999px",
                                background: i === currentIndex ? "#00D1FF" : "rgba(255,255,255,0.25)",
                                border: "none", cursor: "pointer", padding: 0,
                                transition: "all 0.3s ease",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Controls bar — below image, no overlap */}
            <div style={{
                flex: "0 0 auto",
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "1.5rem", padding: "0.75rem 1rem",
                borderTop: "1px solid rgba(255,255,255,0.07)",
            }}>
                {/* Prev button */}
                <button
                    onClick={prev}
                    aria-label="Previous"
                    style={{
                        padding: "0.55rem", borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "white", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "background 0.2s ease",
                    }}
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Title badge */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`title-${currentIndex}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            padding: "0.4rem 1.2rem", borderRadius: "9999px",
                            background: "rgba(0,42,58,0.9)", backdropFilter: "blur(8px)",
                            border: "1px solid rgba(0,209,255,0.3)", color: "#00D1FF",
                            fontSize: "0.8rem", fontWeight: "700",
                            letterSpacing: "0.08em", textTransform: "uppercase",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {SLIDES[currentIndex].name}
                    </motion.div>
                </AnimatePresence>

                {/* Next button */}
                <button
                    onClick={next}
                    aria-label="Next"
                    style={{
                        padding: "0.55rem", borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "white", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "background 0.2s ease",
                    }}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default About3DSlideshow;
