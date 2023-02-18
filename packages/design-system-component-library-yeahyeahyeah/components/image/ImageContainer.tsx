import React, { ImgHTMLAttributes } from 'react';
import tw, { styled } from 'twin.macro';
import { Fullscreen, Edit, Repost } from '../icon/default_index';
import { ImageScale } from '../../styles/ImageScale';
import { ImageProps } from './Image';

export type ImageContainerProps<T> = {
  src: string;
  alt: string;
  onImageIconClick?: (type: string) => void;
  type?: 'container' | 'banner-edit' | 'banner-view';
  isLoading?: boolean;
  loading?: 'lazy' | 'eager';
  decoding?: 'auto' | 'async' | 'sync';
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
  loading = 'lazy',
  decoding = 'async',
  ...props
}: ImageContainerProps<T>) => {
  const handleClick = () => {
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
            <ImageIcon isLoading={isLoading} onClick={handleClick}>
              <StyledRepost />
            </ImageIcon>
          ) : (
            <ImageIcon isLoading={isLoading} onClick={handleClick}>
              {getIcon()}
            </ImageIcon>
          )}
        </Container>
      </Wrapper>

      {src !== '' && <Picture {...(props as any)} alt={alt} src={src} loading={loading} decoding={decoding} />}
    </Figure>
  );
};

interface IImageIcon {
  isLoading?: boolean;
  type?: string;
}

const Picture = styled.img(({ type }: IImageIcon) => [
  ImageScale({ opacityLevel: '60' }),
  (type === 'banner-edit' || type === 'banner-view') && tw`w-full h-auto`,
]);

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

const isLoadingSpinner = tw`
  animate-spin
  flex
  justify-center
  w-64
  h-64
  rounded-full
  fill-slate-white
  opacity-50
`;

const ImageIcon = styled.div(({ isLoading }: IImageIcon) => [
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
    z-50
`,
  isLoading === true && isLoadingSpinner,
]);

const Wrapper = styled.div(({ isLoading }: IImageIcon) => [
  tw`
		rounded-xl
    z-50
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

const Figure = styled.figure.attrs({ className: 'group' })(({ type }: IImageIcon) => [
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
  `,
  type === 'container' && tw`border-1 border-slate-white`,
  (type === 'banner-edit' || type === 'banner-view') && tw`border-none`,
]);

const StyledFullScreen = styled(Fullscreen)(() => [tw`w-32 h-32 fill-slate-white`]);

const StyledEdit = styled(Edit)(() => [tw`w-32 h-32 fill-slate-white`]);

const StyledRepost = styled(Repost)(() => [tw`w-32 h-32 fill-slate-white`]);
