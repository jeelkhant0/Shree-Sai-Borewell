'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import styles from './FloatingContact.module.css';

const FloatingContact = () => {
    const phoneNumber = '919510187991'; // Added country code for WhatsApp
    const displayPhone = '9510187991';

    return (
        <div className={styles.container}>
            {/* Call Button */}
            <motion.a
                href={`tel:+${phoneNumber}`}
                className={`${styles.button} ${styles.call}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 20 }}
                aria-label="Call Us"
            >
                <Phone size={24} />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
                href={`https://wa.me/${phoneNumber}?text=Hello! I am interested in your borewell services.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.whatsapp}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={24} />
            </motion.a>
        </div>
    );
};

export default FloatingContact;
