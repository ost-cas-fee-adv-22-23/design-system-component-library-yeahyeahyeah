import styled from 'styled-components';
import tw from 'twin.macro';
import React, { useState } from 'react';
import { Profile, Time, Location, Calendar } from '../stories/assets/icons';

export interface IIconLinkProps
  extends React.HtmlHTMLAttributes<HTMLLinkElement> {
  label: string;
  type?: 'username' | 'timestamp' | 'location' | 'joined';
  variant?: 'slate' | 'violet';
  href?: string;
  handleClick?: () => void;
}

export const IconLink: React.FC<IIconLinkProps> = ({
  label,
  type = 'username',
  variant = 'slate',
  href,
  handleClick,
}) => {
  const [hover, setHover] = useState(false);

  const iconColor = () => {
    if (variant === 'slate') {
      return hover ? 'fill-slate-600' : 'fill-slate-400';
    } else if (variant === 'violet') {
      return hover ? 'fill-violet-900' : 'fill-violet-600';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'username':
        return (
          <Profile
            className={`${iconColor()} mr-6 mt-1`}
            width="12px"
            height="12px"
          />
        );
      case 'timestamp':
        return (
          <Time
            className={`${iconColor()} mr-6 mt-1`}
            width="12px"
            height="12px"
          />
        );
      case 'location':
        return (
          <Location
            className={`${iconColor()} mr-6 mt-1`}
            width="12px"
            height="12px"
          />
        );
      case 'joined':
        return (
          <Calendar
            className={`${iconColor()} mr-6 mt-1`}
            width="12px"
            height="12px"
          />
        );
    }
  };

  return (
    <IconLinkStyles
      variant={variant}
      onClick={handleClick}
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
}

/**
 * @Button
 * @desc Button styles
 */

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
