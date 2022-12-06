import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IIcon } from 'src/components/Icon';
import { IconLink } from 'src/components/IconLinks';

interface IUserProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'size-s' | 'size-m' | 'size-l' | 'size-xl';
}

export const User: React.FC<IUserProps & IIcon> = ({
  label = 'Display Name',
  variant = 'size-s',
  iconColor,
  handleClick,
}) => {
  return (
    <>
      <UserStyles
        variant={variant}
        onClick={handleClick}
      >
        <h4>{label}</h4>
        <div className="flex flex-row justify-between max-w-lg gap-16 mt-8">
          <IconLink label="username" iconName='profile' iconColor={iconColor} variant="violet" />
          <IconLink label="Timestamp" iconName='time' iconColor='text-slate-500' />
        </div>
      </UserStyles>
    </>
  );
};

interface IUserStylesProps {
  variant?: string;
}

/**
 * @Button
 * @desc Button styles
 */


const UserStyles = styled.div(({ variant }: IUserStylesProps) => [
  variant === 'size-s' && tw``
]);
