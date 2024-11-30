import Link from 'next/link';
import CarouselComponent, { CarouselItem } from '../Carousel';

type SocialActionProps = {
  arr: CarouselItem[];
};

export default function SocialAction({ arr }: SocialActionProps) {
  return (
    <section className="py-12 bg-colors-brand-primary mt-16">
      <div className="container mx-auto space-y-16 md:px-16 flex flex-col items-center justify-center">
        <header className="w-full space-y-4">
          <h2 className="text-3xl lg:text-4xl text-center font-bold text-gray-800">
            Ações sociais
          </h2>
          <p className="w-full text-center">
            A Academia Waleska Zanyor se preocupa com a comunidade e realiza
            diversas ações sociais. Confira algumas delas:
          </p>
        </header>
        <CarouselComponent
          carouselItems={arr}
          type="Ações sociais feitas pela Academia Waleska Zanyor"
        />
        <Link
          href="/sobre"
          className="text-xl text-center text-colors-brand-primary bg-colors-brand-tertiary rounded-md p-4 mt-4 hover:opacity-90"
        >
          Saiba mais sobre nossas ações sociais
        </Link>
      </div>
    </section>
  );
}
