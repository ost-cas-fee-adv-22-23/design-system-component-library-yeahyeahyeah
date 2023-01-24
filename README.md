# Mumble component library development with Yarn Workspaces + Next.js + Storybook + Typescript + StyledComponents + Twin

This setup includes a TypeScript Next.js App (`packages/app`) importing a separate component library (`packages/design-system-component-library-yeahyeahyeah`) using [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

We created this setup in the course of further education, a CAS Frontend-Engineering-Advanced course, to develop a component library for a Twitter Clone named Mumble. The goal is to provide a reusable and maintainable set of UI components, that can be released as a npm package and integrated into a Next.js App.

## Features
- **Storybook**<br/>After installing dependencies with `yarn install`, you can start storybook with `yarn storybook`, work on the components and stories in `packages/design-system-component-library-yeahyeahyeah` and receive updates in storybook.
- **Testing components in a Next.js app**<br/>After installing dependencies with `yarn install` and starting the next app with `yarn dev`, the watcher for the component library can be started with `yarn watch` and you can work on the components in `packages/design-system-component-library-yeahyeahyeah` and receive HMR updates in your app. There are some demo sites inside the Next.js app in `packages/app/pages`, where you can see how the components are imported.
- **Simple multi-project configs**
  - Shared styles in `tailwind.config.js`
  - Shared babel settings in `babel.config.js`
  - Shared twin config in `package.json`
  - Shared global types in `types`
- **Automatic component and type generation**<br/>
  Start live component build updates with `yarn watch`
  Start build with `yarn build`

## Get started

### Node.js

Please use node version 16.17.0. If you use nvm you can use the next command.

```shell
nvm use 16.17.0
```

### Clone repository and install dependencies

```bash
git clone git@github.com:smartive-education/design-system-component-library-yeahyeahyeah.git
cd design-system-component-library-yeahyeahyeah
yarn install
```

### Storybook

Storybook is located in `packages/design-system-component-library-yeahyeahyeah` but you can start it also from the root folder of the project setup with following command.

```bash
yarn storybook
```

Then navigate to [http://localhost:6006](http://localhost:6006/).

### Next.js App

If you wanna test the component library inside a Nextjs app, you can you the ts-watcher and the Next.js app. The watcher will generate a *dist* folder inside `packages/design-system-component-library-yeahyeahyeah`, where the components are located. You can use them inside the Next.js app located at `packages/app`. There are some demo pages located at `packages/app/pages`, where you can see how you should import the components. Use following steps to start the watcher and the Next.js app.

From inside the root folder start the watcher and watch changes in the bundle with:

```bash
yarn watch
```

Also from inside the root folder, start the dev server with yarn:

```bash
yarn dev
```

> npm@9.2+ is required to use the [workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) feature.<br/>Update to latest with: `npm install -g npm@latest`

## Resources

- [Design-System-Component-Library-YeahYeahYeah](https://github.com/smartive-education/design-system-component-library-yeahyeahyeah/pkgs/npm/design-system-component-library-yeahyeahyeah)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Styled-components](https://styled-components.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
