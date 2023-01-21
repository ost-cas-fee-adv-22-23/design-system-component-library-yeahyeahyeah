import React, { FC, ChangeEvent, InputHTMLAttributes, useState, useEffect } from 'react';
import tw, { styled } from 'twin.macro';

export type TSwitchOption = InputHTMLAttributes<HTMLInputElement> & { label: string };

export interface ISwitchProps {
  label: string;
  options: TSwitchOption[];
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
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
  name,
  label,
  value = 'mumbles',
  onChange,
}) => {
  const [active, setActive] = useState<string>(value);

  useEffect(() => {
    console.log('active', active);
  }, [active]);

  const handleClick = (event: any, value: string) => {
    setActive(value as string);
    onChange && onChange(event);
  };

  return (
    <StyledList>
      {options.map((option, index) => {
        return (
          <li key={index} onClick={(event) => handleClick(event, option?.value as string)}>
            {option.value === active ? (
              <StyledListItemActive>
                <StyledLink>{option.label}</StyledLink>
              </StyledListItemActive>
            ) : (
              <StyledListItem>
                <StyledLink>{option.label}</StyledLink>
              </StyledListItem>
            )}
          </li>
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
    py-12
    px-4
    rounded-xl
    border-2
    bg-slate-200
    border-slate-white
  `,
]);

const StyledListItem = styled.span(() => [
  tw`
    w-fit
    p-8
    px-16
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

const StyledListItemActive = styled.span(() => [
  tw`
    w-fit
    p-8
    px-16
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
