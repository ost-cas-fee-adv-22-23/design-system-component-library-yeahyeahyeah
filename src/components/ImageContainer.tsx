import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ReactComponent as ImageDefault } from './icons/icons/image-default.svg';

export interface IImageContainer
  extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  fCallBack?: () => void;
}

export const ImageContainer: React.FC<IImageContainer> = ({
  src = '',
  alt = '',
  fCallBack,
}) => {
  return (
    <DivStyled>
      {src ? (
        <StyledImageContainer src={src} alt={alt} onClick={fCallBack} />
      ) : (
        <StyledSVG />
      )}
    </DivStyled>
  );
};

const StyledImageContainer = styled.img(() => [
  tw`
		bg-violet-200
		h-[330px]
		rounded-16
		border-1
		border-slate-white
		aspect-video
		object-cover
	`,
]);

const StyledSVG = styled(ImageDefault)(() => [
  tw`
		rounded-16
		border-1
		border-slate-white
		aspect-video
		object-cover
	`,
]);

const DivStyled = styled.div(() => [
  tw`
    pb-16
  `,
]);
