export default function CoursesAd() {
  return (
    <section className="bg-60 text-30 p-6 md:p-10 flex flex-col lg:flex-row items-center lg:justify-between rounded-lg shadow-lg max-w-5xl mx-auto text-gray-800 pt-24 mt-8">
      <div className="lg:w-1/2 mb-6 lg:mb-0 w-[70%] flex flex-col items-center lg:items-start justify-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center lg:text-start">
          Explore Nossos Cursos Exclusivos
        </h2>
        <p className="text-base md:text-lg mb-6 text-center lg:text-start">
          Transforme sua paixão em uma carreira de sucesso. Nossos cursos de
          cabeleireiro, corte, coloração, e muito mais, são perfeitos para quem
          deseja aprender e se destacar na área de beleza!
        </p>
        <a
          href="/cursos"
          className="inline-block bg-10 text-60 px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition bg-colors-brand-tertiary text-colors-brand-primary self-center lg:self-start"
        >
          Saiba Mais
        </a>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center">
        <img
          src="/studentCourses.jpg"
          alt="Imagem ilustrativa dos cursos"
          className="rounded-lg shadow-md w-full max-w-sm lg:max-w-md"
        />
      </div>
    </section>
  );
}
