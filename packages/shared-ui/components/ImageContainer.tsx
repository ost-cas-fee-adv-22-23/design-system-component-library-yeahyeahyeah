import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Fullscreen, Edit, Repost } from './icons/components';

export interface IImageContainerProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  fCallBack?: () => void;
  type?: 'container' | 'banner';
  loading?: boolean;
}

export const ImageContainer: React.FC<IImageContainerProps> = ({
  src = '',
  alt = '',
  fCallBack,
  type = 'container',
  loading = false,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'container':
        return <StyledFullScreen />;
      case 'banner':
        return <StyledEdit />;
    }
  };

  return (
    <Figure type={type}>
      <Wrapper loading={loading ? 'true' : 'false'}>
        <Container>
          <ImageIcon loading={loading ? 'true' : 'false'} onClick={fCallBack}>
            {loading === true ? <StyledRepost /> : getIcon()}
          </ImageIcon>
        </Container>
      </Wrapper>
      {src && <Image alt={alt} src={src} />}
    </Figure>
  );
};

interface IImageIcon {
  loading?: string;
  type?: string;
}

const Image = styled.img(({ type }: IImageIcon) => [
  tw`
    w-full
    max-h-[320px]
    object-cover
    object-center
    aspect-square
    transition
    duration-300
    ease-in-out
    group-hover:scale-110
    group-hover:opacity-20
  `,
  type === 'banner' && tw`w-[680px] h-[320px]`,
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
    hover:scale-110
    transition
    duration-300
    ease-in-out
    z-50
`,
  loading === 'true' && LoadingSpinner,
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
  loading === 'true' && tw`opacity-100`,
]);

const Figure = styled.figure.attrs({ className: 'group' })(({ type }: IImageIcon) => [
  tw`
    flex
    justify-center
    items-center
    w-full
    max-h-[320px]
    border-1
    border-slate-white
    overflow-hidden
    aspect-video
    bg-violet-200
    hover:bg-violet-600
    cursor-pointer
    rounded-16
    relative
    mb-24
  `,
  type === 'banner' && tw`bg-violet-100 w-[680px] h-[320px]`,
]);

const StyledFullScreen = styled(Fullscreen)(() => [tw`w-32 h-32 fill-slate-white`]);

const StyledEdit = styled(Edit)(() => [tw`w-32 h-32 fill-slate-white`]);

const StyledRepost = styled(Repost)(() => [tw`w-32 h-32 fill-slate-white`]);
