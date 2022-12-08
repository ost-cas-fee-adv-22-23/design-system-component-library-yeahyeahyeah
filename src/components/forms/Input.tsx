import styled from 'styled-components';
import tw from 'twin.macro';
import React, { useState, useEffect } from 'react';
import { Eye } from 'src/stories/assets/icons';

interface IFormInput extends React.HtmlHTMLAttributes<HTMLFormElement> {
  label: string;
  type?: 'text' | 'password';
  placeholder?: string;
  handleClick?: () => void;
}

export const InputForm: React.FC<IFormInput> = ({
  label = 'Label',
  type = 'icon',
  placeholder = 'Placeholder',
}) => {
  const [buttonType, setbuttonType] = useState(type);

  console.log({ type });

  useEffect(() => {
    type === 'password' ? setbuttonType('password') : setbuttonType('text');
  }, [type]);

  const handleClick = () => {
    buttonType === type ? setbuttonType('text') : setbuttonType(type);
  };

  return (
    <>
      <LabelStyles>
        {label}
        <InputIconWrapper>
          <InputStyles placeholder={placeholder} type={buttonType} />
          {type === 'password' && (
            <Eye
              className="absolute right-16 cursor-pointer"
              onClick={handleClick}
            />
          )}
        </InputIconWrapper>
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

    flex
    flex-row
    justify-start
    items-start
    form-input
    rounded
    w-full
    
    border-1
    border-slate-200
    hover:border-violet-700
    focus:border-violet-700
    placeholder:(font-normal text-slate-300)
    bg-slate-50
  `,
]);
