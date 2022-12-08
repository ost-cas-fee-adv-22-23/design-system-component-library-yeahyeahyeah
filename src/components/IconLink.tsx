import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import React, { useState } from 'react';
import { Profile, Time, Location, Calendar } from '../stories/assets/icons';

interface IIconLinkProps extends React.HtmlHTMLAttributes<HTMLLinkElement> {
  type?: 'username' | 'timestamp' | 'location' | 'joined';
  variant?: 'slate' | 'violet';
  handleClick?: () => void;
}

export const IconLink: React.FC<IIconLinkProps> = ({
  type,
  variant = 'slate',
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

  const getLabel = () => {
    switch (type) {
      case 'username':
        return 'Username';
      case 'timestamp':
        return 'Timestamp';
      case 'location':
        return 'Location';
      case 'joined':
        return 'Joined';
    }
  };

  return (
    <IconLinkStyles
      variant={variant}
      onClick={handleClick}
      target="_self"
      title={getLabel()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {getIcon()}
      {getLabel()}
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
