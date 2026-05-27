"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 12 });

export default function FloatingParticles() {
    return (
        <>
            {particles.map((_, index) => (
                <motion.div
                    key={index}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 6 + index,
                        repeat: Infinity,
                    }}
                    className="
            absolute

            rounded-full

            bg-white/10

            blur-xl
          "
                    style={{
                        width: 80,
                        height: 80,

                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </>
    );
}