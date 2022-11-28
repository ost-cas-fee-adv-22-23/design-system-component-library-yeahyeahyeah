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
        onClick={() => console.log('click')}
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
      p-3
      rounded
      w-auto
      outline
      text-skin-light      
      font-semibold
      leading-normal
  `,
    tw`hover:(outline-3)`,
    tw`focus:(outline-4)`,
    width === 'default' ? null : tw`w-full`,
    isLarge === 'large' ? tw`py-4 px-6` : null,
    variant === 'slate' &&
      tw`
        bg-slate-600 hover:(bg-slate-700 outline-slate-100)
        focus:(outline-slate-200)
        disabled:bg-slate-300`,
    variant === 'violet' &&
      tw`
        bg-violet-600
        hover:(bg-violet-700 outline-violet-100)
        focus:(outline-violet-200)
        disabled:bg-violet-300`,
    variant === 'pink' &&
      tw`
        bg-gradient-to-r
        from-pink-500
        to-violet-500
        hover:(bg-gradient-to-r-70 outline-violet-100)
        focus:(bg-gradient-to-r-80 outline-violet-200)
        disabled:(bg-gradient-to-r from-pink-300 to-violet-300) `,
  ],
);
