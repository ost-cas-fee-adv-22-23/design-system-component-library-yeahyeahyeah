import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  handleClick?: () => void;
}

export const TextButton: React.FC<IButtonProps> = ({
  label = 'Button Label',
  handleClick,
}) => {
  return (
    <>
      <ButtonStyles onClick={handleClick}>{label}</ButtonStyles>
    </>
  );
};

/**
 * @TextButton
 * @desc Button styles
 */
const buttonFont = tw`
  text-xs
  font-semibold
  leading-normal
`;

const buttonDefaults = tw`
  text-violet-600
  flex
  grow-0
  justify-center
  items-center
  py-2
  px-0
  rounded-none
  w-auto
  border-b-2
  border-b-violet-600
`;

const buttonHover = tw`
  hover:(border-b-violet-200)
`;

const buttonFocus = tw`
  focus:(border-b-violet-700)
`;

const ButtonStyles = styled.button(({}) => [
  buttonFont,
  buttonDefaults,
  buttonHover,
  buttonFocus,
]);
