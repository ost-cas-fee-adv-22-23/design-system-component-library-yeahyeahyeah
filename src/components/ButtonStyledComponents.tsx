import styled from 'styled-components';
import tw from 'twin.macro';

interface IButtonStyledComponent
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hasBorder: boolean;
  isLarge: boolean;
  label: string;
  fCallBack: () => void;
}

export const ButtonStyledComponent: React.FC<IButtonStyledComponent> = ({
  hasBorder,
  isLarge,
  label,
  fCallBack,
}) => {
  return (
    <>
      <StyledButton onClick={fCallBack} hasBorder={hasBorder} isLarge={isLarge}>
        {label}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button<{ hasBorder: boolean; isLarge: boolean }>(
  ({ hasBorder, isLarge }) => [
    hasBorder
      ? tw`bg-amber-400 border-amber-800 text-black`
      : tw`bg-blue-900 border-blue-500 text-white`,
    isLarge ? tw`p-6 rounded-2xl` : tw`p-2 rounded-lg`,
    tw`
		/* Button default styles  */
		border-2
		hover:(bg-blue-700 text-white)
		`,
  ],
);
