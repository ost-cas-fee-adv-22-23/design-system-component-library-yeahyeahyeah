import tw from 'twin.macro';
import styled from 'styled-components';

interface IAvatarProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  variant: 'small' | 'medium' | 'large' | 'xlarge';
  fCallBack?: () => void;
}

export const Avatar: React.FC<IAvatarProps> = ({
  variant = 'small',
  src,
  alt,
}) => {
  return (
    <>
      <Image variant={variant} src={src} alt={alt} />
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
  variant === 'small' && tw`h-40 w-40`,
  variant === 'small' && ImageAnim,

  variant === 'medium' && tw`h-64 w-64 border-4 border-slate-white`,
  variant === 'medium' && ImageAnim,

  variant === 'large' && tw`h-96 w-96 border-4 border-slate-white`,
  variant === 'xlarge' && tw`h-160 w-160 border-4 border-slate-white`,

  tw`
	bg-violet-200
	rounded-full
	cursor-pointer
	`,
]);
