import styled from 'styled-components';
import tw from 'twin.macro';
import Icon from '../stories/assets/mumble.svg';

interface IButtonStyledComponent
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'slate' | 'violet' | 'pink';
  isLarge?: string;
  width?: string;
  disabled?: boolean;
  fCallBack?: () => void;
}

export const ButtonTypes: React.FC<IButtonStyledComponent> = ({
  label,
  variant,
  isLarge,
  width,
  disabled,
}) => {
  console.log(disabled);

  return (
    <>
      <ButtonStyles
        variant={variant}
        isLarge={isLarge}
        width={width}
        disabled={disabled}
      >
        {label}
        <img
          className="ml-2"
          src={Icon}
          alt="Panda Icon"
          width={16}
          height={16}
        />
      </ButtonStyles>
      <ButtonStyles
        variant={variant}
        isLarge={isLarge}
        width={width}
        disabled={disabled}
      >
        {label}
        <img
          className="ml-2"
          src={Icon}
          alt="Panda Icon"
          width={16}
          height={16}
        />
      </ButtonStyles>
      <ButtonStyles
        variant={variant}
        isLarge={isLarge}
        width={width}
        disabled={disabled}
      >
        {label}
        <img
          className="ml-2"
          src={Icon}
          alt="Panda Icon"
          width={16}
          height={16}
        />
      </ButtonStyles>
    </>
  );
};

interface ButtonProps {
  variant?: string;
  width?: string;
  isLarge?: string;
}

const ButtonStyles = styled.button(
  ({ variant, width, isLarge }: ButtonProps) => [
    tw`
      flex
      grow-0
      justify-center
      items-center
      rounded
      text-skin-slate
      font-semibold
      py-3 px-4
      leading
      w-auto
      border
  `,
    tw`focus:(border border-slate-100)`,
    tw`hover:(border border-slate-100)`,
    width === 'default' && tw`w-auto`,
    width === 'full' && tw`w-full`,
    isLarge === 'large' && tw`py-4 px-6`,
    isLarge === 'smalle' && tw`py-3 px-4`,
    variant === 'slate' &&
      tw`bg-slate-600 hover:bg-slate-700 disabled:bg-slate-300`,
    variant === 'violet' &&
      tw`bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300`,
    variant === 'pink' &&
      tw`bg-gradient-to-r from-pink-500 to-violet-500 disabled:bg-pink-200`,
  ],
);
