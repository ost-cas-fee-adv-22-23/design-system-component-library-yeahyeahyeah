import React, { MouseEvent } from 'react';
import tw, { styled } from 'twin.macro';

export interface IHashtagProps {
  label?: string;
  fCallBack: (e: MouseEvent<HTMLAnchorElement>) => void;
  size: 'small' | 'medium' | 'large';
}

export const Hashtag: React.FC<IHashtagProps> = ({ label, fCallBack, size }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    fCallBack(e);
  };

  return (
    <StyledHashtag onClick={handleClick} title={label} size={size}>
      #{label}
    </StyledHashtag>
  );
};

interface IHashtagStyleProps {
  size: string;
}

const StyledHashtag = styled.a(({ size }: IHashtagStyleProps) => [
  tw`transition cursor-pointer`,
  size === 'small' && tw`text-violet-600 hover:text-violet-500 text-base [font-weight:500] hover:underline`,
  size === 'medium' && tw`text-violet-600 hover:text-violet-500 text-lg [font-weight:500] hover:underline`,
  size === 'large' && tw`text-slate-white hover:text-slate-white text-4xl [font-weight:700] hover:underline`,
]);
