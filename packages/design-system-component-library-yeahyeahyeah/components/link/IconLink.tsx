import tw, { styled, TwStyle } from 'twin.macro';
import React, { LinkHTMLAttributes, useState } from 'react';
import { Profile, Time, Location, Calendar } from '../icon/index';
import { Link, LinkProps } from './Link';

export type IconLinkProps<T> = {
  label: string;
  type: 'username' | 'timestamp' | 'location' | 'joined';
  color?: 'slate' | 'violet';
  onClick?: () => void;
} & LinkProps<T>;

export const IconLink = <
  T extends {
    rel?: string;
    target?: string;
  } = LinkHTMLAttributes<HTMLElement>
>({
  label = 'username',
  type = 'username',
  color = 'violet',
  onClick,
  ...props
}: IconLinkProps<T>) => {
  const [hover, setHover] = useState<boolean>(false);

  const getIcon = () => {
    switch (type) {
      case 'username':
        return <StyledProfile color={color} hover={hover} />;
      case 'timestamp':
        return <StyledTime color={color} hover={hover} />;
      case 'location':
        return <StyledLocation color={color} hover={hover} />;
      case 'joined':
        return <StyledCalendar color={color} hover={hover} />;
      default:
        return null;
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    onClick && onClick();
  };

  return !onClick ? (
    <Link {...(props as any)}>
      <IconLinkStyles color={color} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {getIcon()}
        {label}
      </IconLinkStyles>
    </Link>
  ) : (
    <IconLinkStyles
      color={color}
      onClick={(event: React.MouseEvent) => {
        handleClick(event);
      }}
      target="_new"
      title={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {getIcon()}
      {label}
    </IconLinkStyles>
  );
};

interface IStyled {
  color: string;
  hover: boolean;
}

const defaultStyles = tw`
  flex
  flex-row
  text-xs
  font-semibold
  leading-normal
  cursor-pointer
`;

const IconLinkStyles = styled.a(({ color }: Pick<IStyled, 'color'>) => [
  defaultStyles,
  color === 'slate' && tw`text-slate-400 hover:(text-slate-600)`,
  color === 'violet' && tw`text-violet-600 hover:(text-violet-900)`,
]);

const IconColor = (color: string, hover: boolean) => {
  let hoverColor: TwStyle;
  let defaultColor: TwStyle;

  switch (color) {
    case 'slate':
      hoverColor = tw`fill-slate-600`;
      defaultColor = tw`fill-slate-400`;
      return hover ? hoverColor : defaultColor;
    case 'violet':
      hoverColor = tw`fill-violet-900`;
      defaultColor = tw`fill-violet-600`;
      return hover ? hoverColor : defaultColor;
  }
  return null;
};

const StyledProfile = styled(Profile)(({ color, hover }: IStyled) => [tw`w-12 h-12 mr-6 mt-1`, IconColor(color, hover)]);

const StyledTime = styled(Time)(({ color, hover }: IStyled) => [tw`w-12 h-12 mr-6 mt-1`, IconColor(color, hover)]);

const StyledLocation = styled(Location)(({ color, hover }: IStyled) => [tw`w-12 h-12 mr-6 mt-1`, IconColor(color, hover)]);

const StyledCalendar = styled(Calendar)(({ color, hover }: IStyled) => [tw`w-12 h-12 mr-6 mt-1`, IconColor(color, hover)]);
