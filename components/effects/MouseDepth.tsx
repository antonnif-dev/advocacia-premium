"use client";

import {
    motion,
    useMotionValue,
    useSpring,
} from "framer-motion";

import { useEffect } from "react";

export default function MouseDepth() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const smoothX = useSpring(x);
    const smoothY = useSpring(y);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            x.set(e.clientX * 0.02);

            y.set(e.clientY * 0.02);
        };

        window.addEventListener("mousemove", move);

        return () =>
            window.removeEventListener("mousemove", move);
    }, []);

    return (
        <motion.div
            style={{
                x: smoothX,
                y: smoothY,
            }}
            className="
        absolute
        inset-0

        pointer-events-none
      "
        >
            <div
                className="
          absolute

          top-1/3
          left-1/3

          w-[500px]
          h-[500px]

          bg-white/5

          blur-[160px]

          rounded-full
        "
            />
        </motion.div>
    );
}