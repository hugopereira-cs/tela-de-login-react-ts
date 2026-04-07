# Tela de Login com React e TypeScript

Este projeto é uma aplicação de tela de login moderna e funcional, desenvolvida para demonstrar práticas recomendadas de desenvolvimento Front-end, como gerenciamento de formulários complexos, validação de esquemas e componentização estilizada.

## 🚀 Tecnologias Utilizadas

- **React 19**: Biblioteca principal para construção da interface.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, garantindo maior segurança e previsibilidade ao código.
- **Vite**: Ferramenta de build extremamente rápida para o desenvolvimento moderno.
- **Styled Components**: Biblioteca para estilização de componentes utilizando CSS-in-JS.
- **React Hook Form**: Gerenciamento de formulários eficiente e performático, focado em performance e re-renderizações mínimas.
- **Yup**: Validação de esquemas de dados de forma declarativa.
- **Hook Form Resolvers**: Integração entre o React Hook Form e o Yup.

## ✨ Funcionalidades

- **Formulário Reativo**: Gerenciamento de estados de input através do componente `Controller` do React Hook Form.
- **Validação em Tempo Real**: Validação de campos acionada no evento `onBlur` e revalidação no `onChange`.
- **Feedback de Erro**: Exibição de mensagens de erro customizadas para cada campo de entrada.
- **Habilitação Dinâmica do Botão**: O botão de login permanece desabilitado e com indicador visual (🚫) até que todos os campos do formulário sejam válidos.
- **Componentização**: Input e Button encapsulados em componentes reutilizáveis com suporte a props dinâmicas.

## 🛡️ Regras de Validação

O formulário de login segue os seguintes critérios definidos via schema Yup:

- **E-mail**:
  - Obrigatório.
  - Deve ser um formato de e-mail válido (ex: `exemplo@dominio.com`).
- **Senha**:
  - Obrigatória.
  - Mínimo de 6 caracteres.

## 📁 Estrutura do Projeto

```text
src/
├── assets/      # Ativos estáticos (imagens, ícones)
├── components/  # Componentes reutilizáveis (Button, Input)
├── pages/       # Páginas da aplicação (Login)
├── global.ts    # Estilos globais da aplicação
├── main.tsx     # Ponto de entrada da aplicação
└── types.ts     # Definições de tipos TypeScript compartilhados
```

## 🛠️ Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Para gerar o build de produção:
```bash
npm run build
```

4. Para rodar o linting:
```bash
npm run lint
```
