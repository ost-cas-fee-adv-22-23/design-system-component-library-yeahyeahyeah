import React from 'react';
import tw, { css, styled } from 'twin.macro';
import { IconsMapped, IconTypes } from '../icons/IconMap';

export interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'slate' | 'violet' | 'pink';
  size?: 'small' | 'large';
  width?: 'default' | 'large' | 'full';
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  fCallBack?: () => void;
  icon: IconTypes;
}

export const Button: React.FC<IButtonProps> = ({
  label = 'Button Label',
  variant = 'slate',
  type = 'button',
  size = 'small',
  width = 'default',
  disabled = false,
  fCallBack,
  icon = 'calendar',
}) => {
  const Icon = createIcon(icon);

  return (
    <StyledButton variant={variant} size={size} width={width} type={type} disabled={disabled} onClick={fCallBack}>
      {label}
      <Icon />
    </StyledButton>
  );
};

interface ButtonProps {
  variant?: string;
  width?: string;
  size?: string;
}

const createIcon = (icon: IconTypes) => {
  return styled(IconsMapped[icon as IconTypes])(() => [tw`ml-64 fill-slate-white`]);
};

/**
 * @Button
 * @desc Button styles
 */
const buttonFont = tw`
  text-skin-light
  font-semibold
  leading-normal
  whitespace-nowrap
`;

const buttonDefaults = tw`
  flex
  grow-0
  justify-center
  items-center
  p-12
  rounded
  w-auto
  outline-none
`;

const buttonHover = tw`
  hover:(outline-3 outline-offset-0)
`;

const buttonFocus = tw`
  focus:(outline-4 outline-offset-0)
`;

const Variant = ({ variant }: ButtonProps) => [
  tw`
  !bg-slate-600
  hover:(bg-slate-700 outline-slate-100)
  focus:(outline-slate-200)
  disabled:bg-slate-300`,
  variant === 'slate' &&
    tw`
  !bg-slate-600
  hover:(bg-slate-700 outline-slate-100)
  focus:(outline-slate-200)
  disabled:bg-slate-300
`,
  variant === 'violet' &&
    tw`
  !bg-violet-600
  hover:(bg-violet-700 outline-violet-100)
  focus:(outline-violet-200)
  disabled:bg-violet-300
`,
  variant === 'pink' &&
    tw`
  !bg-gradient-to-r from-pink-500 to-violet-500
  hover:(bg-gradient-to-r-70 outline-violet-100)
  focus:(bg-gradient-to-r-80 outline-violet-200)
  disabled:(bg-gradient-to-r)
`,
];

const ButtonWidth = ({ width }: ButtonProps) => [
  width === 'default' ? null : tw`w-full`,
  width === 'large' && tw`w-[184px] h-[40px]`,
];

const ButtonSize = ({ size }: ButtonProps) => size === 'large' && tw`py-16 px-24`;

const IconMargin = css`
  svg {
    margin-left: 8px;
  }
`;

const StyledButton = styled.button(() => [
  buttonFont,
  buttonDefaults,
  buttonHover,
  buttonFocus,
  ButtonWidth,
  ButtonSize,
  Variant,
  IconMargin,
]);
