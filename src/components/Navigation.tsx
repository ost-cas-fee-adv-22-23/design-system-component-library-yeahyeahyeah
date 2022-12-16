import styled from 'styled-components';
import tw from 'twin.macro';
import { MumbleLogo } from 'src/components/icons/MumbleLogo';
import { NaviButton } from 'src/components/buttons/NaviButton';

export interface INavigationProps extends React.ReactElement<HTMLDivElement> {
  title: string;
  href: string;
  fCallBack?: () => void;
}

export const Navigation: React.FC<INavigationProps> = ({
  title,
  href,
  fCallBack,
}) => {
  return (
    <>
      <NavigationStyles>
        <Container>
          <Column>
            <MumbleLogo
              title={title}
              href={href}
              alignment="horizontal"
              iconColor="fill-slate-white"
              iconWidth="auto"
              variant="violet"
              onClick={fCallBack}
            />
            <Row>
              <NaviButton variant="profile" label="Profile" />
              <NaviButton icon="settings" label="Settings" variant="label" />
              <NaviButton icon="logout" label="Logout" variant="label" />
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
