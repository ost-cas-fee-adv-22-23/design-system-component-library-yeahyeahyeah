import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Icon, IIcon } from 'src/components/Icon';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  handleClick?: () => void;
}

export const IconButton: React.FC<IButtonProps & IIcon> = ({
  label = 'Button Label',
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
  bg-slate-500
  flex
  flex-col-reverse
  justify-center
  place-items-center
  [text-indent: -10000px]
  w-48
  h-48
  rounded-full
  border-hidden
  outline-none
  hover:(bg-slate-700 outline-offset-0 outline-slate-100)
  focus:(outline-offset-0 outline-slate-200)
  disabled:bg-slate-300
`;

const buttonHover = tw`
  hover:(outline-3)
`;

const buttonFocus = tw`
  focus:(outline-4)
`;

const ButtonStyles = styled.button((undefinded) => [
  buttonFont,
  buttonDefaults,
  buttonHover,
  buttonFocus,
  css`
    svg {
      position: relative;
      top: -8px;
      margin-left: 0;
    }
  `,
]);
