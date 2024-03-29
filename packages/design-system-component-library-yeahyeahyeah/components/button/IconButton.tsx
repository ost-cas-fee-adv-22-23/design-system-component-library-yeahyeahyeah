import React, { LinkHTMLAttributes } from 'react';
import tw, { styled } from 'twin.macro';
import { IconsMapped, IconTypes } from '../icon/IconMap';
import { Link, LinkProps } from '../link/Link';

export type IconButtonProps<T> = {
  label: string;
  icon: IconTypes;
  variant: 'default' | 'plain';
  onClick?: () => void;
} & LinkProps<T>;

export const IconButton = <
  T extends {
    rel?: string;
    target?: string;
  } = LinkHTMLAttributes<HTMLElement>
>({
  label = 'Label',
  icon = 'logo',
  variant = 'default',
  onClick,
  ...props
}: IconButtonProps<T>) => {
  const Icon = createIcon(icon);

  return !onClick ? (
    <Link {...(props as any)}>
      <ButtonStyles variant={variant} aria-label={label}>
        <Icon variant={variant} />
        <p>{label}</p>
      </ButtonStyles>
    </Link>
  ) : (
    <ButtonStyles variant={variant} onClick={onClick} aria-label={label}>
      <Icon variant={variant} />
      <p>{label}</p>
    </ButtonStyles>
  );
};

const createIcon = (icon: IconTypes) => {
  return styled(IconsMapped[icon as IconTypes])(({ variant }: IButtonStyles) => [
    tw`relative ml-0`,
    variant === 'default' && tw`fill-slate-white -top-[7px]`,
    variant === 'plain' && tw`fill-violet-600 -top-8`,
  ]);
};

const buttonDefaultStyles = tw`
  text-skin-light
  font-semibold
  leading-normal
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

interface IButtonStyles {
  variant: string;
}

const ButtonStyles = styled.a(({ variant }: IButtonStyles) => [
  buttonDefaultStyles,
  variant === 'default' &&
    tw`
      focus:(outline-4)
      hover:(outline-3)
    `,
  variant === 'plain' &&
    tw`
      outline-none
      border-0
    ` &&
    tw`
      bg-opacity-0
      rounded-full
      w-32
      h-32
      min-w-[16px]
      min-h-[16px]
      ring-0
      transition
      ease-in-out
      delay-100

      hover:(outline-none border-0 rotate-180 transform-gpu bg-opacity-0)
      active:(border-0  rotate-0)
      focus:(border-0 outline-none)
    `,
]);
