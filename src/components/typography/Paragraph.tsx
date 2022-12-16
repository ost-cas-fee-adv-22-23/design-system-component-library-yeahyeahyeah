import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface IParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'default' | 'medium' | 'large';
  color?: 'default' | 'dark' | 'light';
  text: string;
}

export const Paragraph: React.FC<IParagraphProps> = ({
  variant = 'medium',
  color = 'default',
  text,
}) => {
  return (
    <ParagraphStyles variant={variant} color={color}>
      {text}
    </ParagraphStyles>
  );
};

interface IParagraphStylesProps {
  variant: string;
  color?: string;
}

const paragraphDefaults = tw`font-medium`;
const paragraphMedium = tw`text-base font-medium leading-loose`;
const paragraphLarge = tw`text-lg font-medium`;
const paragraphColorDark = tw`text-slate-900`;
const paragraphColorLight = tw`text-slate-500`;

const ParagraphStyles = styled.p(
  ({ variant, color }: IParagraphStylesProps) => [
    tw`
      mb-24
    `,
    paragraphDefaults,
    variant === 'large' && paragraphLarge,
    variant === 'medium' && paragraphMedium,
    color === 'dark' && paragraphColorDark,
    color === 'light' && paragraphColorLight,
  ],
);
