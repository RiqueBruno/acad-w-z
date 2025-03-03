'use client';

import About from '@/components/About';
import BeModelAd from '@/components/BeModelAd';
import CarouselComponent from '@/components/Carousel';
import carouselData from '@/components/Carousel/data';
import CoursesAd from '@/components/CoursesAd';
import CoursesCarousel from '@/components/CoursesCarousel';
import courses from '@/components/CoursesCarousel/data';
import Ghost from '@/components/Ghost';
import ServiceList from '@/components/ServiceList';
import services from '@/components/ServiceList/data';
import SocialAction from '@/components/SocialAction';
import socialData from '@/components/SocialAction/data';

export default function Home() {
  return (
    <main aria-labelledby="main-title">
      <h2 id="main-title" className="sr-only">
        Pagina principal do site Academia Waleska Zanyor
      </h2>
      <Ghost />
      <CarouselComponent carouselItems={carouselData} />
      <About />
      <ServiceList services={services} />
      <CoursesAd />
      <CoursesCarousel courses={courses} />
      <BeModelAd />
      <SocialAction arr={socialData} />
    </main>
  );
}
