import { useState } from 'react';
import tw, { styled, TwStyle } from 'twin.macro';
import { MumbleText, MumbleGradient, LogoMumble } from '../icons/components';

export interface IMumbleLogoProps extends React.HTMLAttributes<HTMLOrSVGImageElement> {
  title: string;
  href: string;
  variant: 'violet' | 'gradient' | 'white';
  alignment: 'horizontal' | 'vertical';
  fCallBack?: () => void;
  isNavigation?: boolean;
}

export const MumbleLogo: React.FC<IMumbleLogoProps> = (props: IMumbleLogoProps) => {
  const {
    title = 'Mumble Logo',
    href = '#',
    variant = 'white',
    alignment = 'horizontal',
    fCallBack,
    isNavigation = true,
  } = props;
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
          <StyledLogoMumble
            variant={variant}
            hover={hover ? 'true' : 'false'}
            navigation={isNavigation ? 'true' : 'false'}
          />

          {variant !== 'gradient' ? (
            <StyledMumbleText
              variant={variant}
              navigation={isNavigation ? 'true' : 'false'}
              alignment={alignment}
              hover={hover ? 'true' : 'false'}
            />
          ) : (
            <StyledMumbleGradient
              navigation={isNavigation ? 'true' : 'false'}
              alignment={alignment}
              hover={hover ? 'true' : 'false'}
            />
          )}
        </MumbleLogoStyledDiv>
      </MumbleLogoStyledLink>
    </>
  );
};

interface IMumbleLogoStyled {
  alignment?: string;
  variant?: string;
  navigation?: string;
  hover?: string;
}

const MumbleLogoStyledDiv = styled.div(({ alignment }: IMumbleLogoStyled) => [
  tw`
    flex
    justify-between
    items-center
    p-0
    cursor-pointer
    w-[130px]
    sm:w-auto
  `,
  alignment === 'vertical' && tw`flex-col`,
  alignment === 'horizontal' && tw`flex-row`,
]);

const MumbleLogoStyledLink = styled.a(() => [
  tw`
    cursor-pointer
  `,
]);

const StyledLogoMumble = styled(LogoMumble)(({ variant, hover, navigation }: IMumbleLogoStyled) => [
  tw`fill-violet-600`,
  navigation === 'true' ? tw`w-48 h-48` : tw`w-64 h-64 `,
  IconColor(variant, hover),
]);

const StyledMumbleText = styled(MumbleText)(({ alignment, navigation, variant, hover }: IMumbleLogoStyled) => [
  navigation === 'true' ? tw`h-[30px] w-[154px]` : tw`h-[48px] w-[246px]`,
  TextSvgStyles(alignment, navigation),
  IconColor(variant, hover),
]);

const StyledMumbleGradient = styled(MumbleGradient)(({ alignment, navigation }: IMumbleLogoStyled) => [
  navigation === 'true' ? tw`h-[30px] w-[154px]` : tw`h-[48px] w-[246px]`,
  TextSvgStyles(alignment, navigation),
]);

const IconColor = (variant?: string, hover?: string) => {
  let hoverColor: TwStyle;
  let defaultColor: TwStyle;

  switch (variant) {
    case 'violet':
      defaultColor = tw`fill-violet-600`;
      hoverColor = tw`fill-slate-white`;
      return hover === 'true' ? hoverColor : defaultColor;
    case 'gradient':
      defaultColor = tw`fill-violet-600`;
      hoverColor = tw`fill-slate-white`;
      return hover === 'true' ? hoverColor : defaultColor;
    case 'white':
      defaultColor = tw`fill-slate-white`;
      hoverColor = tw`fill-slate-300`;
      return hover === 'true' ? hoverColor : defaultColor;
  }
  return null;
};

const TextSvgStyles = (alignment?: string, navigation?: string) => {
  switch (alignment) {
    case 'horizontal':
      return navigation === 'true' ? (tw`ml-8 sm:ml-16` as TwStyle) : (tw`ml-8 sm:ml-16 ` as TwStyle);
    case 'vertical':
      return navigation === 'true' ? (tw`mt-8` as TwStyle) : (tw`mt-16` as TwStyle);
  }
  return null;
};
