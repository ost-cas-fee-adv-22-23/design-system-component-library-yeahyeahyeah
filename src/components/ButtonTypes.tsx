import styled from 'styled-components';
import tw from 'twin.macro';
import Icon from '../stories/assets/panda.svg';

interface IButtonStyledComponent
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  backgroundColor: string;
  size: boolean;
  width: boolean;
  fCallBack: () => void;
}

export const ButtonTypes: React.FC<IButtonStyledComponent> = ({
  label,
  backgroundColor,
  size,
  width,
  fCallBack,
}) => {
  console.log(size);

  return (
    <>
      <StyledButton
        className={`btn ${backgroundColor}`}
        onClick={fCallBack}
        size={size}
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

      <StyledButton
        className={`btn ${backgroundColor}`}
        onClick={fCallBack}
        size={size}
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

      <StyledButton
        className={`btn ${backgroundColor}`}
        onClick={fCallBack}
        size={size}
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
    </>
  );
};

const StyledButton = styled.button<{
  size: boolean;
  width: boolean;
}>(({ size, width }) => [
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
  size ? tw`py-4 px-6` : false,
  width ? tw`w-full` : tw`w-auto`,
]);
