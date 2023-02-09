import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Fullscreen, Edit, Repost } from './icons/default_index';
import { ImageScale } from '../styles/ImageScale';

export interface IImageContainerProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fCallBack?: (type: string) => void;
  type?: 'container' | 'banner-edit' | 'banner-view';
  loading?: boolean;
}

export const ImageContainer: React.FC<IImageContainerProps> = ({
  src = '',
  alt = '',
  fCallBack,
  type = 'container',
  loading = false,
}) => {
  const handleClick = () => {
    fCallBack && fCallBack(type);
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
      <Wrapper loading={loading}>
        <Container>
          <ImageIcon loading={loading} onClick={handleClick}>
            {loading === true ? <StyledRepost /> : getIcon()}
          </ImageIcon>
        </Container>
      </Wrapper>

      {src !== '' ? <Image alt={alt} src={src} /> : <Image tw="aspect-video border-none" />}
    </Figure>
  );
};

interface IImageIcon {
  loading?: boolean;
  type?: string;
}

const Image = styled.img(({ type }: IImageIcon) => [
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

const ImageIcon = styled.div(({ loading }: IImageIcon) => [
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
  loading === true && LoadingSpinner,
]);

const Wrapper = styled.div(({ loading }: IImageIcon) => [
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
  loading === true && tw`opacity-100`,
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
