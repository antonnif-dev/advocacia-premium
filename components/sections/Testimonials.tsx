"use client";

import { useEffect, useState } from "react";

import {
    AnimatePresence,
    motion,
} from "framer-motion";

import FadeUp from "@/components/effects/FadeUp";

const testimonials = [
    {
        name: "Carlos Henrique",
        role: "Empresário",
        text:
            "Atendimento extremamente estratégico e sofisticado. O escritório transmite absoluta confiança em cada etapa.",
    },

    {
        name: "Fernanda Alves",
        role: "Executiva",
        text:
            "Profissionalismo impecável, comunicação clara e uma atuação jurídica diferenciada.",
    },

    {
        name: "Ricardo Martins",
        role: "Investidor",
        text:
            "Experiência premium do início ao fim. Segurança jurídica e excelência no atendimento.",
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) =>
                prev === testimonials.length - 1
                    ? 0
                    : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="depoimentos"
            className="
        relative

        overflow-hidden

        py-24
        lg:py-36
      "
        >

            {/* ATMOSPHERE */}

            <div
                className="
          absolute

          top-0
          left-1/2

          -translate-x-1/2

          w-[700px]
          h-[500px]

          bg-amber-200/20

          blur-[160px]

          rounded-full

          pointer-events-none
        "
            />

            {/* GRID */}

            <div
                className="
          absolute
          inset-0

          opacity-[0.03]

          [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)]

          [background-size:80px_80px]
        "
            />

            <div
                className="
          container-premium

          relative
          z-10
        "
            >

                {/* HEADER */}

                <FadeUp>

                    <div className="max-w-3xl">

                        <span
                            className="
                inline-block

                text-[11px]

                uppercase

                tracking-[0.28em]

                text-amber-700
              "
                        >
                            Depoimentos
                        </span>

                        <h2
                            className="
                mt-8

                text-4xl
                sm:text-5xl
                lg:text-6xl

                leading-[0.95]

                tracking-[-0.05em]

                font-semibold

                text-slate-900
              "
                        >
                            Confiança construída através da excelência jurídica.
                        </h2>

                    </div>

                </FadeUp>

                {/* TESTIMONIAL */}

                <div className="mt-16 lg:mt-24">

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={active}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -40,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            className="
                relative

                overflow-hidden

                rounded-[40px]

                border
                border-white/30

                bg-white/65

                backdrop-blur-2xl

                p-8
                sm:p-10
                lg:p-16

                min-h-[420px]

                shadow-[0_20px_80px_rgba(15,23,42,0.06)]
              "
                        >

                            {/* LIGHT */}

                            <div
                                className="
                  absolute

                  top-0
                  right-0

                  w-72
                  h-72

                  bg-amber-200/20

                  blur-[120px]

                  rounded-full
                "
                            />

                            <div className="relative">

                                {/* QUOTE */}

                                <div
                                    className="
                    text-7xl
                    lg:text-8xl

                    leading-none

                    text-amber-300/30
                  "
                                >
                                    “
                                </div>

                                <p
                                    className="
                    mt-6

                    max-w-4xl

                    text-2xl
                    sm:text-3xl
                    lg:text-4xl

                    leading-[1.3]

                    tracking-[-0.04em]

                    text-slate-800
                  "
                                >
                                    {testimonials[active].text}
                                </p>

                                {/* CLIENT */}

                                <div className="mt-14">

                                    <h3
                                        className="
                      text-xl
                      lg:text-2xl

                      font-semibold

                      text-slate-900
                    "
                                    >
                                        {testimonials[active].name}
                                    </h3>

                                    <p
                                        className="
                      mt-2

                      text-[11px]

                      uppercase

                      tracking-[0.25em]

                      text-amber-700
                    "
                                    >
                                        {testimonials[active].role}
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    </AnimatePresence>

                    {/* INDICATORS */}

                    <div
                        className="
              flex
              items-center
              gap-3

              mt-8
            "
                    >

                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(index)}
                                className={`
                  h-2

                  rounded-full

                  transition-all
                  duration-500

                  ${active === index
                                        ? "w-10 bg-amber-600"
                                        : "w-2 bg-slate-300"
                                    }
                `}
                            />
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}