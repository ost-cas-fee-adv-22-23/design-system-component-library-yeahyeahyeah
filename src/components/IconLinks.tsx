import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Icon, IIcon } from 'src/components/Icon';
import React from 'react';

interface IIconLinkProps extends React.HtmlHTMLAttributes<HTMLLinkElement> {
  label: string;
  variant?: 'slate' | 'violet';
  handleClick?: () => void;
}

export const IconLink: React.FC<IIconLinkProps & IIcon> = ({
  label = 'username',
  variant = 'slate',
  handleClick,
  iconColor,
  iconName = 'profile',
  iconHeight,
  iconWidth,
}) => {
  console.log(variant);

  return (
    <>
      <IconLinkStyles variant={variant} onClick={handleClick}>
        <Icon
          iconName={iconName}
          iconColor={iconColor}
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

const defaultStyles = tw`
  flex
  flex-row
  font-semibold
  leading-normal
  cursor-pointer
`;

const IconLinkStyles = styled.a(({ variant }: IStyleProps) => [
  defaultStyles,
  variant === 'slate' && tw`text-slate-400 hover:(text-slate-600)`,
  variant === 'slate' &&
    css`
      svg {
        fill: var(--color-slate-icon);
      }
      :hover {
        svg {
          fill: var(--color-slate-icon-hover);
        }
      }
    `,
  variant === 'violet' && tw`text-violet-600 hover:(text-violet-900)`,
  variant === 'violet' &&
    css`
      svg {
        fill: var(--color-violet-icon);
      }
      :hover {
        svg {
          fill: var(--color-violet-icon-hover);
        }
      }
    `,
]);
