import { Button } from "@/components/ui/button";

import FadeUp from "@/components/effects/FadeUp";

export default function FinalCTA() {
    return (
        <section
            id="contato"
            className="
        relative

        overflow-hidden

        py-24
        lg:py-40
      "
        >

            {/* ATMOSPHERE */}

            <div
                className="
          absolute

          top-0
          left-1/2

          -translate-x-1/2

          w-[900px]
          h-[600px]

          bg-amber-200/20

          blur-[180px]

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

                <FadeUp>

                    <div
                        className="
              relative

              overflow-hidden

              rounded-[48px]

              border
              border-white/10

              bg-[#07080B]

              px-8
              py-14

              sm:px-12

              lg:px-20
              lg:py-24

              shadow-[0_30px_120px_rgba(0,0,0,0.35)]
            "
                    >

                        {/* LIGHT TOP */}

                        <div
                            className="
                absolute

                top-0
                right-0

                w-[500px]
                h-[500px]

                bg-amber-300/10

                blur-[140px]

                rounded-full
              "
                        />

                        {/* LIGHT BOTTOM */}

                        <div
                            className="
                absolute

                bottom-0
                left-0

                w-[400px]
                h-[400px]

                bg-white/[0.03]

                blur-[120px]

                rounded-full
              "
                        />

                        {/* VIGNETTE */}

                        <div
                            className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.35))]
              "
                        />

                        <div
                            className="
                relative
                z-10

                grid

                lg:grid-cols-[1fr_auto]

                gap-14
                lg:gap-20

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
                                    Atendimento Estratégico
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
                                    Proteja seus interesses com uma advocacia de alto nível.
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
                                    Fale com nossa equipe e receba uma análise
                                    jurídica estratégica personalizada,
                                    conduzida com excelência técnica,
                                    discrição e atendimento premium.
                                </p>

                            </div>

                            {/* RIGHT */}

                            <div
                                className="
                  flex
                  flex-col

                  items-start
                  lg:items-end

                  gap-6
                "
                            >

                                <Button
                                    className="
                    h-14

                    rounded-full

                    px-8

                    text-sm
                    sm:text-base

                    font-medium

                    bg-gradient-to-r
                    from-amber-600
                    to-yellow-500

                    hover:from-amber-500
                    hover:to-yellow-400

                    text-white

                    shadow-[0_15px_40px_rgba(198,169,105,0.35)]

                    transition-all
                    duration-500

                    hover:scale-[1.02]

                    animated-gradient
                  "
                                >
                                    Solicitar Atendimento
                                </Button>

                                <span
                                    className="
                    text-[11px]

                    uppercase

                    tracking-[0.24em]

                    text-slate-500
                  "
                                >
                                    Atendimento confidencial e estratégico
                                </span>

                            </div>

                        </div>

                    </div>

                </FadeUp>

            </div>

        </section>
    );
}