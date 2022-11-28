import styled, { css } from 'styled-components';

import tw from 'twin.macro';
import { ReactComponent as Cancel } from '../stories/assets/icons/cancel.svg';
import { ReactComponent as Calendar } from '../stories/assets/icons/calendar.svg';
import { ReactComponent as Checkmark } from '../stories/assets/icons/checkmark.svg';

interface IIcon extends React.HTMLAttributes<HTMLElement> {
  type: string;
  filled: boolean;
  fCallBack?: () => void;
}

export const Icon: React.FC<IIcon> = ({
  filled = false,
  type,
  fCallBack,
}: IIcon) => {
  const StyledIcon = styled(getComponent(type))<{ filled: boolean }>(
    ({ filled }) => [
      filled
        ? css`
            fill: #475569;
          `
        : css`
            fill: unset;
          `,
    ],
  );

  return (
    <>
      <StyledIcon filled={filled} type={type} onClick={fCallBack}></StyledIcon>
    </>
  );
};

const getComponent = (type: string) => {
  switch (type) {
    case 'cancel':
      return Cancel;
    case 'calendar':
      return Calendar;
    case 'checkmark':
      return Checkmark;
    default:
      return Cancel;
  }
};
