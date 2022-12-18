import '../src/styles/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  matchers: {
    color: /(background|color)$/i,
    date: /Date$/,
  },
  options: {
    storySort: {
      order: [
        'Branding',
        'Mumble',
        'Write-Component',
        'Typography',
        'Navigation',
        'Form',
        'Interactions',
        'Icons',
      ],
    },
  },
  layout: 'fullscreen',
  backgrounds: {
    values: [
      {
        name: 'default',
        value: '#0F172A',
      },
      {
        name: 'standard',
        value: '#e5e5e5',
      },
    ],
  },
};
