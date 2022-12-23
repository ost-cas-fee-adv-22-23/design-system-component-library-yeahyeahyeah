import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle({
  body: {
    // color: 'white',
    // WebkitTapHighlightColor: theme`colors.purple.500`,
    // ...tw`antialiased`,
    fontFamily: 'var(--font-family-base)',
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;