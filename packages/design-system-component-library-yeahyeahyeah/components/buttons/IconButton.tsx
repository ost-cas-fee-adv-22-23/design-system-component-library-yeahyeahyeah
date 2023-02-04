import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { IconsMapped, IconTypes } from '../icons/IconMap';

export interface IIconButtonProps {
  label: string;
  icon: IconTypes;
  variant: 'default' | 'edit' | 'plain';
  fCallBack?: () => void;
}

export const IconButton: React.FC<IIconButtonProps> = ({
  label = 'Label',
  icon = 'logo',
  variant = 'default',
  fCallBack,
}) => {
  const Icon = createIcon(icon);
  const SettingIcon = createSettingIcon(icon);

  return (
    <ButtonStyles variant={variant} onClick={fCallBack} aria-label={label}>
      {variant !== 'plain' && <Icon />}
      {variant === 'plain' && <SettingIcon />}
      <p>{label}</p>
    </ButtonStyles>
  );
};

const createIcon = (icon: IconTypes) => {
  return styled(IconsMapped[icon as IconTypes])(() => [tw`fill-slate-white`]);
};

const createSettingIcon = (icon: IconTypes) => {
  return styled(IconsMapped[icon as IconTypes])(() => [tw`fill-violet-600`]);
};

/**
 * @Button
 * @desc Button styles
 */
const buttonFont = tw`
  text-skin-light
  font-semibold
  leading-normal
`;

const buttonDefaults = tw`
bg-slate-500
  flex
  flex-col-reverse
  justify-center
  overflow-hidden
  place-items-center
  [text-indent: -10000px]
  w-48
  h-48
  min-w-[48px]

  rounded-full
  text-left
  border-hidden
  outline-none
  hover:(bg-slate-700 outline-offset-0 outline-slate-100)
  focus:(outline-offset-0 outline-slate-200)
  disabled:bg-slate-300
`;

const buttonHover = tw`
  hover:(outline-3)
`;

const buttonFocus = tw`
  focus:(outline-4)
`;

interface IButtonStyles {
  variant: string;
}

const ButtonStyles = styled.button(({ variant }: IButtonStyles) => [
  buttonFont,
  buttonDefaults,
  buttonHover,
  buttonFocus,
  css`
    overflow: hidden;
    svg {
      position: relative;
      top: -8px;
      margin-left: 0;
    }
  `,
  variant === 'edit' &&
    tw`
    relative
    bottom-96
    right-24
    self-end
    sm:(bottom-64 right-8)
    md:(bottom-[56px] right-0)
  `,
  variant === 'plain' &&
    tw`
    bg-opacity-0
    rounded-full
    w-32
    h-32
    min-w-[16px]
    min-h-[16px]

    hover:(border-0 outline-none duration-500 rotate-180 bg-opacity-0)
    active:(rotate-0)
  `,
]);
