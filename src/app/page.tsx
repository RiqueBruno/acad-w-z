'use client';

import CarouselComponent from '@/components/Carousel';
import carouselData from '@/components/Carousel/data';

export default function Home() {
  return (
    <div className="pt-20">
      <CarouselComponent carouselItems={carouselData} />
    </div>
  );
}
