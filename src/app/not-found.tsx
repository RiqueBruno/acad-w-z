import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 pt-32 pb-16 text-center bg-gray-50">
      <div className="relative w-full max-w-lg mb-12 animate-fade-in">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[12rem] md:text-[18rem] font-black text-colors-brand-primary/5 leading-none">
            404
          </span>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 relative mb-6">
            <Image
              src="/logo.webp"
              alt="Academia Waleska Zanyor"
              fill
              className="object-contain grayscale opacity-60"
            />
          </div>
          <div className="h-1.5 w-24 bg-colors-brand-tertiary rounded-full mb-2"></div>
        </div>
      </div>

      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Página Perdida no Salão...
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
          Infelizmente, não encontramos o caminho que você tentou acessar. Que
          tal voltar para o início e descobrir novos cursos e serviços?
        </p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Link
          href="/"
          className="w-full sm:w-auto bg-colors-brand-primary text-colors-brand-secondary px-10 py-4 rounded-full font-bold text-lg hover:bg-colors-brand-primary/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-colors-brand-primary/20"
        >
          VOLTAR PARA A HOME
        </Link>

        <Link
          href="/servicos"
          className="w-full sm:w-auto border-2 border-colors-brand-primary text-colors-brand-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-colors-brand-primary hover:text-white transition-all"
        >
          VER NOSSOS SERVIÇOS
        </Link>
      </div>

      <p className="mt-16 text-sm text-gray-400 font-medium uppercase tracking-widest">
        Academia Waleska Zanyor • Estilo & Formação
      </p>
    </main>
  );
}
