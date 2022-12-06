import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: 'Like';
  handleClick?: () => void;
  children?: React.ReactNode;
}

export const LikeButton: React.FC<IButtonProps> = ({
  label = 'Like',
  children,
}) => {
  const [labelChange, setLabelChange] = useState<string>(label);
  const [fontColor, setFontColor] = useState('text-slate-500');
  let [likes, setLikes] = useState<number>(0);

  const handleClick = () => {
    setLikes(likes + 1);

    if (likes >= 1) {
      setFontColor('hasAction');
      setLabelChange('Likes');
    } else {
      setLabelChange('Like');
    }
  };

  return (
    <>
      <ButtonStyles className={fontColor} onClick={handleClick} likes={likes}>
        {children}
        {likes > 0 && `${likes}`} {labelChange}
      </ButtonStyles>
    </>
  );
};

/**
 * @Button
 * @desc Button styles
 */
interface IButtonStyles {
  likes: number;
}

const ButtonStyles = styled.button(({ likes }: IButtonStyles) => [
  tw`
  font-semibold
  leading-normal
  text-slate-500
  text-sm
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
  active:(bg-none text-pink-900)
  `,
  likes === 1 && tw`text-pink-900`,
  css`
    &.hasAction {
      color: #831843;
    }

    svg {
      margin: 0 8px 0 0;
    }

    :hover svg {
      fill: #db2777;
    }
  `,
]);
