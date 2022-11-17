# TastyZip-Frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Set lint & formatting at VSCode

<br>

### Install eslint, prettier plugins

<img width="300" alt="eslint" src="https://user-images.githubusercontent.com/77768091/202425577-64b8192d-1788-4ab9-b5be-8aca2f484b5e.png">
<img width="300" alt="eslint" src="https://user-images.githubusercontent.com/77768091/202425677-d2857850-c664-4b2c-bcc7-bd855d17a9fe.png">

This will detect eslintrc, prettierrc files.

<br>

### Lint&format on save

Edit your settings.json

```json
{
  //...
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
