"use client";

import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const About3DSlideshow = dynamic(() => import("./About3DSlideshow"), {
    ssr: false,
    loading: () => <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)' }}>Loading 3D Models...</div>
});

const About = () => {
    return (
        <section className={styles.aboutSection} id="about">
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.badge}>Why Choose Shree Sai Borewell?</span>
                    <h2 className={styles.title}>
                        Top-Rated Borewell Drilling <br />
                        <span className="text-gradient-water">Contractor in Vadodara</span>
                    </h2>
                    <p className={styles.description}>
                        Water is the foundation of every home, industry, and agricultural activity.
                        A dependable borewell ensures uninterrupted daily operations, smooth construction progress,
                        and long-term peace of mind.
                    </p>
                    <p className={styles.description}>
                        At <strong>Shree Sai Borewell Drilling</strong>, we specialize exclusively in <strong>Direct Rotary (DR) drilling</strong>,
                        which is considered one of the most efficient and suitable techniques for the alluvial and
                        sedimentary soil formations commonly found in Vadodara and surrounding areas.
                    </p>
                    <p className={styles.description}>
                        Unlike traditional drilling methods, Direct Rotary technology allows deeper penetration,
                        faster progress, and cleaner borewell construction. We combine local geological understanding,
                        modern equipment, and practical field experience to deliver results.
                    </p>


                </motion.div>

                <motion.div
                    className={styles.visualSide}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ background: 'none', border: 'none', boxShadow: 'none', marginTop: '-3rem' }}
                >
                    <About3DSlideshow />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
