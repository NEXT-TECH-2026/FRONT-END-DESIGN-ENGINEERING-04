import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { soulPassApi } from '../../services/soulpass';
import type { Tarifa } from '../../types/soulpass';

interface ResultadoTarifa {
  id: number;
  tarifa: Tarifa | null;
  erro: string | null;
}

export default function DetalheTarifa() {
  const { id } = useParams<{ id: string }>();
  const chave = Number(id);
  const idValido = Number.isSafeInteger(chave) && chave > 0;
  const [resultado, setResultado] = useState<ResultadoTarifa | null>(null);

  useEffect(() => {
    if (!idValido) return;

    let ativo = true;
    soulPassApi.tarifa(chave)
      .then((tarifa) => {
        if (ativo) setResultado({ id: chave, tarifa, erro: null });
      })
      .catch((erro: unknown) => {
        if (!ativo) return;
        setResultado({
          id: chave,
          tarifa: null,
          erro: erro instanceof Error ? erro.message : 'Falha ao carregar tarifa.',
        });
      });

    return () => { ativo = false; };
  }, [chave, idValido]);

  const resultadoAtual = resultado?.id === chave ? resultado : null;
  const carregando = idValido && resultadoAtual === null;
  const erro = idValido ? resultadoAtual?.erro : 'Identificador inválido.';
  const tarifa = resultadoAtual?.tarifa ?? null;

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
