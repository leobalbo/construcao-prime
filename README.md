# Contrução Prime
Este é um projeto de exemplo que mostra como instalar e rodar o código usando pnpm.

## Status
🚧 **Em Desenvolvimento** 🚧

## Pré-requisitos
- Node.js
- pnpm

## Instalação
Para instalar o pnpm, você pode seguir as instruções no [site oficial do pnpm](https://pnpm.io/installation) ou usar um dos comandos abaixo:

Usando npm:
```bash
npm install -g pnpm
```

## Configuração
Clone o repositório:

```bash
git clone https://github.com/leobalbo/construcao-prime.git
```

Navegue até o diretório:

```bash
cd construcao-prime
```

Instale as dependências usando pnpm:

```bash
pnpm install
```

## Configuração do Ambiente (.env)
Este projeto utiliza [clerk](https://clerk.com/) para autenticação. Para configurar as variáveis de ambiente necessárias, crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:

```bash
NEXT_PUBLIC_CLERK_PUBLIbashABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/register
```
### Obter Chave da Clerk
1. Crie uma conta na [Clerk](https://clerk.com/).
2. Crie uma aplicação no dabashboard da Clerk.
3. Va ate API
4. Pegue `Publibashable key` e coloque em `NEXT_PUBLIC_CLERK_PUBLIbashABLE_KEY`
5. Pegue `Secret keys` e coloque em `CLERK_SECRET_KEY`




## Iniciar

```bash
pnpm dev
```
