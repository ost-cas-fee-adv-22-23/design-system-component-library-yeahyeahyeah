import styled from 'styled-components';
import tw from 'twin.macro';
import { IIcon } from 'src/components/icons/Icon';
import { MumbleLogo } from './icons/MumbleLogo';

export interface INavigationProps extends React.ReactElement<HTMLDivElement> {
  children?: React.ReactNode;
  title: string;
  iconName: IIcon;
}

export const Navigation: React.FC<INavigationProps> = () => {
  return (
    <>
      <NavigationStyles>
        <div className="flex justify-center items-center">
          <div className="flex justify-between w-[680px]">
            <MumbleLogo
              alignment="horizontal"
              href="#"
              iconColor="fill-slate-white"
              iconWidth="auto"
              title="Homepage"
              variant="violet"
            />
            <MumbleLogo
              alignment="horizontal"
              href="#"
              iconColor="fill-slate-white"
              iconWidth="auto"
              title="Homepage"
              variant="violet"
            />
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
