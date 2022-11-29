import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  label: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4';
  color: 'slate' | 'violet' | 'pink';
}

export const Typography: React.FC<IHeadingProps> = ({
  label,
  variant,
  color,
}) => {
  console.log(variant, color);

  return (
    <>
      <div className="container">
        <div className="m-4">
          <HeadingStyles variant={variant} color={color}>
            {label}
          </HeadingStyles>
          <p>Google Font “Poppins”, Medium, Semibold & Bold</p>
        </div>
        <div className="m-4">
          <h2 className="my-4">{label}</h2>
          <h3 className="my-4">{label}</h3>
          <h4 className="my-4">{label}</h4>
        </div>
        <div className="m-4">
          <p>
            Paragraph M – Quia aut et aut. Sunt et eligendi similique enim qui
            quo minus. Aut aut error velit voluptatum optio sed quis cumque
            error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt
            ratione et recusandae quos excepturi ut deleniti ut repellat magni.
          </p>
        </div>
      </div>
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
  variant === 'h1' && tw`text-5xl font-bold leading-relaxed`,
  variant === 'h2' && tw`text-4xl font-bold leading-relaxed`,
  variant === 'h3' && tw`text-3xl font-semibold leading-10`,
  variant === 'h4' && tw`text-2xl font-semibold  leading-relaxed`,
  color === 'slate' && tw`text-slate-500`,
  color === 'violet' && tw`text-violet-600`,
  color === 'pink' && tw`text-pink-900`,
]);
