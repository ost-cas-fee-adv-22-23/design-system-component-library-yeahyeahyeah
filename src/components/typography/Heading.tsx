import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  label: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4';
  color: 'slate-500' | 'slate-600' | 'violet-600' | 'pink-900';
}

export const Heading: React.FC<IHeadingProps> = ({ label, variant, color }) => {
  return (
    <>
      <HeadingStyles variant={variant} color={color}>
        {label}
      </HeadingStyles>
    </>
  );
};

interface IHeadingStylesProps {
  variant: string;
  color: string;
}

const HeadingStyles = styled.h1(({ variant, color }: IHeadingStylesProps) => [
  tw`
		m-0
	`,
  variant === 'h1' && tw`text-4xl font-bold`,
  variant === 'h2' && tw`text-3xl font-bold`,
  variant === 'h3' && tw`text-2xl font-semibold`,
  variant === 'h4' && tw`text-xl font-semibold`,
  color === 'slate-500' && tw`text-slate-500`,
  color === 'slate-600' && tw`text-slate-600`,
  color === 'violet-600' && tw`text-violet-600`,
  color === 'pink-900' && tw`text-pink-900`,
]);
