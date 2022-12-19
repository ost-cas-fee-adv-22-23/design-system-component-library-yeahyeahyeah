import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Icons } from './icons/IconMap';

export interface IImageContainerProps
  extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  fCallBack?: () => void;
  icon?: 'fullscreen' | 'edit' | 'repost';
  loading?: boolean | false;
}

export const ImageContainer: React.FC<IImageContainerProps> = ({
  src = '',
  alt = '',
  fCallBack,
  icon = 'fullscreen',
  loading = false,
}) => {
  const Icon = React.cloneElement(Object(Icons[icon]), {
    className: 'fill-slate-white',
    width: '32px',
    height: '32px',
  });

  return (
    <Figure className="group">
      <Wrapper loading={loading} icon={icon}>
        <Container>
          <ImageIcon loading={loading} onClick={fCallBack} icon={icon}>
            {Icon}
          </ImageIcon>
        </Container>
      </Wrapper>
      <Image
        alt={alt}
        src={src}
        loading={'lazy'}
        width={'680px'}
        height={'320px'}
      />
    </Figure>
  );
};

interface IImageIcon {
  loading: boolean;
  icon: string;
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
  w-32
  h-32
  rounded-full
  fill-slate-white
  opacity-50
`;

const ImageIcon = styled.div(({ loading, icon }: IImageIcon) => [
  tw`
    flex
    justify-center
    items-center
    w-32
    sm:w-64
    hover:scale-150
    transition
    duration-300
    ease-in-out
    z-50
`,
  loading === true && icon === 'repost' && LoadingSpinner,
]);

const Wrapper = styled.div(({ loading, icon }: IImageIcon) => [
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
  loading === true && icon === 'repost' && tw`opacity-100`,
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
