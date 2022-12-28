import { useState } from 'react';
import styled from 'styled-components';
import tw, { TwStyle } from 'twin.macro';
import { MumbleText, MumbleGradient, LogoMumble } from '../icons/components';

export interface IMumbleLogoProps extends React.HTMLAttributes<HTMLOrSVGImageElement> {
  title: string;
  href: string;
  variant: 'violet' | 'gradient' | 'white';
  alignment: 'horizontal' | 'vertical';
  fCallBack?: () => void;
  isNavigation?: boolean;
}

export const MumbleLogo: React.FC<IMumbleLogoProps> = ({
  title,
  href,
  variant,
  alignment,
  fCallBack,
  isNavigation = true,
}: IMumbleLogoProps) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <MumbleLogoStyledLink
        title={title}
        href={href}
        target={'_self'}
        onClick={fCallBack}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <MumbleLogoStyledDiv alignment={alignment}>
          <StyledLogoMumble variant={variant} hover={hover} isNavigation={isNavigation} />

          {variant !== 'gradient' ? (
            <StyledMumbleText variant={variant} isNavigation={isNavigation} alignment={alignment} hover={hover} />
          ) : (
            <StyledMumbleGradient isNavigation={isNavigation} alignment={alignment} hover={hover} />
          )}
        </MumbleLogoStyledDiv>
      </MumbleLogoStyledLink>
    </>
  );
};

interface IMumbleLogoStyled {
  alignment?: string;
  variant?: string;
  isNavigation?: boolean;
  hover?: boolean;
}

const MumbleLogoStyledDiv = styled.div(({ alignment }: IMumbleLogoStyled) => [
  tw`
    flex
    justify-between
    items-center
    p-0
    cursor-pointer
    h-[100%]
  `,
  alignment === 'vertical' && tw`flex-col`,
  alignment === 'horizontal' && tw`flex-row`,
]);

const MumbleLogoStyledLink = styled.a(() => [
  tw`
    cursor-pointer
  `,
]);

const StyledLogoMumble = styled(LogoMumble)(({ variant, hover, isNavigation }: IMumbleLogoStyled) => [
  tw`fill-violet-600`,
  isNavigation ? tw`w-64 h-40 ` : tw`w-64 h-64 `,
  IconColor(variant, hover),
]);

const StyledMumbleText = styled(MumbleText)(({ alignment, isNavigation, variant, hover }: IMumbleLogoStyled) => [
  isNavigation ? tw`h-[30px] w-[154px]` : tw`h-[48px] w-[246px]`,
  TextSvgStyles(alignment, isNavigation),
  IconColor(variant, hover),
]);

const StyledMumbleGradient = styled(MumbleGradient)(({ alignment, isNavigation }: IMumbleLogoStyled) => [
  isNavigation ? tw`h-[30px] w-[154px]` : tw`h-[48px] w-[246px]`,
  TextSvgStyles(alignment, isNavigation),
]);

const IconColor = (variant?: string, hover?: boolean) => {
  let hoverColor: TwStyle;
  let defaultColor: TwStyle;

  switch (variant) {
    case 'violet':
      defaultColor = tw`fill-violet-600`;
      hoverColor = tw`fill-violet-700`;
      return hover ? hoverColor : defaultColor;
    case 'gradient':
      defaultColor = tw`fill-violet-600`;
      hoverColor = tw`fill-violet-700`;
      return hover ? hoverColor : defaultColor;
    case 'white':
      defaultColor = tw`fill-slate-100`;
      hoverColor = tw`fill-slate-300`;
      return hover ? hoverColor : defaultColor;
  }
  return null;
};

const TextSvgStyles = (alignment?: string, isNavigation?: boolean) => {
  switch (alignment) {
    case 'horizontal':
      return isNavigation ? (tw`ml-2 ` as TwStyle) : (tw`ml-24 ` as TwStyle);
    case 'vertical':
      return isNavigation ? (tw`mt-8` as TwStyle) : (tw`mt-16` as TwStyle);
  }
  return null;
};
