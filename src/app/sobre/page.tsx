import Ghost from '@/components/Ghost';

export default function Sobre() {
  return (
    <main id="main-title">
      <Ghost />
      <h2 id="main-title" className="sr-only">
        Pagina sobre a Academia Waleska Zanyor e suas ações sociais.
      </h2>
      <section>
        <div>
          <Image
            src="/images/academia-waleska-zanyor.jpg"
            alt="Academia Waleska Zanyor"
            width={400}
            height={400}
          />
        </div>
        <h2>Academia Waleska Zanyor</h2>
        <p>texto</p>
      </section>
      <section>
        <h2>Header</h2>
        <p>Header</p>
      </section>
    </main>
  );
}
