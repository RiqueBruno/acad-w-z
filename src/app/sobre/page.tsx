// src/app/sobre/page.tsx
import { Metadata } from "next";
import Ghost from "@/components/Ghost";
import ImageViewer from "@/components/ImageView";
import Image from "next/image";
import { imagesViewer } from "./data";

export const metadata: Metadata = {
  title: "Sobre Nós e Ações Sociais | Academia Waleska Zanyor",
  description:
    "Conheça a história da Academia Waleska Zanyor, nossa missão de formar profissionais da beleza e nosso compromisso com ações sociais na região.",
};

export default function Sobre() {
  return (
    <main className="container mx-auto px-4 md:px-16 lg:px-32 py-8 space-y-12">
      <Ghost />

      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
        Conheça a Nossa História
      </h1>

      <section className="flex flex-col items-center bg-colors-brand-primary text-colors-brand-secondary p-8 md:p-16 shadow-xl rounded-2xl text-center transition-hover hover:shadow-2xl">
        <div className="mb-6 overflow-hidden rounded-full border-4 border-colors-brand-tertiary shadow-md">
          <Image
            src="/images/academia-waleska-zanyor.jpg"
            alt="Fachada e interior da Academia Waleska Zanyor"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">A Academia</h2>
        <p className="max-w-2xl leading-relaxed">
          Desde 2019, a Academia Waleska Zanyor é referência na formação de
          profissionais do mercado de coiffure. Nossa estrutura conta com salas
          elegantes, funcionais e instrutores altamente qualificados para
          treinamento prático direto.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center bg-colors-brand-primary text-colors-brand-secondary p-8 md:p-16 shadow-xl rounded-2xl">
        <div className="relative h-[400px] w-full">
          <Image
            src="/sobre.jpg"
            alt="Waleska Zanyor - Fundadora e Especialista em Beleza"
            fill
            priority
            className="rounded-xl object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Waleska Zanyor
          </h2>
          <p className="leading-relaxed opacity-90">
            Fundada por Waleska Zanyor, a Academia reflete sua visão de
            democratizar o ensino de alta qualidade na beleza, preparando
            profissionais para funções de destaque em grandes salões.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center bg-colors-brand-primary text-colors-brand-secondary p-8 md:p-16 shadow-xl rounded-2xl text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ações Sociais</h2>
        <p className="max-w-3xl mb-12 italic">
          "Acreditamos que a beleza é para todos." Realizamos cortes gratuitos e
          parcerias com organizações para transformar vidas através da
          autoestima.
        </p>

        <article className="w-full border-t border-gray-300/30 pt-12">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8">
            Nossa Galeria de Impacto
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[500px] p-4 overflow-y-auto rounded-xl bg-black/5 scrollbar-thin scrollbar-thumb-gray-400">
            {imagesViewer.map((image, index) => (
              <div key={index} className="transition-transform hover:scale-105">
                <ImageViewer src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
