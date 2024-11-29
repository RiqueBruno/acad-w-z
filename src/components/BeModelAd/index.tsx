import Image from 'next/image';
import Link from 'next/link';

export default function BeModelAd() {
  return (
    <section className="relative w-screen h-screen flex flex-col md:flex-row bg-gradient-to-t from-colors-gradient-mid to-transparent overflow-hidden">
      <div className="relative md:bottom-[-8%] md:w-1/2 h-full md:block hidden">
        <Image
          src="/sejamodelo.png"
          alt="Seja modelo"
          fill
          className="object-cover md:object-contain md:absolute md:bottom-0"
        />
      </div>

      <div className="flex flex-col justify-center items-center md:items-start w-full h-full px-6 md:w-1/2 md:px-12 lg:px-20 bg-[url('/sejamodelo.png')] bg-cover bg-center bg-no-repeat md:bg-none">
        <div className="bg-white bg-opacity-90 rounded-lg p-6 md:bg-transparent md:p-0 md:rounded-none">
          <h2 className="text-3xl md:text-4xl font-bold text-colors-black md:text-colors-white">
            Seja modelo
          </h2>
          <p className="text-sm md:text-lg leading-relaxed text-colors-black md:text-colors-white mt-4">
            Você é uma linda tela, e queremos ajudar a deixar transparecer sua
            beleza interior. Criamos looks exclusivos inspirados nas suas
            preferências e nas necessidades de cada evento.
          </p>
          <Link
            href="/servicos"
            className="mt-6 block w-40 md:w-auto bg-colors-primary text-center text-colors-white text-sm md:text-lg font-bold py-2 px-4 rounded-lg hover:bg-colors-primary/90 transition-all bg-colors-brand-tertiary text-colors-brand-primary hover:opacity-90"
          >
            Lista de serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
