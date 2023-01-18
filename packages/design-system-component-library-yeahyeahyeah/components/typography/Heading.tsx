import React from 'react';
import tw, { styled } from 'twin.macro';
import { BottomSpacing } from '../Spacing';
import type { TmbSpacing } from '../../types/types';

export interface IHeadingProps {
  label: string;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  size: 'default' | 'xlarge' | 'large' | 'medium' | 'small';
  color: 'light' | 'medium' | 'dark' | 'violet' | 'pink' | 'white';
  alignment?: 'left' | 'center' | 'right';
  mbSpacing?: TmbSpacing;
}

export const Heading: React.FC<IHeadingProps> = ({
  label = 'Heading text',
  tag = 'h1',
  color = 'default',
  size = 'default',
  mbSpacing = '0',
  alignment = 'left',
}) => {
  return (
    <>
      {tag === 'h1' && (
        <H1Styles tag={tag} color={color} size={size} mbSpacing={mbSpacing} alignment={alignment}>
          {label}
        </H1Styles>
      )}
      {tag === 'h2' && (
        <H2Styles tag={tag} color={color} size={size} mbSpacing={mbSpacing} alignment={alignment}>
          {label}
        </H2Styles>
      )}
      {tag === 'h3' && (
        <H3Styles tag={tag} color={color} size={size} mbSpacing={mbSpacing} alignment={alignment}>
          {label}
        </H3Styles>
      )}
      {tag === 'h4' && (
        <H4Styles tag={tag} color={color} size={size} mbSpacing={mbSpacing} alignment={alignment}>
          {label}
        </H4Styles>
      )}
      {tag === 'span' && (
        <SpanStyles tag={tag} color={color} size={size} mbSpacing={mbSpacing} alignment={alignment}>
          {label}
        </SpanStyles>
      )}
    </>
  );
};

interface IHeadingStylesProps {
  color: string;
  size: string;
  tag: string;
  mbSpacing?: TmbSpacing;
  alignment?: string;
}

const Alignment = ({ alignment }: IHeadingStylesProps) => [
  tw`
    text-left
  `,
  alignment === 'left' && tw`text-left`,
  alignment === 'center' && tw`text-center`,
  alignment === 'right' && tw`text-right`,
];

const HeadingSize = ({ size, tag }: IHeadingStylesProps) => [
  tw`
    font-bold
    m-0
  `,
  size === 'xlarge' && tw`text-lg`,
  size === 'large' && tw`text-md`,
  size === 'medium' && tw`text-sm`,
  size === 'small' && tw`text-xs`,
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
  color === 'default' && tw`text-slate-900`,
];

const H1Styles = styled.h1(() => [
  tw`
    text-4xl font-bold w-full
	`,
  HeadingColor,
  HeadingSize,
  BottomSpacing,
  Alignment,
]);

const H2Styles = styled.h2(() => [
  tw`
    text-3xl font-bold w-full
	`,
  HeadingColor,
  HeadingSize,
  BottomSpacing,
  Alignment,
]);

const H3Styles = styled.h3(() => [
  tw`
    text-2xl w-full
	`,
  HeadingColor,
  HeadingSize,
  BottomSpacing,
  Alignment,
]);

const H4Styles = styled.h4(() => [
  tw`
    text-xl w-full
	`,
  HeadingColor,
  HeadingSize,
  BottomSpacing,
  Alignment,
]);

const SpanStyles = styled.span(() => [
  tw`
    text-xl w-full
	`,
  HeadingColor,
  HeadingSize,
  BottomSpacing,
  Alignment,
]);
