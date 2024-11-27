'use client';
import { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import waves from '../../../public/waves.png';

export type CarouselItem = {
  image: string;
  title: string;
  subtext: string;
  buttonText: string;
  layout: 1 | 2 | 3;
  link: string;
};

type CarouselComponentProps = {
  carouselItems: CarouselItem[];
};

const layoutOne = (item: CarouselItem) => (
  <article>
    <div className="relative w-full h-[600px]">
      <Image src={item.image} alt={item.title} fill className="object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-colors-brand-primary/40 to-transparent">
      <div className="absolute bottom-0 p-8 text-gray-900">
        <header>
          <h2 className="text-4xl font-bold mb-4 bg-white/50 pl-2 rounded-sm">
            {item.title}
          </h2>
        </header>
        <p className="text-xl mb-6 bg-white/50 px-2 rounded-sm">
          {item.subtext}
        </p>
        <button className="px-6 py-3 bg-colors-brand-tertiary text-colors-brand-primary rounded-full hover:bg-opacity-90 transition">
          {item.buttonText}
        </button>
      </div>
    </div>
  </article>
);

const layoutTwo = (item: CarouselItem) => (
  <article>
    <div className="relative w-[64%] h-[600px]">
      <Image src={item.image} alt={item.title} fill className="object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent h-full overflow-hidden">
      <div className="absolute top-0 right-0 p-8 text-gray-700 h-full space-y-24 flex flex-col justify-center items-center w-[40%]">
        <header>
          <h2 className="text-4xl font-bold mb-4 z-20">{item.title}</h2>
        </header>
        <p className="text-xl mb-6 w-[70%] z-20">{item.subtext}</p>
        <button className="px-6 py-3 bg-colors-brand-tertiary text-colors-brand-primary rounded-full hover:bg-opacity-90 transition z-20">
          {item.buttonText}
        </button>
        <div className="absolute h-[50rem] w-[80rem] right-[-120%] z-0">
          <Image src={waves} alt="Waves" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  </article>
);

const layoutThree = (item: CarouselItem) => (
  <article>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent h-full overflow-hidden">
      <div className="absolute top-0 left-0 p-8 text-gray-700 h-full space-y-24 flex flex-col justify-center items-center w-[40%]">
        <header>
          <h2 className="text-4xl font-bold mb-4 z-20 w-[90%] text-center">
            {item.title}
          </h2>
        </header>
        <p className="text-xl mb-6 w-[60%] text-center z-20">{item.subtext}</p>
        <button className="px-6 py-3 bg-colors-brand-tertiary text-colors-brand-primary rounded-full hover:bg-opacity-90 transition z-20">
          {item.buttonText}
        </button>
        <div className="absolute h-[50rem] w-[80rem] left-[-100%] z-0">
          <Image src={waves} alt="Waves" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
    <div className="relative w-[64%] h-[600px] ml-auto">
      <Image src={item.image} alt={item.title} fill className="object-cover" />
    </div>
  </article>
);

export default function CarouselComponent({
  carouselItems,
}: CarouselComponentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoplayPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplayPaused]);

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  return (
    <section
      className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-2xl"
      ref={carouselRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setAutoplayPaused(true)}
      onMouseLeave={() => setAutoplayPaused(false)}
      role="region"
      aria-label="Destaques: cursos, ações sociais e promoções"
      aria-labelledby="carousel-title"
      aria-live="polite"
    >
      <h2 id="carousel-title" className="sr-only">
        Destaques: cursos, ações sociais e promoções
      </h2>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        aria-label="Destaques: cursos, ações sociais e promoções"
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="relative w-full flex-shrink-0"
            aria-hidden={currentIndex !== index}
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} de ${carouselItems.length}: ${
              item.title
            }`}
          >
            {item.layout === 1
              ? layoutOne(item)
              : item.layout === 2
              ? layoutTwo(item)
              : layoutThree(item)}
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-colors-brand-tertiary/90 hover:bg-colors-brand-tertiary/80 z-30"
        aria-label="slide anterior"
      >
        <FiChevronLeft className="w-6 h-6 text-colors-brand-primary" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-colors-brand-tertiary/90 hover:bg-colors-brand-tertiary/80 z-30"
        aria-label="Próximo slide"
      >
        <FiChevronRight className="w-6 h-6 text-colors-brand-primary" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index
                ? 'bg-colors-brand-tertiary scale-125 border-2 border-x-colors-brand-primary'
                : 'bg-colors-brand-tertiary/50 hover:bg-colors-brand-tertiary/75 hover:border-2 border-x-colors-brand-primary'
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
            aria-current={currentIndex === index ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
}