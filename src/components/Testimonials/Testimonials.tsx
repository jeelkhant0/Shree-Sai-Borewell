"use client";

import React from "react";
// We can use inline styles for simplicity as this is the last component, or create a module. 
// Using inline for speed/compactness as per standard single-file ease, but module is better.
// I'll stick to inline for this simple section to save file overhead if allowed, but consistency matters.
import styles from "./Testimonials.module.css";

const Testimonials = () => {
    return (
        <section className={styles.testimonialSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Client <span className="text-gradient-water">Stories</span></h2>

                <div className={styles.cardGrid}>
                    <div className={styles.card}>
                        <p className={styles.quote}>"The precision of their borewell drilling is unmatched. They found water exactly where they predicted."</p>
                        <div className={styles.author}>
                            <div className={styles.avatar}>RJ</div>
                            <div>
                                <span className={styles.name}>Rajesh Jha</span>
                                <span className={styles.role}>Farm Owner</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <p className={styles.quote}>"Professional team, modern equipment, and completely transparent billing. Highly recommended."</p>
                        <div className={styles.author}>
                            <div className={styles.avatar}>AT</div>
                            <div>
                                <span className={styles.name}>Amit Trivedi</span>
                                <span className={styles.role}>Industrial Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
