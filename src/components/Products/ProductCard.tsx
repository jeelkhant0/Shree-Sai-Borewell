import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
    title: string;
    price: string;
    features: string[];
    specs?: { label: string; value: string }[];
    popular?: boolean;
    delay?: number;
    image?: string;
    Model?: React.ComponentType;
    footerText?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, features, specs, popular, delay = 0, image, Model, footerText }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            style={{
                background: popular ? 'linear-gradient(145deg, rgba(255, 215, 0, 0.05) 0%, rgba(0,0,0,0.4) 100%)' : 'rgba(255, 255, 255, 0.03)',
                border: popular ? '1px solid var(--c-gold)' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: popular ? '0 10px 30px -10px rgba(255, 215, 0, 0.15)' : 'none'
            }}
        >
            {popular && (
                <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--c-gold)',
                    color: '#000',
                    padding: '0.25rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    zIndex: 2
                }}>
                    Best Value
                </div>
            )}

            {Model && (
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '280px',
                    marginBottom: '1.5rem',
                    borderRadius: '8px',
                    background: 'transparent'
                }}>
                    <React.Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--c-text-secondary)' }}>Loading 3D...</div>}>
                        <Model />
                    </React.Suspense>
                </div>
            )}

            {image && !Model && (
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '200px',
                    marginBottom: '1.5rem',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    background: 'rgba(0,0,0,0.2)'
                }}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'contain', padding: '1rem' }}
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                </div>
            )}

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: popular ? 'var(--c-gold)' : '#fff' }}>
                {title}
            </h3>

            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: '700', color: '#fff' }}>₹{price}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--c-text-secondary)' }}>/ unit</span>
            </div>

            {specs && (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    background: 'rgba(0,0,0,0.2)',
                    padding: '1rem',
                    borderRadius: '8px'
                }}>
                    {specs.map((spec, index) => (
                        <div key={index}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--c-text-secondary)', marginBottom: '0.2rem' }}>{spec.label}</div>
                            <div style={{ fontWeight: '600', color: '#fff' }}>{spec.value}</div>
                        </div>
                    ))}
                </div>
            )}

            <div style={{ flex: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2rem' }}>
                    {features.map((feature, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.8rem', color: 'var(--c-text-primary)' }}>
                            <Check size={18} color={popular ? "var(--c-gold)" : "var(--c-water-light)"} style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                            <span style={{ fontSize: '0.95rem' }}>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Link href="/contact" style={{ width: '100%' }}>
                <button style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '10px',
                    border: 'none',
                    background: popular ? 'var(--c-gold)' : 'rgba(255,255,255,0.1)',
                    color: popular ? '#000' : '#fff',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease'
                }}>
                    Get Quote <ArrowRight size={18} />
                </button>
            </Link>

            {footerText && (
                <div style={{
                    marginTop: '1rem',
                    fontSize: '0.8rem',
                    color: 'var(--c-text-secondary)',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '0.8rem'
                }}>
                    {footerText}
                </div>
            )}
        </motion.div>
    );
};

export default ProductCard;
