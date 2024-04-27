# Quasar, Vue 3, & Pinia Dashboard

## ESLint / Prettier / SCSS / TypeScript / Vite

### Apex Charts / Charts.js / D3

Learning Quasar, Vue 3, & Pinia. Testing libraries like Apex Charts, Charts.js, and D3 for data visualization. Utilizing Typescript, SCSS, ESLint, Prettier, and Vite.

## ToDos

1. Create a basic dashboard - In progress, will likely pause for #2
   - Use Apex charts, Charts.js, and D3 for data visualization
2. Create a CRUD table
   - use q-table
3. Use dialogs as forms for CRUD functionality
4. Play around with Quasar components
5. Learn about Vue and best practices when creating components, project architecture etc.
6. Learn about Pinia and best practices when creating stores, pulling and modifying data, etc.
7. Routing and page transitions in Vue & Quasar
8. Currently a SPA, look at other setups like SSR, PWA, etc.
9. Resolve babel and quasar jest app extension component testing issues

- Have to run babel async

## Bugs

1. HMR is not working properly, figure out how to properly configure Vite to work with Quasar

---

## Charting

Focus on learning Apex charts for integrations with Vue 3 and Quasar. Also, learn about Charts.js and D3. The goal is to learn how to make charts that are elegant but also interactive and responsive. Which libraries are best for which use cases?

## Install the dependencies

```bash
yarn
# or
npm install
```

## Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

## Lint the files

```bash
yarn lint
# or
npm run lint
```

## Format the files

- auto format with prettier, otherwise use:

```bash
yarn format
# or
npm run format
```

## Build the app for production

```bash
quasar build
```

## Testing the application

- Add tests to the `__test__` directory or the `src/test` folder based off the testing library you're using

- Currently set to handle unit tests w/ `jest` & `vitest`

  - Note: jest environment is slightly messed up due to using quasar jest app extension and regular jest. Would likely scrap in a real example though many orgs still rely on jest for testing and will be a good learning exercise
    - Still to resolve some babel issues, but can run regular jest through the `__test__` dir and quasar jest component tests through `src/test/jest/__tests__`

- Setup for both e2e & component testing w/ Cypress

### Running Tests

### Jest

```bash
yarn test:jest
# or
npm test:jest
```

### Cypress

```bash
yarn test:cypress
# or
npm test:cypress
```

Using these commands will open the cypress GUI

```bash
yarn test:cypress:open
# or
npm test:cypress:open
```

### Vitest

```bash
yarn test:vitest
# or
npm test:vitest
```

## Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
