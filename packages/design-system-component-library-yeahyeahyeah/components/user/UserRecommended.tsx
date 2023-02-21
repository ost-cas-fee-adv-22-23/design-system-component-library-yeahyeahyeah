import React from 'react';
import tw from 'twin.macro';
import { Heading } from '../typography/Heading';
import { Button } from '../button/Button';
import { Avatar, AvatarProps } from './Avatar';
import { UserArticle, UserColumn, UserRow } from './UserStyles';

export interface UserRecommendedProps {
  label: string;
  avatar?: AvatarProps<any>;
  btn?: { label: string; onClick?: () => void };
  children?: React.ReactNode;
}

export const UserRecommended: React.FC<UserRecommendedProps> = ({
  label,
  btn,
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
    <UserArticle>
      <UserColumn variant="recommended">
        <Avatar {...avatar} variant="large" />
        <UserRow spacing={tw`mb-8`}>
          <Heading tag="h4" color="dark" size="large" label={label} />
        </UserRow>
        <div tw="mb-16">{children}</div>
        {btn && <Button {...btn} icon="logo" size="small" type="button" width="large" color="violet" />}
      </UserColumn>
    </UserArticle>
  );
};
