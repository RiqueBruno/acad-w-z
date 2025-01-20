'use client';
import { useState } from 'react';
import { PiHairDryerFill } from 'react-icons/pi';
import cursos from './data';

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
    title: 'Correção da Cor (Avançado)',
    icon: <PiHairDryerFill />,
    link: '/cursos/cadastro',
  },
];

export default function Cursos() {
  const [course, setCourse] = useState<number>(1);
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
            <button
              key={index}
              onClick={() => setCourse(item.id)}
              className="flex items-center justify-center bg-colors-brand-tertiary text-colors-brand-primary p-4 rounded-lg mt-4"
            >
              {item.icon}
              <h3 className="ml-2">{item.title}</h3>
            </button>
          ))}
          {course && (
            <article>
              <h3>{cursos[course - 1].title}</h3>
              <p>{cursos[course - 1].description}</p>
              <p>Carga horária: {cursos[course - 1].workload}</p>
              <p>Duração: {cursos[course - 1].duration}</p>
            </article>
          )}
        </div>
      </section>
    </main>
  );
}
