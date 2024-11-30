import Link from 'next/link';
import CarouselComponent, { CarouselItem } from '../Carousel';

type SocialActionProps = {
  arr: CarouselItem[];
};

export default function SocialAction({ arr }: SocialActionProps) {
  return (
    <section className="py-12 bg-colors-brand-primary mt-16">
      <div className="container mx-auto space-y-16 px-16 flex flex-col items-center justify-center">
        <h2 className="text-3xl lg:text-4xl text-center font-bold text-gray-800">
          Ações sociais
        </h2>
        <CarouselComponent carouselItems={arr} type="social" />
        <Link
          href="/sobre"
          className="text-xl text-center text-colors-brand-primary bg-colors-brand-tertiary rounded-md p-4 mt-4"
        >
          Saiba mais sobre nossas ações sociais
        </Link>
      </div>
    </section>
  );
}
