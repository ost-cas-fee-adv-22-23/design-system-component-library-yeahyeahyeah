import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  handleClick?: () => void;
  children?: React.ReactNode;
}

export const CommentButton: React.FC<IButtonProps> = ({
  label = 'Comment',
  children,
}) => {
  const [labelChange, setLabelChange] = useState<string>(label);

  let [comment, setComment] = useState<number>(0);
  const [fontColor, setFontColor] = useState('text-slate-500');

  const handleClick = () => {
    setComment(comment + 1);

    if (comment >= 1) {
      setFontColor('hasAction');
      setLabelChange('Comments');
    } else {
      setLabelChange('Comment');
    }
  };

  return (
    <>
      <ButtonStyles
        className={fontColor}
        onClick={handleClick}
        comment={comment}
      >
        <>{children}</>
        {comment === 0 ? false : `${comment}`} {labelChange}
      </ButtonStyles>
    </>
  );
};

/**
 * @Button
 * @desc Button styles
 */
interface IButtonStyles {
  comment: number;
}

const ButtonStyles = styled.button(({ comment }: IButtonStyles) => [
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
    hover:(text-violet-600 bg-violet-50)
    active:(bg-none text-violet-900)
`,
  comment === 1 && tw`text-violet-600`,
  css`
    &.hasAction {
      color: #7c3aed;
    }

    svg {
      margin-left: 0;
      margin-right: 8px;
    }

    :hover svg {
      fill: #7c3aed;
    }
  `,
]);
