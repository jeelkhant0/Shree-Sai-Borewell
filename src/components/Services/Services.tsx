"use client";

import React from "react";
import styles from "./Services.module.css";
import Service3DIcon from "./Service3DIcon";

const servicesList = [
    {
        id: 1,
        title: "Borewell Drilling",
        desc: "High-precision drilling using advanced hydraulic rigs for deep and reliable water access.",
        iconType: "drill"
    },
    {
        id: 2,
        title: "Groundwater Survey",
        desc: "Scientific soil testing and geological scanning to identify optimal water sources.",
        iconType: "survey"
    },
    {
        id: 3,
        title: "Cleaning & Maintenance",
        desc: "Restoring borewell efficiency through high-pressure cleaning and flushing.",
        iconType: "cleaning"
    },
    {
        id: 4,
        title: "Recharge Systems",
        desc: "Sustainable rainwater harvesting and groundwater replenishment solutions.",
        iconType: "recharge"
    },
    {
        id: 5,
        title: "Pump Installation",
        desc: "End-to-end setup of submersible pumps with performance testing and warranty.",
        iconType: "pump"
    }
];

const Services = () => {
    return (
        <section id="services" className={styles.servicesSection}>
            <div className={styles.headingWrapper}>
                <span className={styles.subLabel}>Our Expertise</span>
                <h2 className={styles.heading}>Comprehensive Solutions</h2>
                <p style={{ color: "var(--c-text-secondary)" }}>From exploration to extraction, we cover it all.</p>
            </div>

            <div className={styles.grid}>
                {servicesList.map((service) => (
                    <div key={service.id} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Service3DIcon type={service.iconType} />
                        </div>
                        <h3 className={styles.cardTitle}>{service.title}</h3>
                        <p className={styles.cardDesc}>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
