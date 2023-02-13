import React from 'react';
import tw, { styled } from 'twin.macro';
import { IconsMapped, IconTypes } from '../icon/IconMap';

export interface IButtonProps {
  label: string;
  color: 'slate' | 'slate-300' | 'violet' | 'gradient';
  size?: 'small' | 'large';
  width?: 'default' | 'large' | 'full';
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  fCallBack?: () => void;
  icon?: IconTypes;
}

export const Button: React.FC<IButtonProps> = ({
  label = 'Button Label',
  color = 'slate',
  size = 'small',
  width = 'default',
  type = 'button',
  disabled = false,
  fCallBack = () => null,
  icon = 'none',
}) => {
  const Icon = createIcon(icon);

  return (
    <StyledButton
      color={color}
      size={size}
      width={width}
      type={type}
      disabled={disabled}
      onClick={fCallBack}
      aria-label={label}
      role="button"
    >
      {label}
      {icon !== 'none' && <Icon color={color} />}
    </StyledButton>
  );
};

type ButtonProps = Pick<IButtonProps, 'color' | 'size' | 'width' | 'type'>;

export interface IStyledIcon {
  color: 'slate' | 'slate-300' | 'violet' | 'gradient';
}

const createIcon = (icon: IconTypes) => {
  return styled(IconsMapped[icon as IconTypes])(({ color }: IStyledIcon) => [
    tw`fill-slate-white ml-8`,
    color === 'slate-300' && tw`fill-slate-500`,
  ]);
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

const Color = ({ color }: ButtonProps) => [
  tw`
  transition ease-in-out duration-500 !bg-slate-600
  hover:(!bg-slate-700 outline-slate-100)
  focus:(!outline-slate-200)
  disabled:bg-slate-300
`,
  color === 'slate-300' &&
    tw`
  !bg-slate-300
  text-slate-500
  hover:(!bg-slate-300 outline-slate-100)
  focus:(!outline-slate-200)
  disabled:bg-slate-200
`,
  color === 'violet' &&
    tw`
  !bg-violet-600
  hover:(!bg-violet-700 outline-violet-100)
  focus:(!outline-violet-200)
  disabled:bg-violet-300
`,
  color === 'gradient' &&
    tw`
  !bg-gradient-to-r from-pink-500 to-violet-500
  hover:(!bg-gradient70 outline-violet-100)
  focus:(!bg-gradient80 outline-violet-200)
  disabled:(bg-gradient-to-r)
`,
];

const ButtonWidth = ({ width }: ButtonProps) => [
  width === 'default' ? null : tw`w-full`,
  width === 'large' && tw`w-[184px] h-[40px]`,
];

const ButtonSize = ({ size }: ButtonProps) => size === 'large' && tw`py-16 px-24`;

const StyledButton = styled.button(() => [
  buttonFont,
  buttonDefaults,
  buttonHover,
  buttonFocus,
  ButtonWidth,
  ButtonSize,
  Color,
]);
