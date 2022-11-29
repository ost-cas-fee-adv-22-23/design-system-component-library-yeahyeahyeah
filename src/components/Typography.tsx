import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4';
  label: string;
}

export const Typography: React.FC<IHeadingProps> = ({ label, variant }) => {
  console.log(variant);

  return (
    <>
      <div className="container">
        <HeadingStyles variant={variant}>{label}</HeadingStyles>
        <HeadingStyles variant={'h2'}>{label}</HeadingStyles>
        <HeadingStyles variant={'h3'}>{label}</HeadingStyles>
        <p>Google Font “Poppins”, Medium, Semibold & Bold</p>
      </div>
    </>
  );
};

interface IHeadingStylesProps {
  variant: string;
}

const HeadingStyles = styled.h1(({ variant }: IHeadingStylesProps) => [
  tw`
		font-poppins
		font-semibold
		text-slate-600
		m-0
	`,
  variant === 'h1' && tw`text-5xl font-bold leading-relaxed`,
  variant === 'h2' && tw`text-4xl leading-relaxed`,
  variant === 'h3' && tw`text-3xl font-normal leading-relaxed`,
]);
