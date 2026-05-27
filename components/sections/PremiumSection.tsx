import FadeUp from "@/components/effects/FadeUp";

export default function PremiumSection() {
    return (
        <section
            id="premium"
            className="
        relative

        overflow-hidden

        py-24
        lg:py-40

        bg-[#06070A]
      "
        >

            {/* TOP LIGHT */}

            <div
                className="
          absolute

          top-0
          right-0

          w-[700px]
          h-[700px]

          bg-amber-300/10

          blur-[180px]

          rounded-full

          pointer-events-none
        "
            />

            {/* BOTTOM LIGHT */}

            <div
                className="
          absolute

          bottom-0
          left-0

          w-[600px]
          h-[600px]

          bg-white/[0.03]

          blur-[140px]

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

          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45))]
        "
            />

            <div
                className="
          container-premium

          relative
          z-10
        "
            >

                <FadeUp>

                    <div
                        className="
              grid

              lg:grid-cols-[1fr_auto]

              gap-16
              lg:gap-24

              items-end
            "
                    >

                        {/* LEFT */}

                        <div className="max-w-4xl">

                            <span
                                className="
                  inline-block

                  text-[11px]

                  uppercase

                  tracking-[0.3em]

                  text-amber-300
                "
                            >
                                Advocacia Estratégica
                            </span>

                            <h2
                                className="
                  mt-8

                  text-4xl
                  sm:text-5xl
                  lg:text-7xl

                  leading-[0.92]

                  tracking-[-0.06em]

                  font-semibold

                  text-white
                "
                            >
                                Atuação jurídica sofisticada para decisões importantes.
                            </h2>

                            <p
                                className="
                  mt-10

                  max-w-2xl

                  text-base
                  sm:text-lg

                  leading-relaxed

                  text-slate-400
                "
                            >
                                Unimos estratégia, excelência técnica e
                                visão moderna em uma experiência jurídica
                                premium, personalizada e orientada para
                                resultados consistentes.
                            </p>

                        </div>

                        {/* RIGHT CARD */}

                        <div
                            className="
                relative

                overflow-hidden

                rounded-[32px]

                border
                border-white/10

                bg-white/[0.04]

                backdrop-blur-2xl

                p-8

                shadow-[0_20px_80px_rgba(0,0,0,0.35)]

                max-w-sm
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
                                    Excelência Jurídica
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
                                    Atendimento altamente estratégico e personalizado.
                                </h3>

                                <p
                                    className="
                    mt-5

                    text-sm

                    leading-relaxed

                    text-slate-400
                  "
                                >
                                    Experiência premium desenvolvida para
                                    clientes que valorizam discrição,
                                    segurança e excelência jurídica.
                                </p>

                            </div>

                        </div>

                    </div>

                </FadeUp>

            </div>

        </section>
    );
}