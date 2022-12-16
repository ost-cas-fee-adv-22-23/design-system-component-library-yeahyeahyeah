import tw from 'twin.macro';
import styled, { css } from 'styled-components';
import { IconButton } from 'src/components/buttons/IconButton';

interface IAvatarProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  variant: 'small' | 'medium' | 'large' | 'xlarge' | 'edit';
  fCallBack?: () => void;
}

export const Avatar: React.FC<IAvatarProps> = ({
  variant = 'small',
  src,
  alt,
}) => {
  return (
    <>
      {variant !== 'edit' ? (
        <Image variant={variant} src={src} alt={alt} />
      ) : (
        <>
          <div className="flex flex-row justify-center items-end">
            <Image variant={variant} src={src} alt={alt} />
            <IconButton className="bg-pink-900" icon="edit" label="Label" />
          </div>
        </>
      )}
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

  variant === 'medium' && tw`h-64 w-64 border-4 border-slate-100`,
  variant === 'medium' && ImageAnim,

  variant === 'large' && tw`h-96 w-96 border-4 border-slate-100`,
  variant === 'large' && ImageAnim,

  variant === 'xlarge' && tw`h-160 w-160 border-4 border-slate-100`,

  variant === 'edit' &&
    tw`
		flex
		items-end
		justify-end
		h-160
		w-160
		border-4
		border-slate-100
	`,
  variant === 'edit' &&
    css`
      + button {
        position: relative;
        right: 48px;
      }
    `,
  tw`
	bg-violet-200
		rounded-full
		cursor-pointer
	`,
]);
