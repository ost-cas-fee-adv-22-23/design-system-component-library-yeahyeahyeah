import React from 'react';
import tw, { styled } from 'twin.macro';

export interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  label: string;
  tag: 'h1' | 'h2' | 'h3' | 'h4';
  color: 'light' | 'medium' | 'dark' | 'violet' | 'pink' | 'white';
  variant: 'default' | 'xlarge' | 'large' | 'medium' | 'small';
}

export const Heading: React.FC<IHeadingProps> = ({ label, tag = 'h1', color = 'medium', variant = 'default' }) => {
  const props = { label, tag, color, variant };

  return (
    <>
      {tag === 'h1' && <H1Styles {...props}>{label}</H1Styles>}
      {tag === 'h2' && <H2Styles {...props}>{label}</H2Styles>}
      {tag === 'h3' && <H3Styles {...props}>{label}</H3Styles>}
      {tag === 'h4' && <H4Styles {...props}>{label}</H4Styles>}
    </>
  );
};

interface IHeadingStylesProps {
  color: string;
  variant: string;
  tag: string;
}

const HeadingVariant = ({ variant, tag }: IHeadingStylesProps) => [
  tw`
    font-bold
    m-0
  `,
  variant === 'xlarge' && tw`text-lg`,
  variant === 'large' && tw`text-md`,
  variant === 'medium' && tw`text-sm`,
  variant === 'small' && tw`text-xs`,
  tag === 'h3' && tw`font-semibold`,
  tag === 'h4' && tw`font-semibold`,
];

const HeadingColor = ({ color }: IHeadingStylesProps) => [
  color === 'light' && tw`text-slate-500`,
  color === 'white' && tw`text-slate-white`,
  color === 'medium' && tw`text-slate-600`,
  color === 'dark' && tw`text-slate-900`,
  color === 'violet' && tw`text-violet-600`,
  color === 'pink' && tw`text-pink-900`,
];

const H1Styles = styled.h1(() => [
  tw`
    text-4xl font-bold
	`,
  HeadingColor,
  HeadingVariant,
]);

const H2Styles = styled.h2(() => [
  tw`
    text-3xl font-bold
	`,
  HeadingColor,
  HeadingVariant,
]);

const H3Styles = styled.h3(() => [
  tw`
    text-2xl
	`,
  HeadingColor,
  HeadingVariant,
]);

const H4Styles = styled.h4(() => [
  tw`
    text-xl
	`,
  HeadingColor,
  HeadingVariant,
]);
