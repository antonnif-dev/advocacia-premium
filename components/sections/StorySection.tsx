"use client";

import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

import { useRef } from "react";

export default function StorySection() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [100, -100]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0]
    );

    return (
        <section
            id="experiencia"
            ref={ref}
            className="
        relative

        overflow-hidden

        py-32
        lg:py-52

        bg-[#050608]
      "
        >

            {/* TOP LIGHT */}

            <div
                className="
          absolute

          top-0
          left-1/2

          -translate-x-1/2

          w-[900px]
          h-[500px]

          bg-amber-300/10

          blur-[180px]

          rounded-full

          pointer-events-none
        "
            />

            {/* SIDE LIGHT */}

            <div
                className="
          absolute

          bottom-0
          right-0

          w-[500px]
          h-[500px]

          bg-white/[0.03]

          blur-[120px]

          rounded-full

          pointer-events-none
        "
            />

            {/* GRID */}

            <div
                className="
          absolute
          inset-0

          opacity-[0.04]

          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

          [background-size:80px_80px]
        "
            />

            {/* VIGNETTE */}

            <div
                className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.55))]
        "
            />

            {/* FLOATING PARTICLES */}

            <div
                className="
          absolute

          inset-0

          opacity-40
        "
            >

                <div
                    className="
            absolute

            top-24
            left-[15%]

            w-2
            h-2

            rounded-full

            bg-amber-200/60

            blur-[2px]
          "
                />

                <div
                    className="
            absolute

            bottom-32
            right-[18%]

            w-3
            h-3

            rounded-full

            bg-white/30

            blur-[2px]
          "
                />

            </div>

            <motion.div
                style={{
                    y,
                    opacity,
                }}
                className="
          container-premium

          relative
          z-10
        "
            >

                <div
                    className="
            grid

            lg:grid-cols-[1fr_auto]

            gap-20

            items-end
          "
                >

                    {/* LEFT */}

                    <div className="max-w-5xl">

                        <span
                            className="
                inline-block

                text-[11px]

                uppercase

                tracking-[0.3em]

                text-amber-300
              "
                        >
                            Experiência Premium
                        </span>

                        <h2
                            className="
                mt-10

                text-4xl
                sm:text-5xl
                lg:text-7xl

                leading-[0.95]

                tracking-[-0.06em]

                font-semibold

                text-white
              "
                        >
                            Advocacia moderna para decisões que exigem excelência absoluta.
                        </h2>

                        <p
                            className="
                mt-10

                max-w-3xl

                text-lg
                lg:text-2xl

                leading-relaxed

                text-slate-400
              "
                        >
                            Uma experiência jurídica sofisticada,
                            estratégica e altamente personalizada,
                            desenvolvida para clientes que valorizam
                            discrição, segurança e atuação premium.
                        </p>

                    </div>

                    {/* SIDE BLOCK */}

                    <div
                        className="
              relative

              hidden
              lg:block

              rounded-[32px]

              border
              border-white/10

              bg-white/[0.04]

              backdrop-blur-2xl

              p-8

              max-w-sm

              shadow-[0_20px_80px_rgba(0,0,0,0.35)]
            "
                    >

                        {/* LIGHT */}

                        <div
                            className="
                absolute

                -top-10
                -right-10

                w-40
                h-40

                bg-amber-300/10

                blur-3xl

                rounded-full
              "
                        />

                        <div className="relative">

                            <span
                                className="
                  text-[11px]

                  uppercase

                  tracking-[0.22em]

                  text-amber-200
                "
                            >
                                Atendimento Exclusivo
                            </span>

                            <h3
                                className="
                  mt-5

                  text-2xl

                  leading-tight

                  tracking-[-0.04em]

                  font-semibold

                  text-white
                "
                            >
                                Estratégia jurídica desenvolvida para cada cenário.
                            </h3>

                            <p
                                className="
                  mt-5

                  text-sm

                  leading-relaxed

                  text-slate-400
                "
                            >
                                Atendimento sofisticado,
                                acompanhamento próximo e
                                soluções jurídicas orientadas
                                por excelência técnica.
                            </p>

                        </div>

                    </div>

                </div>

            </motion.div>

        </section>
    );
}