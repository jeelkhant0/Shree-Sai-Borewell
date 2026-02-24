"use client";

import React, { useState, useEffect, useCallback } from "react";
import styles from "./Hero.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const STATUSES = ["POSITIONING", "DRILLING", "EXTRACTING", "COMPLETE"];

const Hero = () => {
    const [statusIndex, setStatusIndex] = useState(0);
    const [depth, setDepth] = useState(0);

    useEffect(() => {
        // Use requestAnimationFrame instead of setInterval(100ms) — far more efficient
        // Only update every ~1600ms for status (not every 100ms)
        const statusTimer = setInterval(() => {
            setStatusIndex(i => (i + 1) % STATUSES.length);
        }, 5000);

        // Depth only needs to update every 500ms — visual bar, not real-time critical
        const depthTimer = setInterval(() => {
            const time = Date.now() / 1000;
            const cycle = 20;
            const progress = (time % cycle) / cycle;
            setDepth(Math.round(progress * 350)); // pre-round to avoid re-renders from float precision
        }, 500);

        return () => {
            clearInterval(statusTimer);
            clearInterval(depthTimer);
        };
    }, []);

    const scrollToContact = useCallback(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <section className={styles.heroContainer}>
            <div className={styles.overlay}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <span className={styles.tagline}>Reliable • Fast • Professional</span>
                    <h1 className={styles.headline}>
                        Secure Your <span className="text-gradient-water">Water Source</span> <br />
                        with <span className="text-gradient-gold">Precision Direct Rotary Drilling</span>
                    </h1>
                    <p className={styles.subheadline}>
                        Advanced Direct Rotary (DR) borewell drilling in Vadodara with modern machinery,
                        deep drilling expertise, and fast, reliable water solutions for residential,
                        industrial, and agricultural needs.
                    </p>

                    <div className={styles.buttonGroup}>
                        <button onClick={scrollToContact} className={styles.primaryBtn}>
                            Get a Free Quote
                        </button>
                        <Link href="/services" passHref>
                            <button className={styles.secondaryBtn}>
                                Our Services
                            </button>
                        </Link>
                    </div>
                </motion.div>

                {/* Drilling Story HUD */}
                <div className={styles.hudContainer}>
                    <div className={styles.hudLine}>
                        <span className={styles.hudLabel}>OPERATIONAL STATUS</span>
                        <span className={styles.hudValue}>{STATUSES[statusIndex]}</span>
                    </div>

                    <div className={styles.hudLine}>
                        <span className={styles.hudLabel}>DRILLING DEPTH</span>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `${(depth / 350) * 100}%` }}
                            />
                        </div>
                        <span className={styles.hudValue}>{depth} FT</span>
                    </div>

                    <div className={styles.hudLine}>
                        <span className={styles.hudLabel}>SIGNAL QUALITY</span>
                        <span className={styles.hudValue} style={{ color: '#00ff00' }}>OPTIMAL</span>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span>SCROLL TO EXPLORE</span>
            </div>
        </section>
    );
};

export default Hero;
