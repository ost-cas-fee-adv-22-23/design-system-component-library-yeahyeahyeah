import styled, { css } from 'styled-components';
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
  iconColor,
  iconName = 'profile',
  iconHeight,
  iconWidth,
}) => {
  return (
    <>
      <IconLinkStyles variant={variant} onClick={handleClick}>
        <SpanStyle>
          <Icon
            iconName={iconName}
            iconColor={
              variant === 'slate' ? 'fill-slate-400' : 'fill-slate-500'
            }
            iconHeight={iconHeight}
            iconWidth={iconWidth}
          />
          {label}
        </SpanStyle>
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
  font-semibold
  text-slate-400
  leading
  cursor-pointer
  hover:(text-slate-600)
`;

const SpanStyle = styled.span`
  display: flex;
`;

const IconLinkStyles = styled.a(({ variant }: IStyleProps) => [
  defaultStyles,
  variant === 'slate' &&
    tw`text-slate-400 hover:(text-slate-600)` &&
    css`
      :hover {
          svg {
            fill: #475569;
          }
        }
      } 
    `,
  variant === 'violet' && tw`text-violet-600 hover:(text-violet-900)`,
  css``,
]);
