"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const ticking = useRef(false);

    // Throttled scroll handler
    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Close menu on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    return (
        <>
            {/* Tap-outside backdrop on mobile */}
            {isOpen && (
                <div
                    onClick={closeMenu}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 98,
                        backdropFilter: 'blur(2px)',
                    }}
                    aria-hidden="true"
                />
            )}

            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.navContainer}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo} onClick={closeMenu}>
                        <div className={styles.logoIconWrapper}>
                            <Image
                                src="/SHREE_SAI_BOREWELL_FINAL_LOGO.png"
                                alt="Shree Sai Borewell"
                                width={50}
                                height={50}
                                className={styles.logoImage}
                                priority
                            />
                        </div>
                        <span>SHREE SAI</span>{' '}
                        <span className={styles.brandHighlight}>BOREWELL</span>
                    </Link>

                    {/* Hamburger button — accessible */}
                    <button
                        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
                        onClick={toggleMenu}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        <span className={styles.bar} />
                        <span className={styles.bar} />
                        <span className={styles.bar} />
                    </button>

                    {/* Nav links */}
                    <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                        <li><Link href="/" className={styles.link} onClick={closeMenu}>Home</Link></li>
                        <li><Link href="/about" className={styles.link} onClick={closeMenu}>About</Link></li>
                        <li><Link href="/services" className={styles.link} onClick={closeMenu}>Services</Link></li>
                        <li><Link href="/products" className={styles.link} onClick={closeMenu}>Products</Link></li>
                        <li><Link href="/blog" className={styles.link} onClick={closeMenu}>Blog</Link></li>
                        <li><Link href="/#contact" className={styles.link} onClick={closeMenu}>Contact</Link></li>
                        <li className={styles.mobileCta}>
                            <Link href="/#contact" className={styles.ctaButton} onClick={closeMenu}>
                                Get Quote
                            </Link>
                        </li>
                    </ul>

                    {/* Desktop CTA */}
                    <Link href="/#contact" className={`${styles.ctaButton} ${styles.desktopCta}`}>
                        Get Quote
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

