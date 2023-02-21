import React, { LinkHTMLAttributes } from 'react';
import tw, { styled } from 'twin.macro';
import { Link, LinkProps } from '../link/Link';

export type MumbleLogoProps<T> = {
  title: string;
  src: string;
  alt: string;
  onLogoClick?: () => void;
} & LinkProps<T>;

export const MumbleLogo = <
  T extends {
    rel?: string;
    target?: string;
  } = LinkHTMLAttributes<HTMLElement>
>({
  title = 'Mumble Logo',
  src = '',
  alt = 'asdfasdfsaf',
  newTab = false,
  ...props
}: MumbleLogoProps<T>) => {
  return (
    <Link {...(props as any)} {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})} title={title}>
      <Image src={src} alt={alt} />
    </Link>
  );
};

const Image = styled.img(() => [
  tw`
    w-full
  `,
]);
