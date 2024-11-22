'use client';

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/studants');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
      const data = await response.json();
      console.log('Dados obtidos com sucesso:', data);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={fetchData}>Teste</button>
    </div>
  );
}
