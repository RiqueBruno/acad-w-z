export type Course = {
  id: number;
  name: string;
  image: string;
};

const courses: Course[] = [
  { id: 1, name: 'Curso de Cabeleireiro', image: '/cabeleireiro.jpg' },
  { id: 2, name: 'Curso de Coloração', image: '/coloracao.jpg' },
  { id: 3, name: 'Curso de Corte', image: '/corte.jpg' },
  { id: 4, name: 'Curso de Escova', image: '/escova.jpg' },
  { id: 5, name: 'Curso de Corte Avançado', image: '/corte.jpg' },
  { id: 6, name: 'Curso de Express de Escova', image: '/escova.jpg' },
];

export default courses;
