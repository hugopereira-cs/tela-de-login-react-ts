# Tela de Login com React e TypeScript

Aplicação web de autenticação moderna e funcional desenvolvida com React, TypeScript e Supabase. O projeto demonstra práticas recomendadas de desenvolvimento Front-end, incluindo gerenciamento de formulários, validação de esquemas, roteamento, gerenciamento de estado de autenticação e alternância de temas.

## 🚀 Tecnologias Utilizadas

- **React 19**: Biblioteca principal para construção da interface.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática para maior segurança.
- **Vite**: Ferramenta de build rápida para desenvolvimento moderno.
- **React Router**: Roteamento declarativo para navegação entre páginas.
- **Styled Components**: Estilização de componentes utilizando CSS-in-JS.
- **React Hook Form**: Gerenciamento eficiente de formulários com foco em performance.
- **Zod**: Validação de esquemas de dados de forma declarativa e type-safe.
- **Supabase**: Backend como serviço para autenticação e gerenciamento de usuários.
- **Sonner**: Notificações (toasts) para feedback do usuário.
- **Lucide React**: Ícones em componentes React.

## ✨ Funcionalidades

- **Autenticação com Supabase**: Login e registro de novos usuários integrados ao Supabase Auth.
- **Formulários Reativos**: Gerenciamento de estado de inputs através do React Hook Form.
- **Validação em Tempo Real**: Validação de campos acionada no evento `onChange` com feedback instantâneo.
- **Roteamento Dinâmico**: Navegação entre páginas (Welcome, Login, Register, Home) com React Router.
- **Rotas Protegidas**: Acesso restrito à página Home apenas para usuários autenticados.
- **Rotas Públicas**: Redirecionamento automático de usuários autenticados das páginas de login/registro para Home.
- **Gerenciamento de Temas**: Alternância entre tema claro e escuro via Context API.
- **Sessão Persistente**: Verificação automática de sessão ao carregar a aplicação.
- **Notificações**: Feedback visual via toasts de sucesso e erro.
- **Toggle de Senha**: Visualização/ocultação de senha em inputs de tipo password.

## 🛡️ Regras de Validação

### Login

- **E-mail**:
  - Obrigatório.
  - Deve ser um e-mail válido.
- **Senha**:
  - Obrigatória.
  - Mínimo de 6 caracteres.

### Registro

- **Nome**:
  - Obrigatório.
  - Mínimo de 3 caracteres.
- **E-mail**:
  - Obrigatório.
  - Deve ser um e-mail válido.
- **Senha**:
  - Obrigatória.
  - Mínimo de 6 caracteres.
- **Confirmar Senha**:
  - Obrigatória.
  - Deve coincidir com a senha digitada.

## 📁 Estrutura do Projeto

```text
src/
├── components/           # Componentes reutilizáveis
│   ├── Button/          # Botão com suporte a carregamento
│   ├── Input/           # Input com validação e toggle de senha
│   ├── Container/       # Wrapper centralizado
│   ├── Header/          # Cabeçalho com logout e controles
│   ├── ProtectedRoute/  # Componente para rotas autenticadas
│   ├── PublicRoute/     # Componente para rotas públicas
│   ├── RedirectText/    # Texto com link de redirecionamento
│   └── ThemeToggleButton/ # Botão de alternância de tema
├── context/             # Contextos React
│   ├── AuthContext.tsx  # Gerenciamento de autenticação
│   └── ThemeContext.tsx # Gerenciamento de tema
├── pages/               # Páginas da aplicação
│   ├── Login/          # Página de login
│   ├── Register/       # Página de registro
│   ├── Welcome/        # Página inicial pública
│   └── Home/           # Página inicial autenticada
├── services/            # Serviços externos
│   └── supabase.ts     # Configuração do cliente Supabase
├── styles/              # Estilos globais
│   ├── themes.ts       # Definição de temas
│   └── styled.d.ts     # Tipagem para styled-components
├── global.ts           # Estilos globais da aplicação
├── App.tsx             # Componente raiz com roteamento
└── main.tsx            # Ponto de entrada da aplicação
```

## 🛠️ Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Configure as variáveis de ambiente criando um arquivo `.env.local` na raiz do projeto:

```env
VITE_SUPABASE_URL=sua_url_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_supabase
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Para gerar o build de produção:

```bash
npm run build
```

5. Para rodar o linting:

```bash
npm run lint
```

## 🔐 Fluxo de Autenticação

1. **Usuário não autenticado**: Acessa a página Welcome (`/`)
2. **Login**: Fornece credenciais na página `/login`
3. **Registro**: Cria nova conta em `/register` com nome, email e senha
4. **Sessão ativa**: Ao fazer login, é redirecionado para `/home`
5. **Proteção de rotas**: Tentar acessar `/home` sem autenticação redireciona para `/login`
6. **Logout**: Usuário pode fazer logout através do botão no Header

## 🎨 Gerenciamento de Temas

O projeto suporta dois temas:

- **Tema Escuro** (padrão):
  - Background: `#0d1017`
  - Texto principal: `#f1f6fc`

- **Tema Claro**:
  - Background: `#f1f6fc`
  - Texto principal: `#0d1017`

Alternar entre temas através do botão no Header. A escolha é salva apenas durante a sessão.

## 📚 Componentes Principais

### AuthContext

Gerencia o estado de autenticação, incluindo:

- Usuário autenticado
- Estado de carregamento da sessão
- Função de logout

**Hook**: `useAuth()`

### ThemeContext

Gerencia o tema da aplicação:

- Tema atual (claro ou escuro)
- Função para alternar tema

**Hook**: `useAppTheme()`

### ProtectedRoute

Envolve rotas que requerem autenticação. Redireciona usuários não autenticados para `/login`.

### PublicRoute

Envolve rotas públicas. Redireciona usuários autenticados para `/home` se tentarem acessar rotas de autenticação.

## 📋 Fluxo de Validação de Formulários

Tanto Login quanto Register utilizam:

- **React Hook Form** para gerenciamento do estado do formulário
- **Zod** para definição e validação de schemas
- Validação em modo `onChange` para feedback em tempo real
- Botão submit desabilitado enquanto o formulário for inválido
