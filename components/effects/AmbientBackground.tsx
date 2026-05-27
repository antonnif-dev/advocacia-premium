"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
    return (
        <>
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                }}
                className="
          absolute

          top-0
          left-0

          w-[500px]
          h-[500px]

          bg-amber-400/10

          blur-[140px]

          rounded-full
        "
            />

            <motion.div
                animate={{
                    x: [0, -120, 0],
                    y: [0, 80, 0],
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                }}
                className="
          absolute

          bottom-0
          right-0

          w-[600px]
          h-[600px]

          bg-blue-400/10

          blur-[160px]

          rounded-full
        "
            />
        </>
    );
}