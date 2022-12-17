import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Icons, IconTypes } from '../icons/IconMap';

export interface IButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: IconTypes;
  fCallBack?: () => void;
}

export const IconButton: React.FC<IButtonProps> = ({
  label,
  icon = 'time',
  fCallBack,
}) => {
  const Icon = React.cloneElement(Object(Icons[icon]), {
    className: 'fill-slate-white',
  });

  return (
    <ButtonStyles onClick={fCallBack}>
      {Icon}
      <p>{label}</p>
    </ButtonStyles>
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
  text-left
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

const ButtonStyles = styled.button(() => [
  buttonFont,
  buttonDefaults,
  buttonHover,
  buttonFocus,
  css`
    overflow: hidden;
    svg {
      position: relative;
      top: -8px;
      margin-left: 0;
    }
  `,
]);
