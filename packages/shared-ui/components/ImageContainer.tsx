import React from 'react';
import styled from 'styled-components';
import tw, { TwStyle } from 'twin.macro';
import { Fullscreen, Edit, Repost } from './icons/components';

export interface IImageContainerProps
  extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  fCallBack?: () => void;
  type?: 'fullscreen' | 'edit' | 'repost';
  loading?: boolean;
}

export const ImageContainer: React.FC<IImageContainerProps> = ({
  src = '',
  alt = '',
  fCallBack,
  type = 'fullscreen',
  loading = false,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'fullscreen':
        return <StyledFullScreen />;
      case 'edit':
        return <StyledEdit />;
      case 'repost':
        return <StyledRepost />;
    }
  };

  return (
    <Figure className="group">
      <Wrapper loading={loading} type={type}>
        <Container>
          <ImageIcon loading={loading} onClick={fCallBack} type={type}>
            {getIcon()}
          </ImageIcon>
        </Container>
      </Wrapper>
      <Image alt={alt} src={src} width={'680px'} height={'320px'} />
    </Figure>
  );
};

interface IImageIcon {
  loading: boolean;
  type: string;
}

const Image = styled.img(() => [
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

const ImageIcon = styled.div(({ loading, type }: IImageIcon) => [
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
  loading === true && type === 'repost' ? LoadingSpinner : ``,
]);

const Wrapper = styled.div(({ loading, type }: IImageIcon) => [
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
  loading === true && type === 'repost' ? tw`opacity-100` : ``,
]);

const Figure = styled.figure(() => [
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
    bg-violet-100
    hover:bg-violet-600
    cursor-pointer
    rounded-16
    relative
    mb-24
  `,
]);

const StyledFullScreen = styled(Fullscreen)(() => [
  tw`w-32 h-32 fill-slate-white`,
]);

const StyledEdit = styled(Edit)(() => [tw`w-32 h-32 fill-slate-white`]);

const StyledRepost = styled(Repost)(() => [tw`w-32 h-32 fill-slate-white`]);
