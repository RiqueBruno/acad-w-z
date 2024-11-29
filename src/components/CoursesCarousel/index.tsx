'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type Course = {
  id: number;
  name: string;
  image: string;
};

type CoursesCarouselProps = {
  courses: Course[];
};

export default function CoursesCarousel({ courses }: CoursesCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-60 text-30 py-12 px-6 md:px-12 lg:px-20 text-gray-800 mt-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Nossos Cursos
      </h2>
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide flex-nowrap py-4 md:overflow-hidden lg:overflow-hidden"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              aria-label={course.name}
              className="snap-center shrink-0 bg-30 text-60 rounded-lg shadow-lg p-6 flex flex-col items-center w-64 md:w-72 lg:w-80 hover:shadow-2xl transition-shadow transform hover:scale-105 hover:bg-gradient-to-t from-colors-brand-tertiary/60 to-transparent"
            >
              <Image
                src={course.image}
                alt={course.name}
                width={200}
                height={200}
                className="rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-center mb-4">
                {course.name}
              </h3>
              <a
                href={`/cursos/${course.id}`}
                className="inline-block bg-10 text-60 px-6 py-2 rounded-md text-base font-medium hover:bg-opacity-90 transition bg-colors-brand-tertiary text-colors-brand-primary"
              >
                Inscrever-se
              </a>
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
      </div>
    </section>
  );
}
