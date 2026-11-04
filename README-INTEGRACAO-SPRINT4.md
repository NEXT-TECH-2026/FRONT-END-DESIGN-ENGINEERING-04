# Integração SoulPass — Sprint 4

O front-end consulta a API Java publicada no Render e utiliza os contratos de resposta definidos em `src/types/soulpass.ts`. A documentação geral e os links da entrega estão no [README principal](README.md).

## Configuração

1. Instale as dependências com `npm ci`.
2. Copie `.env.example` para `.env.local`.
3. Defina a URL base da API:

```dotenv
VITE_API_URL=https://soulpass-api-1boo.onrender.com
```

4. Execute `npm run dev`. Reinicie o Vite após mudar o arquivo de ambiente.

Para usar um backend local, substitua a URL pela porta em que a API Java estiver executando, como `http://localhost:8080`.

O endpoint [`/api/saude`](https://soulpass-api-1boo.onrender.com/api/saude) retorna o estado do serviço. Na publicação pela Vercel, configure `VITE_API_URL` nas variáveis do projeto e permita a origem do front no CORS do backend.

## Fluxo implementado

- `src/services/api.ts`: cliente HTTP, cabeçalhos e erros.
- `src/services/soulpass.ts`: chamadas de usuários, tarifas, carteira, histórico, conversão e voucher.
- `src/types/soulpass.ts`: interfaces e tipos das respostas.
- `/solucao-simulacao`: consulta da carteira, escolha de tarifa, conversão por POST e histórico.
- `/solucao-simulacao/tarifas/:id`: consulta de detalhe por parâmetro.

O payload de conversão contém `idUsuario`, `idTarifa` e `pontos`. Depois da resposta do POST, a tela consulta novamente a carteira e o histórico.

## Acesso demonstrativo

Cadastro e login ficam na memória da aba. Eles não criam uma conta no Oracle nem autenticam o usuário selecionado na API. Recarregar a página apaga a conta demonstrativa; crie outra conta fictícia e entre novamente para acessar a solução.

A base acadêmica utiliza dados de demonstração e os vouchers não são bilhetes oficiais de transporte.

## Conferência do fluxo

1. Entre com uma conta demonstrativa e selecione um usuário da base.
2. Confira o saldo e o histórico.
3. Selecione uma tarifa e abra seu detalhe.
4. Volte à solução e informe pelo menos 100 pontos, respeitando o saldo e o limite da tarifa.
5. Confirme a conversão e confira a resposta, a redução do saldo e o novo voucher no histórico.
6. Selecione outro usuário e volte ao usuário da operação para consultar novamente os dados.

As consultas remotas foram conferidas no navegador. A equipe confirmou que o [vídeo da entrega](https://youtu.be/sw3pEqvH4GE) demonstra a conversão concluída, a redução do saldo e o novo voucher no histórico.
