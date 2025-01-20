'use client';
import { useState } from 'react';
import { PiHairDryerFill } from 'react-icons/pi';

const dataButtons = [
  {
    id: 1,
    title: 'Cabeleireiro',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
  {
    id: 2,
    title: 'Cabeleireiro',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
  {
    id: 3,
    title: 'Cabeleireiro',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
  {
    id: 4,
    title: 'Cabeleireiro',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
  {
    id: 5,
    title: 'Cabeleireiro',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
  {
    id: 6,
    title: 'Cabeleireiro',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
  {
    id: 7,
    title: 'Cabeleireiro',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
];

export default function Cursos() {
  const [cursos, setCursos] = useState<string>('');
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
        <h2 className="text-4xl">Cursos</h2>
        <div>
          {dataButtons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center justify-center bg-colors-brand-tertiary text-colors-brand-primary p-4 rounded-lg mt-4"
            >
              {item.icon}
              <h3 className="ml-2">{item.title}</h3>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
