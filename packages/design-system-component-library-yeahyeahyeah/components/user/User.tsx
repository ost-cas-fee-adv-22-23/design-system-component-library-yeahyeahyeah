import React from 'react';
import { Heading } from '../typography/Heading';
import { Avatar, AvatarProps } from './Avatar';
import { UserColumn, HeadingWrapper, UserRow } from './UserStyles';

export interface UserProps {
  label: string;
  variant: 'small' | 'medium' | 'large' | 'xlarge' | 'write' | 'inline';
  type?: 'edit' | 'view';
  avatar?: AvatarProps<any>;
  children?: React.ReactNode;
}

export const User: React.FC<UserProps> = ({
  label,
  variant,
  type = 'view',
  avatar = {
    src: 'https://i.stack.imgur.com/5xd5n.png',
    alt: 'Alter Tag',
    onImageClick: () => {
      return null;
    },
  },
  children,
}) => {
  return (
    <>
      {variant === 'small' && (
        <UserRow gap="small">
          <Avatar {...avatar} variant="small" />
          <UserColumn variant={variant}>
            <Heading tag="h4" color="dark" size="medium" label={label} />
            <UserRow>{children}</UserRow>
          </UserColumn>
        </UserRow>
      )}
      {variant === 'medium' && (
        <UserColumn>
          <Heading tag="h4" color="dark" size="large" label={label} />
          <UserRow>{children}</UserRow>
        </UserColumn>
      )}
      {variant === 'large' && (
        <UserColumn>
          <Heading tag="h4" color="dark" size="xlarge" label={label} />
          <UserRow>{children}</UserRow>
        </UserColumn>
      )}
      {variant === 'xlarge' && (
        <UserColumn>
          <UserRow type={type}>
            <Heading tag="h3" color="dark" size="default" label={label} />
          </UserRow>
          <UserRow>{children}</UserRow>
        </UserColumn>
      )}
      {variant === 'inline' && (
        <UserRow gap="small">
          <Avatar {...avatar} variant="small" />
          <UserColumn variant={variant}>
            <Heading tag="h4" color="dark" size="default" label={label} />
            <UserRow>{children}</UserRow>
          </UserColumn>
        </UserRow>
      )}
      {variant === 'write' && (
        <UserRow gap="small">
          <UserColumn variant={variant}>
            <Avatar {...avatar} variant="medium" />
            <HeadingWrapper>
              <Heading tag="h4" color="dark" size="default" label={label} />
            </HeadingWrapper>
          </UserColumn>
        </UserRow>
      )}
    </>
  );
};
