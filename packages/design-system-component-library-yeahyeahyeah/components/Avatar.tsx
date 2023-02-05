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
      <Image src={src} alt={alt} variant={variant} onClick={imageCallBack} />
    </>
  );
};

interface IImageProps {
  variant: string;
}

const ImageAnim = tw`
	relative
	scale-100
	hover:scale-110

	transform
	transition
	duration-500
`;

const Image = styled.img(({ variant }: IImageProps) => [
  tw`
    relative
    left-0
  `,
  variant === 'small' && tw`h-40 w-40 min-w-[40px]`,
  variant === 'small' && ImageAnim,

  variant === 'medium' && tw`h-[72px] w-[72px] min-w-[72px] border-4`,
  variant === 'medium' && ImageAnim,

  variant === 'large' && tw`h-96 w-96 border-4`,
  variant === 'large' && ImageAnim,

  variant === 'xlarge' && tw`h-160 w-160 border-4 min-w-[160px]`,
  variant === 'xlarge' && ImageAnim,

  variant === 'edit' &&
    tw`
      h-[160px]
      w-[160px]
      
      scale-50
      transform-gpu
      transition
      duration-500
      ease-in-out

      rounded-full    
      border-6

      sm:(scale-90)
      md:(scale-100)
    `,
  tw`
  border-slate-200
	bg-violet-200
		rounded-full
		cursor-pointer
    object-cover
	`,
]);
