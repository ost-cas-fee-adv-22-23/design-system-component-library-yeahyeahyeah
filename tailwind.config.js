/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-base)',
          light: 'var(--color-light)',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        full: '9999px',
      },
      borderWidth: {
        DEFAULT: '3px',
        4: '4px',
        none: 'transparent',
      },
      outlineWidth: {
        3: '3px',
      },
      backgroundImage: {
        'gradient-to-r-70':
          'linear-gradient(90deg, var(--color-gradient-pink) 0%, var(--color-gradient-violet) 70%)',
        'gradient-to-r-80':
          'linear-gradient(90deg, var(--color-gradient-pink) 0%, var(--color-gradient-violet) 40%)',
      },
    },
    fontWeight: {
      normal: '300',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1.125rem', { lineHeight: '1.575rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.5rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
    },
    lineHeight: {
      DEFAULT: '100%',
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '100%',
      relaxed: '125%',
      loose: '140%',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    colors: {
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      violet: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
      pink: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
