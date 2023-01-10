import '../../styles/tailwind.css';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  :root {
    /*
      @globals
      @desc colors
    */
    --color-base: #475569;
    --color-light: #ffffff;
    --color-border-light: #f1f5f9;
    --color-gradient-pink: #ec4899;
    --color-gradient-violet: #8b5cf6;
    --color-background-base: #e5e5e5;

    /*
      @Icon Link
      @desc SVG fill colors for slate and violet
    */
    --color-slate-icon: #94a3b8;
    --color-slate-icon-hover: #475569;
    --color-violet-icon: #7c3aed;
    --color-violet-icon-hover: #4c1d95;

    /* 
      @global
      @desc font defaults
    */
    --font-family-base: 'Poppins', sans-serif;
    --font-size-base: '1rem';
    --font-style: 'normal';
    --font-weight: 300;
    --font-letter-spacing: 0;
    --hyphens-base: 'auto';
    }
  body {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight);
    font-style: var(--font-style);
    letter-spacing: var(--font-letter-spacing);
    color: var(--color-base);
    hyphens: var(--hyphens-base);
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
