import React, { ImgHTMLAttributes } from 'react';
import tw, { styled } from 'twin.macro';
import { Fullscreen, Edit, Repost } from '../icon/default_index';
import { ImageScale } from '../../styles/ImageScale';
import { Image, ImageProps } from './Image';

export type ImageContainerProps<T> = {
  src: string;
  alt: string;
  onImageIconClick?: (type: string) => void;
  type?: 'container' | 'banner-edit' | 'banner-view';
  isLoading?: boolean;
} & ImageProps<T>;

export const ImageContainer = <
  T extends {
    loading?: string;
    decoding?: string;
  } = ImgHTMLAttributes<HTMLImageElement>
>({
  src = '',
  alt = '',
  onImageIconClick,
  type = 'container',
  isLoading = false,
  ...props
}: ImageContainerProps<T>) => {
  const handleImageIconClick = () => {
    onImageIconClick && onImageIconClick(type);
  };

  const getIcon = () => {
    switch (type) {
      case 'container':
        return <StyledFullScreen />;
      case 'banner-edit':
        return <StyledEdit />;
      case 'banner-view':
        return <StyledFullScreen />;
    }
  };

  return (
    <Figure type={type}>
      <Wrapper>
        <Container>
          {isLoading === true ? (
            <ImageIcon onClick={handleImageIconClick}>
              <StyledRepost />
            </ImageIcon>
          ) : (
            <ImageIcon onClick={handleImageIconClick}>{getIcon()}</ImageIcon>
          )}
        </Container>
      </Wrapper>

      {src !== '' && <Image {...(props as any)} alt={alt} src={src} css={ImageStyles.img({ type })} />}
    </Figure>
  );
};

interface ImageStyles {
  isLoading?: boolean;
  type?: string;
}

const ImageStyles = {
  img: ({ type }: ImageStyles) => [
    ImageScale({ opacityLevel: '60' }),
    (type === 'banner-edit' || type === 'banner-view') && tw`w-full h-auto`,
  ],
};

const Container = styled.div(() => [
  tw`
  space-y-3
  transform-gpu
  translate-y-4 
  transition
  duration-100
  ease-in-out
  group-hover:translate-y-0
`,
]);

const LoadingSpinner = tw`
  animate-spin
  flex
  justify-center
  w-64
  h-64
  rounded-full
  fill-slate-white
  opacity-50
`;

const ImageIcon = styled.div(({ isLoading }: ImageStyles) => [
  tw`
    flex
    justify-center
    items-center
    w-32
    sm:w-64
    hover:scale-125
    transition
    duration-300
    ease-in-out
    z-10
`,
  isLoading === true && LoadingSpinner,
]);

const Wrapper = styled.div(({ isLoading }: ImageStyles) => [
  tw`
		rounded-xl
    z-10
    opacity-0
    group-hover:opacity-100
    transition
    duration-300
    ease-in-out
    cursor-pointer
    absolute
    top-1/2
    left-1/2
    transform
    -translate-x-1/2 
    -translate-y-1/2
	`,
  isLoading === true && tw`opacity-100`,
]);

const Figure = styled.figure.attrs({ className: 'group' })(({ type }: ImageStyles) => [
  tw`
    flex
    justify-center
    items-center
    w-full
    overflow-hidden
    cursor-pointer
    rounded-16
    relative
    max-h-[320px]
    
    mt-4
    ml-0
    mr-0
    mb-16

    bg-violet-200
    hover:bg-violet-600
    z-0
  `,
  type === 'container' && tw`border-1 border-slate-white`,
  (type === 'banner-edit' || type === 'banner-view') && tw`border-none`,
]);

const StyledFullScreen = styled(Fullscreen)(() => [tw`w-32 h-32 fill-slate-white`]);

const StyledEdit = styled(Edit)(() => [tw`w-32 h-32 fill-slate-white`]);

const StyledRepost = styled(Repost)(() => [tw`w-32 h-32 fill-slate-white`]);
