'use client';

import About from '@/components/About';
import CarouselComponent from '@/components/Carousel';
import carouselData from '@/components/Carousel/data';

export default function Home() {
  return (
    <main className="pt-20" aria-labelledby="main-title">
      <h2 id="main-title" className="sr-only">
        Pagina principal do site Academia Waleska Zanyor
      </h2>
      <CarouselComponent carouselItems={carouselData} />
      <About />
    </main>
  );
}
