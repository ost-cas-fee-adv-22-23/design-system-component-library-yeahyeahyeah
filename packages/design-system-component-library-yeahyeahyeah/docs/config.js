import resolveConfig from 'tailwindcss/resolveConfig';
import mumbleTheme from '../../../tailwind.config';
export const { theme } = resolveConfig(mumbleTheme);

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
  buttonColors: {
    slate: {
      title: 'Slate Button',
      subtitle: 'Default and hover state',
      colors: {
        ['default: slate 600']: theme.colors.slate[600],
        ['hover: slate 700']: theme.colors.slate[700],
      },
    },
    violet: {
      title: 'Violet Button',
      subtitle: 'Default and hover state',
      colors: {
        ['default: violet 600']: theme.colors.violet[600],
        ['hover: slate 700']: theme.colors.violet[700],
      },
    },
    gradient: {
      title: 'Gradient Button',
      subtitle: 'Default and hover state',
      colors: {
        ['default: gradient']: ['linear-gradient(90deg, #ec4899 0%, #8b5cf6  70%)'],
        ['hover: gradient']: ['linear-gradient(90deg, #ec4899 0%, #8b5cf6  40%)'],
      },
    },
  },
  alertColor: {
    title: 'Alert color',
    subtitle: 'Form error color',
    colors: {
      ['alert: red']: theme.colors.red['DEFAULT'],
    },
  },
  fontColors: {
    title: 'Heading Colors',
    subtitle: 'Color variants',
    colors: {
      ['light: slate 500']: theme.colors.slate[500],
      ['medium: slate 600']: theme.colors.slate[600],
      ['dark: slate 900']: theme.colors.slate[900],
      ['violet: violet 600']: theme.colors.violet[600],
      ['pink: pink 900']: theme.colors.pink[900],
      ['white: slate white']: theme.colors.slate['white'],
    },
  },
  paragraphColors: {
    title: 'Paragraph Colors',
    subtitle: 'Color variants',
    colors: {
      ['light: slate 500']: theme.colors.slate[500],
      ['medium: slate 600']: theme.colors.slate[600],
      ['dark: slate 900']: theme.colors.slate[900],
    },
  },
};
