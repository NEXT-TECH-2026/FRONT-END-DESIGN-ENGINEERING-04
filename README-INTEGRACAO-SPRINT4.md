# Integração SoulPass — Sprint 4

**Alterações nesta cópia do Front:** preserva as outras páginas, conecta `Solucao-Simulacao` ao Spring Boot e adiciona `/solucao-simulacao/tarifas/:id` para rota dinâmica.

## Rodar localmente

1. Inicie a API Java com Oracle acessível na porta 8080.
2. Copie `.env.example` para `.env` e configure `VITE_API_URL=http://localhost:8080`.
3. `npm ci`, `npm run build`, `npm run dev`.
4. Entre na conta de demonstração (cadastro/login existentes no Front) e abra `/solucao-simulacao`.
5. Escolha um usuário fictício, uma tarifa e converta 100 pontos. Atualize a página: saldo/histórico devem persistir.

**Importante:** login/cadastro ainda são demonstrativos e independentes dos registros Oracle. A seleção de usuário do banco é transparente e destinada à correção acadêmica, **não** é autenticação. Não coloque esse exemplo em produção com dados pessoais reais sem implementar autenticação/autorização.

## Commits reais sugeridos para sua branch

1. `feat: define tipos e validacao da solucao`
2. `feat: adiciona service para API Java`
3. `feat: integra consulta de carteira e tarifas`
4. `feat: conecta conversao de pontos e vouchers`
5. `feat: cria rota dinamica para detalhes da tarifa`
6. `docs: documenta integracao e testes manuais`

Esses commits deverão ser feitos durante a incorporação das alterações na sua própria branch. O ZIP não contém commits Git.

## Compatibilidade com develop (atualização de 29/10)

- Preservadas as páginas `Home`, `Login`, `Contato`, cabeçalho e o redirecionamento `/cadastro` para `/login`. **Não copiar** o arquivo `src/routes/index.tsx` do pacote anterior: ele ainda importava a página Cadastro removida pelo grupo.
- O Login atual do grupo permanece apenas em memória; usuário do Oracle é escolhido explicitamente no ambiente de demonstração. A seleção não representa autenticação/segurança.
- `npm test` passa a utilizar `node --experimental-strip-types` para executar os testes `.ts` no Node 22 e no Node 24.
- Antes de publicar, verificar a API realmente online, o acesso ao Oracle e a origem CORS da Vercel.
