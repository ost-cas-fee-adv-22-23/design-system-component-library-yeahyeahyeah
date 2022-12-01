import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'default' | 'medium' | 'large';
  color?: 'default' | 'dark' | 'light';
}

export const Paragraph: React.FC<IParagraphProps> = ({
  variant = 'medium',
  color = 'default',
}) => {
  return (
    <>
      <h3>Paragraph {variant}</h3>
      <ParagraphStyles variant={variant} color={color}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        assumenda ratione amet maiores aspernatur molestias unde, totam illo
        alias magnam ea cum repellat quibusdam quam. Officia voluptatem odit ex
        mollitia?
      </ParagraphStyles>
    </>
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
    paragraphDefaults,
    variant === 'large' && paragraphLarge,
    variant === 'medium' && paragraphMedium,
    color === 'dark' && paragraphColorDark,
    color === 'light' && paragraphColorLight,
  ],
);
