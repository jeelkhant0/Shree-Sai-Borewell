"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const soilTypes = ["Top Soil", "Clay", "Sandstone", "Hard Rock", "Granite", "Aquifer Reach"];

const COLORS = {
    earthDark: "#0f1923",
    earthMid: "#162333",
    waterLight: "#4a9dc7",
    waterGlow: "#7ab8d6",
    gold: "#d4882a",
    goldShine: "#e09e40",
};

export function SplashHUD() {
    const [depth, setDepth] = useState(0);
    const [soilIndex, setSoilIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDepth((prev) => {
                const next = prev + 1.2;
                if (next > 450) return 450;
                return next;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const index = Math.min(Math.floor(depth / 80), soilTypes.length - 1);
        setSoilIndex(index);
    }, [depth]);

    return (
        <div className="splash-hud-container">
            {/* Top Section */}
            <div className="hud-top-section">
                <div className="hud-box glass-panel status-box">
                    <div className="hud-label water-glow">System Status</div>
                    <div className="hud-value flex-center">
                        <span className="status-dot"></span>
                        DRILLING IN PROGRESS
                    </div>
                </div>

                <div className="hud-box glass-panel torque-box">
                    <div className="hud-label gold-text">Drill Torque</div>
                    <div className="hud-value italic">840 Nm</div>
                </div>
            </div>

            {/* Middle decorative scanners */}
            <div className="scanner-line"></div>

            {/* Bottom HUD */}
            <div className="hud-bottom-section">
                <div className="depth-display">
                    <div className="hud-label water-glow">Current Depth</div>
                    <div className="depth-value-container">
                        <span className="depth-number">{Math.floor(depth)}</span>
                        <span className="depth-unit">FT</span>
                    </div>
                </div>

                <div className="hud-box glass-panel strata-box">
                    <div className="hud-label fading">Strata Analysis</div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={soilTypes[soilIndex]}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="strata-value"
                        >
                            {soilTypes[soilIndex]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <style jsx>{`
                .splash-hud-container {
                    position: absolute;
                    inset: 0;
                    z-index: 20;
                    pointer-events: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 2rem;
                    font-family: monospace;
                    color: #fff;
                    overflow: hidden; /* Prevent spill on mobile */
                }
                
                .glass-panel {
                    background: rgba(0, 30, 43, 0.4);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(74, 157, 199, 0.1);
                    padding: 1.5rem;
                    border-radius: 8px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                }

                .hud-top-section {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    width: 100%;
                }

                .hud-box {
                    min-width: 150px;
                }

                .status-box {
                    border-left: 4px solid #1e6fa8;
                }

                .torque-box {
                    border-right: 4px solid #ffab40;
                    text-align: right;
                }

                .hud-label {
                    font-size: 0.6rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                }

                .water-glow { color: #7ab8d6; }
                .gold-text { color: #d4882a; }
                .fading { color: rgba(255,255,255,0.45); }

                .hud-value {
                    font-size: 1.25rem;
                    font-weight: bold;
                }

                .flex-center {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .italic { font-style: italic; }

                .status-dot {
                    width: 8px;
                    height: 8px;
                    background-color: #22c55e;
                    border-radius: 50%;
                    animation: pulse 1.5s infinite;
                }

                .scanner-line {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #7ab8d6, transparent);
                    opacity: 0.12;
                    transform: translateY(-50%);
                }

                .hud-bottom-section {
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    gap: 4rem;
                    width: 100%;
                }

                .depth-display { text-align: center; }

                .depth-value-container {
                    display: flex;
                    align-items: baseline;
                    gap: 0.5rem;
                    justify-content: center;
                }

                .depth-number {
                    font-size: 5rem;
                    font-weight: 900;
                    letter-spacing: -2px;
                    line-height: 1;
                }

                .depth-unit {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #7ab8d6;
                }

                .strata-box {
                    min-width: 220px;
                    text-align: center;
                    border-top: 2px solid rgba(255,255,255,0.1);
                }

                .strata-value {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #d4882a;
                }

                @keyframes pulse {
                    0% { transform: scale(0.9); opacity: 0.7; }
                    50% { transform: scale(1.1); opacity: 1; }
                    100% { transform: scale(0.9); opacity: 0.7; }
                }

                /* Mobile Responsiveness */
                @media (max-width: 1024px) {
                    .hud-bottom-section {
                        gap: 2rem;
                    }
                    .depth-number {
                        font-size: 3.5rem;
                    }
                }

                @media (max-width: 768px) {
                    .splash-hud-container {
                        padding: 1rem;
                    }

                    .hud-top-section {
                        flex-direction: row;
                        justify-content: space-between;
                        gap: 0.5rem;
                    }

                    .hud-box {
                        padding: 0.6rem;
                        min-width: auto;
                    }

                    .status-box .hud-value {
                        font-size: 0.75rem;
                    }
                    
                    .torque-box .hud-value {
                        font-size: 0.8rem;
                    }

                    .hud-label {
                        font-size: 0.45rem;
                        letter-spacing: 1px;
                        margin-bottom: 0.2rem;
                    }

                    .hud-bottom-section {
                        flex-direction: column-reverse;
                        gap: 1rem;
                        align-items: center;
                    }

                    .depth-number {
                        font-size: 3rem;
                    }

                    .depth-unit {
                        font-size: 0.8rem;
                    }

                    .strata-box {
                        min-width: 150px;
                        padding: 0.8rem;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}
