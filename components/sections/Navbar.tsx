"use client";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const [mobileOpen, setMobileOpen] = useState(false);
    const whatsappUrl = `https://wa.me/553193233469?text=${encodeURIComponent("Olá, tudo bem? Vi seu contato através do site, gostaria de saber mais informações jurídicas.")}`;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 24);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        {
            label: "Sobre",
            href: "#sobre",
        },
        {
            label: "Áreas",
            href: "#areas",
        },
        {
            label: "Diferenciais",
            href: "#diferenciais",
        },
        {
            label: "Experiência",
            href: "#experiencia",
        },
        {
            label: "Depoimentos",
            href: "#depoimentos",
        },
        {
            label: "FAQ",
            href: "#faq",
        },
        {
            label: "Contato",
            href: "#contato",
        },
    ];

    return (
        <>
            <header
                className={`
          fixed
          top-0
          left-0

          w-full

          z-50

          transition-all
          duration-700

          ${scrolled
                        ? `
                py-4

                backdrop-blur-2xl

                bg-white/55

                border-b
                border-white/20

                shadow-[0_10px_40px_rgba(15,23,42,0.04)]
              `
                        : `
                py-6
                bg-transparent
              `
                    }
        `}
            >

                <div className="container-premium">

                    <div
                        className="
              flex
              items-center
              justify-between
            "
                    >

                        {/* BRAND */}

                        <motion.div
                            whileHover={{
                                y: -1,
                            }}
                            className="relative"
                        >

                            <h1
                                className="
                  text-[22px]
                  sm:text-[26px]

                  tracking-[-0.04em]

                  font-semibold

                  text-slate-900
                "
                            >
                                BRANDÃO GUEDES
                            </h1>

                            <p
                                className="
                  mt-1
                  text-[10px]
                  sm:text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-slate-500
                  flex justify-center
                "
                            >
                                Advocacia
                            </p>

                        </motion.div>

                        {/* DESKTOP MENU */}

                        <nav
                            className="
                            hidden
                            lg:flex
                            items-center
                            gap-7 xl:gap-10
                        "
                        >

                            {links.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="
        group
        relative

        text-[14px] xl:text-[15px]

        text-slate-700

        hover:text-slate-950

        transition-all
        duration-300
      "
                                >

                                    <span className="relative z-10">
                                        {item.label}
                                    </span>

                                    <span
                                        className="
          absolute

          left-0
          -bottom-1

          h-[1px]
          w-0

          bg-amber-600

          transition-all
          duration-500

          group-hover:w-full
        "
                                    />

                                </a>
                            ))}

                        </nav>

                        {/* RIGHT */}

                        <div className="flex items-center gap-4">

                            {/* CTA */}

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                className="
                  hidden
                  lg:flex
                  h-15
                  px-7                
                  rounded-full
                  text-[14px]
                  font-medium
                  bg-slate-950
                  hover:bg-slate-800
                  text-white
                  shadow-[0_12px_30px_rgba(15,23,42,0.12)]
                  transition-all
                  duration-500
                  hover:scale-[1.015]
                "
                            >
                                Solicitar Atendimento
                            </a>

                            {/* MOBILE BUTTON */}

                            <button
                                onClick={() =>
                                    setMobileOpen(!mobileOpen)
                                }
                                className="
                  lg:hidden

                  relative

                  w-11
                  h-11

                  rounded-full

                  border
                  border-white/30

                  bg-white/50

                  backdrop-blur-xl

                  flex
                  items-center
                  justify-center

                  shadow-lg
                "
                            >

                                <AnimatePresence mode="wait">

                                    {mobileOpen ? (
                                        <motion.div
                                            key="x"
                                            initial={{
                                                opacity: 0,
                                                rotate: -90,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                rotate: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                rotate: 90,
                                            }}
                                        >
                                            <X size={18} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{
                                                opacity: 0,
                                                rotate: 90,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                rotate: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                rotate: -90,
                                            }}
                                        >
                                            <Menu size={18} />
                                        </motion.div>
                                    )}

                                </AnimatePresence>

                            </button>

                        </div>

                    </div>

                </div>

            </header>

            {/* MOBILE MENU */}

            <AnimatePresence>

                {mobileOpen && (

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className="
              fixed
              inset-0

              z-40

              lg:hidden
            "
                    >

                        {/* BACKDROP */}

                        <div
                            className="
                absolute
                inset-0

                bg-black/20

                backdrop-blur-2xl
              "
                        />

                        {/* PANEL */}

                        <motion.div
                            initial={{
                                y: -40,
                                opacity: 0,
                                scale: 0.96,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                y: -20,
                                opacity: 0,
                                scale: 0.98,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                absolute

                top-24
                left-5
                right-5

                rounded-[32px]

                border
                border-white/20

                bg-white/75

                backdrop-blur-2xl

                p-8

                shadow-[0_20px_80px_rgba(15,23,42,0.08)]
              "
                        >

                            <div
                                className="
    flex
    flex-col
    gap-6
  "
                            >

                                {links.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() =>
                                            setMobileOpen(false)
                                        }
                                        className="
        text-[22px]
        tracking-[-0.03em]
        text-slate-800
        hover:text-black
        transition-colors
      "
                                    >
                                        {item.label}
                                    </a>
                                ))}

                            </div>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                className="
                  mt-10
                  w-full
                  h-7
                  rounded-full
                  text-[15px]
                  text-white
                  bg-slate-950
                  hover:bg-slate-800
                "
                            >
                                Solicitar Atendimento
                            </a>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>
        </>
    );
}