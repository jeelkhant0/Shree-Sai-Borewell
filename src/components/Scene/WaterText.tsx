"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, extend, ReactThreeFiber, useThree } from "@react-three/fiber";
import { Text, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

// Define the custom shader material for Water Text
const WaterShaderMaterial = shaderMaterial(
    {
        uTime: 0,
        uMouse: new THREE.Vector2(0, 0),
        uColor1: new THREE.Color("#006994"), // Deep Sea Blue
        uColor2: new THREE.Color("#7EF9FF"), // Cyan/Seafoam
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // Fragment Shader
    `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      // Create a wave effect based on time and mouse interaction
      float wave = sin(vUv.x * 4.0 + uTime * 2.0 + uMouse.x * 4.0) * 0.1;
      float wave2 = cos(vUv.x * 8.0 - uTime * 1.5 + uMouse.y * 2.0) * 0.05;
      
      float noise = wave + wave2;
      
      // Mix colors for a watery look
      float mixFactor = smoothstep(0.0, 1.0, vUv.y + noise);
      
      vec3 finalColor = mix(uColor1, uColor2, mixFactor);
      
      // Add "carved" rim effect or faux specular
      float rim = smoothstep(0.95, 1.0, abs(vUv.y + noise - 0.5) * 2.0); // Edge highlight
      finalColor += vec3(rim * 0.2); // slight shine

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

extend({ WaterShaderMaterial });

// ... (material definition)

extend({ WaterShaderMaterial });

declare module "@react-three/fiber" {
    interface ThreeElements {
        waterShaderMaterial: any;
    }
}

function WaterTextContent() {
    const materialRef = useRef<THREE.ShaderMaterial>(null);
    const { width } = useThree((state) => state.viewport);
    const isMobile = width < 6; // Threshold for mobile visual width in Three.js units

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
            // Smoothly interpolate mouse values for fluid feel
            materialRef.current.uniforms.uMouse.value.lerp(state.pointer, 0.1);
        }
    });

    return (
        <Text
            position={[0, 0, 0]}
            fontSize={isMobile ? 0.28 : 0.5} // Significantly smaller on mobile
            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
            fontWeight="bold"
            anchorX="center"
            anchorY="middle"
            maxWidth={isMobile ? 3.5 : 10} // Constrain width on mobile to force wrapping if needed, or just fit
            letterSpacing={0.05}
            textAlign="center"
        >
            SHREE SAI BOREWELL
            {/* @ts-ignore */}
            <waterShaderMaterial ref={materialRef} side={THREE.DoubleSide} />
        </Text>
    );
}

export default function WaterText() {
    return (
        <div style={{ height: "150px", width: "100%" }}>
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
                <ambientLight intensity={1} />
                <WaterTextContent />
            </Canvas>
        </div>
    );
}
