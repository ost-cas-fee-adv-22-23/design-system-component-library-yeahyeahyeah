import React from 'react';
import tw, { styled } from 'twin.macro';
import { Spacing } from '../../interfaces/Types';
import { BottomSpacing } from '../Spacing';

export interface IParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'default' | 'medium' | 'large';
  color?: 'default' | 'dark' | 'light' | 'white';
  text: string;
  spacing?: Spacing['spacing'];
}

export const Paragraph: React.FC<IParagraphProps> = ({ size = 'medium', color = 'default', text, spacing }) => {
  const props = { size, color, text, spacing };
  return (
    <>
      <ParagraphStyles {...props}>{text}</ParagraphStyles>
    </>
  );
};

interface IParagraphStylesProps {
  size: string;
  color?: string;
  spacing?: string;
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
