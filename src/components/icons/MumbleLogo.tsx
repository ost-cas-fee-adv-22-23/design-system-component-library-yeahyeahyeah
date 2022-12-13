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
  width: 'w-full' | 'w-1/2';
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
  width,
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
        className={width}
        target={'_self'}
        onClick={fCallBack}
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
  className: string;
  variant: string;
}

const MumbleLogoStyled = styled.a(
  ({ alignment, variant, className }: IMumbleLogoStyled) => [
    tw`
    flex
    justify-between
    items-center
    p-8
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
      svg:first-of-type {
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
