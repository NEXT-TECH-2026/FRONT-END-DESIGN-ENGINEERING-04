import { apiRequest } from './api';
import type { Carteira, HistoricoSoulPass, ResultadoConversao, Tarifa, UsuarioResumo, Voucher } from '../types/soulpass';

async function obrigatorio<T>(resultado: T | null): Promise<T> {
  if (resultado === null) throw new Error('O servidor retornou uma resposta vazia.');
  return resultado;
}

export const soulPassApi = {
  usuarios: async () => obrigatorio(await apiRequest<UsuarioResumo[]>('/api/usuarios')),
  tarifas: async () => obrigatorio(await apiRequest<Tarifa[]>('/api/tarifas')),
  tarifa: async (id: number) => obrigatorio(await apiRequest<Tarifa>(`/api/tarifas/${id}`)),
  carteira: async (usuarioId: number) => obrigatorio(await apiRequest<Carteira>(`/api/usuarios/${usuarioId}/carteira`)),
  historico: async (usuarioId: number) => obrigatorio(await apiRequest<HistoricoSoulPass>(`/api/usuarios/${usuarioId}/historico`)),
  converter: async (idUsuario: number, idTarifa: number, pontos: number) =>
    obrigatorio(await apiRequest<ResultadoConversao>('/api/conversoes', {
      method: 'POST', body: JSON.stringify({ idUsuario, idTarifa, pontos }),
    })),
  voucher: async (id: number) => obrigatorio(await apiRequest<Voucher>(`/api/vouchers/${id}`)),
};
