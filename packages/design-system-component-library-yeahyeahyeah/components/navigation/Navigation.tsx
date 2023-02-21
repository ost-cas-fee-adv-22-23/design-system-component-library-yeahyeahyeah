import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export type NavigationProps<T> = {
  title: 'Mumble Logo';
  onLogoClick?: () => void;
  logo: FC<T>;
  children?: React.ReactNode;
};

export const Navigation = ({ title, logo: Logo, children, onLogoClick }: NavigationProps<any>) => {
  return (
    <HeaderStyles>
      <NavigationStyles>
        <Container>
          <Column>
            <Logo title={title} onLogoClick={onLogoClick} />
            <Row>{children}</Row>
          </Column>
        </Container>
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

const Column = tw.div`
  flex
  justify-between
  items-center
  w-full
`;

const Row = tw.div`
  flex
  flex-row
  justify-between
  items-center

  gap-0
  sm:gap-16
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
