"use client";

import React from "react";
import { Box } from "@react-three/drei";

export const GroundLayers = () => {
    return (
        <group position={[0, -5, 0]}>
            {/* Top Soil Layer */}
            <Box args={[20, 2, 20]} position={[0, 4, 0]}>
                <meshStandardMaterial color="#5D4037" roughness={1} />
            </Box>

            {/* Clay / Sand Layer */}
            <Box args={[20, 3, 20]} position={[0, 1.5, 0]}>
                <meshStandardMaterial color="#A1887F" roughness={0.9} />
            </Box>

            {/* Rock Layer */}
            <Box args={[20, 4, 20]} position={[0, -2, 0]}>
                <meshStandardMaterial color="#616161" roughness={0.7} />
            </Box>

            {/* Aquifer Layer (Water) */}
            <Box args={[20, 2, 20]} position={[0, -5, 0]}>
                <meshStandardMaterial
                    color="#48CAE4"
                    emissive="#0077B6"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.8}
                    roughness={0.2}
                />
            </Box>

            {/* Bedrock */}
            <Box args={[20, 10, 20]} position={[0, -11, 0]}>
                <meshStandardMaterial color="#212121" roughness={0.9} />
            </Box>
        </group>
    );
};
