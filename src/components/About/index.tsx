import Link from 'next/link';
import aboutInfos from './data';

export default function About() {
  return (
    <section className="bg-custom-bg bg-cover bg-center py-8 min-h-screen w-full flex items-center justify-center px-8 md:px-8 lg:px-16">
      <div className="h-auto max-w-[1200px] w-full bg-white/80 shadow-xl rounded-lg flex flex-col md:flex-row items-center overflow-hidden">
        <div className="w-full md:w-[50%] h-[300px] md:h-[400px] flex items-center justify-center p-4 md:p-6">
          <img
            src={aboutInfos.image}
            alt={aboutInfos.title}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        <div className="w-full md:w-[50%] h-auto flex flex-col justify-center items-center p-8 md:p-10">
          <header className="text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {aboutInfos.title}
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              {aboutInfos.text.slice(0, 350)}
            </p>
          </header>
          <Link
            href="/sobre"
            className="p-4 bg-colors-brand-tertiary text-colors-brand-primary rounded-md hover:bg-colors-brand-tertiary/90 mt-4"
          >
            {aboutInfos.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
