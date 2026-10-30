import { useCallback, useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { ApiError } from '../../services/api';
import { soulPassApi } from '../../services/soulpass';
import type { Carteira, HistoricoSoulPass, Tarifa, UsuarioResumo } from '../../types/soulpass';
import { PONTOS_POR_VOUCHER, TAXA_CONVERSAO, validarPontosSimulacao } from '../../utils/simulacao';

function reais(valor: number) {
  return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function mensagemDoErro(erro: unknown): string {
  if (erro instanceof ApiError || erro instanceof Error) return erro.message;
  return 'Não foi possível acessar o serviço. Tente novamente.';
}
function dataBR(data: string) {
  return new Date(data).toLocaleDateString('pt-BR');
}

export default function SolucaoSimulacao() {
  const [usuarios, setUsuarios] = useState<UsuarioResumo[]>([]);
  const [usuarioId, setUsuarioId] = useState<number>(1); // banco do Challenge inclui dados fictícios de demonstração
  const [tarifas, setTarifas] = useState<Tarifa[]>([]);
  const [tarifaId, setTarifaId] = useState<number>(0);
  const [carteira, setCarteira] = useState<Carteira | null>(null);
  const [historico, setHistorico] = useState<HistoricoSoulPass | null>(null);
  const [pontos, setPontos] = useState<number>(PONTOS_POR_VOUCHER);
  const [carregando, setCarregando] = useState(true);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState<string | null>(null);

  useEffect(() => { document.title = 'SoulPass - Solução conectada'; }, []);

  useEffect(() => {
    let ativo = true;
    soulPassApi.usuarios().then((lista) => {
      if (!ativo) return;
      setUsuarios(lista);
      if (lista.length > 0 && !lista.some((u) => u.idUsuario === usuarioId)) setUsuarioId(lista[0].idUsuario);
    }).catch((e: unknown) => { if (ativo) setErro(mensagemDoErro(e)); });
    soulPassApi.tarifas().then((lista) => {
      if (!ativo) return;
      setTarifas(lista);
      if (lista.length) setTarifaId(lista[0].idTarifa);
    }).catch((e: unknown) => { if (ativo) setErro(mensagemDoErro(e)); });
    return () => { ativo = false; };
    // O carregamento inicial acontece apenas uma vez; IDs subsequentes são selecionados pelo usuário.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const carregarUsuario = useCallback(async (id: number) => {
    setCarregando(true);
    setErro(null);
    try {
      const [saldo, movimentos] = await Promise.all([soulPassApi.carteira(id), soulPassApi.historico(id)]);
      setCarteira(saldo); setHistorico(movimentos);
    } catch (e) {
      setCarteira(null); setHistorico(null); setErro(mensagemDoErro(e));
    } finally { setCarregando(false); }
  }, []);

  useEffect(() => { void carregarUsuario(usuarioId); }, [usuarioId, carregarUsuario]);

  const tarifa = tarifas.find((item) => item.idTarifa === tarifaId) ?? null;
  const limiteTarifa = tarifa ? Math.round(tarifa.valorTarifa * 100) : 0;
  const limiteEfetivo = Math.min(carteira?.saldoPontos ?? 0, limiteTarifa);
  const valorRecebido = pontos * TAXA_CONVERSAO;
  const erroValidacao = validarPontosSimulacao(pontos, carteira?.saldoPontos ?? 0, limiteTarifa);

  async function gerarVoucher(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setSucesso(null); setErro(null);
    if (!tarifa || !carteira) { setErro('Escolha uma tarifa e carregue uma carteira.'); return; }
    if (erroValidacao) { setErro(erroValidacao); return; }
    setEnviando(true);
    try {
      const resultado = await soulPassApi.converter(usuarioId, tarifa.idTarifa, pontos);
      setSucesso(`Voucher ${resultado.voucher.codigoVoucher} gerado: R$ ${reais(resultado.conversao.vlBeneficio)} de benefício; restante da tarifa R$ ${reais(resultado.conversao.vlRestante)}.`);
      setPontos(PONTOS_POR_VOUCHER);
      await carregarUsuario(usuarioId); // consulta novamente o saldo persistido e o histórico real
    } catch (e) { setErro(mensagemDoErro(e)); }
    finally { setEnviando(false); }
  }

  return (
    <main className="bg-[#f3f4f4] pb-24 text-[#294848]">
      <section className="mx-auto mt-10 w-[90%] max-w-6xl rounded-3xl border border-teal-200 bg-white p-6 shadow-sm md:p-10">
        <h1 className="text-3xl font-bold md:text-4xl">Solução SoulPass — conectada ao Java</h1>
        <p className="mt-3 text-base text-slate-600 md:text-lg">Esta página consulta e grava dados no Oracle pela API Spring Boot. A conta do site continua demonstrativa; para a apresentação, selecione abaixo um usuário fictício da base acadêmica.</p>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="usuario" className="mb-2 block text-lg font-semibold">Usuário do banco de demonstração</label>
            <select id="usuario" value={usuarioId} onChange={(e) => { setUsuarioId(Number(e.target.value)); setSucesso(null); }} className="w-full rounded-xl border border-teal-400 bg-white p-3 text-lg">
              {usuarios.length === 0 && <option value={1}>Usuários indisponíveis</option>}
              {usuarios.map((u) => <option key={u.idUsuario} value={u.idUsuario}>{u.nome} (ID {u.idUsuario})</option>)}
            </select>
          </div>
          <div className="rounded-2xl bg-teal-50 p-5">
            <p className="text-lg text-teal-800">Saldo da carteira</p>
            {carregando ? <p role="status">Carregando saldo...</p> : <strong className="text-4xl">{carteira?.saldoPontos.toLocaleString('pt-BR') ?? '—'} pts</strong>}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid w-[90%] max-w-6xl gap-8 md:grid-cols-2">
        <form onSubmit={(e) => void gerarVoucher(e)} className="rounded-3xl bg-[#e3e9e7] p-6 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold">Gerar voucher</h2>
          <p className="mt-2 text-base text-slate-700">Escolha a tarifa e converta a partir de 100 pontos (100 pts = R$ 1,00).</p>
          <label htmlFor="tarifa" className="mt-8 mb-2 block text-lg font-semibold">Tarifa de transporte</label>
          <select id="tarifa" value={tarifaId} onChange={(e) => { setTarifaId(Number(e.target.value)); setPontos(PONTOS_POR_VOUCHER); }} className="w-full rounded-xl border border-teal-400 bg-white p-3 text-lg">
            {tarifas.length === 0 && <option value={0}>Nenhuma tarifa disponível</option>}
            {tarifas.map((t) => <option key={t.idTarifa} value={t.idTarifa}>{t.empresa} — {t.modalidade} (R$ {reais(t.valorTarifa)})</option>)}
          </select>
          {tarifa && <p className="mt-2 text-sm"><Link to={`/solucao-simulacao/tarifas/${tarifa.idTarifa}`} className="font-semibold text-teal-800 underline">Ver detalhes desta tarifa</Link></p>}
          <label htmlFor="pontos" className="mt-7 mb-2 block text-lg font-semibold">Quantidade de pontos</label>
          <input id="pontos" type="number" min={100} max={limiteEfetivo} step={1} value={pontos} onChange={(e) => setPontos(Number(e.target.value))} aria-invalid={!!erroValidacao} className="w-full rounded-xl border border-teal-400 bg-white p-3 text-lg" />
          <p className="mt-2 text-sm text-slate-600">Máximo para esta conversão: {limiteEfetivo} pontos. Não ultrapassa o saldo nem o valor da passagem.</p>
          {erroValidacao && tarifa && carteira && <p className="mt-2 text-sm text-amber-800">{erroValidacao}</p>}
          <div className="mt-6 rounded-xl bg-white p-5 text-lg">Benefício estimado: <strong>R$ {reais(valorRecebido)}</strong><p className="mt-1 text-sm text-slate-600">Restante da passagem: R$ {reais(Math.max(0,(tarifa?.valorTarifa ?? 0)-valorRecebido))}</p></div>
          {erro && <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-red-800">{erro}</p>}
          {sucesso && <p role="status" className="mt-5 rounded-xl bg-green-50 p-4 text-green-800">{sucesso}</p>}
          <button type="submit" disabled={enviando || carregando || !tarifa || !carteira || !!erroValidacao} className="mt-6 w-full rounded-xl bg-teal-800 p-4 text-lg font-semibold text-white hover:bg-teal-900 disabled:cursor-not-allowed disabled:opacity-50">{enviando ? 'Gravando no Oracle...' : 'Confirmar conversão e gerar voucher'}</button>
        </form>
        <div className="rounded-3xl bg-white p-6 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold">Histórico no banco</h2>
          {carregando ? <p className="mt-6" role="status">Carregando histórico...</p> : !historico || historico.conversoes.length === 0 ? <p className="mt-6 text-slate-600">Nenhuma conversão encontrada para este usuário.</p> : (
            <ul className="mt-6 space-y-4">
              {historico.conversoes.map((mov) => {
                const voucher = historico.vouchers.find(v => v.idConversao === mov.idConversao);
                return <li key={mov.idConversao} className="border-b border-slate-200 pb-4 text-base">
                  <p>{dataBR(mov.dtConversao)} — <strong>{mov.pontosUtilizados} pontos</strong> — R$ {reais(mov.vlBeneficio)}</p>
                  <p className="mt-1 text-sm text-slate-600">Tarifa: R$ {reais(mov.vlTarifaRef)} | restante: R$ {reais(mov.vlRestante)}</p>
                  {voucher && <p className="mt-1 text-sm">Voucher <strong>{voucher.codigoVoucher}</strong> — {voucher.statusVoucher}</p>}
                </li>;
              })}
            </ul>
          )}
        </div>
      </section>
      <div className="mx-auto mt-8 w-[90%] max-w-6xl rounded-2xl bg-white p-6 text-sm text-slate-600">Observação: a integração usa registros de demonstração. O SoulPass não emite bilhetes oficiais nem integra operadoras de transporte nesta etapa.</div>
    </main>
  );
}
