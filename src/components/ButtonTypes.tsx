import styled from 'styled-components';
import tw from 'twin.macro';
import Icon from '../stories/assets/icons/mumble.svg';

interface IButtonStyledComponent
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: 'Button Label';
  variant?: 'slate' | 'violet' | 'pink';
  size?: 'small' | 'large';
  width?: 'default' | 'full';
  disabled?: true | false;
  fCallBack?: () => void;
}

export const ButtonTypes: React.FC<IButtonStyledComponent> = ({
  label = 'Button Label',
  variant = 'slate',
  size = 'small',
  width = 'default',
  disabled = false,
}) => {
  return (
    <>
      <ButtonStyles
        variant={variant}
        size={size}
        width={width}
        disabled={disabled}
        onClick={() => console.log('click')}
      >
        {label}
      </ButtonStyles>
      <ButtonStyles
        className="ml-8 mr-8"
        variant={variant}
        size={size}
        width={width}
        disabled={disabled}
        onClick={() => console.log('click')}
      >
        {label}
      </ButtonStyles>
      <ButtonStyles
        variant={variant}
        size={size}
        width={width}
        disabled={disabled}
        onClick={() => console.log('click')}
      >
        {label}
      </ButtonStyles>
    </>
  );
};

interface ButtonProps {
  variant?: string;
  width?: string;
  size?: string;
}

const ButtonStyles = styled.button(({ variant, width, size }: ButtonProps) => [
  tw`
      flex
      grow-0
      justify-center
      items-center
      p-12
      rounded
      w-auto
      border-hidden
      outline-none
      outline-offset-0
      text-skin-light      
      font-semibold
      leading-normal
  `,
  tw`hover:(outline-3)`,
  tw`focus:(outline-4)`,
  width === 'default' ? null : tw`w-full`,
  size === 'large' ? tw`py-16 px-24` : null,
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
        disabled:(bg-gradient-to-r from-pink-300 to-violet-300)`,
]);
