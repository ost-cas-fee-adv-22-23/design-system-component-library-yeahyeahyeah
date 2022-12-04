import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Icon, IIcon } from 'src/components/Icon';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'icon' | 'label';
  disabled?: boolean;
  handleClick?: () => void;
}

export const NaviButton: React.FC<IButtonProps & IIcon> = ({
  label,
  variant = 'label',
  disabled = false,
  handleClick,
  iconName = 'heart-filled',
  iconHeight = '16px',
  iconWidth,
  iconColor,
}) => {
  return (
    <>
      <ButtonStyles variant={variant} disabled={disabled} onClick={handleClick}>
        <Icon
          iconName={iconName}
          iconColor={iconColor}
          iconHeight={iconHeight}
          iconWidth={iconWidth}
        />
        {variant === 'label' ? label : false}
      </ButtonStyles>
    </>
  );
};

interface ButtonProps {
  variant?: string;
}

/**
 * @Button
 * @desc Button styles
 */
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
  grow-0
  justify-center
  items-center
  p-12
  rounded
  w-auto
  border-hidden
  outline-none
`;

const buttonHover = tw`
  hover:(text-skin-light bg-violet-700)
`;

const buttonFocus = tw`
  focus:(bg-violet-700)
`;

const variantIcon = css`
  padding: 7.5px 8px;
`;

const variantLabel = css`
  svg {
    margin-left: 0;
    margin-bottom: 4px;
  }
`;

const ButtonStyles = styled.button(({ variant }: ButtonProps) => [
  buttonFont,
  buttonDefaults,
  buttonHover,
  buttonFocus,
  variant === 'icon' && variantIcon,
  variant === 'label' && variantLabel,
  css`
    svg {
      margin-left: 0;
    }
  `,
]);
