import React from 'react';
import tw from 'twin.macro';
import { Heading } from '../typography/Heading';
import { Button } from '../button/Button';
import { Avatar, AvatarProps } from './Avatar';
import { Article, Column, Row } from './UserStyles';

export interface UserRecommendedProps {
  label: string;
  variant: 'small' | 'medium' | 'large' | 'xlarge' | 'recommended' | 'write' | 'inline';
  type?: 'edit' | 'view';
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
    <Article>
      <Column variant="recommended">
        <Avatar {...avatar} variant="large" />
        <Row spacing={tw`mb-8`}>
          <Heading tag="h4" color="dark" size="large" label={label} />
        </Row>
        <div tw="mb-16">{children}</div>
        {btn && <Button {...btn} icon="logo" size="small" type="button" width="large" color="violet" />}
      </Column>
    </Article>
  );
};
