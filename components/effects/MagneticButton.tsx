"use client";

import {
    motion,
    useMotionValue,
    useSpring,
} from "framer-motion";

export default function MagneticButton({
    children,
}: {
    children: React.ReactNode;
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x);
    const springY = useSpring(y);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        x.set((e.clientX - rect.left - centerX) * 0.2);

        y.set((e.clientY - rect.top - centerY) * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                x: springX,
                y: springY,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </motion.div>
    );
}