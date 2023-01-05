# create a component library with yarn/npm workspaces + Next.js

This setup demonstrates a TypeScript Next.js app (`packages/app`) importing a separate component library (`packages/shared-ui`) using either [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) or [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

## Features

- **Simple, speedy workflow**<br/>After starting the next app `yarn dev` you can work on the components in `packages/shared-ui` and receive HMR updates in your app
- **Simple multi-project configs**
  - Shared styles in `tailwind.config.js`
  - Shared babel settings in `babel.config.js`
  - Shared twin config in `package.json` and `types`
- **Automatic component type generation**<br/>
  Start live component type updates with `yarn types:watch`

## Get started

From inside the new folder, start the dev server with yarn:

```bash
yarn && yarn build && yarn dev
```

or npm:

```bash
npm install && npm run build && npm run dev
```

> npm@7+ is required to use the [workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) feature.<br/>Update to latest with: `npm install -g npm@latest`

## Resources

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
- [Github](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-packages-from-other-organizations)

## Installing the npm package

Create nextjs app

```bash
nvm use 16.17.0
yarn create next-app --typescript
```

[Create a classic github token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)

To authenticate by adding your personal access token (classic) to your ~/.npmrc file, edit the ~/.npmrc file for your project to include the following line, replacing TOKEN with your personal access token. Create a new ~/.npmrc file if one doesn’t exist.

```bash
//npm.pkg.github.com/:_authToken=TOKEN
```

Create .npmrc and add following line

```bash
@smartive-education:registry=https://npm.pkg.github.com
```

Install package

```bash
yarn add @smartive-education/design-system-component-library-yeahyeahyeah@latest
```

or with npm

```bash
npm i @smartive-education/design-system-component-library-yeahyeahyeah@latest
```
