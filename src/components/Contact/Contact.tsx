"use client";

import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./Contact.module.css";

const Contact = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} id="contact" className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Get a Quote
                </motion.h2>
                <p className={styles.subtitle}>
                    Ready to start your project? Contact us for a free site assessment.
                </p>

                <div className={styles.grid}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.infoCard}
                    >
                        <h3 className={styles.infoTitle}>Contact Information</h3>

                        <div className={styles.infoItem}>
                            <h4 className={styles.label}>Phone</h4>
                            <p className={styles.value}>+91 9510187991</p>
                        </div>
                        <div className={styles.infoItem}>
                            <h4 className={styles.label}>Email</h4>
                            <p className={styles.value}>info.shreesaiborewell@gmail.com</p>
                        </div>
                        <div className={styles.infoItem}>
                            <h4 className={styles.label}>Office</h4>
                            <p className={styles.value}>Elite Sahajanand, C-207, near Chanakya Nagari, Chanakya Nagari, Kalali, Vadodara, Gujarat 390012</p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.form}
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const formData = new FormData(form);
                            const data = {
                                name: formData.get('name'),
                                email: formData.get('email'),
                                phone: formData.get('phone'),
                                service: formData.get('service'),
                                details: formData.get('details'),
                            };

                            const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                            const originalText = submitBtn.innerText;
                            submitBtn.disabled = true;
                            submitBtn.innerText = 'Sending...';

                            try {
                                const response = await fetch('/api/contact', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(data),
                                });

                                const result = await response.json();

                                if (result.success) {
                                    alert('Message sent successfully! We will get back to you soon.');
                                    form.reset();
                                } else {
                                    alert('Failed to send message: ' + (result.error || 'Unknown error'));
                                }
                            } catch (error) {
                                alert('An error occurred. Please try again.');
                            } finally {
                                submitBtn.disabled = false;
                                submitBtn.innerText = originalText;
                            }
                        }}
                    >
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            required
                            className={styles.input}
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            required
                            className={styles.input}
                        />
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            required
                            className={styles.input}
                        />
                        <select
                            name="service"
                            required
                            className={styles.select}
                            defaultValue=""
                        >
                            <option value="" disabled style={{ color: '#aaa', background: '#0a192f' }}>Select Service Required</option>
                            <option value="New Borewell Drilling">New Borewell Drilling</option>
                            <option value="Borewell Recharge Service">Borewell Recharge Service</option>
                            <option value="Submersible Pump Solutions">Submersible Pump Solutions</option>
                            <option value="Air Compressor Service">Air Compressor Service</option>
                            <option value="Borewell Repair Service">Borewell Repair Service</option>
                            <option value="Water Tanker Service">Water Tanker Service</option>
                        </select>
                        <textarea
                            name="details"
                            rows={4}
                            placeholder="Project Details"
                            className={styles.textarea}
                        ></textarea>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

