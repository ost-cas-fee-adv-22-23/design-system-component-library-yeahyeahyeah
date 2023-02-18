import React, { LinkHTMLAttributes } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IconsMapped, IconTypes } from '../icon/IconMap';
import { Link, LinkProps } from '../link/Link';
import { Avatar, AvatarProps } from '../user/Avatar';

export type NaviButtonProps<T> = {
  label: string;
  variant?: 'default' | 'profile';
  fCallBack?: () => void;
  icon?: IconTypes;
  avatar?: AvatarProps<any>;
} & LinkProps<T>;

export const NaviButton = <
  T extends {
    rel?: string;
    target?: string;
  } = LinkHTMLAttributes<HTMLElement>
>({
  label = 'Label',
  variant = 'default',
  fCallBack,
  icon = 'settings',
  avatar = {
    variant: 'small',
    src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
    alt: 'Alternative text',
  },
  newTab = false,
  ...props
}: NaviButtonProps<T>) => {
  const Icon = createIcon(icon);

  return !fCallBack ? (
    <>
      {variant === 'default' && (
        <Link {...(props as any)} {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}>
          <ButtonStyles aria-label={label}>
            <>
              <Icon />
              <Span>{label}</Span>
            </>
          </ButtonStyles>
        </Link>
      )}
      {variant === 'profile' && <Avatar {...avatar} />}
    </>
  ) : (
    <>
      <ButtonStyles onClick={fCallBack} aria-label={label}>
        {variant === 'default' && (
          <>
            <Icon />
            <Span>{label}</Span>
          </>
        )}
        {variant === 'profile' && <Avatar {...avatar} />}
      </ButtonStyles>
    </>
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

const ButtonStyles = styled.a(() => [buttonFont, buttonDefaults, buttonHover, buttonFocus]);
