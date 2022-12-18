import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Icons } from 'src/components/icons/IconMap';

export interface IImageContainerProps
  extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  fCallBack?: () => void;
  icon?: 'fullscreen' | 'edit';
}

export const ImageContainer: React.FC<IImageContainerProps> = ({
  src = '',
  alt = '',
  fCallBack,
  icon = 'fullscreen',
}) => {
  const defaultImage = 'https://unsplash.com/photos/K2s_YE031CA';

  const Icon = React.cloneElement(Object(Icons[icon]), {
    className: 'fill-slate-white',
    width: 'auto',
    height: 'auto',
  });

  return (
    <Figure className="group">
      <Wrapper>
        <Container>
          <Row onClick={fCallBack}>{Icon}</Row>
        </Container>
      </Wrapper>
      <Image alt={alt} src={src === '' ? defaultImage : src} />
    </Figure>
  );
};

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
  duration-300
  ease-in-out

  group-hover:translate-y-0
`,
]);

const Row = styled.div(() => [
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
`,
]);

const Wrapper = styled.div(() => [
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
]);

const Figure = styled.figure(() => [
  tw`
    flex
    justify-center
    items-start
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
  `,
]);
