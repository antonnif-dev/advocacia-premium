"use client";

import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

export default function ReactiveCard({
    children,
}: {
    children: React.ReactNode;
}) {
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const smoothX = useSpring(rotateX);
    const smoothY = useSpring(rotateY);

    const glareX = useTransform(
        smoothY,
        [-10, 10],
        ["0%", "100%"]
    );

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateYValue =
            ((x / width) - 0.5) * 10;

        const rotateXValue =
            ((y / height) - 0.5) * -10;

        rotateX.set(rotateXValue);
        rotateY.set(rotateYValue);
    };

    const reset = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX: smoothX,
                rotateY: smoothY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            className="relative"
        >

            <motion.div
                style={{
                    background: `
            radial-gradient(
              circle at ${glareX} 20%,
              rgba(255,255,255,0.25),
              transparent 40%
            )
          `,
                }}
                className="
          absolute
          inset-0

          rounded-[inherit]

          pointer-events-none
        "
            />

            {children}

        </motion.div>
    );
}