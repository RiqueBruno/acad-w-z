import Ghost from '@/components/Ghost';
import ImageViewer from '@/components/ImageView';
import Image from 'next/image';
import { imagesViewer } from './data';

export default function Sobre() {
  return (
    <main id="main-title" className="px-8 md:px-16 lg:px-32 py-8">
      <Ghost />
      <h2 id="main-title" className="sr-only">
        Sobre a Academia Waleska Zanyor e suas ações sociais.
      </h2>
      <section className="flex flex-col items-center bg-colors-brand-primary text-colors-brand-secondary p-8 md:p-16 shadow-lg rounded-lg text-center">
        <div>
          <Image
            src="/images/academia-waleska-zanyor.jpg"
            alt="Academia Waleska Zanyor"
            width={400}
            height={400}
          />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Academia Waleska Zanyor
        </h2>
        <p>
          Desde 2019, a Academia Waleska Zanyor atende esta região. Fundada por
          Waleska Zanyor, a Academia oferece diversos cursos e serviços para
          todos. Apesar de tão pouco tempo de vida, já formamos muitos
          profissionais. A Academia Waleska Zanyor oferece cursos de formação
          única no mercado de coiffure, preparando para o mercado profissionais
          completos, treinados nas diversas funções dentro de um salão: Escova,
          Coloração, Corte, Tratamento, Mechas, dentre outros. Contamos com uma
          estrutura de ponta! com salas Elegantes e funcionais com bancadas,
          lavatórios e tratamento criada para que o aluno possa fazer seu
          treinamento, atendendo diretamente o público externo, com a supervisão
          de instrutores.
        </p>
      </section>
      <section className="flex flex-col items-center bg-colors-brand-primary text-colors-brand-secondary p-16 shadow-lg rounded-lg mt-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Waleska Zanyor
        </h2>
        <div>
          <Image
            src="/sobre.jpg"
            alt="Waleska Zanyor"
            width={400}
            height={400}
          />
          <p>Sobre</p>
        </div>
      </section>
      <section className="flex flex-col items-center bg-colors-brand-primary text-colors-brand-secondary p-16 shadow-lg rounded-lg mt-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Ações sociais
        </h2>
        <p>
          A Academia Waleska Zanyor também se preocupa com a comunidade. Por
          isso, realizamos ações sociais regularmente. Acreditamos que a beleza
          é para todos e que todos merecem se sentir bem consigo mesmos. Por
          isso, oferecemos cortes de cabelo gratuitos para pessoas em situação
          de rua ou organizações parceiras. Acreditamos que a beleza pode mudar
          vidas e queremos ajudar a mudar a vida de quem mais precisa.
        </p>
        <article className="flex flex-col items-center mt-8 border-t border-gray-300 pt-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Fotos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[64rem] p-2 overflow-y-auto rounded-lg">
            {imagesViewer.map((image, index) => (
              <ImageViewer key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
