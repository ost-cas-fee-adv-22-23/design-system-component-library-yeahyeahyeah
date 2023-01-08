import '../styles/tailwind.css';
import '@storybook/addon-console';
import { configureActions } from '@storybook/addon-actions';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  matchers: {
    color: /(background|color)$/i,
    date: /Date$/,
  },
  options: {
    storySort: {
      order: ['Branding', 'Mumble', 'Write-Component', 'Typography', 'Navigation', 'Form', 'Interactions', 'Icons'],
    },
  },
  layout: 'fullscreen',
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#e2e8f0',
      },
      {
        name: 'standard',
        value: '#0F172A',
      },
    ],
  },
};

configureActions({
  clearOnStoryChange: true,
});
