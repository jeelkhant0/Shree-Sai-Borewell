"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Quality.module.css";

const Quality = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.card}
                >
                    <h2 className={styles.title}>
                        Our Commitment to <span className="text-gradient-water">Quality</span>
                    </h2>
                    <p className={styles.text}>
                        At Shree Sai Borewell Drilling, quality is not just a promise — it is a standard.
                        We focus on accurate drilling depth, proper alignment, reliable machinery,
                        and honest service. We believe a properly drilled borewell should serve for years without major issues.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Quality;
