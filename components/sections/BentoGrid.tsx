import FadeUp from "@/components/effects/FadeUp";
import WordReveal from "@/components/effects/WordReveal";

export default function BentoGrid() {
    return (
        <section
            id="estrategia"
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
          right-0

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

                <FadeUp>

                    <div
                        className="
              grid

              grid-cols-1
              lg:grid-cols-12

              gap-6
            "
                    >

                        {/* MAIN PANEL */}

                        <div
                            className="
                group

                relative

                overflow-hidden

                lg:col-span-8

                rounded-[40px]

                border
                border-white/30

                bg-white/65

                backdrop-blur-2xl

                p-8
                sm:p-10
                lg:p-14

                min-h-[420px]

                shadow-[0_20px_80px_rgba(15,23,42,0.05)]
              "
                        >

                            {/* LIGHT */}

                            <div
                                className="
                  absolute

                  top-0
                  right-0

                  w-60
                  h-60

                  bg-amber-200/20

                  blur-[100px]

                  rounded-full
                "
                            />

                            {/* TOP */}

                            <div className="relative">

                                <span
                                    className="
                    inline-block

                    text-[11px]

                    uppercase

                    tracking-[0.28em]

                    text-amber-700
                  "
                                >
                                    Estratégia
                                </span>

                                <h3
                                    className="
                    mt-8

                    max-w-3xl

                    text-4xl
                    sm:text-5xl

                    leading-[0.95]

                    tracking-[-0.05em]

                    font-semibold

                    text-slate-900
                  "
                                >
                                    Planejamento jurídico sofisticado para decisões estratégicas.
                                </h3>

                            </div>

                            {/* CONTENT */}

                            <div className="relative mt-10 max-w-2xl">

                                <WordReveal
                                    text="
                  Advocacia moderna e altamente estratégica,
                  desenvolvida para clientes que valorizam
                  discrição, clareza e excelência jurídica.
                  "
                                />

                            </div>

                            {/* FOOTER */}

                            <div
                                className="
                  absolute

                  bottom-10
                  left-10
                  right-10

                  flex
                  items-center
                  justify-between
                "
                            >

                                <span
                                    className="
                    text-[11px]

                    uppercase

                    tracking-[0.24em]

                    text-slate-500
                  "
                                >
                                    Advocacia Premium
                                </span>

                                <div
                                    className="
                    w-12
                    h-12

                    rounded-full

                    border
                    border-white/30

                    bg-white/70

                    backdrop-blur-xl

                    flex
                    items-center
                    justify-center

                    text-slate-700
                  "
                                >
                                    →
                                </div>

                            </div>

                        </div>

                        {/* SIDE COLUMN */}

                        <div
                            className="
                lg:col-span-4

                grid

                gap-6
              "
                        >

                            {/* CARD 1 */}

                            <div
                                className="
                  relative

                  overflow-hidden

                  rounded-[36px]

                  border
                  border-white/30

                  bg-[#0A0B0F]

                  p-8

                  min-h-[200px]

                  shadow-[0_20px_80px_rgba(0,0,0,0.25)]
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

                      tracking-[0.24em]

                      text-amber-300
                    "
                                    >
                                        Exclusividade
                                    </span>

                                    <h3
                                        className="
                      mt-6

                      text-3xl

                      leading-tight

                      tracking-[-0.04em]

                      font-semibold

                      text-white
                    "
                                    >
                                        Atendimento altamente personalizado.
                                    </h3>

                                </div>

                            </div>

                            {/* CARD 2 */}

                            <div
                                className="
                  relative

                  overflow-hidden

                  rounded-[36px]

                  border
                  border-white/30

                  bg-white/65

                  backdrop-blur-2xl

                  p-8

                  min-h-[200px]

                  shadow-[0_20px_80px_rgba(15,23,42,0.05)]
                "
                            >

                                {/* LIGHT */}

                                <div
                                    className="
                    absolute

                    -bottom-10
                    -left-10

                    w-40
                    h-40

                    bg-amber-200/20

                    blur-3xl

                    rounded-full
                  "
                                />

                                <div className="relative">

                                    <span
                                        className="
                      text-[11px]

                      uppercase

                      tracking-[0.24em]

                      text-amber-700
                    "
                                    >
                                        Tecnologia
                                    </span>

                                    <h3
                                        className="
                      mt-6

                      text-3xl

                      leading-tight

                      tracking-[-0.04em]

                      font-semibold

                      text-slate-900
                    "
                                    >
                                        Experiência moderna com visão estratégica.
                                    </h3>

                                </div>

                            </div>

                        </div>

                    </div>

                </FadeUp>

            </div>

        </section>
    );
}