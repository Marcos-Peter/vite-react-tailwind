# Vite + React + TailwindCSS + TypeScript Boilerplate

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Marcos-Peter/vite-react-tailwind-boilerplate/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/Marcos-Peter/vite-react-tailwind-boilerplate/README.pt-br.md)

## Sobre o Projeto

Este repositório é um boilerplate para projetos utilizando **Vite**, **React**, **TailwindCSS** e **TypeScript**. Ele oferece uma configuração inicial otimizada para um fluxo de desenvolvimento eficiente e produtivo.

## Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) - Ferramenta de build rápida para projetos front-end
- [React 19](https://react.dev/) - Biblioteca para construção de interfaces
- [TailwindCSS 4](https://tailwindcss.com/) - Framework utilitário para estilização
- [TypeScript](https://www.typescriptlang.org/) - Superconjunto do JavaScript com tipagem estática
- [ESLint](https://eslint.org/) - Ferramenta de linting para manter a qualidade do código
- [Prettier](https://prettier.io/) - Ferramenta para formatação de código
- [Vitest](https://vitest.dev/) - Framework de testes rápido para projetos com Vite

## Estrutura do Projeto

```
├── src/
│   ├── assets/             # Arquivos estáticos
│   ├── components/         # Componentes reutilizáveis
│   ├── context/            # Contextos do react
│   ├── hooks/              # Hooks personalizados
│   ├── pages/              # Páginas principais
│   ├── styles/             # Arquivos CSS globais
│   ├── tests/              # Testes do projeto
│   ├── utils/              # Funções utilitárias
│   ├── App.tsx             # Componente raiz do React
│   ├── main.tsx            # Ponto de entrada do aplicativo
├── public/                 # Arquivos públicos
├── .eslintrc.json          # Configuração do ESLint
├── .prettierrc             # Configuração do Prettier
├── tailwind.config.ts      # Configuração do TailwindCSS
├── tsconfig.json           # Configuração do TypeScript
├── vite.config.ts          # Configuração do Vite
└── package.json            # Dependências e scripts
```

## Instalação e Uso

### 1. Clone o Repositório

```sh
git clone https://github.com/Marcos-Peter/vite-react-tailwind.git
cd vite-react-tailwind
```

### 2. Instale as Dependências

```sh
yarn install
```

### 3. Inicie o Servidor de Desenvolvimento

```sh
yarn dev
```

O projeto estará disponível em `http://localhost:5173/`.

### 4. Build para Produção

```sh
yarn build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### 5. Executar Testes

```sh
yarn test
```

## Configuração de Linting e Formatação

- Para verificar problemas no código:

```sh
yarn lint
```

- Para corrigir automaticamente:

```sh
yarn lint --fix
```

## Contribuição

1. Fork o repositório
2. Crie uma branch com sua feature (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona minha feature'`)
4. Envie para o repositório (`git push origin minha-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Sinta-se à vontade para contribuir e sugerir melhorias!
