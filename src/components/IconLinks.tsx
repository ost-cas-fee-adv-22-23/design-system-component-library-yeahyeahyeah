import styled from 'styled-components';
import tw from 'twin.macro';
import { Icon, IIcon } from 'src/components/Icon';
import React from 'react';

interface IIconLinkProps extends React.HtmlHTMLAttributes<HTMLLinkElement> {
  label: string;
  variant?: 'slate' | 'violet' | undefined;
  handleClick?: () => void;
}

export const IconLink: React.FC<IIconLinkProps & IIcon> = ({
  label = 'username',
  variant = 'violet',
  handleClick,
  iconName = 'profile',
  iconHeight,
  iconWidth,
}) => {
  return (
    <>
      <IconLinkStyles variant={variant} onClick={handleClick}>
        <Icon
          iconName={iconName}
          iconColor={
            variant === 'violet' ? 'fill-violet-600' : 'fill-slate-400'
          }
          iconHeight={iconHeight}
          iconWidth={iconWidth}
        />
        {label}
      </IconLinkStyles>
    </>
  );
};

interface IStyleProps {
  variant?: string;
}

/**
 * @Button
 * @desc Button styles
 */
const fontStyles = tw`
  font-semibold
  leading
  cursor-pointer
`;

const defaultStyles = tw`
  flex
  items-center
  justify-between
`;

const IconLinkStyles = styled.a(({ variant }: IStyleProps) => [
  fontStyles,
  defaultStyles,
  variant === 'slate' && tw`text-slate-400 hover:(text-slate-600)`,
  variant === 'violet' && tw`text-violet-600 hover:(text-violet-900)`,
]);
