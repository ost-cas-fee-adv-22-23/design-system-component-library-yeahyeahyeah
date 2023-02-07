import React, { MouseEvent } from 'react';
import tw, { styled } from 'twin.macro';
import Link, { LinkProps } from 'next/link';
import { Url } from 'url';

export interface IHashtagProps {
  label?: string;
  fCallBack?: (e: MouseEvent<HTMLAnchorElement>) => void;
  size: 'small' | 'medium' | 'large';
  href?: Url | string;
  link?: Pick<LinkProps, 'href' | 'as' | 'scroll'>;
}

export const Hashtag: React.FC<IHashtagProps> = ({ label, fCallBack, size, link, href = '/' }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    fCallBack && fCallBack(e);
  };

  return !fCallBack ? (
    <Link href={link?.href || href} passHref legacyBehavior scroll={link?.scroll} as={link?.as as string}>
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
