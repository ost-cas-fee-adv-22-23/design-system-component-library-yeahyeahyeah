import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IconsMapped, IconTypes } from '../icons/IconMap';
import { Avatar, IAvatarProps } from '../Avatar';

export interface INaviButtonProps {
  label: string;
  variant?: 'default' | 'profile';
  fCallBack?: () => void;
  icon?: IconTypes;
  avatar?: IAvatarProps;
}

export const NaviButton: React.FC<INaviButtonProps> = ({
  label = 'Label',
  variant = 'default',
  fCallBack,
  icon = 'settings',
  avatar = {
    variant: 'small',
    src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
    alt: 'Alternative text',
  },
}) => {
  const Icon = createIcon(icon);

  return (
    <>
      {variant === 'default' && (
        <ButtonStyles onClick={fCallBack} aria-label={label}>
          <Icon />
          <Span>{label}</Span>
        </ButtonStyles>
      )}

      {variant === 'profile' && (
        <ButtonStyles onClick={fCallBack} aria-label={label}>
          <Avatar alt={avatar.alt} src={avatar.src} variant={avatar.variant} />
        </ButtonStyles>
      )}
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

const ButtonStyles = styled.button(() => [buttonFont, buttonDefaults, buttonHover, buttonFocus]);
