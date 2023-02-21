import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export type NavigationProps = {
  title: 'Mumble Logo';
  children?: React.ReactNode;
};

export const Navigation = ({ children }: NavigationProps) => {
  return (
    <HeaderStyles>
      <NavigationStyles>
        <Container>{children}</Container>
      </NavigationStyles>
    </HeaderStyles>
  );
};

const HeaderStyles = tw.header`
  w-full
`;

const Container = tw.div`
  flex
  flex-col
  sm:flex-row
  justify-center
  items-center
  container
  px-16
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
