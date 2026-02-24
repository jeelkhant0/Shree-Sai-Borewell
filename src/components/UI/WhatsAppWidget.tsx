"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
    const phoneNumber = "919510187991";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20borewell%20services.`;
    const callUrl = `tel:+${phoneNumber}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* Call Button */}
            <motion.a
                href={callUrl}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors relative group"
                aria-label="Call Now"
            >
                <Phone size={24} />
                <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                    Call Now
                </span>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors relative group"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={28} />
                <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                    Chat on WhatsApp
                </span>
            </motion.a>
        </div>
    );
};

export default WhatsAppWidget;
