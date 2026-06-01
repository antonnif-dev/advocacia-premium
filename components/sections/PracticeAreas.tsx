import {
    Briefcase,
    Building2,
    Landmark,
    Scale,
    Shield,
    Gavel,
    Users,
    HeartHandshake,
    FileText,
    Home,
    ArrowUpRight
} from "lucide-react";
import FadeUp from "@/components/effects/FadeUp";
import StaggerContainer from "@/components/effects/StaggerContainer";
import FadeItem from "@/components/effects/FadeItem";
import ReactiveCard from "@/components/effects/ReactiveCard";

const areas = [
    {
        icon: Shield,
        title: "Direito Penal",
        description:
            "Defesa técnica especializada em investigações, processos criminais e atuação estratégica perante tribunais.",
    },

    {
        icon: Landmark,
        title: "Direito Civil",
        description:
            "Atuação especializada em responsabilidade civil, indenizações, contratos e litígios.",
    },

    {
        icon: Briefcase,
        title: "Direito Empresarial",
        description:
            "Estruturação jurídica estratégica para empresas e proteção de operações corporativas.",
    },

    {
        icon: Scale,
        title: "Direito Trabalhista",
        description:
            "Assessoria preventiva e contenciosa para empregados e empregadores.",
    },

    {
        icon: Users,
        title: "Direito de Família",
        description:
            "Atuação em divórcios, guarda, alimentos, inventários e planejamento familiar.",
    },

    {
        icon: Home,
        title: "Direito Imobiliário",
        description:
            "Consultoria e atuação em compra, venda, locação e regularização de imóveis.",
    },

    {
        icon: FileText,
        title: "Direito Previdenciário",
        description:
            "Planejamento previdenciário e requerimentos de benefícios junto ao INSS.",
    },

    {
        icon: Building2,
        title: "Consultoria Patrimonial",
        description:
            "Proteção patrimonial e planejamento sucessório para pessoas e empresas.",
    },

    {
        icon: Gavel,
        title: "Direito Tributário",
        description:
            "Planejamento fiscal, recuperação de créditos e defesa em questões tributárias.",
    },

    {
        icon: HeartHandshake,
        title: "Direito do Consumidor",
        description:
            "Defesa dos direitos dos consumidores e solução de conflitos de consumo.",
    },
];

export default function PracticeAreas() {
    return (
        <section
            id="areas"
            className="py-32"
        >

            <div className="container-premium">

                <FadeUp>

                    <div className="max-w-2xl">

                        <span
                            className="
                text-amber-700
                text-sm
                uppercase
                tracking-[0.2em]
              "
                        >
                            Áreas de Atuação
                        </span>

                        <h2
                            className="
                mt-6

                text-4xl
                lg:text-5xl
              "
                        >
                            Soluções jurídicas para demandas complexas.
                        </h2>

                    </div>

                </FadeUp>
                <StaggerContainer>
                    <div
                        className="
    grid

    md:grid-cols-2
    xl:grid-cols-3

    gap-6
    lg:gap-8

    mt-20
  "
                    >

                        {areas.map((area, index) => {
                            const Icon = area.icon;

                            return (
                                <FadeUp key={index}>

                                    <div
                                        className={`
group
relative
overflow-hidden
rounded-[32px]
border
backdrop-blur-2xl
p-8
transition-all
duration-700
hover:-translate-y-1

${index === 0
                                                ? `
      border-red-300/50
      bg-gradient-to-br
      from-red-50
      via-white
      to-red-100/30
      shadow-[0_20px_80px_rgba(127,29,29,0.12)]
    `
                                                : `
      border-white/30
      bg-white/60
      shadow-[0_20px_80px_rgba(15,23,42,0.05)]
    `
                                            }
`}
                                    >

                                        {/* GRADIENT LIGHT */}

                                        <div
                                            className="
              absolute

              inset-0

              opacity-0

              group-hover:opacity-100

              transition-opacity
              duration-700

              bg-gradient-to-br
              from-white/20
              via-transparent
              to-amber-100/10
            "
                                        />

                                        {/* GLOW */}

                                        <div
                                            className="
              absolute

              -top-10
              -right-10

              w-40
              h-40

              bg-amber-200/20

              blur-3xl

              rounded-full

              opacity-0

              group-hover:opacity-100

              transition-all
              duration-700
            "
                                        />

                                        {/* ICON */}

                                        <div
                                            className="
              relative

              w-14
              h-14

              rounded-2xl

              bg-gradient-to-br
              from-amber-100
              to-amber-50

              border
              border-amber-200/40

              flex
              items-center
              justify-center

              shadow-sm
            "
                                        >

                                            <Icon
                                                size={26}
                                                className="text-amber-700"
                                            />

                                        </div>

                                        {/* CONTENT */}
                                        {index === 0 && (
                                            <div
                                                className="
        absolute
        top-5
        right-5
        px-3
        py-1
        rounded-full
        bg-red-700
        text-white
        text-[10px]
        uppercase
        tracking-wider
      "
                                            >
                                                Destaque
                                            </div>
                                        )}

                                        <div className="relative mt-8">

                                            <h3
                                                className="
                text-2xl

                tracking-[-0.03em]

                font-semibold

                text-slate-900
              "
                                            >
                                                {area.title}
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
                                                {area.description}
                                            </p>

                                        </div>

                                        {/* FOOTER */}

                                        <div
                                            className="
              relative

              mt-10

              flex
              items-center
              justify-between
            "
                                        >

                                            <span
                                                className="
                text-[11px]

                uppercase

                tracking-[0.22em]

                text-slate-500
              "
                                            >
                                                Atendimento Estratégico
                                            </span>

                                            <div
                                                className="
                w-10
                h-10

                rounded-full

                border
                border-white/30

                bg-white/70

                backdrop-blur-xl

                flex
                items-center
                justify-center

                transition-all
                duration-500

                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
                                            >

                                                <ArrowUpRight
                                                    size={18}
                                                    className="text-slate-700"
                                                />

                                            </div>

                                        </div>

                                    </div>

                                </FadeUp>
                            );
                        })}

                    </div>
                </StaggerContainer>

            </div>

        </section>
    );
}