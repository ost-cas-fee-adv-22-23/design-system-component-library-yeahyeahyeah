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
      <div
        css={`
          background-color: blue;
          color: white;
          ${tw`text-xl`}
        `}
      >
        this is the css prop mixed with plain css and twin.macro
      </div>
      <div tw={'w-96 h-96 bg-violet-700 text-slate-white'}>this is the tw prop</div>
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
