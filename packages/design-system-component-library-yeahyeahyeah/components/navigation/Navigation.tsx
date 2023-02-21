import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import type { TmbSpacing } from '../../types/types';
import { BottomSpacing } from '../../styles/Spacing';
import { NavigationContainer } from './NavigationStyles';

export type NavigationProps = {
  children?: React.ReactNode;
  mbSpacing?: TmbSpacing;
};

export const Navigation = ({ children, mbSpacing }: NavigationProps) => {
  return (
    <HeaderStyles mbSpacing={mbSpacing}>
      <NavigationStyles>
        <NavigationContainer>{children}</NavigationContainer>
      </NavigationStyles>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.header(() => [
  tw`
    w-full    
	`,
  BottomSpacing,
]);

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
