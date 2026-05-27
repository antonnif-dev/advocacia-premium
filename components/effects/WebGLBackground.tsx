"use client";

import { Canvas } from "@react-three/fiber";

import {
    Float,
    MeshDistortMaterial,
    Sphere,
} from "@react-three/drei";

export default function WebGLBackground() {
    return (
        <div
            className="
        absolute
        inset-0

        -z-10

        opacity-60
      "
        >

            <Canvas>

                <ambientLight intensity={1.5} />

                <directionalLight
                    position={[2, 2, 2]}
                    intensity={2}
                />

                <Float
                    speed={2}
                    rotationIntensity={2}
                    floatIntensity={3}
                >

                    <Sphere args={[1.8, 128, 128]} scale={2.4}>

                        <MeshDistortMaterial
                            color="#c6a969"
                            distort={0.4}
                            speed={2}
                            roughness={0}
                        />

                    </Sphere>

                </Float>

            </Canvas>

        </div>
    );
}