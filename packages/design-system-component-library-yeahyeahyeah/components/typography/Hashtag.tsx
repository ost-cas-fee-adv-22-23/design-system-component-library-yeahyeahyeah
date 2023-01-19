import React, { MouseEvent } from 'react';
import tw, { styled } from 'twin.macro';

export interface IHashtagProps {
  label?: string;
  fnCallBack: (e: MouseEvent<HTMLAnchorElement>) => void;
  size: 'small' | 'large';
}

export const Hashtag: React.FC<IHashtagProps> = ({ label, fnCallBack, size }) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    fnCallBack(event);
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
  size === 'small'
    ? tw`text-violet-600 hover:text-violet-500 text-lg [font-weight:500]`
    : tw`text-slate-white hover:text-slate-white text-4xl [font-weight:700]`,
]);
