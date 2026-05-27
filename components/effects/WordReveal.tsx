"use client";

import { motion } from "framer-motion";

export default function WordReveal({
    text,
}: {
    text: string;
}) {
    const words = text.split(" ");

    return (
        <div className="flex flex-wrap gap-x-3">

            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: index * 0.05,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                >
                    {word}
                </motion.span>
            ))}

        </div>
    );
}