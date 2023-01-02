import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';

export interface IFormCheckboxProps extends React.HtmlHTMLAttributes<HTMLFormElement> {
  selection: 'yourMumbles' | 'yourLikes';
  fCallBack?: () => void;
}

export const Checkbox: React.FC<IFormCheckboxProps> = (props: IFormCheckboxProps) => {
  const { fCallBack } = props;
  const [isType, setIsType] = useState<string>('yourMumbles');

  const handleChange = () => {
    isType === 'yourMumbles' ? setIsType('yourLikes') : setIsType('yourMumbles');
  };

  return (
    <>
      <FormLabel htmlFor="switch">
        <FormInput id="switch" type="checkbox" name="switch" onChange={handleChange} onClick={fCallBack} />
        <FormSpanMumble selection={isType}>Deine Mumbles</FormSpanMumble>
        <FormSpanLike selection={isType}>Deine Likes</FormSpanLike>
      </FormLabel>
    </>
  );
};

interface IFormSpanStyles {
  selection: string;
  fCallBack?: () => void;
}

const Span = tw`
    text-md
    font-semibold
    text-slate-600
    
    p-6
    px-[11px]
    rounded  
    bg-none
`;

const FormSpanMumble = styled.span(({ selection }: IFormSpanStyles) => [
  Span,
  selection === 'yourMumbles' && tw`bg-slate-white text-violet-600 hover:grow`,
  selection === 'yourLikes' && tw`hover:(text-slate-800)`,
]);

const FormSpanLike = styled.span(({ selection }: IFormSpanStyles) => [
  Span,
  selection === 'yourLikes' && tw`bg-slate-white text-violet-600 text-right hover:grow`,
  selection === 'yourMumbles' && tw`hover:(text-slate-800)`,
]);

const FormLabel = styled.label(() => [
  tw`
    flex
    justify-between
    items-center

    w-[336px]
    h-[48px]
    py-4
    px-[5px]
    
    rounded
    bg-slate-200 
    cursor-pointer
  `,
]);

const FormInput = styled.input(() => [
  tw`
    peer-first:block
    hidden
  `,
]);
