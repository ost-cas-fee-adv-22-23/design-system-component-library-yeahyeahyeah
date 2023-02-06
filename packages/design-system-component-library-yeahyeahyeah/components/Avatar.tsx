import React from 'react';
import tw, { styled } from 'twin.macro';

export interface IAvatarProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  variant: 'small' | 'medium' | 'large' | 'xlarge';
  src: string;
  alt: string;
  buttonCallBack?: () => void;
  imageCallBack?: () => void;
}

export const Avatar: React.FC<IAvatarProps> = ({ variant = 'small', alt = '', src = '', imageCallBack }) => {
  return (
    <>
      <Figure variant={variant}>
        <Image src={src} alt={alt} onClick={imageCallBack} />
      </Figure>
    </>
  );
};

interface IImageProps {
  variant: string;
}

const Figure = styled.figure.attrs({ className: 'group' })(({ variant }: IImageProps) => [
  variant === 'small' && tw`h-40 w-40 min-w-[40px]`,
  variant === 'medium' && tw`h-[72px] w-[72px] min-w-[72px] border-4`,
  variant === 'large' && tw`h-96 w-96 border-4`,
  variant === 'xlarge' && tw`h-160 w-160 border-4 min-w-[160px]`,
  tw`
  border-slate-200
  bg-violet-200
		rounded-full
		cursor-pointer
    object-cover
    overflow-hidden
	`,
]);

const Image = styled.img(() => [
  tw`
    w-full
    object-cover
    transition
    duration-300
    ease-in-out
    z-10
    group-hover:scale-125
    group-hover:opacity-100
  `,
]);
