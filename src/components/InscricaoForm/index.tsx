"use client";

import { useState } from "react";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

export default function InscricaoForm() {
  const [name, setName] = useState("");
  const [selectedCursos, setSelectedCursos] = useState<string[]>([]);
  const [dias, setDias] = useState<string[]>([]);
  const [isSent, setIsSent] = useState(false);

  const cursosDisponiveis = [
    "Cabeleireiro(Completo)",
    "Colorimetria & Mechas",
    "Corte",
    "Escova",
    "Mechas Avançado",
    "Correção da Cor",
    "Corte Avançado",
    "Penteados",
  ];
  const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sábado"];

  const handleCheckbox = (item: string, state: string[], setState: any) => {
    state.includes(item)
      ? setState(state.filter((i) => i !== item))
      : setState([...state, item]);
  };

  const handleSend = (e: React.MouseEvent) => {
    setIsSent(true);
    setTimeout(() => {
      window.open(generateLink(), "_blank");
    }, 500);
  };

  const generateLink = () => {
    const phoneNumber = "5521997531195";
    const mensagem = `Olá, meu nome é *${name}*!\nTenho interesse nos cursos: _${selectedCursos.join(", ")}_\nMeus dias de preferência: _${dias.join(", ")}_`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
  };

  if (isSent) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center animate-in fade-in zoom-in duration-500">
        <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">
          Inscrição Iniciada!
        </h2>
        <p className="text-gray-600 mt-2">
          Você foi redirecionado para o WhatsApp da Academia.
        </p>
        <button
          onClick={() => setIsSent(false)}
          className="mt-6 text-colors-brand-primary underline font-medium"
        >
          Fazer outra inscrição
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-2xl space-y-6 border border-gray-100">
      <div className="space-y-2 text-left">
        <label className="block text-sm font-bold text-gray-700 ml-1">
          Seu Nome Completo
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome..."
          className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-colors-brand-tertiary outline-none transition-all"
        />
      </div>

      <div className="text-left">
        <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">
          Cursos de Interesse
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {cursosDisponiveis.map((curso) => (
            <button
              key={curso}
              type="button"
              onClick={() =>
                handleCheckbox(curso, selectedCursos, setSelectedCursos)
              }
              className={`p-4 rounded-xl text-sm font-bold border-2 transition-all duration-300 ${
                selectedCursos.includes(curso)
                  ? "border-colors-brand-tertiary bg-colors-brand-primary text-gray-800 shadow-md scale-[1.02]"
                  : "border-gray-100 bg-white text-gray-500 hover:border-colors-brand-tertiary"
              }`}
            >
              {curso}
            </button>
          ))}
        </div>
      </div>

      <div className="text-left">
        <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">
          Melhores dias para você
        </label>
        <div className="flex flex-wrap gap-2">
          {diasSemana.map((dia) => (
            <button
              key={dia}
              type="button"
              onClick={() => handleCheckbox(dia, dias, setDias)}
              className={`px-4 py-2 rounded-full text-xs font-black border-2 transition-all ${
                dias.includes(dia)
                  ? "border-gray-500 bg-colors-brand-tertiary text-white"
                  : "border-gray-100 bg-gray-50 text-gray-400"
              }`}
            >
              {dia}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleSend}
        disabled={!name || selectedCursos.length === 0}
        className={`flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-black text-xl shadow-xl transition-all ${
          name && selectedCursos.length > 0
            ? "bg-[#25D366] text-white hover:scale-[1.03] active:scale-95"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        <FaWhatsapp className="text-3xl" />
        ENVIAR PARA O WHATSAPP
      </button>
    </div>
  );
}
