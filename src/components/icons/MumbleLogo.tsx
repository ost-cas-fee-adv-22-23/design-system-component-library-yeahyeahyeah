import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { MumbleText, LogoMumble, MumbleGradient } from './icons';

export interface IIcon extends React.HTMLAttributes<HTMLOrSVGImageElement> {
  title: string;
  href: string;
  variant: 'violet' | 'gradient' | 'white';
  alignment: 'horizontal' | 'vertical';
  iconColor: string | undefined;
  iconWidth?: string | undefined;
  iconHeight?: string | undefined;
  fCallBack?: () => void;
}

export const MumbleLogo: React.FC<IIcon> = ({
  title,
  href,
  variant,
  alignment,
  iconColor,
  fCallBack,
}: IIcon) => {
  return (
    <>
      <MumbleLogoStyled
        title={title}
        href={href}
        variant={variant}
        alignment={alignment}
        target={'_self'}
        onClick={fCallBack}
      >
        <LogoMumble className={iconColor} />
        {variant === 'violet' && <MumbleText className={iconColor} />}
        {variant === 'white' && <MumbleText className={iconColor} />}
        {variant === 'gradient' && <MumbleGradient className={iconColor} />}
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
    p-0
    cursor-pointer
    w-[200px]
  `,
    alignment === 'vertical' && tw`flex-col`,
    alignment === 'vertical' &&
      css`
        svg {
          margin-bottom: 16px;
        }
      `,
    alignment === 'horizontal' && tw`flex-row`,
    alignment === 'horizontal' &&
      css`
        svg:first-of-type {
          margin-right: 16px;
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
    variant === 'white' &&
      css`
        > svg {
          fill: white;
        }
      `,
    css`
      svg {
        width: auto;
      }
      svg:first-of-type {
        width: 30%;
      }
    `,
  ],
);
