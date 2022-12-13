import '../src/styles/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  matchers: {
    color: /(background|color)$/i,
    date: /Date$/,
  },
  options: {
    storySort: {
      order: ['Branding', 'Typography', 'Interactions', 'Icons', 'Form'],
    },
  },
  layout: 'fullscreen',
};
