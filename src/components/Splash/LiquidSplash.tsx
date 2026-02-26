"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture, Text3D, Center, Float, Sparkles, MeshTransmissionMaterial, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

// Custom shader for a liquid-like background effect
// Matching homepage "Clean Sea" theme: #001e2b -> #00334e with cyan/teal accents
// Custom shader for a liquid-like background effect
// Matching homepage "Clean Sea" theme: #001e2b -> #00334e with cyan/teal accents
const LiquidBackgroundMaterial = shaderMaterial(
    { uTime: 0, uColorStart: new THREE.Color("#00334e"), uColorEnd: new THREE.Color("#001e2b") },
    // Vertex Shader
    `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // Fragment Shader
    `
    uniform float uTime;
    uniform vec3 uColorStart;
    uniform vec3 uColorEnd;
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      float noise = snoise(vUv * 3.0 + uTime * 0.2);
      // Mix between the two dark blue/teal colors
      vec3 color = mix(uColorStart, uColorEnd, vUv.y + noise * 0.1);
      
      // Add a subtle top glow similar to homepage radial gradient
      float topGlow = 1.0 - smoothstep(0.0, 0.8, vUv.y); 
      
      // Add some teal glow
      color += vec3(0.15, 0.77, 0.85) * topGlow * 0.15; // rgba(38, 198, 218, 0.15) equivalent-ish
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ LiquidBackgroundMaterial });

import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

function Logo() {
    const texture = useTexture("/SHREE_SAI_BOREWELL_FINAL_LOGO.png");
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            // Simple scale up animation
            const t = clock.getElapsedTime();
            const scale = Math.min(1, t * 1.5); // 0 to 1 in ~0.6s
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh ref={meshRef} scale={[0, 0, 0]}>
                <planeGeometry args={[2.2, 2.2]} /> {/* Reduced from 3,3 to fix "too wide" issue */}
                <meshStandardMaterial
                    map={texture}
                    transparent
                    opacity={1}
                    roughness={0.2}
                    metalness={0.5}
                    emissive="#ffffff"
                    emissiveIntensity={0.8}
                    emissiveMap={texture}
                    depthWrite={false}
                    toneMapped={false}
                />
            </mesh>
        </Float>
    );
}

function AnimatedText() {
    return (
        <Html transform position={[0, -1.6, 0]} center> {/* Moved up from -2 to -1.6 to match smaller logo */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.8 // Wait for logo
                        }
                    }
                }}
                style={{
                    display: 'flex',
                    gap: '0.1em',
                    whiteSpace: 'nowrap'
                }}
            >
                {Array.from("SHREE SAI BOREWELL").map((char, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { opacity: 0, scale: 0.5, y: 20 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                transition: { type: "spring", stiffness: 120, damping: 10 }
                            }
                        }}
                        style={{
                            // fontFamily: "'Times New Roman', serif", // Reverted
                            fontWeight: 'bold',
                            fontSize: '1.5vw', // Reduced from 2.5vw to 1.5vw for "small" text
                            letterSpacing: '0.05em',
                            color: '#ffffff', // White text
                            // background: 'linear-gradient(...)', // Removed Gold
                            // WebkitBackgroundClip: 'text',
                            // WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 10px rgba(0, 255, 255, 0.5)', // Cyan Glow
                            display: 'inline-block',
                            width: char === ' ' ? '0.5rem' : 'auto'
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.div>
        </Html>
    );
}

function Background() {
    const materialRef = useRef<any>(null);
    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uTime = clock.getElapsedTime();
        }
    });

    return (
        <mesh position={[0, 0, -5]}>
            <planeGeometry args={[20, 10]} />
            {/* @ts-ignore */}
            <liquidBackgroundMaterial ref={materialRef} />
        </mesh>
    );
}

export function LiquidSplash() {
    return (
        <>
            <ambientLight intensity={1.5} /> {/* Increased ambient light */}
            <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={3} color="#4fc3f7" /> {/* Brighter spotlight */}
            <pointLight position={[0, 0, 5]} intensity={2} color="#ffffff" distance={10} /> {/* Front light for logo */}
            <pointLight position={[-10, -10, -10]} intensity={1.5} color="#ffab40" /> {/* Warm backlight */}

            <group position={[0, 0.5, 0]}>
                <Logo />
                <Suspense fallback={null}>
                    <AnimatedText />
                </Suspense>
            </group>

            <Sparkles count={50} scale={8} size={4} speed={0.4} opacity={0.6} color="#b2ebf2" /> {/* Cyan particles */}
            <Background />
        </>
    );
}

