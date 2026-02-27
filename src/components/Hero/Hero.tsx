"use client";

import React from "react";
import styles from "./Hero.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

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
                        with <span className="text-gradient-gold">Precision Direct Rotary(DR) Borewell Drilling</span>
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

            {/* Right-side Logo — after overlay so it shows below buttons on mobile */}
            <motion.div
                className={styles.heroImages}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <div className={styles.heroImgWrap}>
                    <Image
                        src="/SHREE_SAI_BOREWELL_FINAL_LOGO.png"
                        alt="Shree Sai Borewell Logo"
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        priority
                    />
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
