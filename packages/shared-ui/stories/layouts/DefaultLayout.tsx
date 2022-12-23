import React from 'react';
import styled from 'styled-components';
import tw, { GlobalStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle``;
interface IDefaultLayout {
  children: React.ReactElement;
}

export const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  //const StyledDiv = tw.div`container mx-auto flex flex-col flex-wrap justify-center items-center w-full p-0 pt-32`;
  //console.log('StyledDiv', StyledDiv);
  return (
    <StyledDefaultLayout>
      <GlobalStyles />
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
