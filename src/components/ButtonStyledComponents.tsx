import styled from 'styled-components';
import tw from 'twin.macro';

interface IButtonStyledComponent
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  hasBorder: boolean;
  isLarge?: boolean;
  softBorder: boolean;
  label: string;
  fCallBack: () => void;
}

export const ButtonStyledComponent: React.FC<IButtonStyledComponent> = ({
  className,
  hasBorder,
  softBorder,
  isLarge,
  label,
  fCallBack,
}) => {
  return (
    <>
      <StyledButton
        className="btn"
        onClick={fCallBack}
        hasBorder={false}
        softBorder={false}
        isLarge={false}
      >
        {label}
      </StyledButton>

      <StyledButton
        className="btn"
        onClick={fCallBack}
        hasBorder={true}
        softBorder={true}
        isLarge={false}
      >
        {label}
      </StyledButton>

      <StyledButton
        className="btn"
        onClick={fCallBack}
        hasBorder={true}
        softBorder={false}
        isLarge={false}
      >
        {label}
      </StyledButton>

      <StyledButton
        className="btn btn--large"
        onClick={fCallBack}
        hasBorder={false}
        softBorder={false}
        isLarge={false}
      >
        {label}
      </StyledButton>

      <StyledButton
        className="btn btn--large btn--large-slate"
        onClick={fCallBack}
        hasBorder={false}
        softBorder={false}
        isLarge={false}
      >
        {label}
      </StyledButton>

      <StyledButton
        className="btn btn--large btn--default-slate"
        onClick={fCallBack}
        hasBorder={false}
        softBorder={false}
        isLarge={false}
      >
        {label}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button<{
  className: string;
  hasBorder: boolean;
  softBorder: boolean;
  isLarge: boolean;
}>(({ hasBorder, softBorder, isLarge }) => [
  hasBorder ? tw`border-4 border-slate-200` : false,
  softBorder ? tw`border-4 border-slate-100` : false,
  isLarge ? tw`py-3 px-4` : false,
]);
