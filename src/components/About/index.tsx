export default function About() {
  return (
    <section className="bg-custom-bg bg-cover bg-center h-screen flex items-center justify-center">
      <div className="h-[70%] w-[70%] bg-colors-brand-primary/80 rounded-md flex items-center justify-center">
        <div className="w-[50%] h-full flex items-center justify-center">
          <div className="w-80 h-80">
            <img
              src="/BG.png"
              alt="Academia Waleska Zanyor"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
        <header className="w-[50%] h-full flex justify-center items-center flex-col">
          <h2 className="text-4xl font-bold mb-4 w-[70%]">Sobre a academia</h2>
          <p className="text-xl mb-6 w-[70%]">
            A Academia Waleska Zanyor é um espaço voltado para a prática de
            atividades físicas e bem-estar. Com uma equipe de profissionais
            qualificados, oferecemos uma variedade de modalidades para atender a
            todos os públicos. Venha nos conhecer e faça uma aula experimental!
          </p>
        </header>
      </div>
    </section>
  );
}
