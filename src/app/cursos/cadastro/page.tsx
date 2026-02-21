import InscricaoForm from "@/components/InscricaoForm";
import Ghost from "@/components/Ghost";

export default function Cadastro() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <Ghost />
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase">
          Faça seu Inscrição
        </h1>
        <p className="text-gray-600 mb-12 max-w-lg mx-auto">
          Preencha suas preferências e clique no botão verde para nos enviar
          tudo pronto via WhatsApp. É rápido e prático!
        </p>

        <InscricaoForm />
      </div>
    </main>
  );
}
