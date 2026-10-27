import { useState, useEffect } from "react"
import { PONTOS_POR_VOUCHER, TAXA_CONVERSAO, validarPontosSimulacao } from "../../utils/simulacao"

type Transacao = {
    data: string
    pontos: number
    valor: number
}


function formatarReal(valor: number) {
    return valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function SolucaoSimulacao() {

    useEffect(() => {
        document.title = "SoulPass - Simulação";
    }, []);

    const [pontosDisponiveis, setPontosDisponiveis] = useState<number>(2760)
    const [quantidade, setQuantidade] = useState<number>(552)
    const [historico, setHistorico] = useState<Transacao[]>([
        { data: "12/08", pontos: 552, valor: 5.52 },
        { data: "27/07", pontos: 1656, valor: 16.56 },
        { data: "10/07", pontos: 552, valor: 5.52 },
    ])
    const [mensagem, setMensagem] = useState<{ tipo: "sucesso" | "erro"; texto: string } | null>(null)

    const valorRecebido = quantidade > 0 ? quantidade * TAXA_CONVERSAO : 0
    const vouchersDisponiveis = Math.floor(pontosDisponiveis / PONTOS_POR_VOUCHER)

    function gerarVoucher(e: React.SyntheticEvent) {
        e.preventDefault()

        const erro = validarPontosSimulacao(quantidade, pontosDisponiveis)
        if (erro) {
            setMensagem({ tipo: "erro", texto: erro })
            return
        }

        const valor = quantidade * TAXA_CONVERSAO
        const novaTransacao: Transacao = {
            data: new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
            pontos: quantidade,
            valor,
        }

        setHistorico((atual) => [novaTransacao, ...atual])
        setPontosDisponiveis((saldo) => saldo - quantidade)
        setMensagem({ tipo: "sucesso", texto: `Voucher de R$ ${formatarReal(valor)} gerado com sucesso!` })
    }

    useEffect(() => {
        if (!mensagem) return

        const timer = setTimeout(() => setMensagem(null), 4000)

        return () => clearTimeout(timer)
    }, [mensagem])

    return (
        <div>
            <div className="mx-auto mt-12 w-[90%] max-w-[120rem] rounded-2xl border border-[#507e7e] bg-white p-6 text-xl text-[#3a5353]">
                <h1 className="mb-3 text-3xl font-bold">Simulação SoulPass</h1>
                Dados ilustrativos da Sprint 3. Nenhum voucher real é emitido.
                O saldo e o histórico são reiniciados ao sair desta página.
            </div>
            {/* === Seção mostrando as estatísticas (dashboard) === */}
            <section className="py-16">
                <div className="mx-auto grid max-w-[124rem] gap-8 px-8 sm:grid-cols-2">
                    <div className="rounded-[2rem] bg-white p-6 shadow-sm md:p-12">
                        <p className="text-2xl text-[#666]">Pontos Disponíveis</p>
                        <div className="mt-3 flex items-center gap-4">
                            <span className="text-4xl font-bold text-slate-900 md:text-6xl">
                                {pontosDisponiveis.toLocaleString("pt-BR")}
                            </span>
                            <span className="text-xl text-[#666]">pontos</span>
                            <span className="ml-auto text-3xl">🎫</span>
                        </div>
                        <span className="mt-6 inline-block rounded-full bg-teal-50 px-4 py-2 text-sm text-teal-700">
                            🎫 Equivalente a {vouchersDisponiveis} vouchers
                        </span>
                    </div>

                    <div className="rounded-[2rem] bg-teal-800 p-6 text-white shadow-sm md:p-12">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🌿</span>
                            <p className="text-base font-semibold tracking-wide">MOBILIDADE SUSTENTÁVEL</p>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <span className="text-3xl font-bold">Cada escolha conta</span>
                        </div>
                        <p className="mt-4 text-lg text-teal-100">
                            Transforme pontos em novas possibilidades de deslocamento.
                            Indicadores de impacto ambiental dependem de dados e metodologia ainda em definição.
                        </p>
                    </div>
                </div>
            </section>

            {/* === Seção do voucher e histórico (voucher.css convertido) === */}
            <section className="voucher">
                <div className="mx-auto flex w-[90%] max-w-[120rem] flex-col items-stretch gap-12 pb-40 md:flex-row md:items-start">

                    <form
                        onSubmit={gerarVoucher}
                        className="flex flex-1 flex-col gap-8 rounded-[2rem] bg-[#e3e4e3] p-6 md:p-12"
                    >
                        <h2 className="font-['Inter'] text-4xl font-bold md:text-5xl">Gerar Voucher</h2>
                        <p className="font-['Inter'] text-xl text-[#666] md:text-2xl">
                            Converta seus pontos em créditos de mobilidade.
                        </p>

                        <label htmlFor="pontos" className="font-['Inter'] text-[1.3rem] font-bold text-[#555]">
                            QUANTIDADE DE PONTOS
                        </label>
                        <input
                            type="number"
                            id="pontos"
                            min={PONTOS_POR_VOUCHER}
                            step={1}
                            max={pontosDisponiveis}
                            value={quantidade}
                            onChange={(e) => setQuantidade(Number(e.target.value))}
                            aria-invalid={mensagem?.tipo === "erro"}
                            aria-describedby={mensagem?.tipo === "erro" ? "voucher-mensagem" : undefined}
                            className="min-w-0 w-full rounded-full border-[1.5px] border-[#ddd] bg-white px-6 py-5 font-['Inter'] text-xl outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40 md:px-8 md:py-6 md:text-2xl"
                        />

                        <div className="rounded-3xl bg-white p-6 font-['Inter'] text-[1.5rem] text-[#333] md:p-8 md:text-[1.6rem]">
                            Você recebe: <strong>R$ {formatarReal(valorRecebido)}</strong>
                        </div>

                        {mensagem && (
                            <p
                                id="voucher-mensagem"
                                role="alert"
                                className={`rounded-3xl p-6 font-['Inter'] text-[1.5rem] md:p-8 md:text-[1.6rem] ${mensagem.tipo === "erro"
                                        ? "bg-red-50 text-red-700"
                                        : "bg-green-50 text-green-700"
                                    }`}
                            >
                                {mensagem.texto}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="rounded-full bg-[#3d6b6b] py-[1.8rem] font-['Inter'] text-[1.5rem] font-bold uppercase text-white transition-colors duration-300 hover:bg-[#2a5050] md:text-[1.6rem]"
                        >
                            Gerar voucher
                        </button>
                    </form>

                    <div className="flex flex-1 flex-col gap-8 rounded-[2rem] bg-white p-6 shadow-[0_2px_15px_rgba(0,0,0,0.06)] md:p-12">
                        <h2 className="font-['Inter'] text-4xl font-bold md:text-5xl">Histórico Recente</h2>
                        <ul className="flex flex-col gap-6">
                            {historico.map((item, index) => (
                                <li
                                    key={index}
                                    className="border-b border-[#f0f0f0] pb-6 font-['Inter'] text-xl text-[#333] md:text-2xl"
                                >
                                    {item.data} — {item.pontos} pts — <strong>R$ {formatarReal(item.valor)}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    )
}
