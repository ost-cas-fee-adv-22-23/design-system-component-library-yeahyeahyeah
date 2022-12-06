import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  handleClick?: () => void;
  children?: React.ReactNode;
}

export const ShareButton: React.FC<IButtonProps> = ({
  label = 'Copy Link',
  children,
}) => {
  const [labelText, setLabelText] = useState<string>(label);

  const handleClick = () => {
    setLabelText('Link copied');

    window.setTimeout(() => {
      setLabelText(label);
    }, 1000);
  };

  return (
    <>
      <ButtonStyles onClick={handleClick}>
        {children}
        {labelText}
      </ButtonStyles>
    </>
  );
};

/**
 * @Button
 * @desc Button styles
 */
const ButtonStyles = styled.button(() => [
  tw`
    text-skin-light
    font-semibold
    leading-normal
    text-slate-600

    flex
    grow-0
    justify-center
    items-center
    p-12
    rounded-full
    
    w-auto
    outline-none
    bg-none
    
    hover:(text-slate-700 bg-slate-100)
    focus:(text-slate-700)
  `,
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
