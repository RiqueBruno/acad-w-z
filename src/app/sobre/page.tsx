import { Metadata } from "next";
import Ghost from "@/components/Ghost";
import ImageViewer from "@/components/ImageView";
import Image from "next/image";
import { imagesViewer, imagesViewer2 } from "./data";

export const metadata: Metadata = {
  title: "Sobre Nós e Ações Sociais | Academia Waleska Zanyor",
  description:
    "Conheça a história da Academia Waleska Zanyor, nossa missão de formar profissionais da beleza e nosso compromisso com ações sociais.",
};

export default function Sobre() {
  return (
    <main className="container mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-16 space-y-20">
      <Ghost />

      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">
          Nossa História
        </h1>
        <div className="h-2 w-24 bg-colors-brand-tertiary mx-auto rounded-full"></div>
      </section>

      <section className="flex flex-col items-center bg-colors-brand-primary text-colors-brand-secondary p-8 md:p-16 shadow-2xl rounded-[2rem] text-center border border-white/10">
        <div className="relative w-48 h-48 mb-8 overflow-hidden rounded-full border-4 border-colors-brand-tertiary shadow-xl bg-white flex items-center justify-center p-4">
          <Image
            src="/logo.webp"
            alt="Logo Academia Waleska Zanyor"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 italic">
          A Academia
        </h2>
        <p className="max-w-3xl text-lg md:text-xl leading-relaxed opacity-90">
          Desde 2019, a Academia Waleska Zanyor é referência na formação de
          profissionais do mercado de coiffure. Nossa estrutura conta com salas
          elegantes, funcionais e instrutores altamente qualificados para
          treinamento prático direto.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] w-full shadow-2xl rounded-3xl overflow-hidden group">
          <Image
            src="/sobre.jpg"
            alt="Waleska Zanyor - Fundadora"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-black text-colors-brand-primary uppercase tracking-tight">
            Waleska Zanyor
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-colors-brand-tertiary pl-6 italic">
            &quot;Minha missão é democratizar o ensino de alta qualidade na
            beleza, preparando profissionais para funções de destaque em grandes
            salões.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            A Academia reflete a visão de sua fundadora em criar um ambiente
            onde a técnica encontra a arte, transformando alunos em verdadeiros
            especialistas.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 p-8 md:p-12 rounded-[2rem]">
        <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center text-gray-800 uppercase tracking-widest">
          Ambiente & Ensino
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {imagesViewer2.map((image, index) => (
            <ImageViewer key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </section>

      <section className="bg-colors-brand-primary text-colors-brand-secondary p-8 md:p-16 shadow-2xl rounded-[2rem] text-center">
        <h2 className="text-3xl lg:text-5xl font-black mb-6 uppercase">
          Ações Sociais
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg opacity-80 italic border-b border-white/10 pb-12">
          Acreditamos que a beleza é para todos. Realizamos cortes gratuitos e
          parcerias com organizações para transformar vidas através da
          autoestima.
        </p>

        <article className="w-full">
          <h3 className="text-xl lg:text-2xl font-bold mb-8 uppercase tracking-widest text-colors-brand-tertiary">
            Impacto na Comunidade
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {imagesViewer.map((image, index) => (
              <ImageViewer key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
