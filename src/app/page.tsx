import About from "@/components/About";
import BeModelAd from "@/components/BeModelAd";
import CarouselComponent from "@/components/Carousel";
import carouselData from "@/components/Carousel/data";
import CoursesAd from "@/components/CoursesAd";
import CoursesCarousel from "@/components/CoursesCarousel";
import courses from "@/components/CoursesCarousel/data";
import Ghost from "@/components/Ghost";
import ServiceList from "@/components/ServiceList";
import services from "@/components/ServiceList/data";
import SocialAction from "@/components/SocialAction";
import socialData from "@/components/SocialAction/data";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">
        Academia Waleska Zanyor - Formação Profissional para Cabeleireiros
      </h1>

      <Ghost />
      <CarouselComponent carouselItems={carouselData} />

      <section id="sobre">
        <About />
      </section>

      <section id="servicos">
        <ServiceList services={services} />
      </section>

      <CoursesAd />

      <section id="cursos">
        <CoursesCarousel courses={courses} />
      </section>

      <BeModelAd />

      <section id="acoes-sociais">
        <SocialAction arr={socialData} />
      </section>
    </main>
  );
}
