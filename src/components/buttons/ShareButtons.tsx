import React from 'react';
import styled, { css } from 'styled-components';
import tw, { theme } from 'twin.macro';
import { Icon, IIcon } from 'src/components/Icon';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  handleClick?: () => void;
}

export const ShareButton: React.FC<IButtonProps & IIcon> = ({
  label = 'Copy Link',
  handleClick,
  iconName = 'share',
  iconColor = 'fill-slate-600',
}) => {
  return (
    <>
      <ButtonStyles onClick={handleClick}>
        <Icon iconName={iconName} iconColor={iconColor} />
        {label}
      </ButtonStyles>
    </>
  );
};

/**
 * @Button
 * @desc Button styles
 */
const buttonFont = tw`
  text-skin-light
  font-semibold
  leading-normal
`;

const buttonDefaults = tw`
  flex
  grow-0
  justify-center
  items-center
  p-12
  rounded-full
  w-auto
  outline-none
  text-slate-600
  bg-none
  hover:(text-slate-700 bg-slate-100)
  focus:(text-slate-700)
`;

const ButtonStyles = styled.button(({}) => [
  buttonFont,
  buttonDefaults,
  // css({
  //   color: theme`colors.slate.600`,
  //   svg: theme`colors.slate.100`,
  // }),
  css`
    svg {
      margin-left: 0;
      margin-right: 8px;
    }
    :hover svg {
      fill: #334155;
    }
  `,
]);
