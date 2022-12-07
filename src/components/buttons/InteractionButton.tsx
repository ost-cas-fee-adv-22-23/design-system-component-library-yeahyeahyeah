import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { HeartFilled, ReplyFilled } from '../../stories/assets/icons';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  type: 'like' | 'comment';
  children?: React.ReactNode;
  initCount?: number;
}

export const InteractionButton: React.FC<IButtonProps> = ({
  type,
  children,
  initCount,
}) => {
  const [labelChange, setLabelChange] = useState<string>('');
  const [fontColor, setFontColor] = useState('text-slate-500');
  let [count, setCount] = useState<number>(initCount || 0);

  useEffect(() => {
    type === 'like' ? setLabelChange('Like') : setLabelChange('Comment');
    if (type === 'comment') {
      if (count >= 1) {
        setFontColor('hasAction');
        setLabelChange('Comments');
      } else {
        setLabelChange('Comment');
      }
    } else if (type === 'like') {
      if (count >= 1) {
        setFontColor('hasAction');
        setLabelChange('Likes');
      } else {
        setLabelChange('Like');
      }
    }
    console.log('type', type);
  }, [type, count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  if (type === 'comment') {
    return (
      <CommentStyles className={fontColor} onClick={handleClick} count={count}>
        <ReplyFilled className={'fill-slate-500'} width="16px" height="16px" />
        {count === 0 ? false : `${count}`} {labelChange}
      </CommentStyles>
    );
  }

  if (type === 'like') {
    return (
      <LikeStyles className={fontColor} onClick={handleClick} count={count}>
        <HeartFilled className={'fill-slate-500'} width="16px" height="16px" />
        {count === 0 ? false : `${count}`} {labelChange}
      </LikeStyles>
    );
  }

  return null;
};

/**
 * @Button
 * @desc Button styles
 */
interface IButtonStyles {
  count: number;
}

const CommentStyles = styled.button(({ count }: IButtonStyles) => [
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
  count === 1 && tw`text-violet-600`,
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

    :active svg {
      fill: #7c3aed;
    }
  `,
]);

const LikeStyles = styled.button(({ count }: IButtonStyles) => [
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
  count === 1 && tw`text-pink-900`,
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

    :active svg {
      fill: #831844;
    }
  `,
]);
