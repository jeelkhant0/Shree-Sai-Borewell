"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Dynamically import models
const PVCModel = dynamic(() => import('@/components/Scene/PVCModel'), { ssr: false });
const PumpModel = dynamic(() => import('@/components/Scene/PumpModel'), { ssr: false });
const FiltModel = dynamic(() => import('@/components/Scene/FiltModel'), { ssr: false });
import ProductCard from '@/components/Products/ProductCard';
const OpenWellSectionModel = dynamic(() => import('@/components/Scene/OpenWellSectionModel'), { ssr: false });

export default function ProductsPage() {
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
                        Premium Submersible Pumps <br /> <span className="text-gradient-water">& Borewell Pipes</span>
                    </h1>
                    <p style={{ color: 'var(--c-text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        Premium borewell materials and submersible pumps for long-lasting performance.
                    </p>
                </motion.div>
            </section>

            {/* Intro */}
            <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ background: 'rgba(15, 35, 55, 0.5)', borderRadius: '16px', padding: '3rem', border: '1px solid rgba(74, 157, 199, 0.12)' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff' }}>Our Core Product Categories</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--c-text-secondary)', marginBottom: '1rem' }}>
                        A borewell is not just about drilling depth; its long-term success depends greatly on the quality of materials used inside it. At Shree Sai Borewell Drilling, Vadodara, we believe that strong internal construction ensures better water flow, prevents collapse, and extends the life of the borewell.
                    </p>
                    <p style={{ lineHeight: '1.8', color: 'var(--c-text-secondary)' }}>
                        That is why we carefully select and supply premium-grade products that support the stability, durability, and performance of every Direct Rotary borewell we install. From casing pipes to filtration gravel and submersible pumps, each component plays a critical role in maintaining water quality and structural strength for years.
                    </p>
                </div>
            </section>

            {/* Product Categories */}
            <section style={{ padding: '4rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                    {/* PVC Casing Pipes - Special Layout with 3D Model */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            gridColumn: '1 / -1',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: '12px',
                            border: '1px solid var(--c-water-primary)',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', alignItems: 'center' }}>
                            <div style={{ padding: '2.5rem 1.5rem' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--c-water-light)' }}>PVC Casing Pipes</h3>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--c-text-secondary)' }}>
                                    Casing pipes are the backbone of any borewell. We install high-density, heavy-duty PVC casing pipes designed to perform in tough underground conditions.
                                    <br /><br />
                                    <span style={{ color: 'var(--c-water-light)', fontWeight: '500' }}>
                                        Top Jal, Astral, Finolex, Supreme, Oxy Blue, Duke, POLYSIL, and all other company pipes are available.
                                    </span>
                                </p>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Available Sizes:</h4>
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        {['5 inch', '6 inch', '8 inch', '10 inch', '12 inch'].map(size => (
                                            <span key={size} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.9rem' }}>{size}</span>
                                        ))}
                                    </div>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--c-text-primary)', marginBottom: '2rem' }}>
                                    {['Ribbed and slotted filters', 'High collapse strength', 'Corrosion resistant', 'Ideal for Direct Rotary'].map(item => (
                                        <li key={item} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ color: 'var(--c-gold)', marginRight: '0.5rem' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact">
                                    <button style={{
                                        background: 'var(--c-gold)',
                                        color: '#000',
                                        border: 'none',
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        transition: 'transform 0.2s'
                                    }}>
                                        Get Quote <ArrowRight size={18} />
                                    </button>
                                </Link>
                            </div>

                            {/* 3D Model Container */}
                            <div style={{ height: '400px', maxHeight: '300px', width: '100%', position: 'relative', background: 'transparent', overflow: 'hidden', borderRadius: '0 12px 12px 0' }}>
                                <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--c-text-secondary)' }}>Loading 3D View...</div>}>
                                    <PVCModel />
                                </Suspense>
                            </div>
                        </div>
                    </motion.div>

                    {/* Submersible Pumps - Special Layout with 3D Model */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            gridColumn: '1 / -1',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: '12px',
                            border: '1px solid var(--c-gold)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', alignItems: 'center' }}>
                            <div style={{ padding: '2.5rem 1.5rem' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--c-gold)' }}>Submersible Pumps</h3>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--c-text-secondary)' }}>
                                    Efficient water extraction with energy-saving pumps. We help you choose the right pump based on depth and yield.
                                    <br /><br />
                                    <span style={{ color: 'var(--c-gold)', fontWeight: '500' }}>
                                        Varuna, Kevilex, Lubi, C.R.I., Pluga, and all other companies are available.
                                    </span>
                                </p>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Types Available:</h4>
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        {['V4 Submersible', 'V6 Submersible', 'Openwell'].map(type => (
                                            <span key={type} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.9rem' }}>{type}</span>
                                        ))}
                                    </div>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--c-text-primary)', marginBottom: '2rem' }}>
                                    {['ISI-marked products', 'Energy efficient', 'Consistent pressure', 'Long motor life'].map(item => (
                                        <li key={item} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ color: 'var(--c-water-light)', marginRight: '0.5rem' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact">
                                    <button style={{
                                        background: 'var(--c-gold)',
                                        color: '#000',
                                        border: 'none',
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        transition: 'transform 0.2s'
                                    }}>
                                        Get Quote <ArrowRight size={18} />
                                    </button>
                                </Link>
                            </div>

                            {/* 3D Model Container for Pump */}
                            <div style={{ height: '400px', maxHeight: '300px', width: '100%', position: 'relative', background: 'transparent', overflow: 'hidden', borderRadius: '0 12px 12px 0' }}>
                                <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--c-text-secondary)' }}>Loading 3D View...</div>}>
                                    <PumpModel />
                                </Suspense>
                            </div>
                        </div>

                        {/* Individual Pump Products Grid - Moved Inside */}
                        <div style={{
                            padding: '2rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(0,0,0,0.2)'
                        }}>
                            <h4 style={{
                                fontSize: '1.5rem',
                                color: '#fff',
                                marginBottom: '2rem',
                                borderLeft: '4px solid var(--c-gold)',
                                paddingLeft: '1rem'
                            }}>
                                Available Models
                            </h4>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                                gap: '1.5rem'
                            }}>
                                <ProductCard
                                    title="0.5 HP Submersible"
                                    price="9,000"
                                    specs={[
                                        { label: 'Power', value: '0.5 HP' },
                                        { label: 'Phase', value: 'Single Phase' },
                                    ]}
                                    features={['Domestic Use', 'Power Saving', 'Copper Winding']}
                                    delay={0.1}
                                    image="/pumps/pump-05hp.jpg"
                                    footerText="Varuna, Kevilex, Lubi, C.R.I., Pluga, and all other companies are available."
                                />
                                <ProductCard
                                    title="1.0 HP Submersible"
                                    price="10,500"
                                    specs={[
                                        { label: 'Power', value: '1.0 HP' },
                                        { label: 'Phase', value: 'Single Phase' },
                                    ]}
                                    features={['High Head', 'Thermal Protection', 'Stainless Steel Body']}
                                    popular={true}
                                    delay={0.2}
                                    image="/pumps/pump-1hp.jpg"
                                    footerText="Varuna, Kevilex, Lubi, C.R.I., Pluga, and all other companies are available."
                                />
                                <ProductCard
                                    title="1.5 HP Submersible"
                                    price="14,500"
                                    specs={[
                                        { label: 'Power', value: '1.5 HP' },
                                        { label: 'Phase', value: 'Single Phase' },
                                    ]}
                                    features={['Heavy Duty', 'Agricultural Use', 'High Discharge']}
                                    delay={0.3}
                                    image="/pumps/pump-15hp.jpg"
                                    footerText="Varuna, Kevilex, Lubi, C.R.I., Pluga, and all other companies are available."
                                />
                                <ProductCard
                                    title="2.0 HP Submersible"
                                    price="17,150"
                                    specs={[
                                        { label: 'Power', value: '2.0 HP' },
                                        { label: 'Phase', value: 'Single Phase' },
                                    ]}
                                    features={['Industrial Grade', 'Max Efficiency', 'Durable Construction']}
                                    delay={0.4}
                                    image="/pumps/pump-2hp.jpg"
                                    footerText="Varuna, Kevilex, Lubi, C.R.I., Pluga, and all other companies are available."
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Open Well Pumps - New Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        style={{
                            gridColumn: '1 / -1',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: '12px',
                            border: '1px solid var(--c-gold)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', alignItems: 'center' }}>
                            <div style={{ padding: '2.5rem 1.5rem' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--c-gold)' }}>Open Well Pumps</h3>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--c-text-secondary)' }}>
                                    Ideal for active wells with fluctuating water levels. These pumps are installed at the bottom of the well and do not require priming.
                                    <br /><br />
                                    <span style={{ color: 'var(--c-gold)', fontWeight: '500' }}>
                                        Varuna, Kevilex, Lubi, C.R.I., Pluga, and all other companies are available.
                                    </span>
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--c-text-primary)', marginBottom: '2rem' }}>
                                    {['No priming needed', 'Silent operation', 'High efficiency', 'Easy installation'].map(item => (
                                        <li key={item} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ color: 'var(--c-water-light)', marginRight: '0.5rem' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact">
                                    <button style={{
                                        background: 'var(--c-gold)',
                                        color: '#000',
                                        border: 'none',
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        transition: 'transform 0.2s'
                                    }}>
                                        Get Quote <ArrowRight size={18} />
                                    </button>
                                </Link>
                            </div>

                            {/* 3D Model Container for Pump */}
                            <div style={{ height: '400px', maxHeight: '300px', width: '100%', position: 'relative', background: 'transparent', overflow: 'hidden', borderRadius: '0 12px 12px 0' }}>
                                <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--c-text-secondary)' }}>Loading 3D View...</div>}>
                                    <OpenWellSectionModel />
                                </Suspense>
                            </div>
                        </div>

                        {/* Individual Open Well Products Grid */}
                        <div style={{
                            padding: '2rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(0,0,0,0.2)'
                        }}>
                            <h4 style={{
                                fontSize: '1.5rem',
                                color: '#fff',
                                marginBottom: '2rem',
                                borderLeft: '4px solid var(--c-gold)',
                                paddingLeft: '1rem'
                            }}>
                                Available Models
                            </h4>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                                gap: '1.5rem'
                            }}>
                                <ProductCard
                                    title="0.5 HP with Panel"
                                    price="6,800"
                                    specs={[
                                        { label: 'Power', value: '0.5 HP' },
                                        { label: 'Type', value: 'Open Well' },
                                    ]}
                                    features={['Copper Winding', 'With Control Panel', 'Easy Maintenance']}
                                    delay={0.1}
                                    image="/pumps/openwell-05hp.jpg"
                                    footerText="Varuna, Kevilex, Lubi, C.R.I., Pluga, and all other companies are available."
                                />
                                <ProductCard
                                    title="1.0 HP with Panel"
                                    price="7,800"
                                    specs={[
                                        { label: 'Power', value: '1.0 HP' },
                                        { label: 'Type', value: 'Open Well' },
                                    ]}
                                    features={['High Discharge', 'With Control Panel', 'Long Life']}
                                    popular={true}
                                    delay={0.2}
                                    image="/pumps/openwell-1hp.jpg"
                                    footerText="Varuna, Kevilex, Lubi, C.R.I., Pluga, and all other companies are available."
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Filtration Gravel - Special Layout with 3D Model */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            gridColumn: '1 / -1',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: '12px',
                            border: '1px solid rgba(74, 157, 199, 0.15)',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', alignItems: 'center' }}>
                            <div style={{ padding: '2.5rem 1.5rem' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Filtration Gravel</h3>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--c-text-secondary)' }}>
                                    A crucial layer that acts as a natural filter. We use properly graded natural gravel to fill the space between the borewell wall and casing.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--c-text-primary)', marginBottom: '2rem' }}>
                                    {['Prevents sand entry', 'Improves water clarity', 'Supports casing stability', 'Reduces maintenance'].map(item => (
                                        <li key={item} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ color: '#fff', marginRight: '0.5rem' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact">
                                    <button style={{
                                        background: 'transparent',
                                        color: '#fff',
                                        border: '1px solid rgba(255,255,255,0.3)',
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        transition: 'all 0.2s'
                                    }}>
                                        Get Quote <ArrowRight size={18} />
                                    </button>
                                </Link>
                            </div>

                            {/* 3D Model Container for Filt */}
                            <div style={{ height: '400px', maxHeight: '300px', width: '100%', position: 'relative', background: 'transparent', overflow: 'hidden', borderRadius: '0 12px 12px 0' }}>
                                <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--c-text-secondary)' }}>Loading 3D View...</div>}>
                                    <FiltModel />
                                </Suspense>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Why Quality Matters */}
            <section style={{ padding: '6rem 2rem', background: 'var(--c-earth-mid)' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Why <span className="text-gradient-water">Quality Materials</span> Matter</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--c-text-secondary)', fontSize: '1.1rem' }}>
                        Using premium materials is the key difference between a short-term borewell and a long-lasting water solution.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                        {['Strong Structure', 'Sand-Free Water', 'Better Discharge', 'Lower Maintenance', 'Longer Service Life'].map((item, i) => (
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

            <Footer />
        </main>
    );
}

