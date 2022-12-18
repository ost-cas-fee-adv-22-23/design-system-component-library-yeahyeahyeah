import tw from 'twin.macro';
import styled, { css } from 'styled-components';
import { IconButton } from 'src/components/buttons/IconButton';

export interface IAvatarProps
  extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  variant: 'small' | 'medium' | 'large' | 'xlarge' | 'edit';
  fCallBack?: () => void;
}

export const Avatar: React.FC<IAvatarProps> = ({
  variant = 'small',
  src,
  alt,
  fCallBack,
}) => {
  return (
    <>
      {variant !== 'edit' ? (
        <Image variant={variant} src={src} alt={alt} onClick={fCallBack} />
      ) : (
        <>
          <Row>
            <Image variant={variant} src={src} alt={alt} onClick={fCallBack} />
            <IconButton variant="edit" icon="edit" label="Label" />
          </Row>
        </>
      )}
    </>
  );
};

interface IImageProps {
  variant: string;
}

const Row = tw.div`
  flex
  flex-row
  justify-center
  items-end
`;

const ImageAnim = tw`
	relative
	scale-100
	hover:scale-110

	transform
	transition
	duration-500
`;

const Image = styled.img(({ variant }: IImageProps) => [
  variant === 'small' && tw`h-40 w-40 min-w-[40px]`,
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
