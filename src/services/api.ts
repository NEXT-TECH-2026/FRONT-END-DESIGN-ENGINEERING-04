export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

// Infraestrutura para a próxima etapa. Nenhum endpoint foi presumido.
// O tipo T deverá refletir o contrato real de cada resposta da API Java.
export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T | null> {
  const baseUrl = import.meta.env.VITE_API_URL?.trim();
  if (!baseUrl) throw new Error('Configure VITE_API_URL para conectar a API Java.');

  const headers = new Headers(options.headers);
  headers.set('Accept', 'application/json');
  if (typeof options.body === 'string' && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let mensagem = `Não foi possível concluir a solicitação (HTTP ${response.status}).`;
    try {
      const corpo = await response.json() as { erro?: string };
      if (typeof corpo.erro === 'string') mensagem = corpo.erro;
    } catch { /* Resposta pode não ser JSON. */ }
    throw new ApiError(mensagem, response.status);
  }
  if (response.status === 204) return null;
  const text = await response.text();
  return text ? JSON.parse(text) as T : null;
}
