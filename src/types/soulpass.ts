// Contrato de respostas da API Java da Sprint 4.
export interface UsuarioResumo { idUsuario: number; nome: string; }
export interface Carteira { idCarteira: number; idUsuario: number; saldoPontos: number; }
export interface Tarifa {
  idTarifa: number; empresa: string; modalidade: string;
  valorTarifa: number; origemInfo: string; dtAtualizacao: string; dtValidade: string | null;
}
export interface Conversao {
  idConversao: number; idUsuario: number; idTarifa: number;
  pontosUtilizados: number; vlBeneficio: number; vlTarifaRef: number;
  vlRestante: number; dtConversao: string;
}
export type StatusVoucher = 'GERADO' | 'UTILIZADO' | 'EXPIRADO';
export interface Voucher {
  idVoucher: number; idConversao: number; codigoVoucher: string;
  statusVoucher: StatusVoucher; dtGeracao: string;
  dtValidade: string | null; dtUtilizacao: string | null;
}
export interface HistoricoSoulPass { conversoes: Conversao[]; vouchers: Voucher[]; }
export interface ResultadoConversao { conversao: Conversao; voucher: Voucher; carteira: Carteira; }
