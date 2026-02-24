"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer style={{
            background: 'linear-gradient(0deg, #050b14 0%, #0a192f 100%)',
            color: '#fff',
            paddingTop: '4rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Main footer grid */}
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '3rem',
                alignItems: 'start'
            }}>
                {/* Column 1: Brand & Message */}
                <div>
                    <h2 style={{
                        fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                        fontFamily: 'var(--font-jakarta)',
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(90deg, #fff, var(--c-water-primary))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        SHREE SAI BOREWELL
                    </h2>
                    <p style={{ lineHeight: '1.8', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                        Engineering water beneath the earth with precision and sustainability.
                        Your trusted partner for modern Direct Rotary drilling solutions in Vadodara.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {[
                            {
                                name: 'Instagram',
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '20px', height: '20px', fill: 'currentColor' }}>
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.9 0-184.9zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7 9 132.1z" />
                                    </svg>
                                ),
                                link: 'https://www.instagram.com/shreesaiborewell',
                                color: '#E1306C'
                            },
                            {
                                name: 'WhatsApp',
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '20px', height: '20px', fill: 'currentColor' }}>
                                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                    </svg>
                                ),
                                link: 'https://wa.me/919510187991',
                                color: '#25D366'
                            },
                            {
                                name: 'Email',
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '20px', height: '20px', fill: 'currentColor' }}>
                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                    </svg>
                                ),
                                link: 'mailto:info.shreesaiborewell@gmail.com',
                                color: '#ffffff'
                            }
                        ].map((social, index) => (
                            <Link key={index} href={social.link} style={{
                                width: '40px', height: '40px',
                                border: `1px solid ${social.color === '#ffffff' ? 'rgba(255,255,255,0.2)' : social.color}`,
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '0.8rem', cursor: 'pointer',
                                transition: 'all 0.3s',
                                color: '#fff',
                                backgroundColor: social.color === '#ffffff' ? 'transparent' : 'rgba(0,0,0,0.2)',
                                boxShadow: social.color !== '#ffffff' ? `0 0 10px ${social.color}40` : 'none',
                                flexShrink: 0,
                            }}>
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Links & Contact — responsive 2-col sub-grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem',
                }}>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--c-water-light)' }}>Quick Links</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Products', path: '/products' },
                                { name: 'Blog', path: '/blog' },
                                { name: 'Contact', path: '/#contact' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.path} style={{
                                        color: 'rgba(255,255,255,0.6)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s',
                                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                                    }}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--c-gold)' }}>Contact</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>
                            <li>
                                <strong style={{ display: 'block', color: '#fff', marginBottom: '0.2rem', fontSize: '0.9rem' }}>Phone</strong>
                                <a href="tel:+919510187991" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>+91 9510187991</a>
                            </li>
                            <li>
                                <strong style={{ display: 'block', color: '#fff', marginBottom: '0.2rem', fontSize: '0.9rem' }}>Email</strong>
                                <a href="mailto:info.shreesaiborewell@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', wordBreak: 'break-all' }}>info.shreesaiborewell@gmail.com</a>
                            </li>
                            <li>
                                <strong style={{ display: 'block', color: '#fff', marginBottom: '0.2rem', fontSize: '0.9rem' }}>Office</strong>
                                Elite Sahajanand, C-207, near Chanakya Nagari, Kalali, Vadodara, Gujarat 390012
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{
                textAlign: 'center',
                padding: '2rem 1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                marginTop: '4rem',
                color: 'rgba(255,255,255,0.4)',
                fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem'
            }}>
                <p style={{ margin: 0 }}>© {new Date().getFullYear()} Shree Sai Borewell Drilling. All rights reserved.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Powered by</span>
                    <a
                        href="https://www.tejaskpaisoftware.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            textDecoration: 'none', color: 'var(--c-water-primary)', fontWeight: 'bold'
                        }}
                    >
                        <Image
                            src="/photo-output.webp"
                            alt="Tejaskp AI Software"
                            width={40}
                            height={40}
                            style={{ borderRadius: '4px', objectFit: 'contain' }}
                        />
                        Tejaskp AI Software
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
