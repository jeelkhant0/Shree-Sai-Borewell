"use client";

import React from "react";
import styles from "./WhyChooseUs.module.css";
import { motion } from "framer-motion";

const features = [
    {
        title: "Specialized Direct Rotary (DR) Technology",
        description: "We focus only on Direct Rotary drilling for deeper, straighter, and more stable borewells. Ideal for Vadodara's loose soil and sedimentary formations."
    },
    {
        title: "Deep Understanding of Vadodara’s Geology",
        description: "Hands-on experience across Alkapuri, Waghodia, Manjalpur, Ajwa Road, Halol Road, and industrial zones. We check local conditions to plan depth effectively."
    },
    {
        title: "Speed with Accuracy",
        description: "Our active field teams work efficiently to complete drilling on schedule while maintaining quality standards and drilling precision."
    },
    {
        title: "Modern Machinery & Equipment",
        description: "Advanced Direct Rotary rigs and updated tools for faster penetration, reduced breakdown time, and better borewell finishing."
    },
    {
        title: "Clean and Professional Work Approach",
        description: "Disciplined process from site arrival to completion. We focus on safety, proper site handling, and clean execution."
    }
];

const WhyChooseUs = () => {
    return (
        <section className={styles.section} id="strengths">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span style={{ color: 'var(--c-water-light)', letterSpacing: '0.1em', fontWeight: 'bold' }}>OUR EXPERTISE</span>
                    <h2 className={styles.title}>Our Core Strengths</h2>
                    <p className={styles.subtitle}>
                        We combine specialized technology with local geological mastery to deliver the best water solutions.
                    </p>
                </div>

                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={styles.featureCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.titleWrapper}>
                                <div className={styles.icon}>{index + 1}</div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                            </div>
                            <p className={styles.featureDesc}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
