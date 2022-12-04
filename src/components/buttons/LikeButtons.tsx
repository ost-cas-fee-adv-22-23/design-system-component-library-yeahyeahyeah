import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Icon, IIcon } from 'src/components/Icon';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  iconName: string;
  handleClick?: () => void;
}

export const LikeButton: React.FC<IButtonProps & IIcon> = ({
  label,
  iconColor = 'fill-slate-500',
  iconName = 'heart-outlined',
}) => {
  const [iconChange, setIconChange] = useState(iconName);
  const [labelChange, setLabelChange] = useState(label);
  const [iconColorChange, setIconColorChange] = useState(iconColor);

  const handleClick = () => {
    setIconChange('heart-filled');
    setLabelChange('Liked');
    setIconColorChange('fill-pink-500');
  };

  return (
    <>
      <ButtonStyles onClick={handleClick}>
        <Icon iconName={iconChange} iconColor={iconColorChange} />
        {labelChange}
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
  hover:(text-pink-600 bg-pink-50)
  active:(bg-none text-pink-500)
`;

const ButtonStyles = styled.button(({}) => [
  buttonFont,
  buttonDefaults,
  css`
    svg {
      margin-left: 0;
      margin-right: 8px;
    }
    :hover svg {
      fill: #db2777;
    }
  `,
]);
