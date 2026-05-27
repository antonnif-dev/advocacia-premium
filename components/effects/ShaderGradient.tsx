"use client";

import { motion } from "framer-motion";

export default function ShaderGradient() {
    return (
        <motion.div
            animate={{
                backgroundPosition: [
                    "0% 50%",
                    "100% 50%",
                    "0% 50%",
                ],
            }}
            transition={{
                duration: 18,
                repeat: Infinity,
            }}
            className="
        absolute
        inset-0

        opacity-30

        blur-3xl
      "
            style={{
                background: `
          linear-gradient(
            135deg,
            rgba(198,169,105,0.25),
            rgba(59,130,246,0.2),
            rgba(255,255,255,0.12)
          )
        `,
                backgroundSize: "200% 200%",
            }}
        />
    );
}