import tw, { styled, TwStyle } from 'twin.macro';
import React, { useState } from 'react';
import { Profile, Time, Location, Calendar } from './icons/index';
import NextLink, { LinkProps } from 'next/link';

export interface IIconLinkProps extends React.HtmlHTMLAttributes<HTMLLinkElement> {
  label: string;
  type: 'username' | 'timestamp' | 'location' | 'joined';
  variant?: 'slate' | 'violet';
  href: string;
  fCallBack?: () => void;
  link?: LinkProps;
}

export const IconLink: React.FC<IIconLinkProps> = ({
  label = 'username',
  type = 'username',
  variant = 'violet',
  href = '#',
  fCallBack,
  link,
}) => {
  const [hover, setHover] = useState<boolean>(false);

  const getIcon = () => {
    switch (type) {
      case 'username':
        return <StyledProfile variant={variant} hover={hover ? 'true' : 'false'} />;
      case 'timestamp':
        return <StyledTime variant={variant} hover={hover ? 'true' : 'false'} />;
      case 'location':
        return <StyledLocaton variant={variant} hover={hover ? 'true' : 'false'} />;
      case 'joined':
        return <StyledCalendar variant={variant} hover={hover ? 'true' : 'false'} />;
      default:
        return null;
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    fCallBack && fCallBack();
  };

  return link ? (
    <NextLink
      as={link.as as string}
      href={link.href}
      passHref={link.passHref}
      replace={link.replace}
      scroll={link.scroll}
      shallow={link.shallow}
    >
      <IconLinkDivStyles variant={variant} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {getIcon()}
        {label}
      </IconLinkDivStyles>
    </NextLink>
  ) : (
    <IconLinkStyles
      variant={variant}
      onClick={(event: React.MouseEvent) => {
        handleClick(event);
      }}
      target="_new"
      title={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={href}
    >
      {getIcon()}
      {label}
    </IconLinkStyles>
  );
};

interface IStyleProps {
  variant?: string;
  hover?: string;
}

const defaultStyles = tw`
  flex
  flex-row
  text-xs
  font-semibold
  leading-normal
  cursor-pointer
`;

const IconLinkStyles = styled.a(({ variant }: IStyleProps) => [
  defaultStyles,
  variant === 'slate' && tw`text-slate-400 hover:(text-slate-600)`,
  variant === 'violet' && tw`text-violet-600 hover:(text-violet-900)`,
]);

const IconLinkDivStyles = styled.div(({ variant }: IStyleProps) => [
  defaultStyles,
  variant === 'slate' && tw`text-slate-400 hover:(text-slate-600)`,
  variant === 'violet' && tw`text-violet-600 hover:(text-violet-900)`,
]);

const IconColor = (variant?: string, hover?: string) => {
  let hoverColor: TwStyle;
  let defaultColor: TwStyle;

  switch (variant) {
    case 'slate':
      hoverColor = tw`fill-slate-600`;
      defaultColor = tw`fill-slate-400`;
      return hover === 'true' ? hoverColor : defaultColor;
    case 'violet':
      hoverColor = tw`fill-violet-900`;
      defaultColor = tw`fill-violet-600`;
      return hover === 'true' ? hoverColor : defaultColor;
  }
  return null;
};

const StyledProfile = styled(Profile)(({ variant, hover }: IStyleProps) => [
  tw`w-12 h-12 mr-6 mt-1`,
  IconColor(variant, hover),
]);

const StyledTime = styled(Time)(({ variant, hover }: IStyleProps) => [tw`w-12 h-12 mr-6 mt-1`, IconColor(variant, hover)]);

const StyledLocaton = styled(Location)(({ variant, hover }: IStyleProps) => [
  tw`w-12 h-12 mr-6 mt-1`,
  IconColor(variant, hover),
]);

const StyledCalendar = styled(Calendar)(({ variant, hover }: IStyleProps) => [
  tw`w-12 h-12 mr-6 mt-1`,
  IconColor(variant, hover),
]);
