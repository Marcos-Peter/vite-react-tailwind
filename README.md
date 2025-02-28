# Vite + React + TailwindCSS + TypeScript Boilerplate

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Marcos-Peter/vite-react-tailwind/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/Marcos-Peter/vite-react-tailwind/README.pt-br.md)

## About the Project

This repository is a boilerplate for projects using **Vite**, **React**, **TailwindCSS** and **TypeScript**. It offers an optimized initial configuration for an efficient and productive development workflow.

## Technologies Used

- [Vite](https://vitejs.dev/) - Fast build tool for front-end projects
- [React 19](https://react.dev/) - Library for building interfaces
- [TailwindCSS 4](https://tailwindcss.com/) - Utility-first framework for styling
- [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript with static typing
- [ESLint](https://eslint.org/) - Linting tool to maintain code quality
- [Prettier](https://prettier.io/) - Tool for code formatting
- [Vitest](https://vitest.dev/) - Fast testing framework for projects with Vite

## Project Structure

```
├── src/
│   ├── assets/             # Static files
│   ├── components/         # Reusable components
│   ├── context/            # React contexts
│   ├── hooks/              # Custom hooks
│   ├── pages/              # Main pages
│   ├── styles/             # Global CSS files
│   ├── tests/              # Project tests
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Root React component
│   ├── main.tsx            # Application entry point
├── public/                 # Public files
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── tailwind.config.ts      # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## Installation and Usage

### 1. Clone the Repository

```sh
git clone https://github.com/Marcos-Peter/vite-react-tailwind.git your-project
cd your-project
```

### 2. Install Dependencies

```sh
yarn install
```

### 3. Start the Development Server

```sh
yarn dev
```

The project will be available at em `http://localhost:5173/`.

### 4. Build for production

```sh
yarn build
```

The optimized files will be generated in the `dist/` folder.

### 5. ExecutarRun Tests

```sh
yarn test
```

## Linting and Formatting Configuration

- To check for code issues:

```sh
yarn lint
```

- To automatically fix:

```sh
yarn lint --fix
```

## Contribution

1. Fork the repository
2. Create a branch with your feature (`git checkout -b my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the repository (`git push origin my-feature`)
5. Open a Pull Request

## License

This project is licensed under de MIT License [MIT License](LICENSE).

---

Fell free to contribute and suggest improvements!
