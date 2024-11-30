import CarouselComponent, { CarouselItem } from '../Carousel';

type SocialActionProps = {
  arr: CarouselItem[];
};

export default function SocialAction({ arr }: SocialActionProps) {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl text-center font-bold text-gray-800">
          Ações sociais
        </h2>
        <CarouselComponent carouselItems={arr} />
      </div>
    </section>
  );
}
