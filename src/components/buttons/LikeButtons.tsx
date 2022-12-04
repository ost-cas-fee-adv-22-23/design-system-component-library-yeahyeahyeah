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
  const [labelChange, setLabelChange] = useState<string>(label);
  const [iconColorChange, setIconColorChange] = useState(iconColor);
  let [likes, setLikes] = useState<number>(0);
  const [fontColor, setFontColor] = useState('text-slate-500');

  const handleClick = () => {
    setIconChange('heart-filled');
    setIconColorChange('fill-pink-500');
    setLikes(likes + 1);

    if (likes >= 1) {
      setFontColor('hasLike');
      setLabelChange('Likes');
    } else {
      setLabelChange('Like');
    }
  };

  return (
    <>
      <ButtonStyles className={fontColor} onClick={handleClick}>
        <Icon iconName={iconChange} iconColor={iconColorChange} />
        {likes === 0 ? false : `${likes}`} {labelChange}
      </ButtonStyles>
    </>
  );
};

/**
 * @Button
 * @desc Button styles
 */
const buttonFont = tw`
  text-pink-600
  font-semibold
  leading-normal
`;

const buttonDefaults = tw`
  text-slate-500
  flex
  grow-0
  justify-center
  items-center
  p-12
  rounded-full
  w-auto
  outline-none
  bg-none
  hover:(text-pink-600 bg-pink-50)
  active:(bg-none text-pink-500)
`;

const ButtonStyles = styled.button(({}) => [
  buttonFont,
  buttonDefaults,
  css`
    &.hasLike {
      color: #db2777;
    }

    svg {
      margin-left: 0;
      margin-right: 8px;
    }
    :hover svg {
      fill: #db2777;
    }
  `,
]);
