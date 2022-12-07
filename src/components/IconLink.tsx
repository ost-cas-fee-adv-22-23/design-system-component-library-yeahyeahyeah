import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import React from 'react';

interface IIconLinkProps extends React.HtmlHTMLAttributes<HTMLLinkElement> {
  label: string;
  variant?: 'slate' | 'violet';
  handleClick?: () => void;
  children: React.ReactNode;
}

export const IconLink: React.FC<IIconLinkProps> = ({
  label = 'username',
  variant = 'slate',
  handleClick,
  children,
}) => {
  console.log(variant);

  return (
    <>
      <IconLinkStyles
        variant={variant}
        onClick={handleClick}
        target="_self"
        title={label}
      >
        {children}
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
  text-xs
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
