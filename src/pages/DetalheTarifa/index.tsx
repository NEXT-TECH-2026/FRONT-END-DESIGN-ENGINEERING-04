import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { soulPassApi } from '../../services/soulpass';
import type { Tarifa } from '../../types/soulpass';

export default function DetalheTarifa() {
  const { id } = useParams<{ id: string }>();
  const [tarifa, setTarifa] = useState<Tarifa | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(true);
  useEffect(() => {
    let ativo = true;
    const chave = Number(id);
    if (!Number.isSafeInteger(chave) || chave <= 0) { setErro('Identificador inválido.'); setCarregando(false); return; }
    soulPassApi.tarifa(chave).then((t) => { if (ativo) setTarifa(t); })
      .catch((e: unknown) => { if (ativo) setErro(e instanceof Error ? e.message : 'Falha ao carregar tarifa.'); })
      .finally(() => { if (ativo) setCarregando(false); });
    return () => { ativo = false; };
  }, [id]);
  return <main className="mx-auto my-16 w-[90%] max-w-3xl rounded-3xl bg-white p-8 shadow-sm text-teal-900">
    <h1 className="text-3xl font-bold">Detalhes da tarifa</h1>
    {carregando ? <p className="mt-5" role="status">Carregando...</p> : erro ? <p className="mt-5 text-red-700" role="alert">{erro}</p> : tarifa ? <div className="mt-5 space-y-3 text-lg">
      <p><strong>Empresa:</strong> {tarifa.empresa}</p><p><strong>Modalidade:</strong> {tarifa.modalidade}</p>
      <p><strong>Tarifa de referência:</strong> R$ {tarifa.valorTarifa.toFixed(2).replace('.', ',')}</p>
      <p><strong>Origem da informação:</strong> {tarifa.origemInfo}</p>
      <p><strong>Atualização:</strong> {new Date(tarifa.dtAtualizacao).toLocaleDateString('pt-BR')}</p>
    </div> : <p className="mt-5">Nenhuma tarifa encontrada.</p>}
    <Link to="/solucao-simulacao" className="mt-8 inline-block rounded-xl bg-teal-800 px-6 py-3 font-semibold text-white">Voltar à Solução</Link>
  </main>;
}
