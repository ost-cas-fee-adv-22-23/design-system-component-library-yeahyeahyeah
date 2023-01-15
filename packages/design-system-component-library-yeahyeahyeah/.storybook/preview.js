import '@storybook/addon-console';
import { configureActions } from '@storybook/addon-actions';
import GlobalStyles from '../stories/layouts/GlobalStyles';

export const parameters = {
  layout: 'fullscreen',
  matchers: {
    color: /(background|color)$/i,
    date: /Date$/,
  },
  options: {
    storySort: {
      order: ['Guidelines', 'Branding', 'Mumble', 'Typography', 'Navigation', 'Form', 'Interactions', 'Icons'],
    },
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#e2e8f0',
      },
      {
        name: 'dark',
        value: '#0F172A',
        appBg: '#F1F5F9',
      },
    ],
  },
};

configureActions({
  clearOnStoryChange: true,
});

export const decorators = [
  (Story, args) => {
    if (args.name === 'Welcome') {
      return (
        <div tw="container">
          <GlobalStyles />
          <Story />
        </div>
      );
    }
    if (args.name === 'Navigation') {
      return (
        <div tw="flex flex-row flex-wrap justify-center items-start w-full h-full p-0 m-0">
          <GlobalStyles />
          <Story />
        </div>
      );
    }
    if (args.name === 'Icons') {
      return (
        <div tw="flex flex-row flex-wrap justify-center items-start w-full h-full p-0 m-0">
          <GlobalStyles />
          <Story />
        </div>
      );
    }
    return (
      <div tw="container mx-auto flex flex-col flex-wrap justify-center items-center mx-2 sm:mx-auto mt-32">
        <GlobalStyles />
        <Story />
      </div>
    );
  },
];
