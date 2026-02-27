"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
    const pathname = usePathname();

    const getLinkClass = (path: string) => {
        return `${styles.link} ${pathname === path ? styles.activeLink : ''}`;
    };

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
                        <li><Link href="/" className={getLinkClass('/')} onClick={closeMenu}>Home</Link></li>
                        <li><Link href="/about" className={getLinkClass('/about')} onClick={closeMenu}>About</Link></li>
                        <li><Link href="/services" className={getLinkClass('/services')} onClick={closeMenu}>Services</Link></li>
                        <li><Link href="/products" className={getLinkClass('/products')} onClick={closeMenu}>Products</Link></li>
                        <li><Link href="/blog" className={getLinkClass('/blog')} onClick={closeMenu}>Blog</Link></li>
                        <li><Link href="/#contact" className={styles.link} onClick={closeMenu}>Contact</Link></li>
                        <li className={styles.mobileCta}>
                            <a href="tel:+919510187991" className={styles.ctaButton} onClick={closeMenu}>
                                📞 9510187991
                            </a>
                        </li>
                    </ul>

                    {/* Desktop CTA - Phone Call */}
                    <a href="tel:+919510187991" className={`${styles.ctaButton} ${styles.desktopCta}`}>
                        📞 9510187991
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

