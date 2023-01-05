## Installing the npm package

### Create nextjs app

```bash
nvm use 16.17.0
yarn create next-app --typescript
```

### Create github token and add to .npmrc

[Create a classic github token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)

To authenticate by adding your personal access token (classic) to your ~/.npmrc file, edit the ~/.npmrc file for your project to include the following line, replacing TOKEN with your personal access token. Create a new ~/.npmrc file if one doesn’t exist.

```bash
//npm.pkg.github.com/:_authToken=TOKEN
```

Create .npmrc and add following line

```bash
@smartive-education:registry=https://npm.pkg.github.com
```

### Install the npm package

With yarn

```bash
yarn add @smartive-education/design-system-component-library-yeahyeahyeah@latest
```

Or with npm

```bash
npm i @smartive-education/design-system-component-library-yeahyeahyeah@latest
```

## Resources

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
- [Github](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-packages-from-other-organizations)
