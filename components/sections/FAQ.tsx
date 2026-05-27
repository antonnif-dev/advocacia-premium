"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import FadeUp from "@/components/effects/FadeUp";

const items = [
    {
        question:
            "Como funciona o primeiro atendimento?",
        answer:
            "Realizamos uma análise estratégica inicial para compreender o cenário jurídico e apresentar as melhores soluções.",
    },

    {
        question:
            "O escritório atende empresas?",
        answer:
            "Sim. Atuamos com empresas, executivos, investidores e clientes que buscam assessoria jurídica sofisticada.",
    },

    {
        question:
            "O atendimento é personalizado?",
        answer:
            "Todos os atendimentos são conduzidos de forma próxima, estratégica e altamente personalizada.",
    },
];

export default function FAQ() {
    return (
        <section
            id="faq"
            className="
        relative

        overflow-hidden

        py-24
        lg:py-36

        bg-white/50
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

                <div
                    className="
            grid

            lg:grid-cols-[0.8fr_1.2fr]

            gap-14
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
                                FAQ
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
                                Perguntas frequentes.
                            </h2>

                            <p
                                className="
                  mt-8

                  max-w-md

                  text-lg

                  leading-relaxed

                  text-slate-600
                "
                            >
                                Transparência, clareza e atendimento
                                estratégico em cada etapa da experiência jurídica.
                            </p>

                        </div>

                    </FadeUp>

                    {/* RIGHT */}

                    <FadeUp>

                        <div
                            className="
                relative

                overflow-hidden

                rounded-[40px]

                border
                border-white/30

                bg-white/65

                backdrop-blur-2xl

                p-4
                sm:p-6
                lg:p-8

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

                            <div className="relative">

                                <Accordion type="single" collapsible>

                                    {items.map((item, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                            className="
                        border-b
                        border-slate-200/70

                        last:border-none
                      "
                                        >

                                            <AccordionTrigger
                                                className="
                          py-6

                          text-left

                          text-lg
                          sm:text-xl

                          leading-snug

                          tracking-[-0.03em]

                          font-medium

                          text-slate-900

                          hover:no-underline
                        "
                                            >
                                                {item.question}
                                            </AccordionTrigger>

                                            <AccordionContent
                                                className="
                          pb-6

                          text-base

                          leading-relaxed

                          text-slate-600
                        "
                                            >
                                                {item.answer}
                                            </AccordionContent>

                                        </AccordionItem>
                                    ))}

                                </Accordion>

                            </div>

                        </div>

                    </FadeUp>

                </div>

            </div>

        </section>
    );
}