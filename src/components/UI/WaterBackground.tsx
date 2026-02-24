"use client";

import React from "react";

// Pure CSS water drops — no JS animation loop, no backdropFilter blur on each drop
// Massive perf improvement: eliminates 15 Framer Motion infinite loops
const drops = [
    { size: 60, left: '8%', dur: 22, delay: 0 },
    { size: 35, left: '18%', dur: 18, delay: 3 },
    { size: 75, left: '28%', dur: 26, delay: 1 },
    { size: 28, left: '38%', dur: 20, delay: 5 },
    { size: 50, left: '48%', dur: 24, delay: 2 },
    { size: 42, left: '58%', dur: 19, delay: 7 },
    { size: 65, left: '68%', dur: 23, delay: 4 },
    { size: 32, left: '78%', dur: 17, delay: 6 },
    { size: 55, left: '88%', dur: 21, delay: 1.5 },
    { size: 48, left: '5%', dur: 25, delay: 9 },
];

const WaterBackground = () => {
    return (
        <div
            aria-hidden="true"
            style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100%', height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
            }}
        >
            {drops.map((drop, i) => (
                <div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: drop.left,
                        width: drop.size,
                        height: drop.size,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06), transparent)',
                        boxShadow: 'inset 0 0 8px rgba(132,255,255,0.08), 0 0 10px rgba(38,198,218,0.06)',
                        border: '1px solid rgba(132,255,255,0.1)',
                        // CSS animation instead of Framer Motion — no JS, no GPU backdropFilter
                        animation: `water-float ${drop.dur}s linear ${drop.delay}s infinite`,
                        willChange: 'transform',
                    }}
                />
            ))}
            <style>{`
                @keyframes water-float {
                    0%   { transform: translateY(110vh); opacity: 0; }
                    5%   { opacity: 0.6; }
                    90%  { opacity: 0.3; }
                    100% { transform: translateY(-10vh); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default WaterBackground;
