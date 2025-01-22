import { PiHairDryerFill } from 'react-icons/pi';
import cursos from './data';
import CoursesPanel from '@/components/CoursesPanel';

const dataButtons = [
  {
    id: 1,
    title: 'Cabeleireiro',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
  {
    id: 2,
    title: 'Colorimetria',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
  {
    id: 3,
    title: 'Corte',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
  {
    id: 4,
    title: 'Escova',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
];

const dataButtons2 = [
  {
    id: 5,
    title: 'Mechas (Avançado)',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
  {
    id: 6,
    title: 'Corte (Avançado)',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
  {
    id: 7,
    title: 'Correção da Cor',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
];

export default function Cursos() {
  return (
    <main className="px-8 md:px-16 lg:px-32 py-8">
      <div className="w-full h-96 bg-lime-700">a</div>
      <section className="flex flex-col items-center mt-20 bg-colors-brand-primary text-colors-brand-secondary p-8 md:p-16 shadow-lg rounded-lg text-center">
        <h2 className="text-4xl">Sobre nossos Cursos</h2>
        <p>
          A Academia Waleska Zanyor oferece cursos de formação única no mercado
          de coiffure, preparando para o mercado profissionais completos,
          treinados nas diversas funções dentro de um salão: Escova, Coloração,
          Corte, Tratamento, Mechas, dentre outros. Contamos com uma estrutura
          de ponta! com salas Elegantes e funcionais com bancadas, lavatórios e
          tratamento criada para que o aluno possa fazer seu treinamento,
          atendendo diretamente o público externo, com a supervisão de
          instrutores.
        </p>
      </section>
      <section className="flex flex-col items-center mt-20 bg-colors-brand-primary text-colors-brand-secondary p-8 md:p-16 shadow-lg rounded-lg text-center">
        <article className="mb-32 space-y-16">
          <h2 className="text-4xl">Cursos</h2>
          <CoursesPanel buttons={dataButtons} data={cursos} />
        </article>
        <article className="mb-16 space-y-16">
          <h2 className="text-4xl">Cursos Especificos (Avançado)</h2>
          <CoursesPanel buttons={dataButtons2} data={cursos} />
        </article>
      </section>
    </main>
  );
}
