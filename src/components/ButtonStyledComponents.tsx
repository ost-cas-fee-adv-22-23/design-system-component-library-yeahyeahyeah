import styled from 'styled-components';
import tw from 'twin.macro';
import Icon from '../stories/assets/panda.svg';

interface IButtonStyledComponent
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  backgroundColor: string;
  isLarge: boolean;
  width: boolean;
  fCallBack: () => void;
}

export const ButtonStyledComponent: React.FC<IButtonStyledComponent> = ({
  label,
  backgroundColor,
  isLarge,
  width,
  fCallBack,
}) => {
  console.log(isLarge);

  return (
    <StyledButton
      className={`btn ${backgroundColor}`}
      onClick={fCallBack}
      isLarge={isLarge}
      width={width}
    >
      {label}
      <img
        className="ml-2"
        src={Icon}
        alt="Panda Icon"
        width={16}
        height={16}
      />
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  isLarge: boolean;
  width: boolean;
}>(({ isLarge, width }) => [
  tw`
    flex
    grow-0
    justify-center
    rounded
    text-skin-slate
    font-semibold
    py-3 px-4
    leading
    w-auto
    border
  `,
  isLarge ? tw`py-4 px-6` : false,
  width ? tw`w-full` : tw`w-auto`,
]);
