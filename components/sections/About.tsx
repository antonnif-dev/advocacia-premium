import FadeUp from "@/components/effects/FadeUp";

export default function About() {
    return (
        <section
            id="sobre"
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
          h-[400px]

          bg-amber-200/20

          blur-[140px]

          rounded-full

          pointer-events-none
        "
            />

            {/* GRID LIGHT */}

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

                <div
                    className="
            grid

            lg:grid-cols-[0.9fr_1.1fr]

            gap-16
            lg:gap-24

            items-start
          "
                >

                    {/* LEFT */}

                    <FadeUp>

                        <div className="lg:sticky lg:top-32">

                            <span
                                className="
                  inline-block

                  text-[11px]

                  uppercase

                  tracking-[0.28em]

                  text-amber-700
                "
                            >
                                Sobre o Escritório
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
                                Estratégia jurídica com visão sofisticada e atuação personalizada.
                            </h2>

                        </div>

                    </FadeUp>

                    {/* RIGHT */}

                    <FadeUp>

                        <div className="space-y-8">

                            {/* MAIN TEXT */}

                            <div
                                className="
                  relative

                  rounded-[32px]

                  border
                  border-white/30

                  bg-white/70

                  backdrop-blur-2xl

                  p-8
                  sm:p-10

                  shadow-[0_20px_80px_rgba(15,23,42,0.06)]
                "
                            >

                                {/* LIGHT */}

                                <div
                                    className="
                    absolute

                    top-0
                    right-0

                    w-40
                    h-40

                    bg-amber-200/20

                    blur-3xl

                    rounded-full
                  "
                                />

                                <p
                                    className="
                    relative

                    text-lg
                    sm:text-xl

                    leading-relaxed

                    text-slate-700
                  "
                                >
                                    Nosso escritório atua com excelência
                                    em soluções jurídicas estratégicas,
                                    oferecendo atendimento altamente
                                    personalizado, análise técnica refinada
                                    e acompanhamento próximo em cada etapa.
                                </p>

                                <p
                                    className="
                    relative

                    mt-8

                    text-base
                    sm:text-lg

                    leading-relaxed

                    text-slate-600
                  "
                                >
                                    Com uma abordagem moderna e sofisticada,
                                    unimos experiência jurídica, visão
                                    estratégica e tecnologia para proporcionar
                                    segurança, discrição e resultados
                                    consistentes aos nossos clientes.
                                </p>

                            </div>

                            {/* STATS */}

                            <div
                                className="
                  grid
                  sm:grid-cols-3

                  gap-4
                "
                            >

                                {[
                                    {
                                        number: "+12",
                                        label: "Anos de atuação",
                                    },
                                    {
                                        number: "+2600",
                                        label: "Clientes atendidos",
                                    },
                                    {
                                        number: "+850",
                                        label: "Movimentações acompanhadas",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="
                      rounded-[28px]

                      border
                      border-white/20

                      bg-white/60

                      backdrop-blur-xl

                      p-6

                      shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                    "
                                    >

                                        <h3
                                            className="
                        text-3xl

                        font-semibold

                        tracking-[-0.04em]

                        text-slate-900
                      "
                                        >
                                            {item.number}
                                        </h3>

                                        <p
                                            className="
                        mt-2

                        text-sm

                        text-slate-500
                      "
                                        >
                                            {item.label}
                                        </p>

                                    </div>
                                ))}

                            </div>
                                <p className="mt-4 text-sm text-slate-500 flex justify-end">
                                    *Dados públicos obtidos através do perfil profissional no Escavador.
                                </p>

                        </div>

                    </FadeUp>

                </div>

            </div>

        </section>
    );
}