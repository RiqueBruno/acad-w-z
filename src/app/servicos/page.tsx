import { Metadata } from "next";
import { servicosData } from "./data";
import { HiOutlineInformationCircle } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Serviços e Modelos | Academia Waleska Zanyor",
  description:
    "Confira nossos serviços disponíveis. Atendimento realizado por alunos com supervisão técnica e valores sociais.",
};

export default function Servicos() {
  return (
    <main className="container mx-auto px-4 md:px-8 pt-28 pb-12 space-y-12">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
          Nossos Serviços
        </h1>
        <p className="text-lg text-gray-600">
          A Academia Waleska Zanyor oferece atendimentos de excelência
          realizados por nossos alunos em formação, sempre sob a supervisão
          rigorosa de nossos instrutores qualificados.
        </p>
      </section>

      <section className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <HiOutlineInformationCircle className="text-amber-500 text-5xl flex-shrink-0" />
        <div className="text-gray-800 text-left">
          <h2 className="font-bold text-xl mb-1 text-amber-900">
            Atenção: Valores Sociais
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            Não cobramos pelo serviço profissional. O valor solicitado é uma
            **taxa de serviço social** destinada exclusivamente ao custeio dos
            produtos utilizados e despesas operacionais (água, energia e
            manutenção da estrutura).
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicosData.map((servico) => (
          <article
            key={servico.id}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-colors-brand-primary/10 text-colors-brand-primary text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                {servico.categoria}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {servico.nome}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {servico.descricao}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="text-center bg-colors-brand-primary text-colors-brand-secondary p-8 md:p-12 rounded-3xl shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Deseja ser modelo?
        </h2>
        <p className="mb-8 opacity-90 max-w-xl mx-auto">
          Agende seu horário e colabore com a formação de novos profissionais da
          beleza!
        </p>
        <button className="bg-colors-brand-tertiary text-colors-brand-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg">
          AGENDAR ATENDIMENTO
        </button>
      </section>
    </main>
  );
}
