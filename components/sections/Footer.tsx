"use client";

import { useState } from "react";

import PrivacyPolicyModal from "@/components/legal/PrivacyPolicyModal";
import TermsModal from "@/components/legal/TermsModal";

export default function Footer() {
    const [privacyOpen, setPrivacyOpen] =
        useState(false);

    const [termsOpen, setTermsOpen] =
        useState(false);
    return (
        <footer
            className="
        relative

        overflow-hidden

        pt-24
        pb-12

        border-t
        border-white/10

        bg-[#0B0B0C]
      "
        >

            {/* AMBIENT LIGHT */}

            <div
                className="
          absolute

          top-0
          left-1/2

          -translate-x-1/2

          w-[700px]
          h-[300px]

          bg-amber-400/10

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

          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

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

                {/* TOP */}

                <div
                    className="
            flex
            flex-col

            gap-16

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
                >

                    {/* BRAND */}

                    <div className="max-w-xl">

                        <span
                            className="
                inline-block

                text-[11px]

                uppercase

                tracking-[0.28em]

                text-amber-300
              "
                        >
                            Advocacia Estratégica
                        </span>

                        <h2
                            className="
                mt-5

                text-4xl
                sm:text-5xl

                leading-[1]

                tracking-[-0.05em]

                font-semibold

                text-white
              "
                        >
                            Almeida & Rocha
                        </h2>

                        <p
                            className="
                mt-6

                text-slate-400

                leading-relaxed

                text-base
                sm:text-lg
              "
                        >
                            Excelência jurídica, atuação estratégica
                            e atendimento sofisticado para clientes
                            que valorizam segurança e discrição.
                        </p>

                    </div>

                    {/* SOCIAL */}

                    <div
                        className="
              flex
              flex-col

              gap-4
            "
                    >

                        {[
                            "Instagram",
                            "LinkedIn",
                            "WhatsApp",
                        ].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="
                  group

                  flex
                  items-center
                  gap-3

                  text-slate-300

                  hover:text-white

                  transition-all
                  duration-500
                "
                            >

                                <div
                                    className="
                    w-2
                    h-2

                    rounded-full

                    bg-amber-400

                    scale-0

                    group-hover:scale-100

                    transition-all
                    duration-500
                  "
                                />

                                <span
                                    className="
                    text-sm

                    tracking-[0.12em]

                    uppercase
                  "
                                >
                                    {item}
                                </span>

                            </a>
                        ))}

                    </div>

                </div>

                {/* DIVIDER */}

                <div
                    className="
            mt-20
            mb-8

            h-px

            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
                />

                {/* BOTTOM */}

                <div
                    className="
            flex
            flex-col

            gap-4

            text-sm

            text-slate-500

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
                >

                    <p>
                        © 2026 Almeida & Rocha.
                        Todos os direitos reservados.
                    </p>

                    <div
                        className="
              flex
              flex-wrap

              gap-6
            "
                    >

                        <button
                            onClick={() => setPrivacyOpen(true)}
                            className="
    hover:text-slate-300

    transition-colors
  "
                        >
                            Política de Privacidade
                        </button>

                        <button
                            onClick={() => setTermsOpen(true)}
                            className="
    hover:text-slate-300

    transition-colors
  "
                        >
                            Termos de Uso
                        </button>

                    </div>

                </div>

            </div>
            <PrivacyPolicyModal
                open={privacyOpen}
                onClose={() => setPrivacyOpen(false)}
            />

            <TermsModal
                open={termsOpen}
                onClose={() => setTermsOpen(false)}
            />
        </footer>
    );
}