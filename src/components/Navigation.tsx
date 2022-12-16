import styled from 'styled-components';
import tw from 'twin.macro';
import { MumbleLogo } from 'src/components/icons/MumbleLogo';
import { NaviButton } from 'src/components/buttons/NaviButton';
import { ProfilePicture } from 'src/components/ProfilePicture';

export interface INavigationProps extends React.ReactElement<HTMLDivElement> {
  children?: React.ReactNode;
  title: string;
  fCallBack?: () => void;
}

export const Navigation: React.FC<INavigationProps> = () => {
  return (
    <>
      <NavigationStyles>
        <div className="flex flex-col sm:flex-row justify-center items-center container">
          <div className="flex justify-between w-full">
            <MumbleLogo
              alignment="horizontal"
              href="#"
              iconColor="fill-slate-white"
              iconWidth="auto"
              title="Homepage"
              variant="violet"
            />
            <div className="flex flex-col sm:flex-row gap-32 justify-between items-center">
              <ProfilePicture
                alt="This is a profile picture!"
                fCallBack={() => {}}
                size="small"
                src="https://i.stack.imgur.com/5xd5n.png?s=256&g=1"
              />
              <NaviButton icon="settings" label="Settings" variant="label" />
              <NaviButton icon="logout" label="Logout" variant="label" />
            </div>
          </div>
        </div>
      </NavigationStyles>
    </>
  );
};

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
