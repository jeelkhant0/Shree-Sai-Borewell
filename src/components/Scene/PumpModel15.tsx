"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, PresentationControls, Bounds } from "@react-three/drei";
import * as THREE from "three";

function Model(props: any) {
    const { scene } = useGLTF("/1.5hp.glb");
    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.002; // Slow rotation
        }
    });

    return (
        <group ref={ref} {...props}>
            <primitive object={scene} scale={1} />
        </group>
    );
}

export default function PumpModel15() {
    return (
        <div style={{ height: "280px", width: "100%", position: 'relative' }}>
            <Canvas
                frameloop="always"
                dpr={[1, 2]}
                shadows
                camera={{ fov: 45, position: [0, 0, 5] }}
                gl={{ alpha: true, preserveDrawingBuffer: true }}
                style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
            >
                <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
                    <Bounds fit clip observe margin={1}>
                        <Model />
                    </Bounds>
                </PresentationControls>

                <ambientLight intensity={1.5} />
                <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={3} color="#e0f7fa" castShadow />
                <pointLight position={[-10, -5, -10]} intensity={2} color="#26c6da" />
                <pointLight position={[5, -5, 5]} intensity={1} color="#ffd700" />
            </Canvas>
        </div>
    );
}

useGLTF.preload("/1.5hp.glb");
