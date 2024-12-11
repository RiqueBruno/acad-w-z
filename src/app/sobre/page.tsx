import Ghost from '@/components/Ghost';
import Image from 'next/image';

export default function Sobre() {
  return (
    <main id="main-title">
      <Ghost />
      <h2 id="main-title" className="sr-only">
        Pagina sobre a Academia Waleska Zanyor e suas ações sociais.
      </h2>
      <section>
        <div>
          <Image
            src="/images/academia-waleska-zanyor.jpg"
            alt="Academia Waleska Zanyor"
            width={400}
            height={400}
          />
        </div>
        <h2>Academia Waleska Zanyor</h2>
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
      <section>
        <h2>Waleska Zanyor</h2>
        <div>
          <Image
            src="/images/waleska-zanyor.jpg"
            alt="Waleska Zanyor"
            width={400}
            height={400}
          />
          <p>Sobre</p>
        </div>
      </section>
      <section>
        <h2>Ações sociais</h2>
        <p>
          A Academia Waleska Zanyor também se preocupa com a comunidade. Por
          isso, realizamos ações sociais regularmente. Acreditamos que a beleza
          é para todos e que todos merecem se sentir bem consigo mesmos. Por
          isso, oferecemos cortes de cabelo gratuitos para pessoas em situação
          de rua ou organizações parceiras. Acreditamos que a beleza pode mudar
          vidas e queremos ajudar a mudar a vida de quem mais precisa.
        </p>
      </section>
    </main>
  );
}
