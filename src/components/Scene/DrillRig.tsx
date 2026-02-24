"use client";

import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

/* 
  Reusing the logic for a single tractor in a sub-component to keep things clean.
  - path: GLB file path
  - direction: 1 (Left to Right) or -1 (Right to Left)
  - startX: Starting X position
  - endX: Ending X position
*/
const OilRig = ({ modelPath, zPos = 0 }: { modelPath: string, zPos?: number }) => {
    const { scene } = useGLTF(modelPath);
    const clonedScene = React.useMemo(() => scene.clone(), [scene]);
    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ref.current) {
            // Gentle bobbing motion
            ref.current.position.y = -2 + Math.sin(state.clock.elapsedTime) * 0.1;
        }
    });

    return (
        <group ref={ref} scale={[0.8, 0.8, 0.8]} position={[0, -2, zPos]}>
            <primitive object={clonedScene} />
        </group>
    );
};

export const DrillRig = () => {
    return (
        <OilRig modelPath="/3d/oil_rig_-_low_poly.glb" />
    );
};
