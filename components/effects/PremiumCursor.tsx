"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function PremiumCursor() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", moveCursor);

        return () =>
            window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <motion.div
            animate={{
                x: mousePosition.x - 12,
                y: mousePosition.y - 12,
            }}
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 200,
                mass: 0.5,
            }}
            className="
        fixed
        top-0
        left-0

        z-[999]

        w-6
        h-6

        rounded-full

        bg-amber-400/40

        backdrop-blur-sm

        border
        border-white/20

        pointer-events-none

        hidden
        lg:block
      "
        />
    );
}