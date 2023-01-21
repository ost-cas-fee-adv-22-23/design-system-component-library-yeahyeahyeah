import React, { FC, InputHTMLAttributes, useState } from 'react';
import tw, { styled } from 'twin.macro';

export type TSwitchOption = InputHTMLAttributes<HTMLInputElement> & { label: string };

export interface ISwitchProps {
  options: TSwitchOption[];
  value?: string;
  fCallBack: (value: string) => void;
}

export const Switch: FC<ISwitchProps> = ({
  options = [
    {
      label: 'Deine Mumbles',
      value: 'mumbles',
    },
    {
      label: 'Deine Likes',
      value: 'likes',
    },
    {
      label: 'Empfehlungen',
      value: 'promotedPosts',
    },
  ],
  value = 'mumbles',
  fCallBack,
}) => {
  const [active, setActive] = useState<string>(value);

  const handleClick = (value: string) => {
    setActive(value);
    fCallBack && fCallBack(value);
  };

  return (
    <StyledList>
      {options.map((option) => {
        return (
          <React.Fragment key={option?.value as string}>
            {option.value === active ? (
              <StyledListItemActive onClick={() => handleClick(option?.value as string)}>
                <StyledLink>{option.label}</StyledLink>
              </StyledListItemActive>
            ) : (
              <StyledListItem onClick={() => handleClick(option?.value as string)}>
                <StyledLink>{option.label}</StyledLink>
              </StyledListItem>
            )}
          </React.Fragment>
        );
      })}
    </StyledList>
  );
};

const StyledList = styled.ul(() => [
  tw`
    flex
    flex-col
    md:flex-row
    flex-wrap
    list-none
    p-4
    rounded-md
    bg-slate-200
  `,
]);

const StyledListItem = styled.li(() => [
  tw`
    w-fit
    py-8
    px-12
    bg-slate-200
    text-slate-600
    text-md
    [font-weight:600]
    border-slate-white
    transition-all
    ease-in duration-150
    hover:(text-slate-600)
    rounded-md
  `,
]);

const StyledListItemActive = styled.li(() => [
  tw`
    w-fit
    py-8
    px-12
    bg-slate-white
    text-violet-600
    text-md
    [font-weight:600]
    border-slate-white
    transition-all
    ease-in duration-150
    hover:(cursor-pointer text-violet-600)
    rounded-md
  `,
]);

const StyledLink = styled.a(() => [tw`hover:(cursor-pointer)`]);
