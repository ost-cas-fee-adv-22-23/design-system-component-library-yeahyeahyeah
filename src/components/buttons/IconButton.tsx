import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Icon, IIcon } from 'src/components/Icon';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
}

export const IconButton: React.FC<IButtonProps & IIcon> = ({
  handleClick,
  iconName = 'mumble',
  iconHeight = '16px',
  iconWidth,
  iconColor,
}) => {
  return (
    <>
      <ButtonStyles onClick={handleClick}>
        <Icon
          iconName={iconName}
          iconColor={iconColor}
          iconHeight={iconHeight}
          iconWidth={iconWidth}
        />
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
  bg-slate-500
  flex
  justify-center
  items-center
  p-16
  gap-12
  rounded-full
  w-auto
  border-hidden
  outline-none
  outline-offset-0
  hover:(bg-slate-700 outline-slate-100)
  focus:(outline-slate-200)
  disabled:bg-slate-300
`;

const buttonHover = tw`
  hover:(outline-3)
`;

const buttonFocus = tw`
  focus:(outline-4)
`;

const ButtonStyles = styled.button(({}) => [
  buttonFont,
  buttonDefaults,
  buttonHover,
  buttonFocus,
  css`
    svg {
      margin-left: 0;
    }
  `,
]);
