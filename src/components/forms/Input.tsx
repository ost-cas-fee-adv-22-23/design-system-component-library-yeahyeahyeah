import styled from 'styled-components';
import tw from 'twin.macro';
import React from 'react';

interface IIconLinkProps extends React.HtmlHTMLAttributes<HTMLLinkElement> {
  label: string;
  variant?: 'slate' | 'violet';
  handleClick?: () => void;
  children: React.ReactNode;
}

export const InputForm: React.FC<IIconLinkProps> = ({
  label = 'Label',
  variant = 'slate',
  handleClick,
  children,
}) => {
  console.log(variant);

  return (
    <>
      <LabelStyles>
        {label}
        <InputIconWrapper>
          <InputStyles placeholder="Placeholder" />
          <svg
            className="absolute right-16 cursor-pointer"
            onClick={() => console.log('clicked')}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="#475569"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_427_455)">
              <path d="M8.00013 14C12.7071 14 15.7441 8.716 15.8711 8.492C16.0421 8.188 16.0431 7.816 15.8721 7.512C15.7461 7.287 12.7311 2 8.00013 2C3.24513 2 0.251127 7.289 0.126127 7.514C-0.0428725 7.817 -0.0418725 8.186 0.128127 8.489C0.254128 8.713 3.26913 14 8.00013 14ZM8.00013 4C10.8391 4 13.0361 6.835 13.8181 8C13.0341 9.166 10.8371 12 8.00013 12C5.15913 12 2.96213 9.162 2.18113 7.999C2.95813 6.835 5.14613 4 8.00013 4Z" />
              <path d="M8.00013 10C9.1047 10 10.0001 9.10457 10.0001 8C10.0001 6.89543 9.1047 6 8.00013 6C6.89556 6 6.00013 6.89543 6.00013 8C6.00013 9.10457 6.89556 10 8.00013 10Z" />
            </g>
            <defs>
              <clipPath id="clip0_427_455">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </InputIconWrapper>
      </LabelStyles>
      <LabelStyles>
        Label
        <InputStyles placeholder="Placeholder" />
      </LabelStyles>
    </>
  );
};

interface IStyleProps {
  variant?: string;
}

/**
 * @Button
 * @desc Button styles
 */
const LabelStyles = styled.div(() => [
  tw`
    block
    text-slate-900 
    font-semibold 
    w-full 
    mb-24
  `,
]);

const InputIconWrapper = styled.div(() => [
  tw`
    relative
    flex
    justify-end
    items-center
  `,
]);

const InputStyles = styled.input(() => [
  tw`
  text-slate-700
    font-semibold
    leading

    form-input
    rounded
    w-full
    
    border-1
    border-slate-200
    hover:border-violet-700
    focus:border-violet-700
    placeholder:(font-normal text-slate-400)
    bg-slate-50
  `,
]);
