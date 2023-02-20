import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { MumbleLogo, IMumbleLogoProps } from '../branding/MumbleLogo';
export interface INavigationProps {
  logo: Pick<IMumbleLogoProps, 'title' | 'href' | 'fCallBack'>;
  children?: React.ReactNode;
}

export const Navigation: React.FC<INavigationProps> = ({
  logo = {
    title: 'Mumble Logo',
    href: '#',
    fCallBack: () => {
      return null;
    },
  },
  children,
}) => {
  return (
    <>
      <HeaderStyles>
        <NavigationStyles>
          <Container>
            <Column>
              <MumbleLogo
                title={logo.title}
                href={logo.href}
                color="white"
                alignment="horizontal"
                fCallBack={logo.fCallBack}
                isNavigation={true}
              />
              <Row>{children}</Row>
            </Column>
          </Container>
        </NavigationStyles>
      </HeaderStyles>
    </>
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
