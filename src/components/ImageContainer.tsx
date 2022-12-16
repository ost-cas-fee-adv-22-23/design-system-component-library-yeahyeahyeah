import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface IProfilePicture
  extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  fCallBack?: () => void;
}

export const ImageContainer: React.FC<IProfilePicture> = ({
  src = '',
  alt = '',
  fCallBack,
}) => {
  return <StyledImageContainer src={src} alt={alt} onClick={fCallBack} />;
};

// interface IStyledImageContainerProps {}

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
