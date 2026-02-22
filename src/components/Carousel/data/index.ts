import { CarouselItem } from "..";

const carouselData: CarouselItem[] = [
  {
    image: "/cabeleireiro.png",
    title: "Curso de Cabeleireiro",
    subtext: "Aprenda a cortar cabelos e a fazer penteados incríveis.",
    buttonText: "Inscreva-se",
    layout: 3,
    link: "cursos",
  },
  {
    image: "/acaoSocial.jpg",
    title: "Ação social - Obra do Berço",
    subtext:
      "Ação social realizada na instituição Obra do Berço, localizada em Rio de Janeiro.",
    buttonText: "Leia mais",
    layout: 1,
    link: "sobre#acaosocial",
  },
  {
    image: "/images/turmas/07.jpg",
    title: "Seja Modelo",
    subtext: "Torne-se um modelo e torne seus desejos realidade.",
    buttonText: "Ser Modelo",
    layout: 2,
    link: "servicos",
  },
];

export default carouselData;
