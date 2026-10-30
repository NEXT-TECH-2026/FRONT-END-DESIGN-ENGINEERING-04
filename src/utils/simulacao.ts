// Regras do banco de dados da Sprint 4: 100 pontos = R$1,00.
export const TAXA_CONVERSAO = 1 / 100;
export const PONTOS_POR_VOUCHER = 100;

export function validarPontosSimulacao(quantidade: number, saldo: number, limiteTarifa?: number): string | null {
  if (!Number.isSafeInteger(quantidade) || quantidade < PONTOS_POR_VOUCHER) {
    return 'Informe uma quantidade inteira de pelo menos 100 pontos.';
  }
  if (quantidade > saldo) return 'Você não possui pontos suficientes para essa conversão.';
  if (limiteTarifa !== undefined && quantidade > limiteTarifa) {
    return `Esta tarifa aceita no máximo ${limiteTarifa} pontos.`;
  }
  return null;
}
