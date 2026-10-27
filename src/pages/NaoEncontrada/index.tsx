import { useEffect } from 'react';
import { Link } from 'react-router';

export default function NaoEncontrada() {
  useEffect(() => { document.title = 'SoulPass - Página não encontrada'; }, []);

  return (
    <section className="mx-auto max-w-4xl px-8 py-32 text-center">
      <p className="text-2xl text-[#507e7e]">Erro 404</p>
      <h1 className="my-8 text-5xl font-bold text-[#1e4d4d]">Página não encontrada</h1>
      <p className="mb-12 text-2xl">O endereço acessado não existe. Continue pela página inicial.</p>
      <Link to="/" className="inline-block rounded-full bg-[#507e7e] px-10 py-5 text-xl text-white">Voltar ao início</Link>
    </section>
  );
}
