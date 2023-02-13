import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { MumbleLogo, IMumbleLogoProps } from '../branding/MumbleLogo';
import { NaviButton, INaviButtonProps } from '../button/NaviButton';
export interface INavigationProps {
  logo: Pick<IMumbleLogoProps, 'title' | 'href' | 'fCallBack'>;
  avatar: Pick<INaviButtonProps, 'label' | 'variant' | 'fCallBack' | 'avatar'>;
  settings: INaviButtonProps;
  logout: INaviButtonProps;
}

export const Navigation: React.FC<INavigationProps> = ({
  logo = {
    title: 'Mumble Logo',
    href: '#',
    fCallBack: () => {
      return null;
    },
  },
  avatar = {
    variant: 'profile',
    label: 'Profile',
    fCallBack: () => {
      return null;
    },
    avatar: {
      variant: 'small',
      src: 'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
      alt: 'Alternative text',
    },
  },
  settings = {
    icon: 'settings',
    label: 'Settings',
    variant: 'default',
    fCallBack: () => {
      return null;
    },
  },
  logout = {
    icon: 'logout',
    label: 'Logout',
    variant: 'default',
    fCallBack: () => {
      return null;
    },
  },
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
              <Row>
                <NaviButton
                  variant={avatar.variant}
                  label={avatar.label}
                  fCallBack={avatar.fCallBack}
                  avatar={avatar.avatar}
                />
                <NaviButton
                  icon={settings.icon}
                  label={settings.label}
                  variant={settings.variant}
                  fCallBack={settings.fCallBack}
                />
                <NaviButton icon={logout.icon} label={logout.label} variant={logout.variant} fCallBack={logout.fCallBack} />
              </Row>
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
