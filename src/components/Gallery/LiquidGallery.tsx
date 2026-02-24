"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./LiquidGallery.module.css";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
    "/Photos/2a76389d-0c30-4e66-b24b-7024a31427b6.JPG",
    "/Photos/2f79d379-f0ec-4ae0-9f1d-ca58ae6026dd.JPG",
    "/Photos/4e31cefe-40c6-4865-9f50-699943d60aaf.JPG",
    "/Photos/5180feea-df53-4084-92fb-b036c5fbb549.JPG",
    "/Photos/8a7c46fa-cb0a-4cf5-974b-d458afc80609.JPG",
    "/Photos/92ce257a-1aec-43cd-934a-cabcd3772859.JPG",
    "/Photos/c819933d-ed41-40ef-94d7-3a8fe29b31be.JPG",
    "/Photos/c9e7b97d-e370-48b0-85a9-fbd0dd9d64d9.JPG",
    "/Photos/d388b25d-5b03-4fba-a051-bbc454eb6a24.JPG",
    "/Photos/e78502e0-433a-4096-8e50-45a139f6dc10.JPG",
];

const LiquidGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const startX = useRef<number | null>(null);

    const prev = useCallback(() => setActiveIndex(i => (i - 1 + photos.length) % photos.length), []);
    const next = useCallback(() => setActiveIndex(i => (i + 1) % photos.length), []);

    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (startX.current === null) return;
        const diff = startX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
        startX.current = null;
    };

    return (
        <section className={styles.gallerySection}>
            <div className={styles.headerOverlay}>
                <h2 className={styles.title}>
                    Site <span className="text-gradient-water">Gallery</span>
                </h2>
                <p className={styles.subtitle}>
                    Explore our project sites.
                </p>
            </div>

            {/* Pure CSS/HTML photo gallery — eliminates heavy WebGL Canvas */}
            <div
                className={styles.sliderWrapper}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Thumbnail strip */}
                <div className={styles.thumbnailStrip}>
                    {photos.map((photo, i) => (
                        <button
                            key={i}
                            className={`${styles.thumbnail} ${i === activeIndex ? styles.thumbnailActive : ''}`}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`View photo ${i + 1}`}
                        >
                            <Image
                                src={photo}
                                alt={`Gallery photo ${i + 1}`}
                                fill
                                sizes="80px"
                                style={{ objectFit: 'cover' }}
                                loading="lazy"
                            />
                        </button>
                    ))}
                </div>

                {/* Main display */}
                <div className={styles.mainImageWrapper}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className={styles.mainImageInner}
                        >
                            <Image
                                src={photos[activeIndex]}
                                alt={`Gallery photo ${activeIndex + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 70vw"
                                style={{ objectFit: 'cover', borderRadius: '1rem' }}
                                priority={activeIndex === 0}
                                loading={activeIndex === 0 ? "eager" : "lazy"}
                            />
                            {/* Glass overlay effect — pure CSS, no WebGL */}
                            <div className={styles.glassOverlay} />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button className={`${styles.navBtn} ${styles.navBtnLeft}`} onClick={prev} aria-label="Previous">
                        ‹
                    </button>
                    <button className={`${styles.navBtn} ${styles.navBtnRight}`} onClick={next} aria-label="Next">
                        ›
                    </button>

                    {/* Dot indicators */}
                    <div className={styles.dotRow}>
                        {photos.map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                                onClick={() => setActiveIndex(i)}
                                aria-label={`Go to photo ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.footerOverlay}>
                CLICK THUMBNAIL OR USE ARROWS TO EXPLORE
            </div>
        </section>
    );
};

export default LiquidGallery;
