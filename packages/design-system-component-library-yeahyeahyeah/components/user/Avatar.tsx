import React, { LinkHTMLAttributes } from 'react';
import tw, { styled } from 'twin.macro';
import { ImageScale } from '../../styles/ImageScale';
import { Link, LinkProps } from '../link/Link';

export type AvatarProps<T> = {
  variant?: 'small' | 'medium' | 'large' | 'xlarge';
  src: string;
  alt: string;
  imageCallBack?: () => void;
} & LinkProps<T>;

export const Avatar = <
  T extends {
    rel?: string;
    target?: string;
  } = LinkHTMLAttributes<HTMLElement>
>({
  variant = 'small',
  alt,
  src,
  imageCallBack,
  newTab = false,
  ...props
}: AvatarProps<T>) => {
  return !imageCallBack ? (
    <Link {...(props as any)} {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}>
      <StyledLink variant={variant}>
        <Image src={src} alt={alt} />
      </StyledLink>
    </Link>
  ) : (
    <Figure variant={variant}>
      <Image src={src} alt={alt} onClick={imageCallBack} />
    </Figure>
  );
};

interface IImageProps {
  variant: string;
}

const StyledLink = styled.a(() => Styles);

const Figure = styled.figure.attrs({ className: 'group' })(() => Styles);

const Styles = ({ variant }: IImageProps) => [
  variant === 'small' && tw`h-40 w-40 min-w-[40px]`,
  variant === 'medium' && tw`h-[72px] w-[72px] min-w-[72px] border-4`,
  variant === 'large' && tw`h-96 w-96 border-4`,
  variant === 'xlarge' && tw`h-160 w-160 border-4 min-w-[160px]`,
  tw`
    flex
    justify-center
    items-center
  border-slate-200
  bg-violet-600
		rounded-full
		cursor-pointer
    object-cover
    overflow-hidden
	`,
];

const Image = styled.img(() => [
  ImageScale({ opacityLevel: '80' }),
  tw`
    w-full
  `,
]);
