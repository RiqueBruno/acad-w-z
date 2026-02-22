export type Course = {
  id: number;
  name: string;
  image: string;
};

const courses: Course[] = [
  { id: 1, name: "Curso de Cabeleireiro", image: "/cabeleireiro.png" },
  { id: 2, name: "Curso de Coloração", image: "/coloracao.jpg" },
  { id: 3, name: "Curso de Corte", image: "/corte.jpg" },
  { id: 4, name: "Curso de Escova", image: "/images/courses/escova.jpg" },
  {
    id: 5,
    name: "Curso de Corte Avançado",
    image: "/images/courses/corte.jpg",
  },
  {
    id: 6,
    name: "Curso de Correção da Cor",
    image: "/images/courses/correcaodacor.jpg",
  },
];

export default courses;
