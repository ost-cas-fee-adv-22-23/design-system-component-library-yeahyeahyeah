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
        <LogoMumble className={iconColor} width={'64px'} height={'auto'} />
        {variant === 'violet' && (
          <MumbleText className={iconColor} width={'246px'} height={'auto'} />
        )}
        {variant === 'gradient' && (
          <MumbleGradient
            className={iconColor}
            width={'246px'}
            height={'auto'}
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
    justify-between
    items-center
    p-8
    w-3/4
    cursor-pointer
  `,
    alignment === 'vertical' && tw`flex-col`,
    css`
      svg {
        margin-bottom: calc(1vh - 4px);
      }
    `,
    alignment === 'horizontal' && tw`flex-row`,
    css`
      svg {
        margin-right: 3vw;
      }
    `,
    variant === 'violet' &&
      css`
        &:hover {
          > svg {
            fill: white;
          }
        }
      `,
    css`
      svg {
        width: 100%;
      }
      svg:first-of-type {
        width: 30%;
      }
    `,
  ],
);
