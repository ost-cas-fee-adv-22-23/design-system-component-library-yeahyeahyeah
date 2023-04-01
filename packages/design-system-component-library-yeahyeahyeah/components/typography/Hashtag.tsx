import React, { LinkHTMLAttributes, MouseEvent } from 'react';
import tw, { styled } from 'twin.macro';
import { Link, LinkProps } from '../link/Link';

export type HashtagProps<T> = {
  label?: string;
  fCallBack?: (e: MouseEvent<HTMLAnchorElement>) => void;
  size: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  color?: 'slate' | 'slate-300' | 'violet' | 'pink' | 'white';
} & LinkProps<T>;

export const Hashtag = <
  T extends {
    rel?: string;
    target?: string;
  } = LinkHTMLAttributes<HTMLElement>
>({
  label,
  fCallBack,
  size,
  color,
  newTab = false,
  ...props
}: HashtagProps<T>) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    fCallBack && fCallBack(e);
  };

  return !fCallBack ? (
    <Link {...(props as any)} {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}>
      <StyledHashtag title={label} size={size} color={color}>
        #{label}
      </StyledHashtag>
    </Link>
  ) : (
    <StyledHashtag onClick={handleClick} title={label} size={size} color={color}>
      #{label}
    </StyledHashtag>
  );
};

interface IHashtagStyleProps {
  size: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  color?: 'slate' | 'slate-300' | 'violet' | 'pink' | 'white';
}

const StyledHashtag = styled.a(({ size, color }: IHashtagStyleProps) => [
  tw`transition cursor-pointer`,
  size === 'small' && tw`text-violet-600 hover:text-violet-500 text-base [font-weight:500] hover:underline`,
  size === 'medium' && tw`text-violet-600 hover:text-violet-500 text-md [font-weight:500] hover:underline`,
  size === 'large' && tw`text-violet-600 hover:text-violet-500 text-lg [font-weight:500] hover:underline`,
  size === 'xlarge' && tw`text-slate-white hover:text-slate-white text-2xl [font-weight:700] hover:underline`,
  size === 'xxlarge' && tw`text-slate-white hover:text-slate-white text-4xl [font-weight:700] hover:underline`,
  color === 'slate' && tw`text-slate-500`,
  color === 'slate-300' && tw`text-slate-300`,
  color === 'violet' && tw`text-violet-600`,
  color === 'pink' && tw`text-pink-600`,
  color === 'white' && tw`text-slate-white`,
]);
