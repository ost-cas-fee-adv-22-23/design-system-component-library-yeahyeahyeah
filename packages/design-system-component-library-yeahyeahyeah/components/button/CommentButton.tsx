import React, { useEffect, useState, useCallback, LinkHTMLAttributes } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ReplyFilled, ReplyOutlined } from '../icon/index';
import { Link, LinkProps } from '../link/Link';

export type CommentButtonProps<T> = {
  type?: 'like' | 'comment';
  quantity?: number;
  onClick?: () => void;
} & LinkProps<T>;

export const CommentButton = <
  T extends {
    rel?: string;
    target?: string;
  } = LinkHTMLAttributes<HTMLElement>
>({
  type,
  quantity,
  onClick,
  ...props
}: CommentButtonProps<T>) => {
  const [label, setLabel] = useState<string>('Comment');
  const [count, setCount] = useState<number>(quantity || 0);
  const [hover, setHover] = useState(false);

  const setLabels = useCallback(() => {
    if (count >= 2) {
      setLabel('Comments');
    } else {
      setLabel('Comment');
    }
  }, [type, count]);

  useEffect(() => {
    setLabels();
  }, [type, count, setLabels]);

  useEffect(() => {
    setCount(quantity || 0);
  }, [quantity]);

  return (
    <Link {...(props as any)}>
      <StyledCommentButton
        onClick={onClick}
        $count={count}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {count === 0 ? (
          <StyledReplyOutlined $hover={hover} $count={count} />
        ) : (
          <StyledReplyFilled $hover={hover} $count={count} />
        )}
        {count === 0 ? false : `${count}`} {label}
      </StyledCommentButton>
    </Link>
  );
};

interface IInteractionButtonStyles {
  $count: number;
}

interface IInteractionSvgStyles {
  $hover: boolean;
  $count?: number;
}

const StyledCommentButton = styled.button(({ $count }: IInteractionButtonStyles) => [
  tw`
    font-semibold
    leading-normal
    text-slate-600
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
    
`,
  $count === 0 && tw`text-slate-600 hover:(text-violet-600 bg-violet-50)`,
]);

const StyledReplyOutlined = styled(ReplyOutlined)(({ $hover }: IInteractionSvgStyles) => [
  tw`
      fill-slate-600
      h-16
      w-16
      mr-8
    `,
  $hover === true && tw`fill-violet-600`,
]);

const StyledReplyFilled = styled(ReplyFilled)(({ $hover, $count }: IInteractionSvgStyles) => [
  tw`
      fill-slate-600
      h-16
      w-16
      mr-8
    `,
  $hover === true && tw`fill-violet-600`,
  $count && $count >= 1 && tw`fill-violet-600`,
]);
