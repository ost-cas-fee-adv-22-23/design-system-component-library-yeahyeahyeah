import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import {
  MumbleText,
  LogoMumble,
  MumbleGradient,
} from '../../stories/assets/icons';

export interface IIcon extends React.HTMLAttributes<HTMLOrSVGImageElement> {
  title: string;
  href: string;
  variant: 'violet' | 'gradient';
  alignment: 'horizontal' | 'vertical';
  iconColor: string | undefined;
  iconWidth?: string | undefined;
  iconHeight?: string | undefined;
  handleClick?: () => void;
}

export const MumbleLogo: React.FC<IIcon> = ({
  title,
  href,
  variant,
  alignment,
  iconColor,
  iconWidth = 'auto',
  iconHeight = '26.03px',
  handleClick,
}: IIcon) => {
  return (
    <>
      <MumbleLogoStyled
        title={title}
        href={href}
        variant={variant}
        alignment={alignment}
        target={'_self'}
        onClick={() => 'handleClick'}
      >
        <LogoMumble className={iconColor} width={'64px'} height={'64px'} />
        {variant === 'violet' && (
          <MumbleText
            className={iconColor}
            width={iconWidth}
            height={iconHeight}
          />
        )}
        {variant === 'gradient' && (
          <MumbleGradient
            className={iconColor}
            width={iconWidth}
            height={iconHeight}
          />
        )}
      </MumbleLogoStyled>
    </>
  );
};

interface IMumbleLogoStyled {
  alignment: string;
  variant: string;
}

const MumbleLogoStyled = styled.a(
  ({ alignment, variant }: IMumbleLogoStyled) => [
    tw`
    flex
    justify-center
    items-center
    p-8

    cursor-pointer
  `,
    alignment === 'vertical' && tw`flex-col gap-16`,
    alignment === 'horizontal' && tw`flex-row gap-24`,
    variant === 'violet' &&
      css`
        &:hover {
          > svg {
            fill: white;
          }
        }
      `,
  ],
);
