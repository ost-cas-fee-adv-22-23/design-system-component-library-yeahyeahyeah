import React, { LinkHTMLAttributes, MouseEvent } from 'react';
import tw, { styled } from 'twin.macro';
import { Link, LinkProps } from '../link/Link';

export type HashtagProps<T> = {
  label?: string;
  fCallBack?: (e: MouseEvent<HTMLAnchorElement>) => void;
  size: 'small' | 'medium' | 'large';
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
  newTab = false,
  ...props
}: HashtagProps<T>) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    fCallBack && fCallBack(e);
  };

  return !fCallBack ? (
    <Link {...(props as any)} {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}>
      <StyledHashtag title={label} size={size}>
        #{label}
      </StyledHashtag>
    </Link>
  ) : (
    <StyledHashtag onClick={handleClick} title={label} size={size}>
      #{label}
    </StyledHashtag>
  );
};

interface IHashtagStyleProps {
  size: string;
}

const StyledHashtag = styled.a(({ size }: IHashtagStyleProps) => [
  tw`transition cursor-pointer`,
  size === 'small' && tw`text-violet-600 hover:text-violet-500 text-base [font-weight:500] hover:underline`,
  size === 'medium' && tw`text-violet-600 hover:text-violet-500 text-lg [font-weight:500] hover:underline`,
  size === 'large' && tw`text-slate-white hover:text-slate-white text-4xl [font-weight:700] hover:underline`,
]);
