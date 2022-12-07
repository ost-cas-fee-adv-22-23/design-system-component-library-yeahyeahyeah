import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { IconLink } from 'src/components/IconLink';
interface IUserProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'small' | 'medium' | 'large' | 'xlarge';
  color: string;
}

export const User: React.FC<IUserProps> = ({
  label = 'Display Name',
  variant = 'small',
}) => {
  return (
    <>
      <UserWrapper>
        <DisplayNameStyles variant={variant}>{label}</DisplayNameStyles>
        <UserInlineWrapper></UserInlineWrapper>
      </UserWrapper>
    </>
  );
};

/**
 * @Button
 * @desc Button styles
 */
interface IUserStyles {
  variant: string;
}

const UserWrapper = styled.div(() => [
  tw`
    flex
    flex-col
    mb-2
  ` &&
    css`
      svg {
        margin-right: 4px;
      }
    `,
]);

const UserInlineWrapper = styled.div(() => [
  tw`
    flex
    flex-row
    justify-between
    max-w-lg
    gap-16
  `,
]);

const DisplayNameStyles = styled.h4(({ variant }: IUserStyles) => [
  tw`
    text-slate-900
  `,
  variant === 'small' && tw`text-sm font-semibold mb-4`,
  variant === 'medium' && tw`text-md font-semibold`,
  variant === 'large' && tw`text-xl font-semibold`,
  variant === 'xlarge' && tw`text-2xl font-semibold`,
]);
