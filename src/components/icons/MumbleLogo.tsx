import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { MumbleText, Mumble } from '../../stories/assets/icons';

export interface IIcon extends React.HTMLAttributes<HTMLOrSVGImageElement> {
  variant: 'violet' | 'gradient';
  alignment: 'horizontal' | 'vertical';
  iconColor: string | undefined;
  iconWidth?: string | undefined;
  iconHeight?: string | undefined;
  handleClick?: () => void;
}

export const MumbleLogo: React.FC<IIcon> = ({
  variant = 'violet',
  alignment = 'vertical',
  iconColor = 'fill-violet-600 hover:fill-violet-700',
  iconWidth = 'auto',
  iconHeight = '26.03px',
  handleClick,
}: IIcon) => {
  return (
    <>
      <MumbleLogoStyled
        variant={variant}
        alignment={alignment}
        onClick={() => 'handleClick'}
      >
        <Mumble className={iconColor} width={'64px'} height={'64px'} />
        <MumbleText
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
        />
      </MumbleLogoStyled>
    </>
  );
};

interface IMumbleLogoStyled {
  alignment: string;
  variant: string;
}

const MumbleLogoStyled = styled.a(
  ({ variant, alignment }: IMumbleLogoStyled) => [
    tw`
    flex
    justify-center
    items-center
    p-8

    cursor-pointer
  `,
    css`
      &:hover {
        > svg {
          fill: white;
        }
      }
    `,
    alignment === 'vertical' && tw`flex-col gap-16`,
    alignment === 'horizontal' && tw`flex-row gap-24`,
    variant === 'gradient' &&
      css`
        svg:nth-of-type(2n) {
          background: linear-gradient(90deg, #ec4899 0%, #7c3aed 100%);
        }
      `,
  ],
);
