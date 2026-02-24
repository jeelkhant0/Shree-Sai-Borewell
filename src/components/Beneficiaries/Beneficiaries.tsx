"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Beneficiaries.module.css";

const groups = [
    {
        title: "Residential Properties",
        desc: "Ensure a reliable water source for daily household use, construction work, and long-term living needs."
    },
    {
        title: "Industrial Units",
        desc: "Properly drilled borewells support uninterrupted production and reduce dependence on external water sources."
    },
    {
        title: "Agricultural Land",
        desc: "Farmers benefit from deep and efficient borewells that support irrigation and improve crop productivity."
    },
    {
        title: "Commercial Projects",
        desc: "Hotels, hospitals, schools, and commercial complexes need dependable water systems for smooth functioning."
    }
];

const Beneficiaries = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Who Can Benefit from <span className="text-gradient-gold">Our Services?</span>
                </h2>

                <div className={styles.grid}>
                    {groups.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={styles.card}
                        >
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Beneficiaries;
