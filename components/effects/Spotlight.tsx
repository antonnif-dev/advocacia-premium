"use client";

import { motion } from "framer-motion";

export default function Spotlight() {
    return (
        <motion.div
            animate={{
                x: [0, 80, 0],
                y: [0, 40, 0],
            }}
            transition={{
                duration: 12,
                repeat: Infinity,
            }}
            className="
        absolute

        top-0
        left-0

        w-[500px]
        h-[500px]

        bg-amber-300/10

        blur-[120px]

        rounded-full

        pointer-events-none
      "
        />
    );
}