"use client";

import LegalModal from "@/components/ui/legal-modal";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function PrivacyPolicyModal({
    open,
    onClose,
}: Props) {
    return (
        <LegalModal
            open={open}
            onClose={onClose}
            title="Política de Privacidade"
        >

            <p>
                Respeitamos a sua privacidade e
                protegemos todas as informações
                compartilhadas durante sua navegação.
            </p>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Coleta de Informações
                </h3>

                <p>
                    Podemos coletar informações fornecidas
                    voluntariamente através de formulários,
                    contatos e solicitações de atendimento.
                </p>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Uso dos Dados
                </h3>

                <p>
                    As informações são utilizadas
                    exclusivamente para comunicação,
                    atendimento e melhoria da experiência
                    do usuário.
                </p>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Segurança
                </h3>

                <p>
                    Adotamos medidas técnicas e
                    organizacionais para proteger os
                    dados pessoais contra acessos não
                    autorizados.
                </p>
            </div>

        </LegalModal>
    );
}