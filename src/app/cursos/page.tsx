// src/app/cursos/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; // Importação essencial
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
    <main className="container mx-auto px-4 md:px-8 pt-28 pb-12">
      <div className="relative w-full h-64 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/BG.png"
          alt="Banner Academia Waleska Zanyor"
          fill
          priority
          className="object-cover object-center transition-transform duration-1000 hover:scale-105"
          sizes="100vw"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10">
          Cursos
        </h1>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <section className="mt-16 bg-colors-brand-primary text-colors-brand-secondary p-8 md:p-16 shadow-xl rounded-[2rem] border border-white/5">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-center uppercase tracking-tighter">
          Sobre nossos Cursos
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-center opacity-90 italic">
          A Academia Waleska Zanyor oferece formação única no mercado de
          coiffure. Contamos com estrutura de ponta, salas elegantes e
          funcionais para que o aluno aprenda na prática.
        </p>
      </section>

      <section className="mt-20 space-y-32">
        <article className="flex flex-col items-center">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Formação Fundamental
            </h2>
            <div className="h-1.5 w-20 bg-colors-brand-tertiary mx-auto mt-2 rounded-full"></div>
          </header>

          <CoursesPanel buttons={dataButtons} data={cursos} />

          <Link
            href="/cursos/cadastro"
            className="mt-12 px-10 py-5 bg-colors-brand-tertiary text-colors-brand-primary font-black rounded-full transition-all hover:scale-105 hover:shadow-xl active:scale-95 text-lg"
          >
            INSCREVA-SE AGORA
          </Link>
        </article>

        <article className="flex flex-col items-center">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 italic">
              Especializações (Avançado)
            </h2>
            <div className="h-1.5 w-20 bg-colors-brand-primary mx-auto mt-2 rounded-full"></div>
          </header>

          <CoursesPanel buttons={dataButtons2} data={cursos} />

          <Link
            href="/cursos/cadastro"
            className="mt-12 px-10 py-5 border-2 border-colors-brand-primary text-colors-brand-primary font-black rounded-full transition-all hover:bg-colors-brand-primary hover:text-white text-lg"
          >
            QUERO ME APERFEIÇOAR
          </Link>
        </article>
      </section>
    </main>
  );
}
