"use client";

import React from "react";
import styles from "./Showcase.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Industrial Deep Well",
        location: "GIGC, Vadodara",
        tag: "Industrial",
        image: "/Photos/2a76389d-0c30-4e66-b24b-7024a31427b6.JPG"
    },
    {
        id: 2,
        title: "50-Acre Irrigation Grid",
        location: "Karjan, Gujarat",
        tag: "Agricultural",
        image: "/Photos/2f79d379-f0ec-4ae0-9f1d-ca58ae6026dd.JPG"
    },
    {
        id: 3,
        title: "Skyline Residency",
        location: "Alkapuri, Vadodara",
        tag: "Residential",
        image: "/Photos/4e31cefe-40c6-4865-9f50-699943d60aaf.JPG"
    },
    {
        id: 4,
        title: "Pharmaceutical Plant",
        location: "Savli, Gujarat",
        tag: "Commercial",
        image: "/Photos/5180feea-df53-4084-92fb-b036c5fbb549.JPG"
    }
];

const Showcase = () => {
    return (
        <section className={styles.section} id="showcase">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <motion.h2
                            className={styles.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Featured <span className="text-gradient-water">Projects</span>
                        </motion.h2>
                        <p style={{ color: 'var(--c-text-secondary)' }}>Delivering excellence across sectors.</p>
                    </div>
                    <a href="#" className={styles.viewAll}>View All Projects →</a>
                </div>

                <div className={styles.projectsGrid}>
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            className={styles.projectCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                        >
                            <div className={styles.imagePlaceholder}>
                                {/* Use Next.js Image for automatic optimization, lazy loading, WebP conversion */}
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ objectFit: 'cover' }}
                                    loading="lazy"
                                />
                            </div>

                            <span className={styles.projectTag}>{p.tag}</span>

                            <div className={styles.projectInfo}>
                                <div className={styles.projectLocation}>{p.location}</div>
                                <h3 className={styles.projectTitle}>{p.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
