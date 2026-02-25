"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const MobileBottomBar = () => {
    const phoneNumber = "919510187991";
    const callUrl = `tel:+${phoneNumber}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20borewell%20drilling%20services%20in%20my%20area.%20Please%20contact%20me.`;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 999,
                display: "flex",
                height: "64px",
                // Only show on mobile — hidden on desktop via CSS
            }}
            className="mobile-bottom-bar"
        >
            {/* Call Button */}
            <a
                href={callUrl}
                aria-label="Call Now"
                style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    background: "linear-gradient(135deg, #1565C0, #1976D2)",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    letterSpacing: "0.03em",
                    borderRight: "1px solid rgba(255,255,255,0.15)",
                    transition: "background 0.2s ease",
                    WebkitTapHighlightColor: "transparent",
                }}
            >
                <Phone size={20} />
                Call Now
            </a>

            {/* WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Quote"
                style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    background: "linear-gradient(135deg, #1B5E20, #25D366)",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    letterSpacing: "0.03em",
                    WebkitTapHighlightColor: "transparent",
                }}
            >
                <MessageCircle size={20} />
                Get Quote
            </a>
        </motion.div>
    );
};

export default MobileBottomBar;
