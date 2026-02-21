// src/app/cursos/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { PiHairDryerFill } from "react-icons/pi";
import cursos from "./data";
import CoursesPanel from "@/components/CoursesPanel";

export const metadata: Metadata = {
  title: "Cursos Profissionais | Academia Waleska Zanyor",
  description:
    "Torne-se um profissional completo com nossos cursos de Cabeleireiro, Colorimetria, Corte e Mechas avançadas.",
};

export default function Cursos() {
  const formatButtons = (items: typeof cursos) =>
    items.map((curso) => ({
      id: curso.id,
      title: curso.title,
      icon: <PiHairDryerFill aria-hidden="true" />,
      link: "/cursos/cadastro",
    }));

  const dataButtons = formatButtons(cursos.filter((c) => c.id <= 4));
  const dataButtons2 = formatButtons(cursos.filter((c) => c.id > 4));

  return (
    <main className="container mx-auto px-4 md:px-8 py-12">
      <div className="w-full h-64 md:h-96 bg-lime-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-inner">
        Banner Academia Waleska Zanyor
      </div>

      <section className="mt-16 bg-colors-brand-primary text-colors-brand-secondary p-8 md:p-16 shadow-xl rounded-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Sobre nossos Cursos
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center opacity-90">
          A Academia Waleska Zanyor oferece formação única no mercado de
          coiffure. Contamos com estrutura de ponta, salas elegantes e
          funcionais para que o aluno aprenda na prática, atendendo o público
          externo sob supervisão técnica.
        </p>
      </section>

      <section className="mt-20 space-y-24">
        <article className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-12">Formação Fundamental</h2>
          <CoursesPanel buttons={dataButtons} data={cursos} />
          <Link
            href="/cursos/cadastro"
            className="mt-10 px-8 py-4 bg-colors-brand-tertiary text-colors-brand-primary font-bold rounded-full transition-all hover:scale-105 hover:shadow-lg active:scale-95"
          >
            INSCREVA-SE AGORA
          </Link>
        </article>

        <article className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-12">
            Especializações (Avançado)
          </h2>
          <CoursesPanel buttons={dataButtons2} data={cursos} />
          <Link
            href="/cursos/cadastro"
            className="mt-10 px-8 py-4 border-2 border-colors-brand-tertiary text-colors-brand-tertiary font-bold rounded-full transition-all hover:bg-colors-brand-tertiary hover:text-colors-brand-primary"
          >
            QUERO ME APERFEIÇOAR
          </Link>
        </article>
      </section>
    </main>
  );
}
