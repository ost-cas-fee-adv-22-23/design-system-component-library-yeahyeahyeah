import React from 'react';
import tw, { styled } from 'twin.macro';
import { BottomSpacing } from '../Spacing';
import type { TmbSpacing } from '../../types/types';

export interface IParagraphProps {
  size?: 'default' | 'medium' | 'large';
  color?: 'default' | 'dark' | 'light' | 'white';
  text: string;
  mbSpacing?: TmbSpacing;
}

export const Paragraph: React.FC<IParagraphProps> = ({ size = 'medium', color = 'default', mbSpacing, text }) => {
  return (
    <>
      <ParagraphStyles size={size} color={color} mbSpacing={mbSpacing}>
        {text}
      </ParagraphStyles>
    </>
  );
};

interface IParagraphStylesProps {
  size: string;
  color?: string;
  mbSpacing?: TmbSpacing;
}

const paragraphDefaults = tw`font-medium`;
const paragraphMedium = tw`text-base font-medium`; // leading-loose
const paragraphLarge = tw`text-lg font-medium`;
const paragraphColorDark = tw`text-slate-900`;
const paragraphColorLight = tw`text-slate-500`;
const paragraphColorWhite = tw`text-slate-white`;
const ParagraphStyles = styled.p(({ size, color }: IParagraphStylesProps) => [
  tw`
      mb-24
    `,
  paragraphDefaults,
  BottomSpacing,
  size === 'large' && paragraphLarge,
  size === 'medium' && paragraphMedium,
  color === 'dark' && paragraphColorDark,
  color === 'light' && paragraphColorLight,
  color === 'white' && paragraphColorWhite,
]);
