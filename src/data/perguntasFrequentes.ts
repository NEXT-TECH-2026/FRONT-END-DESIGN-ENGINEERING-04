interface PerguntaFrequente {
    id: string;
    pergunta: string;
    resposta: string;
}

export const perguntasFrequentes: PerguntaFrequente[] = [
    {
        id: "sobre",
        pergunta: "O que é o SoulPass?",
        resposta: "O SoulPass é um projeto que propõe transformar pontos de recompensa em benefícios para transporte público. Você pode conhecer a proposta e experimentar a conversão na simulação.",
    },
    {
        id: "acesso",
        pergunta: "Como acesso a simulação?",
        resposta: "Crie uma conta de demonstração e entre. Depois do login, a opção Minha simulação fica disponível. Use dados fictícios: a conta existe apenas nesta aba e é apagada ao recarregar a página.",
    },
    {
        id: "conversao",
        pergunta: "Como funciona a conversão de pontos?",
        resposta: "A simulação considera 100 pontos equivalentes a R$ 1,00. Você informa uma quantidade dentro do saldo disponível e acompanha o valor ilustrativo do benefício antes de confirmar.",
    },
    {
        id: "pontos",
        pergunta: "De onde vêm os pontos?",
        resposta: "A proposta é aproveitar recompensas vinculadas à SoulUp. Nesta demonstração, o saldo de pontos é fictício e serve para você experimentar o funcionamento da conversão.",
    },
    {
        id: "vouchers",
        pergunta: "Já posso usar os vouchers no transporte?",
        resposta: "Ainda não. Os vouchers gerados nesta versão são demonstrativos e não possuem validade para uso no transporte público.",
    },
    {
        id: "contato",
        pergunta: "Como encontro a equipe do projeto?",
        resposta: "A página Equipe apresenta os integrantes da Nextech e os links de seus perfis. A página Contato também permite experimentar o formulário de contato da demonstração.",
    },
];
