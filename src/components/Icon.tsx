import styled from 'styled-components';
import tw from 'twin.macro';

interface IIcon extends React.HTMLAttributes<HTMLElement> {
  isFilled: boolean;
}

export const Icon: React.FC<IIcon> = ({ isFilled = false }) => {
  return <></>;
};
