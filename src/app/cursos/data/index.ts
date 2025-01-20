interface Curso {
  id: number;
  title: string;
  description: string;
  workload: number;
  duration: string;
}
const cursos: Curso[] = [
  {
    id: 1,
    title: 'Cabeleireiro',
    description:
      'Nosso curso completo, onde o aluno faz os módulos: Escova, Colorimetria e Corte. Curso para quem quer ser um profissional completo e atual e pagando menos.',
    workload: 192,
    duration: '12 a 16 meses',
  },
  {
    id: 2,
    title: 'Colorimetria',
    description:
      'O curso permite com que o aluno seja capaz de entender o desejo da(o) cliente e suas expectativas, sendo capaz de personalizar a cor, cobrir os fios brancos, clarear, escurecer e realizar mechas.',
    workload: 72,
    duration: '6 meses',
  },
  {
    id: 3,
    title: 'Corte',
    description:
      'O curso permite com que o aluno aprenda divisões, finalizações, ângulos, linhas e colocará em prática todo o conhecimento aprendendo 10 técnicas.',
    workload: 72,
    duration: '6 meses',
  },
  {
    id: 4,
    title: 'Escova',
    description:
      'Neste curso, o aluno aprenderá diagnosticar a necessidade do fio, técnicas de venda, como realizar um bom atendimento, manuseio do secador de cabelo, tipos de formas, entre outros assuntos.',
    workload: 48,
    duration: '4 meses',
  },
  //curos de aperfeiçoamento
  {
    id: 5,
    title: 'Mechas (Avançado)',
    description:
      'O curso é indicado para o profissional que deseja aperfeiçoa-se. Neste curso, o aluno irá aprender como aplicar um descolorante bem próximo à raiz sem manchar, vários tipos de divisão de mechas, hair contour, slices, tonalização, sombreamento e muito mais.',
    workload: 36,
    duration: '3 meses',
  },
  {
    id: 6,
    title: 'Corte (Avançado)',
    description: 'Curso para quem deseja aperfeiçoar-se em cortes.',
    workload: 36,
    duration: '3 meses',
  },
  {
    id: 7,
    title: 'Correção da Cor (Avançado)',
    description: 'Curso para quem deseja aperfeiçoar-se em correção de cor.',
    workload: 36,
    duration: '3 meses',
  },
];

export default cursos;
