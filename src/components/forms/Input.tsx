import styled from 'styled-components';
import tw from 'twin.macro';
import React, { useState, useEffect } from 'react';
import { Eye } from 'src/stories/assets/icons';

interface IFormInput extends React.HtmlHTMLAttributes<HTMLFormElement> {
  label: string;
  editType: 'input' | 'textarea';
  required: boolean;
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'file';
  placeholder: string;
  errorMessage: string;
  handleClick?: () => void;
}

export const InputForm: React.FC<IFormInput> = ({
  label = 'Label',
  editType = 'textarea',
  required = true,
  type = 'icon',
  placeholder = 'Placeholder',
  errorMessage,
}) => {
  const [buttonType, setbuttonType] = useState(type);

  console.log({ type });

  useEffect(() => {
    type === 'password' ? setbuttonType('password') : setbuttonType(type);
  }, [type]);

  const showPassword = () => {
    buttonType === type ? setbuttonType('text') : setbuttonType(type);
  };

  return (
    <>
      {editType === ('input' || '') && (
        <FormLabelStyles htmlFor={label}>
          {label}
          <FormInlineWrapperStyles>
            <InputStyles
              id={label}
              placeholder={placeholder}
              type={buttonType}
              required={required}
              maxLength={3}
            />
            {type === 'password' && (
              <Eye
                className="absolute right-16 cursor-pointer"
                onClick={showPassword}
              />
            )}
          </FormInlineWrapperStyles>
          <FormFieldErrorStyles>{errorMessage}</FormFieldErrorStyles>
        </FormLabelStyles>
      )}

      {editType === 'textarea' && (
        <FormLabelStyles>
          {label}
          <TextareaStyles
            rows={20}
            cols={30}
            aria-colspan={10}
            maxLength={500}
            required={required}
          />
        </FormLabelStyles>
      )}
    </>
  );
};

/**
 * @Form: Input, Textarea, Label
 * @desc Button styles
 */
const FormFieldErrorStyles = styled.p(() => [
  tw`
    flex
    flex-row
    justify-end
    items-center
    // invisible
    // peer-invalid:visible
    text-xxs
    font-medium
    text-pink-700
    mt-4
  `,
]);

const FormLabelStyles = styled.label(() => [
  tw`
    block
    text-slate-900 
    font-semibold 
    w-full 
    mb-24
  `,
]);

// LABEL/INPUT WRAPPER
const FormInlineWrapperStyles = styled.div(() => [
  tw`
    relative
    flex
    flex-row
    justify-end
    items-center
  `,
]);

// TEXTAREA
const TextareaStyles = styled.textarea(() => [
  tw`
  text-slate-500
    font-medium
    text-md
    leading

    flex
    flex-row
    justify-start
    items-start
    p-12
    rounded
    w-full
    h-[calc(4.375rem)]
    
  bg-slate-100
    border-1
    border-slate-200
    outline-none
  
    hover:(border-2 border-spacing-0)
    active:(border-2 border-violet-600)
    focus:(border-2 border-violet-600)
    placeholder:(font-normal text-slate-300)
  `,
]);

// INPUT
const InputStyles = styled.input(() => [
  tw`
    peer-invalid:border-pink-700
  text-slate-500
    font-medium
    text-sm
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
