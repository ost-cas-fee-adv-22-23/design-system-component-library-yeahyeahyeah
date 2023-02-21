import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IconsMapped, IconTypes } from '../icon/IconMap';

export interface IShareButton {
  label: string;
  onClick?: () => void;
}

export const ShareButton: React.FC<IShareButton> = ({ label = 'Copy Link', onClick }) => {
  const [labelText, setLabelText] = useState<string>(label);
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    setLabelText('Link copied');

    window.setTimeout(() => {
      setLabelText(label);
    }, 1000);

    onClick && onClick();
  };

  const Share = createIcon('share');

  return (
    <>
      <StyledButton
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        hover={hover}
        aria-label={label}
      >
        <Share hover={hover} aria-label={label} />
        {labelText}
      </StyledButton>
    </>
  );
};

const createIcon = (icon: IconTypes) => {
  return styled(IconsMapped[icon as IconTypes])(({ hover }: IShareButtonStyles) => [
    tw`
        fill-slate-600
        h-16
        w-16
        ml-0
        mr-8
        focus:(text-slate-700)`,
    hover === true && tw`fill-slate-700`,
  ]);
};

interface IShareButtonStyles {
  hover: boolean;
}

const StyledButton = styled.button(({ hover }: IShareButtonStyles) => [
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
    focus:(text-slate-700)
  `,
  hover === true && tw`text-slate-700 bg-slate-100`,
]);
