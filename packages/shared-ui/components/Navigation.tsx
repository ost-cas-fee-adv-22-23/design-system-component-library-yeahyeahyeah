import styled from 'styled-components';
import tw from 'twin.macro';
import { MumbleLogo, IMumbleLogoProps } from './branding/MumbleLogo';
import { NaviButton, INaviButtonProps } from './buttons/NaviButton';

export interface INavigationProps extends React.ReactElement<HTMLDivElement> {
  logo: IMumbleLogoProps;
  avatar: INaviButtonProps;
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
      <NavigationStyles>
        <Container>
          <Column>
            <MumbleLogo
              title={logo.title}
              href={logo.href}
              variant="white"
              alignment="horizontal"
              fCallBack={logo.fCallBack}
              isNavigation={true}
            />
            <Row>
              <NaviButton variant={avatar.variant} label={avatar.label} fCallBack={avatar.fCallBack} />
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
    </>
  );
};

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
