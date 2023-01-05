import React from 'react';
import tw, { GlobalStyles } from 'twin.macro';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle``;
interface IDefaultLayout {
  children: React.ReactElement;
}

export const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return (
    <StyledDefaultLayout>
      <GlobalStyles />
      <GlobalStyle />
      {children}
    </StyledDefaultLayout>
  );
};

const StyledDefaultLayout = styled.div(() => [
  tw`
    container
    mx-auto
    flex
    flex-col
    flex-wrap
    justify-center
    items-center
    p-8
    pt-16

    sm:p-16
    md:p-32
  `,
]);
