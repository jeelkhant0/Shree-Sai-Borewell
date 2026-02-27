"use client";

import React from "react";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import { motion } from "framer-motion";

export default function BlogPage() {
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
                        The <span className="text-gradient-water">Drilling Diary</span>
                    </h1>
                    <p style={{ color: 'var(--c-text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        A Knowledge Hub for Borewell Owners, Industries & Farmers
                    </p>
                </motion.div>
            </section>

            {/* Intro */}
            <section style={{ padding: '2rem 2rem 4rem', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ background: 'rgba(38, 198, 218, 0.05)', borderRadius: '16px', padding: '3rem', border: '1px solid rgba(132, 255, 255, 0.1)' }}>
                    <p style={{ lineHeight: '1.8', color: 'var(--c-text-secondary)', marginBottom: '1rem' }}>
                        Welcome to The Drilling Diary, your trusted source for practical knowledge, expert guidance, and real-world insights on borewell drilling, groundwater management, and maintenance. Whether you are planning a new borewell, managing an existing one, or simply want to understand groundwater behavior in Vadodara and surrounding regions, this blog is designed to help you make informed decisions.
                    </p>
                    <p style={{ lineHeight: '1.8', color: 'var(--c-text-secondary)' }}>
                        At Shree Sai Borewell, we believe that a borewell is not just a drilling project — it is a long-term water investment. Through this blog, we share our field experience, technical expertise, and local knowledge to help homeowners, industries, and agricultural users maintain reliable water sources.
                    </p>
                </div>
            </section>

            {/* Blog Posts */}
            <section style={{ padding: '2rem 2rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '3rem' }}>

                    {/* Post 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        <div style={{ height: '200px', background: 'linear-gradient(135deg, var(--c-earth-mid) 0%, var(--c-water-deep) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '3rem' }}>🚜</span>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Why Direct Rotary Drilling Suits Vadodara's Soil</h3>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--c-text-secondary)', lineHeight: '1.7' }}>
                                In Vadodara, user soil conditions often consist of soft sedimentary layers and clay. Direct Rotary (DR) drilling uses fluid circulation to stabilize walls, preventing collapse and ensuring deeper penetration compared to other methods suitable only for hard rock.
                            </p>
                            <ul style={{ paddingLeft: '1rem', marginBottom: '1.5rem', color: 'var(--c-text-secondary)' }}>
                                <li>Better stability in loose soil</li>
                                <li>Faster drilling speed</li>
                                <li>Reduced collapse risks</li>
                            </ul>
                            <div style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center', color: 'var(--c-water-light)', cursor: 'pointer' }}>Read More</div>
                        </div>
                    </motion.div>

                    {/* Post 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        <div style={{ height: '200px', background: 'linear-gradient(135deg, var(--c-earth-mid) 0%, var(--c-gold) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '3rem' }}>🛠️</span>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>How to Maintain Your New Borewell</h3>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--c-text-secondary)', lineHeight: '1.7' }}>
                                Drilling is just the first step. To ensure longevity, use the borewell regularly to prevent silt accumulation. Avoid over-pumping, check motor performance, and run the pump weekly even if not in full use to keep the water column active.
                            </p>
                            <ul style={{ paddingLeft: '1rem', marginBottom: '1.5rem', color: 'var(--c-text-secondary)' }}>
                                <li>Use regularly to stop silt</li>
                                <li>Monitor motor performance</li>
                                <li>Ensure electrical protection</li>
                            </ul>
                            <div style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center', color: 'var(--c-water-light)', cursor: 'pointer' }}>Read More</div>
                        </div>
                    </motion.div>

                    {/* Post 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        <div style={{ height: '200px', background: 'linear-gradient(135deg, var(--c-earth-mid) 0%, var(--c-water-light) 60%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '3rem' }}>💧</span>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Groundwater Levels in Vadodara (2025)</h3>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--c-text-secondary)', lineHeight: '1.7' }}>
                                With growing infrastructure in Manjalpur, Gotri, and Waghodia Road, groundwater levels fluctuate. Proper assessment before drilling is crucial to avoid dry borewells. Factors include monsoon consistency and urban development.
                            </p>
                            <ul style={{ paddingLeft: '1rem', marginBottom: '1.5rem', color: 'var(--c-text-secondary)' }}>
                                <li>Manjalpur & Gotri trends</li>
                                <li>Impact of construction</li>
                                <li>Rainwater harvesting needs</li>
                            </ul>
                            <div style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center', color: 'var(--c-water-light)', cursor: 'pointer' }}>Read More</div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Why Follow */}
            <section style={{ padding: '4rem 2rem', background: 'var(--c-earth-mid)', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Why Follow <span className="text-gradient-water">The Drilling Diary?</span></h2>
                    <p style={{ marginBottom: '3rem', color: 'var(--c-text-secondary)', fontSize: '1.1rem' }}>
                        We share insights to protect your investment and improve water output.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                        {['Local Drilling Insights', 'Groundwater Updates', 'Maintenance Tips', 'Technology Comparisons', 'Practical Solutions'].map((item, i) => (
                            <span key={i} style={{ padding: '0.8rem 1.5rem', border: '1px solid var(--c-water-primary)', borderRadius: '30px', color: 'var(--c-water-light)' }}>{item}</span>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
