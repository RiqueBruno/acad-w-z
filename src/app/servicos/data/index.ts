export interface Servico {
  id: number;
  nome: string;
  descricao: string;
  categoria: "Cabelo" | "Tratamento" | "Coloração";
}

export const servicosData: Servico[] = [
  {
    id: 1,
    nome: "Corte Feminino/Masculino",
    descricao:
      "Cortes modernos e clássicos realizados por alunos sob supervisão.",
    categoria: "Cabelo",
  },
  {
    id: 2,
    nome: "Escova e Modelagem",
    descricao: "Lavagem técnica com finalização de escova lisa ou modelada.",
    categoria: "Cabelo",
  },
  {
    id: 3,
    nome: "Hidratação Profunda",
    descricao: "Tratamento para reposição de nutrientes e brilho intenso.",
    categoria: "Tratamento",
  },
  {
    id: 4,
    nome: "Coloração e Retoque",
    descricao: "Aplicação de cor global ou retoque de raiz.",
    categoria: "Coloração",
  },
  {
    id: 5,
    nome: "Mechas / Luzes",
    descricao: "Técnicas de clareamento variadas para iluminar o visual.",
    categoria: "Coloração",
  },
];
