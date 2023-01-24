# Mumble Component Library

## Table of contents

- [Getting started](#getting-started)
- [Add credentials](#add-credentials)
- [Check out demo app on github](#check-out-demo-app-on-github)
- [Install a demo app with Twin + Next.js + Styled Components + TypeScript + Mumble Component Library](#install-a-demo-app-step-by-step-with-twin--nextjs--styled-components--typescript--mumble-component-library)
  - [Install Next.js](#install-nextjs)
  - [Add credentials for accessing the Mumble component Library NPM package](#add-credentials-for-accessing-the-mumble-component-library-npm-package)
  - [Install Mumble Component Library and Styled Components](#install-mumble-component-library-and-styled-components)
  - [Install Dependencies](#install-dependencies)
  - [Add the global styles](#add-the-global-styles)
  - [Add the twin config](#add-the-twin-config)
  - [Add the TypeScript types](#add-the-typescript-types)
  - [Add the babel config](#add-the-babel-config)
  - [Add the server stylesheet](#add-the-server-stylesheet)
  - [Add a navigation to the site](#add-a-navigation)
  - [Add a demo site](#add-a-demo-site)
- [Resources](#resources)
- [Customization of Twin](#customization-of-twin)
- [Next steps with Twin](#next-steps-with-twin)
- [Other](#other)

## Getting started

In the next steps you will setup a TypeScript Next.js app using Twin and Styled Components. After installing the Next.js App, we will configure the Next.js App, that we can use Twin and Styled Components, which we need for the Mumble component library. In a next step the Mumble Component Library NPM package will be added as a dependency. In the last steps we will add a server stylesheet, a navigation and a demo site for demonstration purposes. If you don't wanna go through all steps, you can check out the demo app on github.

## Add credentials

We need a github token and a .npmrc to get access to the [mumble npm package](https://github.com/smartive-education/design-system-component-library-yeahyeahyeah/pkgs/npm/design-system-component-library-yeahyeahyeah) at [smartive education](https://github.com/smartive-education) on github.

Create github token and add to .npmrc

[Create a classic github token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)

To authenticate by adding your personal access token (classic) to your ~/.npmrc file, edit the ~/.npmrc file for your project to include the following line, replacing TOKEN with your personal access token. Create a new ~/.npmrc file if one doesn’t exist.

```bash
//npm.pkg.github.com/:_authToken=TOKEN
```

Create .npmrc in the project folder, where you wanna add your npm package and add following line

```bash
@smartive-education:registry=https://npm.pkg.github.com
```

## Check out demo app on github

Now we can check out the demo app and install the dependencies. You can also [setup the app step by step with instructions](#install-a-demo-app-step-by-step-with-twin--nextjs--styled-components--typescript--mumble-component-library).

**Check out demo app using [git](https://github.com/tomschall/mumble-test-stack-yeahyeahyeah)**

```shell
git clone git@github.com:tomschall/mumble-test-stack-yeahyeahyeah.git folder-name
```

Follow the steps [Add credentials](#add-credentials), if you don't have access to the [mumble npm package](https://github.com/smartive-education/design-system-component-library-yeahyeahyeah/pkgs/npm/design-system-component-library-yeahyeahyeah).

From within the new folder, run `yarn install && yarn dev` to start the dev server.

## Install a demo app step by step with Twin + Next.js + Styled Components + TypeScript + Mumble Component Library

### Install Next.js

Please use node version 16.17.0. If you use nvm u can use the next command.

```shell
nvm use 16.17.0
```

Then add a Next.js App

```shell
yarn create next-app --typescript
```

### Add credentials for accessing the Mumble component Library NPM package

Follow the steps [Add credentials](#add-credentials), if you don't have access to the [mumble npm package](https://github.com/smartive-education/design-system-component-library-yeahyeahyeah/pkgs/npm/design-system-component-library-yeahyeahyeah).

### Install Mumble Component Library and Styled Components

```shell
yarn add styled-components @smartive-education/design-system-component-library-yeahyeahyeah@latest
```

### Install Dependencies

```shell
yarn add twin.macro tailwindcss babel-plugin-macros babel-plugin-twin @types/styled-components @babel/core babel-loader @babel/plugin-syntax-typescript --dev
```

### Add the global styles

Twin uses the same [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles along with some @keyframes for the animation classes and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) and box-shadows work.

> Due to an issue in styled-components, global styles get added in the wrong order when using styled-components. This gives the tailwind base styles an incorrect specificity.  
> Until [the issue](https://github.com/styled-components/styled-components/issues/3146) is fixed, the workaround is to export the styles from another file.

You can import `GlobalStyles` within a new file placed in `styles/GlobalStyles.tsx`:

The `GlobalStyles as MumbleStyles` import adds Mumble Global CSS settings and all font faces for `Poppins` - it includes all CSS vars and body styles that are needed for Mumble

```js
// styles/GlobalStyles.tsx
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';
import { MumbleStyles } from '@smartive-education/design-system-component-library-yeahyeahyeah';

const CustomStyles = createGlobalStyle({
  body: {},
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <MumbleStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
```

All you have to do now is to import the GlobalStyles in `pages/_app.tsx` and add the component to get rendered:

```js
// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
);

export default App;
```

### Add the twin config

Twin’s config must be added.

We add it to `package.json`:

Here we use the tailwind.config.js from our mumble npm package

```js
// package.json
"babelMacros": {
  "twin": {
    "config": "node_modules/@smartive-education/design-system-component-library-yeahyeahyeah/tailwind.config.js",
    "preset": "styled-components"
  }
},
```

### Add the typeScript types

Create a `types/twin.d.ts` file and add these declarations:

```typescript
// types/twin.d.ts
import 'twin.macro';
import styledImport, { CSSProp, css as cssImport } from 'styled-components';

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
    tw?: string;
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp;
    tw?: string;
  }
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string | Element;
    }
  }
}
```

### Add the babel config

Create a new file either in the root or in a `config`
subfolder:

```js
// withTwin.js
const path = require('path');

// The folders containing files importing twin.macro
// We have to add the mumble npm package also, because we also import twin.macro inside the package
const includedDirs = [
  path.resolve(__dirname, 'pages'),
  path.resolve(__dirname, 'styles'),
  path.resolve(__dirname, 'node_modules/@smartive-education/design-system-component-library-yeahyeahyeah/dist'),
];

module.exports = function withTwin(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      const { dev, isServer } = options;
      config.module = config.module || {};
      config.module.rules = config.module.rules || [];
      config.module.rules.push({
        // mumble npm package components are pure js files, therefor js has also to be included
        test: /\.(tsx|ts|jsx)$/,
        include: includedDirs,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: dev,
              plugins: [
                require.resolve('babel-plugin-twin'),
                require.resolve('babel-plugin-macros'),
                [require.resolve('babel-plugin-styled-components'), { ssr: true, displayName: true }],
                [require.resolve('@babel/plugin-syntax-typescript'), { isTSX: true }],
              ],
            },
          },
        ],
      });

      if (!isServer) {
        config.resolve.fallback = {
          ...(config.resolve.fallback || {}),
          fs: false,
          module: false,
          path: false,
          os: false,
          crypto: false,
        };
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      } else {
        return config;
      }
    },
  };
};
```

Then in your `next.config.js`, import and wrap the main export with `withTwin(...)`:

```js
// next.config.js
const withTwin = require('./withTwin.js');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  reactStrictMode: true, // < Recommended by Next
  // ...
});
```

### Add the server stylesheet

To avoid the ugly Flash Of Unstyled Content (FOUC), add a server stylesheet in `pages/_document.tsx` that gets read by Next.js:

```js
// pages/_document.tsx
import React from 'react';
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}
```

### Add a navigation

To see a nice navigation on the demo page, add following code to `pages/includes/navi.tsx`.

```js
import Link from 'next/link';
import { Navigation } from '@smartive-education/design-system-component-library-yeahyeahyeah';

export default function Navi() {
  const handleAvatar = () => {
    console.log('avatar clicked');
  };
  return (
    <>
      <div tw="flex flex-row justify-start items-center font-medium p-16 gap-16">
        <Link href={'/'}>Timeline</Link>
      </div>
      <div tw="w-full mb-32">
        <Navigation
          avatar={{
            avatar: {
              alt: 'Alternative text',
              src: 'https://media.giphy.com/media/3oEduQAsYcJKQH2XsI/giphy.gif',
              variant: 'small',
            },
            fCallBack: () => console.log('avatar clicked'),
            label: 'Profile',
            variant: 'profile',
          }}
          logo={{
            fCallBack: () => console.log('logo clicked'),
            href: '#',
            title: 'Mumble Logo',
          }}
          logout={{
            fCallBack: () => console.log('logout clicked'),
            icon: 'logout',
            label: 'Logout',
            variant: 'default',
          }}
          settings={{
            fCallBack: () => console.log('settings clicked'),
            icon: 'settings',
            label: 'Settings',
            variant: 'default',
          }}
        />
      </div>
    </>
  );
}

```

### Add a demo site

To see a nice mumble demo site, add following code to `pages/index.tsx`.

```js
import Navi from './includes/navi';
import { Mumble, TextBox, Heading, Container } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import { useEffect, useState } from 'react';

export default function Timeline() {
  const [posts, setPosts] = useState(['']);
  const [ref, setRef] = useState<React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null> | null>(null);
  const [text, setText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  useEffect(() => {
    console.log('text', text);
    if (text !== '') {
      setErrorMessage('');
    }
  }, [text]);

  const handleSend = () => {
    if (ref?.current) ref.current.value = '';
    addText();
  };

  const addText = () => {
    if (text === '') {
      setErrorMessage('Bitte füllen Sie das Feld aus.');
      return;
    }

    if (posts[0] === '') {
      setPosts([text]);
      setText('');
      return;
    }
    setPosts([...posts, text]);
    setText('');
  };

  const handleUpload = () => {
    console.log('upload');
  };

  return (
    <>
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64">
        <Navi />
        <Container layout="plain">
          <Heading label="Willkommen auf Mumble" color="violet" tag="h2" size="default" mbSpacing="32" />
          <Heading
            label="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
            color="light"
            tag="h4"
            size="default"
            mbSpacing="32"
          />
        </Container>
        <Container layout="plain">
          <div tw="mb-32">
            <TextBox
              variant="write"
              user={{
                label: 'Hey, was läuft?',
                username: {
                  type: 'joined',
                  label: 'Username',
                  href: '#',
                },
                avatar: {
                  src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                  alt: 'Family Guy goes Mumble',
                },
              }}
              form={{
                errorMessage: errorMessage,
                placeholder: 'Hast du uns etwas mitzuteilen ?',
                setRef: setRef,
                setText: setText,
              }}
              sendCallback={handleSend}
              uploadCallback={handleUpload}
            />
          </div>
          {posts
            .slice(0)
            .reverse()
            .map((post, i) => {
              return (
                <Mumble
                  key={i}
                  comment={{
                    fCallBack: () => console.log('comment clicked'),
                    quantity: 0,
                  }}
                  img={{
                    alt: 'This is a profile picture!',
                    fCallBack: () => console.log('img clicked'),
                    src: 'https://picsum.photos/640/360',
                  }}
                  like={{
                    fCallBack: () => console.log('like clicked'),
                    quantity: 999,
                  }}
                  mbSpacing="32"
                  share={{
                    fCallBack: () => console.log('share clicked'),
                    label: 'Share',
                  }}
                  text={post}
                  user={{
                    avatar: {
                      alt: 'avatar',
                      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                      imageCallBack: () => console.log('avatar clicked'),
                    },
                    joined: {
                      fCallBack: () => console.log('joined clicked'),
                      href: '',
                      label: 'Joined',
                      type: 'joined',
                    },
                    label: 'Display Name',
                    location: {
                      fCallBack: () => console.log('location clicked'),
                      href: '',
                      label: 'Location',
                      type: 'location',
                    },
                    timestamp: {
                      fCallBack: () => console.log('timestamp clicked'),
                      href: '',
                      label: 'Timestamp',
                      type: 'timestamp',
                    },
                    username: {
                      fCallBack: () => console.log('username clicked'),
                      href: '',
                      label: 'Username',
                      type: 'username',
                    },
                    variant: 'large',
                  }}
                  variant="timeline"
                />
              );
            })}
        </Container>
      </div>
    </>
  );
}
```

## Resources

- [Mumble Component Library Development](https://github.com/smartive-education/design-system-component-library-yeahyeahyeah)

### Customization of Twin

- [View the config options →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/options.md)
- [Customizing the tailwind config →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/customizing-config.md)

### Next steps with Twin

Learn how to work with twin

- [The prop styling guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/prop-styling-guide.md) - A must-read guide to level up on prop styling
- [The styled component guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/styled-component-guide.md) - A must-read guide on getting productive with styled-components

Learn more about styled-components

- [The css prop](https://styled-components.com/docs/api#css-prop)
- [The css import](https://styled-components.com/docs/api#css)
- [The styled import](https://styled-components.com/docs/api#styled)

### Other

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
- [Github](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-packages-from-other-organizations)

