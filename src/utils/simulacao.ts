// Parâmetros herdados da Sprint 3. A conversão com tarifa e mínimo de
// 100 pontos será implementada junto aos endpoints de tarifas/conversões.
export const TAXA_CONVERSAO = 1 / 100;
export const PONTOS_POR_VOUCHER = 552;

export function validarPontosSimulacao(quantidade: number, saldo: number): string | null {
  if (!Number.isSafeInteger(quantidade) || quantidade < PONTOS_POR_VOUCHER) {
    return `Informe uma quantidade inteira de pelo menos ${PONTOS_POR_VOUCHER} pontos.`;
  }
  if (quantidade > saldo) {
    return 'Você não possui pontos suficientes para realizar uma transação.';
  }
  return null;
}
