"use client";

import React, { useState } from "react";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitted');
        // In a real app, handle form submission here
    };

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
                        Let’s Start Your <span className="text-gradient-water">Water Project</span> Today
                    </h1>
                    <p style={{ color: 'var(--c-text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                        Expert advice, technical support, and transparent quotes for Direct Rotary drilling.
                    </p>
                </motion.div>
            </section>

            {/* Split Layout: Info & Form */}
            <section style={{ padding: '2rem 2rem 6rem', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--c-water-light)' }}>Get in Touch</h2>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.7', color: 'var(--c-text-secondary)' }}>
                            We believe in fast response and honest communication. Whether you need a new borewell, site inspection, or consultation, our team is ready to assist.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { label: "Phone", value: "+91 98765 43210" }, // Placeholder
                                { label: "Email", value: "info@shreesaiborewell.com" },
                                { label: "Address", value: "Vadodara, Gujarat - 390001" } // Placeholder
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-gold)' }}>•</div>
                                    <div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--c-text-secondary)' }}>{item.label}</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--c-gold)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Business Hours</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--c-text-secondary)' }}>
                            <span>Monday – Saturday</span>
                            <span>9:00 AM – 7:00 PM</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--c-text-secondary)' }}>
                            <span>Sunday</span>
                            <span>Closed</span>
                        </div>
                    </div>
                </motion.div>

                {/* Enquiry Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Send Us a Message</h2>

                    {formStatus === 'submitted' ? (
                        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--c-water-light)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Thank You!</h3>
                            <p>We have received your enquiry and will call you back shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--c-text-secondary)' }}>Name</label>
                                <input type="text" required style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--c-text-secondary)' }}>Phone Number</label>
                                <input type="tel" required style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--c-text-secondary)' }}>Location in Vadodara</label>
                                <input type="text" required style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--c-text-secondary)' }}>Service Required</label>
                                <select style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}>
                                    <option value="Domestic">Domestic Borewell</option>
                                    <option value="Industrial">Industrial Borewell</option>
                                    <option value="Agricultural">Agricultural Borewell</option>
                                    <option value="Cleaning">Cleaning & Flushing</option>
                                </select>
                            </div>
                            <button type="submit" style={{ padding: '1rem', background: 'linear-gradient(90deg, var(--c-water-deep) 0%, var(--c-water-light) 100%)', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginTop: '1rem' }}>
                                Submit Enquiry
                            </button>
                        </form>
                    )}
                </motion.div>
            </section>

            {/* Service Areas */}
            <section style={{ padding: '4rem 2rem', background: 'var(--c-earth-mid)' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Service Areas</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--c-text-secondary)' }}>
                        Proudly serving Vadodara city and surrounding locations including:
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                        {['Alkapuri', 'Karelibaug', 'Manjalpur', 'Waghodia Road', 'Makarpura', 'Ajwa Road', 'Gotri', 'Sama', 'Nizampura', 'Nearby Villages'].map((area, i) => (
                            <span key={i} style={{ padding: '0.5rem 1.2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--c-water-light)' }}>{area}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Contact Us */}
            <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Why Contact Us?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {[{ title: "Quick Response", icon: "⚡" }, { title: "Professional Consultation", icon: "🤝" }, { title: "Transparent Quote", icon: "📄" }, { title: "Local Presence", icon: "📍" }].map((item, i) => (
                        <div key={i} style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1.1rem' }}>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
