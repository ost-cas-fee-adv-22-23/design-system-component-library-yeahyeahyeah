import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'default' | 'medium' | 'large';
  children?: string;
}

export const Paragraph: React.FC<IParagraphProps> = ({
  variant = 'medium',
  children,
}) => {
  return (
    <>
      <ParagraphStyles variant={variant}>{children}</ParagraphStyles>
    </>
  );
};

interface IParagraphStylesProps {
  variant: string;
}

const paragraphDefaults = tw`font-medium`;
const paragraphMedium = tw`text-base font-medium leading-loose`;
const paragraphLarge = tw`text-lg font-medium`;

const ParagraphStyles = styled.p(({ variant }: IParagraphStylesProps) => [
  paragraphDefaults,
  variant === 'large' && paragraphLarge,
  variant === 'medium' && paragraphMedium,
]);
