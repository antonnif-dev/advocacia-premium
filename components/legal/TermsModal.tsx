"use client";

import LegalModal from "@/components/ui/legal-modal";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function TermsModal({
    open,
    onClose,
}: Props) {
    return (
        <LegalModal
            open={open}
            onClose={onClose}
            title="Termos de Uso"
        >

            <p>
                Ao utilizar este site, o usuário
                concorda com os termos e condições
                descritos abaixo.
            </p>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Uso do Conteúdo
                </h3>

                <p>
                    Todo conteúdo disponibilizado possui
                    caráter informativo e institucional.
                </p>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Propriedade Intelectual
                </h3>

                <p>
                    É proibida a reprodução parcial
                    ou total do conteúdo sem autorização.
                </p>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Limitação de Responsabilidade
                </h3>

                <p>
                    O uso das informações disponibilizadas
                    é de responsabilidade do usuário.
                </p>
            </div>

        </LegalModal>
    );
}