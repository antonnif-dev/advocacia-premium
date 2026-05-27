"use client";

import {
    AnimatePresence,
    motion,
} from "framer-motion";

import { X } from "lucide-react";

interface LegalModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function LegalModal({
    open,
    onClose,
    title,
    children,
}: LegalModalProps) {
    return (
        <AnimatePresence>

            {open && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="
            fixed
            inset-0

            z-[999]

            flex
            items-center
            justify-center

            p-4
          "
                >

                    {/* BACKDROP */}

                    <div
                        onClick={onClose}
                        className="
              absolute
              inset-0

              bg-black/40

              backdrop-blur-xl
            "
                    />

                    {/* MODAL */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 20,
                            scale: 0.98,
                        }}
                        transition={{
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
              relative

              w-full
              max-w-3xl

              max-h-[90vh]

              overflow-hidden

              rounded-[32px]

              border
              border-white/20

              bg-white/75

              backdrop-blur-2xl

              shadow-[0_30px_120px_rgba(15,23,42,0.18)]
            "
                    >

                        {/* LIGHT */}

                        <div
                            className="
                absolute

                top-0
                left-1/2

                -translate-x-1/2

                w-[400px]
                h-[120px]

                bg-amber-300/20

                blur-[90px]

                rounded-full
              "
                        />

                        {/* HEADER */}

                        <div
                            className="
                relative

                flex
                items-center
                justify-between

                px-8
                py-6

                border-b
                border-white/20
              "
                        >

                            <h2
                                className="
                  text-2xl
                  sm:text-3xl

                  tracking-[-0.04em]

                  font-semibold

                  text-slate-900
                "
                            >
                                {title}
                            </h2>

                            <button
                                onClick={onClose}
                                className="
                  w-11
                  h-11

                  rounded-full

                  border
                  border-white/20

                  bg-white/60

                  hover:bg-white

                  transition-all

                  flex
                  items-center
                  justify-center
                "
                            >
                                <X size={18} />
                            </button>

                        </div>

                        {/* CONTENT */}

                        <div
                            className="
                relative

                px-8
                py-8

                overflow-y-auto

                max-h-[70vh]

                text-slate-600

                leading-relaxed

                space-y-6
              "
                        >
                            {children}
                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>
    );
}