# 🚀 Plataforma de Gerenciamento de Usuários

Uma aplicação completa de gerenciamento de usuários desenvolvida com tecnologias modernas. O projeto consiste em um frontend responsivo com React + TypeScript + Vite e um backend robusto com NestJS/Express + TypeScript.

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Stack Tecnológico](#stack-tecnológico)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Como Executar](#como-executar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades](#funcionalidades)
- [Autores](#autores)

---

## 🎯 Visão Geral

Este projeto é uma solução moderna para gerenciamento de usuários que foi completamente reformulada após 3 anos. Passou de uma arquitetura legada com React Scripts para uma solução profissional com:

- ⚡ **Vite** como build tool ultrarrápido
- 📘 **TypeScript** para type safety completo
- 🏗️ **NestJS/Express** com arquitetura escalável
- 🔐 **Autenticação JWT** segura
- 📱 **Design Responsivo** em todos os dispositivos
- ♿ **Acessibilidade WCAG**

---

## 🛠️ Stack Tecnológico

### Frontend
- **React** 19.2.0 - Biblioteca UI moderna
- **TypeScript** 5.9.3 - Type safety em JavaScript
- **Vite** 7.2.4 - Build tool ultrarrápido com HMR instantâneo
- **React Router DOM** 6.2.2 - Roteamento client-side
- **Axios** 1.13.2 - HTTP client robusto
- **React Toastify** 8.2.0 - Notificações elegantes

### Backend
- **Express** 5.1.0 - Framework web minimalista
- **TypeScript** 5.0.0 - Type safety em Node.js
- **Pino** 10.1.0 - Logger de alta performance
- **CORS** 2.8.5 - Segurança entre origens
- **UUID** 8.3.2 - Geração de identificadores únicos
- **TSX** 4.7.0 - Runtime TypeScript para desenvolvimento

---

## 📂 Estrutura do Projeto

```
.
├── frontend/          # Aplicação React com Vite
├── backend/          # API Express com TypeScript
├── README.md         # Este arquivo
└── .gitignore
```

Ambos os projetos estão no mesmo repositório GitHub para facilitar o controle de versão integrado.

---

## 💻 Instalação

### Pré-requisitos
- Node.js 20.x ou superior
- npm ou yarn

### Clone o Repositório

```bash
git clone <seu-repositorio-github>
cd seu-repositorio
```

### Frontend - Instalação

```bash
cd frontend
npm install
# ou
yarn install
```

### Backend - Instalação

```bash
cd backend
npm install
# ou
yarn install
```

---

## 🚀 Como Executar

### 1️⃣ Executar Backend (Servidor)

O backend inicia em `http://localhost:3000` por padrão.

**Modo Desenvolvimento** (com reload automático):
```bash
cd backend
npm run server
# ou
yarn server
```

**Build para Produção:**
```bash
cd backend
npm run build
# ou
yarn build
```

**Iniciar Servidor de Produção:**
```bash
cd backend
npm start
# ou
yarn start
```

### 2️⃣ Executar Frontend (Aplicação)

O frontend inicia em `http://localhost:5173` por padrão.

**Modo Desenvolvimento** (com HMR):
```bash
cd frontend
npm run dev
# ou
yarn dev
```

**Build para Produção:**
```bash
cd frontend
npm run build
# ou
yarn build
```

**Preview de Produção:**
```bash
cd frontend
npm run preview
# ou
yarn preview
```

### 3️⃣ Executar Ambos Simultaneamente

Se estiver usando um terminal com split ou múltiplas abas:

**Terminal 1 - Backend:**
```bash
cd backend && npm run server
```

**Terminal 2 - Frontend:**
```bash
cd frontend && npm run dev
```

Acesse a aplicação em `http://localhost:5173`

---

## 📁 Estrutura de Pastas

### Frontend (`frontend/src`)

```
📦 src
 ┣ 📂 components/              # Componentes reutilizáveis
 ┃ ┣ 📜 Header.tsx            # Navegação principal
 ┃ ┗ 📜 Header.css            # Estilos do header
 ┣ 📂 constants/              # Constantes da aplicação
 ┃ ┗ 📜 localstorage.constants.ts  # Chaves de localStorage
 ┣ 📂 context/                # Context API para estado global
 ┃ ┣ 📂 types/               # Tipos TypeScript
 ┃ ┃ ┗ 📜 index.ts
 ┃ ┣ 📜 Auth.tsx             # Provider de autenticação
 ┃ ┗ 📜 AuthContext.tsx      # Contexto de autenticação
 ┣ 📂 hooks/                  # Custom hooks reutilizáveis
 ┃ ┣ 📂 useAuth/             # Hook para autenticação
 ┃ ┣ 📂 useAuthToken/        # Hook para gerenciar tokens JWT
 ┃ ┣ 📂 useCreateUser/       # Hook para criar usuários
 ┃ ┣ 📂 useGetUserById/      # Hook para buscar usuário por ID
 ┃ ┗ 📂 useGetUsers/         # Hook para listar todos os usuários
 ┣ 📂 pages/                  # Páginas da aplicação
 ┃ ┣ 📂 About/               # Página sobre a plataforma
 ┃ ┃ ┣ 📜 About.tsx
 ┃ ┃ ┗ 📜 About.css
 ┃ ┣ 📂 AddEdit/             # Página para criar/editar usuário
 ┃ ┃ ┣ 📜 AddEdit.tsx
 ┃ ┃ ┗ 📜 AddEdit.css
 ┃ ┣ 📂 Home/                # Página principal (listagem)
 ┃ ┃ ┣ 📜 Home.tsx
 ┃ ┃ ┗ 📜 Home.css
 ┃ ┣ 📂 Login/               # Página de autenticação
 ┃ ┃ ┣ 📜 index.tsx
 ┃ ┃ ┗ 📜 Login.css
 ┃ ┗ 📂 View/                # Página de visualização de usuário
 ┃ ┃ ┣ 📜 index.tsx
 ┃ ┃ ┗ 📜 View.css
 ┣ 📂 routes/                # Configuração de rotas
 ┃ ┗ 📜 index.tsx            # Router principal
 ┣ 📂 services/              # Serviços e integrações
 ┃ ┗ 📜 api.ts               # Cliente Axios para API
 ┣ 📜 App.tsx                # Componente raiz
 ┣ 📜 App.css                # Estilos globais e design system
 ┣ 📜 main.tsx               # Ponto de entrada
 ┣ 📜 vite-env.d.ts         # Tipos Vite
 ┗ 📜 logo.svg               # Logo da aplicação
```

#### 📌 Detalhes dos Diretórios Frontend

| Diretório | Propósito |
|-----------|-----------|
| **components/** | Componentes reutilizáveis como Header, Buttons, Cards |
| **constants/** | Constantes globais, chaves de localStorage |
| **context/** | Context API para autenticação e estado global |
| **hooks/** | Custom React hooks para lógica reutilizável |
| **pages/** | Páginas completas da aplicação (rotas) |
| **routes/** | Configuração de rotas e navegação |
| **services/** | Integração com APIs externas via Axios |
| **App.css** | Design system com variáveis CSS |

---

### Backend (`backend/src`)

```
📦 src
 ┣ 📂 controllers/           # Camada de controle de requisições
 ┃ ┣ 📜 auth-controller.ts  # Lógica de autenticação
 ┃ ┗ 📜 user-controller.ts  # Lógica de usuários
 ┣ 📂 factory/              # Padrão Factory
 ┃ ┗ 📜 user-factory.ts    # Criação de instâncias de usuário
 ┣ 📂 routes/               # Definição de rotas HTTP
 ┃ ┣ 📜 auth-route.ts      # Rotas de autenticação
 ┃ ┗ 📜 user-route.ts      # Rotas de usuários
 ┣ 📂 services/             # Lógica de negócio
 ┃ ┣ 📜 auth-service.ts    # Serviço de autenticação JWT
 ┃ ┗ 📜 user-service.ts    # Serviço de gerenciamento de usuários
 ┣ 📂 types/                # Interfaces e tipos TypeScript
 ┃ ┗ 📜 user.ts            # Tipos de usuário
 ┣ 📂 utils/                # Utilitários
 ┃ ┗ 📂 logger/            # Sistema de logging
 ┃ ┃ ┗ 📜 index.ts
 ┗ 📜 index.ts              # Arquivo principal da aplicação
```

#### 📌 Detalhes dos Diretórios Backend

| Diretório | Propósito |
|-----------|-----------|
| **controllers/** | Camada que recebe requisições HTTP e coordena respostas |
| **factory/** | Factory Pattern para criar objetos complexos |
| **routes/** | Definição de endpoints HTTP (GET, POST, PUT, DELETE) |
| **services/** | Lógica de negócio, regras da aplicação |
| **types/** | Interfaces TypeScript para contracts |
| **utils/** | Funções utilitárias, logger, helpers |

---

## 🎨 Arquitetura

### Frontend - Clean Architecture

```
Rotas (routes/) 
    ↓
Páginas (pages/)
    ↓
Componentes (components/)
    ↓
Hooks (hooks/)
    ↓
Context API (context/)
    ↓
Serviços (services/)
```

### Backend - Clean Architecture

```
Rotas (routes/)
    ↓
Controllers (controllers/)
    ↓
Services (services/)
    ↓
Factory (factory/)
    ↓
Types (types/)
```

---

## ✨ Funcionalidades

### Autenticação
- ✅ Login com email e senha
- ✅ Autenticação com JWT
- ✅ Persistência de sessão
- ✅ Logout seguro

### Gerenciamento de Usuários
- ✅ **Criar** - Adicionar novos usuários
- ✅ **Ler** - Visualizar detalhes do usuário
- ✅ **Atualizar** - Editar dados do usuário
- ✅ **Deletar** - Remover usuários
- ✅ **Listar** - Visualizar tabela de todos os usuários

### Interface
- ✅ Design responsivo (Mobile, Tablet, Desktop)
- ✅ Tabelas interativas
- ✅ Formulários validados
- ✅ Notificações com Toastify
- ✅ Loading states
- ✅ Error handling

### Segurança
- ✅ CORS configurado
- ✅ JWT para autenticação
- ✅ Validação de inputs
- ✅ Type safety com TypeScript

---

## 🔐 Variáveis de Ambiente

### Backend (.env)

Crie um arquivo `.env` na raiz do backend:

```env
PORT=3000
NODE_ENV=development
```

### Frontend (.env)

Crie um arquivo `.env` na raiz do frontend:

```env
VITE_API_URL=http://localhost:3000
```

---

## 📦 Scripts Disponíveis

### Frontend

```bash
npm run dev          # Iniciar servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
```

### Backend

```bash
npm run server       # Iniciar servidor com reload automático
npm run build        # Compilar TypeScript
npm start            # Iniciar servidor compilado
npm test             # Executar testes (não configurado)
```

---

## 🌐 Endpoints da API

### Autenticação
- `POST /auth/login` - Fazer login
- `POST /auth/register` - Registrar usuário (se implementado)

### Usuários
- `GET /users` - Listar todos os usuários
- `GET /users/:id` - Buscar usuário por ID
- `POST /users` - Criar novo usuário
- `PUT /users/:id` - Atualizar usuário
- `DELETE /users/:id` - Deletar usuário

---

## 🚀 Deploy

### Frontend (Vercel, Netlify, GitHub Pages)

```bash
cd frontend
npm run build
# Deploy a pasta 'dist'
```

### Backend (Heroku, Render, Railway)

```bash
cd backend
npm run build
npm start
```

---

## 📝 Convenções de Código

### Naming Conventions

- **Componentes:** PascalCase (`Header.tsx`, `LoginForm.tsx`)
- **Arquivos:** kebab-case (`auth-service.ts`, `user-controller.ts`)
- **Variáveis:** camelCase (`userName`, `isLoading`)
- **Constantes:** UPPER_SNAKE_CASE (`API_URL`, `MAX_RETRIES`)

### Estrutura de Pastas

- Manter cada funcionalidade em seu próprio diretório
- Colocar estilos junto ao componente (CSS co-located)
- Hooks separados por funcionalidade

---

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença ISC.

---

## 👨‍💻 Autor

**Auréo**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [seu-linkedin](https://linkedin.com/in/seu-usuario)

---

## 🔗 Links Úteis

- [Documentação React](https://react.dev)
- [Documentação TypeScript](https://www.typescriptlang.org/docs/)
- [Documentação Vite](https://vitejs.dev)
- [Documentação Express](https://expressjs.com)
- [Documentação React Router](https://reactrouter.com)
- [Documentação Axios](https://axios-http.com)

---

## ❓ Troubleshooting

### O frontend não consegue conectar ao backend

Verifique se:
- O backend está rodando em `http://localhost:3000`
- A variável de ambiente `VITE_API_URL` está correta
- CORS está habilitado no backend

### Erro de tipos TypeScript

```bash
# Recompile TypeScript
npm run build

# Limpe o cache (frontend)
rm -rf node_modules .cache
npm install
```

### Porta em uso

Se a porta padrão já está em uso, modifique em `vite.config.ts` (frontend) ou variável de ambiente (backend).

---

**Última atualização:** Novembro de 2025
**Versão:** 1.0.0