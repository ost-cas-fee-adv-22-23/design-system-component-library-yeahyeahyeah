const path = require('path');

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-postcss',
  ],
  features: {
    interactionsDebugger: true, // 👈 Enable playback controls
  },
};
