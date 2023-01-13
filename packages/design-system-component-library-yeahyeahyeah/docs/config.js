import resolveConfig from 'tailwindcss/resolveConfig';
import mumbleTheme from '../tailwind.config.js';
const { theme } = resolveConfig(mumbleTheme);

export const config = {
  brandingColor: {
    title: 'Primary colors',
    subtitle: 'Slate, Pink, Violet and Gradient',
    colors: {
      ['violet 700']: theme.colors.violet[700],
      ['pink 800']: theme.colors.pink[800],
      ['slate 600']: theme.colors.slate[600],
      gradient: ['linear-gradient(90deg, #ec4899 0%, #8b5cf6  70%)'],
    },
  },
  palettes: {
    violet: {
      title: 'Violet',
      subtitle: 'Color range',
      colors: theme.colors.violet,
    },
    pink: {
      title: 'Pink',
      subtitle: 'Color range',
      colors: theme.colors.pink,
    },
    slate: {
      title: 'Slate',
      subtitle: 'Color range',
      colors: theme.colors.slate,
    },
    gradient: {
      title: 'Gradient',
      subtitle: 'Linear gradient',
      colors: ['linear-gradient(90deg, #ec4899 0%, #8b5cf6  70%)'],
    },
  },
  themeBackground: {
    title: 'Background',
    subtitle: 'HTML Body Background Color',
    colors: [theme.colors.slate[200]],
  },
};
