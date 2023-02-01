import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { Eye, Cancel } from '../icons/index';

export interface IFormInputProps {
  label?: string;
  editType: 'input' | 'textarea';
  required: boolean;
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'file';
  placeholder?: string;
  errorMessage: string;
  autoComplete: 'off' | 'on';
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onPressEnter?: () => void;
}

export const InputForm: React.FC<IFormInputProps> = ({
  label = 'Label',
  editType = 'textarea',
  required = true,
  type = 'text',
  placeholder = 'Placeholder',
  errorMessage,
  autoComplete = 'off',
  inputValue,
  setInputValue,
  onPressEnter,
}) => {
  const [buttonType, setbuttonType] = useState(type);

  const showPassword = () => {
    buttonType === 'password' ? setbuttonType('text') : setbuttonType('password');
  };

  const clearForm = () => {
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter' && e.shiftKey == false) {
      e.preventDefault();
      setInputValue('');
      onPressEnter && onPressEnter();
    }
  };

  return (
    <>
      {editType === 'input' ? (
        <FormLabel htmlFor={label}>
          {label}
          <FormInlineWrapperStyles>
            <InputStyles
              id={label.toLowerCase()}
              placeholder={placeholder}
              type={buttonType}
              required={required}
              maxLength={150}
              autoComplete={autoComplete}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue && setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              error={errorMessage ? 'true' : 'false'}
              data-testid={label.toLowerCase()}
              value={inputValue}
            />
            {type === 'password' && <Eye tw="absolute right-16 cursor-pointer" onClick={showPassword} />}
            {type === 'text' && inputValue && (
              <Cancel data-testid={'svg_cancel'} tw="absolute right-16 cursor-pointer" onClick={clearForm} />
            )}
          </FormInlineWrapperStyles>
          <FormFieldError>{errorMessage}</FormFieldError>
        </FormLabel>
      ) : (
        <FormLabel htmlFor={label}>
          {label}
          <TextArea
            id={label}
            placeholder={placeholder}
            required={required}
            maxLength={500}
            autoComplete={autoComplete}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputValue && setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={20}
            cols={30}
            error={errorMessage ? 'true' : 'false'}
            data-testid={'testTextarea'}
            value={inputValue}
          />
          <FormFieldError>{errorMessage}</FormFieldError>
        </FormLabel>
      )}
    </>
  );
};

interface IStyled {
  error: string;
}

const FormFieldError = styled.p(() => [
  tw`
    flex
    flex-row
    justify-end
    items-center
    text-xxs
    font-medium
    text-red
    mt-4
    h-16
  `,
]);

const FormLabel = styled.label(() => [
  tw`
    block
    text-slate-900 
    font-semibold 
    w-full 
    mt-4
    mb-24
  `,
]);

const FormInlineWrapperStyles = styled.div(() => [
  tw`
    relative
    flex
    flex-row
    justify-end
    items-center
  `,
]);

const TextArea = styled.textarea(({ error }: IStyled) => [
  tw`
    text-slate-500
    bg-slate-100
    font-medium
    text-md
    leading-6
    flex
    flex-row
    justify-start
    items-start
    p-16
    rounded
    w-full
    h-[160px]
    min-h-[calc(4.375rem)]
    border-0
    outline-none
    ring-1
    ring-slate-100
    placeholder:(font-normal text-slate-500)
  `,
  error === 'true'
    ? tw`ring-1 ring-red hover:(ring-red) focus:(ring-red) focus-within:(ring-red)`
    : tw`ring-1 ring-slate-200 hover:(ring-2 ring-slate-300) focus:(ring-2 ring-violet-700) focus-within:(ring-2 ring-violet-700)`,
]);

const InputStyles = styled.input(({ error }: IStyled) => [
  tw`
    text-slate-500
    bg-slate-50
    font-medium
    text-sm
    leading
    flex
    flex-row
    justify-start
    items-start
    form-input
    w-full
    rounded
    border-0
    outline-none
    ring-1
    ring-offset-0
    ring-slate-50
    placeholder:(font-normal text-slate-500)
  `,
  error === 'true'
    ? tw`ring-1 ring-red hover:(ring-red) focus:(ring-red) focus-within:(ring-red)`
    : tw`ring-2 ring-slate-50 hover:(ring-slate-300) focus:(ring-2 ring-violet-700) focus-within:(ring-2 ring-violet-700)`,
]);
