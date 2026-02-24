"use client";

import React from "react";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main style={{ background: 'linear-gradient(180deg, var(--c-earth-dark) 0%, var(--c-earth-mid) 100%)', minHeight: '100vh', color: '#fff' }}>
            <Navbar />

            {/* Header */}
            <section style={{ padding: '8rem 2rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontFamily: 'var(--font-jakarta)' }}>
                        We <span className="text-gradient-water">Dig Deeper</span> to Solve Your Water Needs
                    </h1>
                    <p style={{ color: 'var(--c-text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                        Trusted Borewell Drilling Contractors in Vadodara specializing in Direct Rotary techniques.
                    </p>
                </motion.div>
            </section>

            {/* Who We Are */}
            <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '2rem', borderLeft: '4px solid var(--c-water-primary)', paddingLeft: '1rem' }}
                >
                    Who We Are
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--c-text-secondary)' }}
                >
                    <p style={{ marginBottom: '1.5rem' }}>
                        Shree Sai Borewell Drilling is a trusted and reliable name in Vadodara’s water infrastructure sector. Since our establishment, we have worked with a clear purpose — to provide dependable, efficient, and long-lasting borewell solutions using advanced Direct Rotary (DR) drilling technology.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Over the years, we have earned the confidence of homeowners, farmers, and industrial clients by consistently delivering quality results. We believe that borewell drilling is not just a service; it is a responsibility that directly supports livelihoods, businesses, and daily life.
                    </p>
                    <p>
                        Unlike many contractors who try to offer multiple drilling methods without specialization, we have chosen to focus strongly on Direct Rotary drilling. This focus allows us to refine our expertise, use the right equipment, and deliver better outcomes with precision and consistency.
                    </p>
                </motion.div>
            </section>

            {/* Mission & Vision */}
            <section style={{ padding: '4rem 2rem', background: 'rgba(38, 198, 218, 0.05)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--c-water-light)' }}>Our Mission</h3>
                        <p style={{ lineHeight: '1.7', color: 'var(--c-text-secondary)' }}>
                            Our mission is simple yet powerful — to help eliminate water scarcity and provide dependable water access across Vadodara and surrounding areas. We strive to support residential, agricultural, and industrial clients by offering strong, stable, and long-lasting borewell solutions. We achieve this by investing in modern machinery, maintaining high technical standards, and employing skilled operators.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--c-gold)' }}>Our Vision</h3>
                        <p style={{ lineHeight: '1.7', color: 'var(--c-text-secondary)' }}>
                            We aim to become one of the most trusted and respected borewell drilling contractors in Vadodara by consistently delivering reliable results and maintaining strong relationships with our clients. Our vision is to combine engineering knowledge, field experience, and advanced drilling methods to create sustainable water solutions for the future.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Direct Rotary */}
            <section style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                    Why We Focus on <span className="text-gradient-water">Direct Rotary (DR) Drilling</span>
                </h2>
                <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--c-text-secondary)', fontSize: '1.1rem' }}>
                    The soil and rock formations in and around Vadodara often require the flushing power, stability, and efficiency that Direct Rotary drilling provides.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {[{
                        title: "Faster Drilling", desc: "Achieve smoother drilling in mixed soil formations."
                    }, {
                        title: "Borehole Stability", desc: "Reduces collapse risks and ensures better structural strength."
                    }, {
                        title: "Long-term Durability", desc: "Results in a durable borewell with a longer working life."
                    }, {
                        title: "Reduced Risks", desc: "Specialized technique minimizes operational hazards."
                    }].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                textAlign: 'center',
                                padding: '2rem',
                                border: '1px solid var(--c-water-primary)',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, rgba(0,188,212,0.1) 0%, transparent 100%)'
                            }}
                        >
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>{item.title}</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--c-text-secondary)' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Our Strength */}
            <section style={{ padding: '4rem 2rem', background: 'var(--c-earth-mid)', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Strength</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--c-text-secondary)' }}>
                        Our strength lies in our technical experience, modern drilling setup, and dedication to customer satisfaction. We understand that every site is different, and every water requirement is unique. That is why we approach each project with proper planning, careful execution, and a strong focus on quality. At Shree Sai Borewell Drilling, we don’t just drill borewells — we build dependable water sources that support families, farms, and industries for years to come.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
