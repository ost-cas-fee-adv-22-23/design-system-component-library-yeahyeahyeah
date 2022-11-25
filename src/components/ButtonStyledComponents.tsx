import styled from 'styled-components';
import tw from 'twin.macro';

interface IButtonStyledComponent
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hasBorder: boolean;
}

export const ButtonStyledComponent: React.FC<IButtonStyledComponent> = ({
  hasBorder,
}) => {
  return (
    <>
      <StyledButton hasBorder={hasBorder}>Hello Styled TW Button</StyledButton>
    </>
  );
};

const StyledButton = styled.button<{ hasBorder: boolean }>(({ hasBorder }) => [
  hasBorder
    ? tw`bg-amber-400 border-amber-800 text-black`
    : tw`bg-blue-900 border-blue-500 text-white`,
  tw`
		/* Button default styles  */
		p-4
		border-2
		rounded-full
		hover:(bg-blue-700 text-white)
		`,
]);
