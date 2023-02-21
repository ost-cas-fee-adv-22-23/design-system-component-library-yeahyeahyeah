import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { NavigationContainer } from './NavigationStyles';

export type NavigationProps = {
  children?: React.ReactNode;
};

export const Navigation = ({ children }: NavigationProps) => {
  return (
    <HeaderStyles>
      <NavigationStyles>
        <NavigationContainer>{children}</NavigationContainer>
      </NavigationStyles>
    </HeaderStyles>
  );
};

const HeaderStyles = tw.header`
  w-full
`;

const NavigationStyles = styled.nav(() => [
  tw`
    flex
    flex-row
    justify-center
    items-center
    w-full
    bg-violet-600
    h-[80px]    
	`,
]);
