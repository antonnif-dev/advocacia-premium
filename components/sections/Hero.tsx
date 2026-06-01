"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import MeshGradient from "@/components/effects/MeshGradient";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import FadeUp from "@/components/effects/FadeUp";
import TextReveal from "@/components/effects/TextReveal";
import MagneticButton from "@/components/effects/MagneticButton";
import Spotlight from "@/components/effects/Spotlight";
import WebGLBackground from "@/components/effects/WebGLBackground";
import ShaderGradient from "@/components/effects/ShaderGradient";

export default function Hero() {
    return (
        <section
            id="inicio"
            className="
        relative
        overflow-hidden
        pt-28
        lg:pt-33
        pb-20
        lg:pb-28
      "
        >

            {/* BACKGROUND SYSTEM */}

            <div className="absolute inset-0 -z-10">

                <MeshGradient />

                <ShaderGradient />

                <WebGLBackground />

                <Spotlight />

                <NoiseOverlay />

            </div>

            {/* LIGHT ATMOSPHERE */}

            <div
                className="
          absolute

          top-0
          left-1/2

          -translate-x-1/2

          w-[700px]
          h-[700px]

          bg-pink-200/20

          blur-[120px]

          rounded-full

          pointer-events-none
        "
            />

            <div
                className="
          container-premium

          grid
          lg:grid-cols-[1.05fr_0.95fr]

          gap-16
          lg:gap-20

          items-center
        "
            >

                {/* LEFT SIDE */}

                <FadeUp>

                    <div className="relative z-10">

                        {/* BADGE 

                        <div
                            className="
                inline-flex
                items-center

                gap-2

                px-4
                py-2

                rounded-full

                border
                border-white/40

                bg-white/60
                backdrop-blur-xl

                text-[11px]
                sm:text-xs

                uppercase
                tracking-[0.22em]

                text-amber-800
              "
                        >

                            <div
                                className="
                  w-2
                  h-2

                  rounded-full

                  bg-amber-500
                "
                            />

                            Advocacia Estratégica Premium

                        </div>

                        */}

                        {/* TITLE */}

                        <div className="mt-10 max-w-4xl">

                            <TextReveal>

                                <h1
                                    className="
                    text-[42px]
                    sm:text-6xl
                    lg:text-[82px]

                    leading-[0.95]

                    tracking-[-0.04em]

                    font-semibold

                    text-rose-950
                  "
                                >
                                    Defesa jurídica sofisticada para decisões importantes.
                                </h1>

                            </TextReveal>

                        </div>

                        {/* TEXT */}

                        <p
                            className="
                mt-8

                max-w-xl

                text-base
                sm:text-lg

                leading-relaxed

                text-slate-600
              "
                        >
                            Estratégia, segurança e atuação personalizada
                            para clientes que buscam excelência jurídica
                            com uma experiência premium e moderna.
                        </p>

                        {/* BUTTONS */}

                        <div
                            className="
                flex
                flex-wrap

                gap-4

                mt-10
              "
                        >

                            <MagneticButton>

                                <Button
                                    className="
                    h-14

                    px-8

                    rounded-full

                    text-sm
                    sm:text-[15px]

                    font-medium

                    bg-gradient-to-r
                    from-amber-600
                    to-yellow-500

                    hover:from-amber-500
                    hover:to-yellow-400

                    shadow-[0_10px_40px_rgba(198,169,105,0.28)]

                    transition-all
                    duration-500
                  "
                                >
                                    Solicitar Atendimento
                                </Button>

                            </MagneticButton>
                            {/*
                            <Button
                                variant="outline"
                                className="
                  h-14

                  px-8

                  rounded-full

                  border-white/40

                  bg-white/60
                  backdrop-blur-xl

                  hover:bg-white

                  text-sm
                  sm:text-[15px]
                "
                            >
                                Conhecer Áreas
                            </Button>
                            */}

                        </div>

                    </div>

                </FadeUp>

                {/* RIGHT SIDE */}

                <FadeUp>

                    <motion.div
                        whileHover={{
                            y: -4,
                        }}
                        transition={{
                            duration: 0.4,
                        }}
                        className="
              relative

              max-w-[520px]

              mx-auto
              lg:ml-auto
            "
                    >

                        {/* SOFT GLOW */}

                        <div
                            className="
                absolute

                inset-0

                scale-110

                bg-amber-300/10

                blur-[90px]

                rounded-full
              "
                        />

                        {/* IMAGE CONTAINER */}

                        <div
                            className="
                relative

                overflow-hidden

                rounded-[32px]

                border
                border-white/30

                bg-white/40

                backdrop-blur-xl

                shadow-[0_20px_80px_rgba(15,23,42,0.08)]
              "
                        >

                            {/* TOP LIGHT */}

                            <div
                                className="
                  absolute
                  inset-x-0
                  top-0

                  h-32

                  bg-gradient-to-b
                  from-white/30
                  to-transparent

                  z-10
                "
                            />

                            <Image
                                src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg"
                                alt="Advogado"
                                width={700}
                                height={700}
                                priority
                                className="
                  object-cover

                  w-full

                  h-[420px]
                  sm:h-[520px]
                  lg:h-[620px]
                "
                            />

                        </div>

                        {/* FLOATING INFO */}

                        <div
                            className="
                absolute

                -bottom-6
                left-6

                glass

                px-4
                py-3

                rounded-2xl

                border
                border-white/40

                shadow-xl
              "
                        >

                            <p
                                className="
                  text-xs

                  uppercase

                  tracking-[0.18em]

                  text-slate-500
                "
                            >
                                Atendimento Premium
                            </p>

                            <h3
                                className="
                  text-lg

                  font-semibold

                  text-slate-900
                "
                            >
                                +12 anos de atuação
                            </h3>

                        </div>

                    </motion.div>

                </FadeUp>

            </div>

        </section>
    );
}