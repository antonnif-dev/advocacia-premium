"use client";

import { Canvas } from "@react-three/fiber";

import { Points, PointMaterial } from "@react-three/drei";

import * as random from "maath/random";

export default function Particles3D() {
    const sphere = random.inSphere(
        new Float32Array(5000),
        { radius: 1.5 }
    );

    return (
        <div
            className="
        absolute
        inset-0

        opacity-40
      "
        >

            <Canvas camera={{ position: [0, 0, 1] }}>

                <Points
                    positions={sphere}
                    stride={3}
                    frustumCulled
                >

                    <PointMaterial
                        transparent
                        color="#ffffff"
                        size={0.004}
                        sizeAttenuation
                        depthWrite={false}
                    />

                </Points>

            </Canvas>

        </div>
    );
}