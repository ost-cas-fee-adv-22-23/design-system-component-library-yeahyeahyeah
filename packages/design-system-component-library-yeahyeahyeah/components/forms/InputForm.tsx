import React, { useEffect, useRef, useState } from 'react';
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
  setText?: React.Dispatch<React.SetStateAction<string>>;
  setRef?: React.Dispatch<
    React.SetStateAction<React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null> | null>
  >;
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
  setText,
  setRef,
  onPressEnter,
}) => {
  const [buttonType, setbuttonType] = useState(type);
  const [clear, setClear] = useState<boolean>(false);

  const showPassword = () => {
    buttonType === 'password' ? setbuttonType('text') : setbuttonType('password');
  };

  const clearForm = () => {
    if (ref?.current) ref.current.value = '';
    setClear(false);
  };

  const ref = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  useEffect(() => {
    setRef && setRef(ref);
  }, [ref]);

  useEffect(() => {
    if (ref?.current && ref.current.value !== '') {
      setClear(true);
      return;
    }
    setClear(false);
  }, [ref?.current && ref.current.value]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter' && e.shiftKey == false) {
      e.preventDefault();
      setClear(false);
      onPressEnter && onPressEnter();
    }
  };

  return (
    <>
      {editType === ('input' || '') && (
        <FormLabel htmlFor={label}>
          {label}
          <FormInlineWrapperStyles>
            <InputStyles
              id={label}
              placeholder={placeholder}
              type={buttonType}
              required={required}
              maxLength={150}
              autoComplete={autoComplete}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText && setText(e.target.value)}
              onKeyDown={handleKeyDown}
              ref={ref}
              error={errorMessage ? 'true' : 'false'}
            />
            {type === 'password' && <Eye tw="absolute right-16 cursor-pointer" onClick={showPassword} />}
            {type === 'text' && clear && <Cancel tw="absolute right-16 cursor-pointer" onClick={clearForm} />}
          </FormInlineWrapperStyles>
          <FormFieldError>{errorMessage}</FormFieldError>
        </FormLabel>
      )}

      {editType === 'textarea' && (
        <FormLabel htmlFor={label}>
          {label}
          <TextArea
            id={label}
            placeholder={placeholder}
            required={required}
            maxLength={500}
            autoComplete={autoComplete}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText && setText(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={20}
            cols={30}
            ref={ref}
            error={errorMessage ? 'true' : 'false'}
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

/**
 * @Form: Input, Textarea, Label
 * @desc Button styles
 */
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

// eslint-disable-next-line
const _TextArea: any = React.forwardRef(
  (props: Pick<IFormInputProps, 'required' | 'autoComplete'>, ref?: React.Ref<any>) => {
    return <textarea {...props} ref={ref} />;
  }
);

// TEXTAREA
const TextArea = styled(_TextArea)(({ error }: IStyled) => [
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
    border-1
    outline-none
    placeholder:(font-normal text-slate-300)
  `,
  error === 'true'
    ? tw`ring-0 border-red hover:(ring-0 border-red) focus:(ring-0 border-red) focus-within:(ring-0 border-red)`
    : tw`ring-0 border-slate-200 hover:(ring-0 border-violet-700) focus:(ring-0 border-violet-700) focus-within:(ring-0 border-violet-700)`,
]);

// eslint-disable-next-line
const _Input: any = React.forwardRef((props: Pick<IFormInputProps, 'required' | 'autoComplete'>, ref?: React.Ref<any>) => {
  return <input {...props} ref={ref} />;
});

// INPUT
const InputStyles = styled(_Input)(({ error }: IStyled) => [
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
    border-1
    placeholder:(font-normal text-slate-300)
    
  `,
  error === 'true'
    ? tw`ring-0 border-red hover:(ring-0 border-red) focus:(ring-0 border-red) focus-within:(ring-0 border-red)`
    : tw`ring-0 border-slate-200 hover:(ring-0 border-violet-700) focus:(ring-0 border-violet-700) focus-within:(ring-0 border-violet-700)`,
]);
