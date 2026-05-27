import FadeUp from "@/components/effects/FadeUp";

const benefits = [
    {
        number: "01",
        title: "Atendimento Personalizado",
        description:
            "Relacionamento próximo e estratégico com acompanhamento individual em cada etapa.",
    },

    {
        number: "02",
        title: "Visão Jurídica Sofisticada",
        description:
            "Estratégias modernas e atuação técnica voltada para demandas complexas.",
    },

    {
        number: "03",
        title: "Comunicação Transparente",
        description:
            "Atualizações claras, acessíveis e alinhadas com os objetivos do cliente.",
    },

    {
        number: "04",
        title: "Atuação Moderna",
        description:
            "Integração entre excelência jurídica, tecnologia e gestão estratégica.",
    },
];

export default function Benefits() {
    return (
        <section
            id="diferenciais"
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

          bottom-0
          left-0

          w-[700px]
          h-[700px]

          bg-amber-200/20

          blur-[160px]

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
                                Diferenciais
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
                                Excelência jurídica com visão estratégica e experiência premium.
                            </h2>

                        </div>

                    </FadeUp>

                    {/* RIGHT */}

                    <FadeUp>

                        <div className="space-y-5">

                            {benefits.map((item) => (
                                <div
                                    key={item.number}
                                    className="
                    group

                    relative

                    overflow-hidden

                    rounded-[32px]

                    border
                    border-white/30

                    bg-white/65

                    backdrop-blur-2xl

                    p-7
                    sm:p-8

                    shadow-[0_20px_80px_rgba(15,23,42,0.05)]

                    transition-all
                    duration-700

                    hover:-translate-y-1
                    hover:shadow-[0_30px_90px_rgba(15,23,42,0.08)]
                  "
                                >

                                    {/* LIGHT */}

                                    <div
                                        className="
                      absolute

                      top-0
                      right-0

                      w-32
                      h-32

                      bg-amber-200/20

                      blur-3xl

                      rounded-full

                      opacity-0

                      group-hover:opacity-100

                      transition-all
                      duration-700
                    "
                                    />

                                    <div
                                        className="
                      relative

                      flex
                      flex-col
                      sm:flex-row

                      gap-6
                    "
                                    >

                                        {/* NUMBER */}

                                        <div
                                            className="
                        flex-shrink-0

                        w-14
                        h-14

                        rounded-2xl

                        border
                        border-amber-200/40

                        bg-amber-50

                        flex
                        items-center
                        justify-center
                      "
                                        >

                                            <span
                                                className="
                          text-sm

                          font-medium

                          text-amber-700
                        "
                                            >
                                                {item.number}
                                            </span>

                                        </div>

                                        {/* CONTENT */}

                                        <div>

                                            <h3
                                                className="
                          text-2xl

                          tracking-[-0.03em]

                          font-semibold

                          text-slate-900
                        "
                                            >
                                                {item.title}
                                            </h3>

                                            <p
                                                className="
                          mt-4

                          text-[15px]
                          sm:text-base

                          leading-relaxed

                          text-slate-600
                        "
                                            >
                                                {item.description}
                                            </p>

                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </FadeUp>

                </div>

            </div>

        </section>
    );
}