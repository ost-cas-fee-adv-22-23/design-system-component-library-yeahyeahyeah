import React, { LinkHTMLAttributes } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IconsMapped, IconTypes } from '../icon/IconMap';
import { Link, LinkProps } from '../link/Link';

export type NaviButtonProps<T> = {
  label: string;
  variant?: 'default' | 'profile';
  icon?: IconTypes;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
} & LinkProps<T>;

export const NaviButton = <
  T extends {
    rel?: string;
    target?: string;
  } = LinkHTMLAttributes<HTMLElement>
>({
  label = 'Label',
  variant = 'default',
  icon = 'settings',
  href,
  onClick,
  children,
  ...props
}: NaviButtonProps<T>) => {
  const Icon = createIcon(icon);

  return !onClick ? (
    <Link {...(props as any)} href={href}>
      <StyledButtonWithLink aria-label={label} onClick={onClick}>
        {variant === 'default' && (
          <>
            <Icon />
            <Span>{label}</Span>
          </>
        )}
        {variant === 'profile' && children}
      </StyledButtonWithLink>
    </Link>
  ) : (
    <StyledButton aria-label={label} onClick={onClick}>
      {variant === 'default' && (
        <>
          <Icon />
          <Span>{label}</Span>
        </>
      )}
      {variant === 'profile' && children}
    </StyledButton>
  );
};

const createIcon = (icon: IconTypes) => {
  return styled(IconsMapped[icon as IconTypes])(() => [tw`fill-slate-white`]);
};

const buttonFont = tw`
  text-xs
  text-skin-light
  font-semibold
  leading-normal
`;

const buttonDefaults = tw`
  bg-violet-600
  flex
  flex-col
  justify-center
  items-center
  p-12
  rounded
  border-hidden
  outline-none
  cursor-pointer
`;

const Span = styled.span(() => [
  tw`
    hidden
    sm:(block mt-6)
  `,
]);

const buttonHover = tw`
  hover:(text-skin-light bg-violet-700)
`;

const buttonFocus = tw`
  focus:(bg-violet-700)
`;

const StyledButton = styled.button(() => [buttonFont, buttonDefaults, buttonHover, buttonFocus]);
const StyledButtonWithLink = styled.a(() => [buttonFont, buttonDefaults, buttonHover, buttonFocus]);
