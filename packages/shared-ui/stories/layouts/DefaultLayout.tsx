import React from 'react';
import styled from 'styled-components';
import tw, { GlobalStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle``;
interface IDefaultLayout {
  children: React.ReactElement;
}

export const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return (
    <StyledDefaultLayout>
      <GlobalStyles />
      <div
        css={`
          background-color: blue;
        `}
      >
        this is the css prop
      </div>
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
    w-full
    p-0
    pt-32
  `,
]);
