"use client";

import React from "react";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <main style={{ background: 'linear-gradient(180deg, var(--c-earth-dark) 0%, var(--c-earth-mid) 100%)', minHeight: '100vh', color: '#fff' }}>
            <Navbar />

            {/* Header */}
            <section style={{ padding: '8rem 2rem 4rem', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontFamily: 'var(--font-jakarta)' }}>
                        Precision <span className="text-gradient-water">Direct Rotary</span> Drilling
                    </h1>
                    <p style={{ color: 'var(--c-text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                        Specialized borewell drilling services for Domestic, Industrial, and Agricultural needs.
                    </p>
                </motion.div>
            </section>

            {/* Core Expertise Intro */}
            <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ background: 'rgba(15, 35, 55, 0.5)', borderRadius: '16px', padding: '3rem', border: '1px solid rgba(74, 157, 199, 0.12)' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff' }}>Our Core Expertise</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--c-text-secondary)', marginBottom: '1rem' }}>
                        At Shree Sai Borewell Drilling, we focus exclusively on Direct Rotary (DR) drilling, a modern and highly efficient method known for accuracy, speed, and deep water access. By specializing in a single advanced drilling technique, we ensure better results, stronger bore structures, and consistent water yield for every type of project.
                    </p>
                    <p style={{ lineHeight: '1.8', color: 'var(--c-text-secondary)' }}>
                        Our team actively supervises each stage of the drilling process, from site evaluation to final flushing. We use precision machinery, technical knowledge, and practical field experience to deliver reliable borewell solutions across Vadodara and surrounding areas.
                    </p>
                </div>
            </section>

            {/* Service Categories */}
            <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '3rem' }}>

                    {/* Domestic */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--c-water-primary)' }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--c-water-light)' }}>1. Domestic Borewell Drilling</h3>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--c-text-secondary)' }}>
                            Water security is essential for every home. Our domestic borewell drilling services are designed to provide a dependable and long-term water source for Individual houses, Bungalows, Apartments, and Residential societies.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--c-text-primary)' }}>
                            {['Compact rigs for narrow areas', '5-inch to 8-inch diameter', 'Proper bore alignment', 'Strong casing support'].map(item => (
                                <li key={item} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-gold)', marginRight: '0.5rem' }}>•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Agri & Industrial */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--c-gold)' }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--c-gold)' }}>2. Agricultural & Industrial Drilling</h3>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--c-text-secondary)' }}>
                            Farms and industries depend heavily on a continuous water supply. We provide Direct Rotary drilling solutions for Irrigation, Manufacturing, Processing plants, and Greenhouses.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--c-text-primary)' }}>
                            {['Deep aquifer access', 'Large diameter for heavy pumps', 'Uninterrupted flow support', 'High-volume extraction'].map(item => (
                                <li key={item} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-water-light)', marginRight: '0.5rem' }}>•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Flushing */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '2.5rem', borderRadius: '12px', borderLeft: '4px solid var(--c-water-deep)' }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>3. Borewell Flushing & Cleaning</h3>
                        <p style={{ marginBottom: '1rem', color: 'var(--c-text-secondary)' }}>
                            Over time, silt and debris reduce water flow. Our high-pressure flushing restores borewell performance.
                        </p>
                        <p style={{ color: 'var(--c-text-secondary)' }}>
                            We remove silt, clear blockages, and improve pump efficiency to extend existing borewell life.
                        </p>
                    </motion.div>

                    {/* Soil Testing */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '2.5rem', borderRadius: '12px', borderLeft: '4px solid var(--c-gold)' }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>4. Soil Testing & Feasibility</h3>
                        <p style={{ marginBottom: '1rem', color: 'var(--c-text-secondary)' }}>
                            Successful drilling starts with planning. We study ground conditions and local patterns to identify optimal drilling locations.
                        </p>
                        <p style={{ color: 'var(--c-text-secondary)' }}>
                            This reduces risk, saves money, and increases the success rate of finding sustainable water sources.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* Why Direct Rotary */}
            <section style={{ padding: '6rem 2rem', background: 'var(--c-earth-mid)' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Why Choose <span className="text-gradient-water">Direct Rotary Drilling?</span></h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                        {['Faster Drilling Speed', 'Better Depth Reach', 'Stable Bore Structure', 'Suitable for Multiple Soils', 'Higher Success Rate'].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    background: 'linear-gradient(135deg, var(--c-water-deep) 0%, transparent 100%)',
                                    padding: '1.5rem 2rem',
                                    borderRadius: '50px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#fff',
                                    fontWeight: '500'
                                }}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commitment */}
            <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--c-gold)' }}>Our Commitment</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--c-text-secondary)' }}>
                        We believe borewell drilling is not just a service but a long-term investment in water security. That is why we focus on skilled supervision, proper techniques, and quality execution. From small residential needs to large industrial requirements, our services in Vadodara are built to last.
                    </p>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
