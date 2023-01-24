# Mumble component library development with Yarn/NPM Workspaces + Next.js + Storybook + Typescript + StyledComponents + Twin

This setup includes a TypeScript Next.js App (`packages/app`) importing a separate component library (`packages/design-system-component-library-yeahyeahyeah`) using either [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) or [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

## Features

- **Simple, speedy workflow**<br/>After starting the next app with `yarn dev` and the watcher with `yarn watch` you can work on the components in `packages/design-system-component-library-yeahyeahyeah` and receive HMR updates in your app
- **Simple multi-project configs**
  - Shared styles in `tailwind.config.js`
  - Shared babel settings in `babel.config.js`
  - Shared twin config in `package.json`
  - Shared global types in `types`
- **Automatic component type generation**<br/>
  Start live component build updates with `yarn watch`

## Get started

From inside the new folder, start the dev server with yarn:

```bash
yarn && yarn dev
```

And watch changes in the bundle with

```bash
yarn watch
```

> npm@9.2+ is required to use the [workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) feature.<br/>Update to latest with: `npm install -g npm@latest`

## Resources

- [design-system-component-library-yeahyeahyeah](https://github.com/smartive-education/design-system-component-library-yeahyeahyeah/pkgs/npm/design-system-component-library-yeahyeahyeah)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
