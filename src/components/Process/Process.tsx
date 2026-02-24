"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Process.module.css";

const steps = [
    "Site inspection and understanding soil conditions",
    "Positioning of heavy-duty Direct Rotary rig",
    "Precision drilling with proper depth planning",
    "Maintaining borewell verticality throughout drilling",
    "Clean bore formation for better casing installation",
    "Smooth project completion with minimum site disturbance"
];

const Process = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Our Direct Rotary <span className="text-gradient-water">Drilling Process</span>
                    </h2>
                    <p className={styles.subtitle}>A systematic and professional approach for long-term stability.</p>
                </div>

                <div className={styles.grid}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={styles.stepCard}
                        >
                            <div className={styles.stepNumber}>
                                {i + 1}
                            </div>
                            <p className={styles.stepText}>{step}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
