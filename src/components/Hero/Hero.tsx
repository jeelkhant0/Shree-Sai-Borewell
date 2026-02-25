"use client";

import React from "react";
import styles from "./Hero.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically load the 3D canvas — SSR must be off for Three.js
const HeroTruck3D = dynamic(() => import("./HeroTruck3D"), {
    ssr: false,
    loading: () => null,
});

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className={styles.heroContainer}>
            {/* Right-side 3D truck — same position as the old static image */}
            <motion.div
                className={styles.heroImages}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                {/* The canvas fills the heroImages container exactly */}
                <div className={styles.heroImgWrap}>
                    <HeroTruck3D />
                </div>
            </motion.div>

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
