import React from 'react';
import { Heading } from '../typography/Heading';
import { Avatar, AvatarProps } from './Avatar';
import { Column, HeadingWrapper, Row } from './UserStyles';

export interface UserProps {
  label: string;
  variant: 'small' | 'medium' | 'large' | 'xlarge' | 'recommended' | 'write' | 'inline';
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
        <Row gap="small">
          <Avatar {...avatar} variant="small" />
          <Column variant={variant}>
            <Heading tag="h4" color="dark" size="medium" label={label} />
            <Row>{children}</Row>
          </Column>
        </Row>
      )}
      {variant === 'medium' && (
        <Column>
          <Heading tag="h4" color="dark" size="large" label={label} />
          <Row>{children}</Row>
        </Column>
      )}
      {variant === 'large' && (
        <Column>
          <Heading tag="h4" color="dark" size="xlarge" label={label} />
          <Row>{children}</Row>
        </Column>
      )}
      {variant === 'xlarge' && (
        <Column>
          <Row type={type}>
            <Heading tag="h3" color="dark" size="default" label={label} />
          </Row>
          <Row>{children}</Row>
        </Column>
      )}
      {variant === 'inline' && (
        <Row gap="small">
          <Avatar {...avatar} variant="small" />
          <Column variant={variant}>
            <Heading tag="h4" color="dark" size="default" label={label} />
            <Row>{children}</Row>
          </Column>
        </Row>
      )}
      {variant === 'write' && (
        <Row gap="small">
          <Column variant={variant}>
            <Avatar {...avatar} variant="medium" />
            <HeadingWrapper>
              <Heading tag="h4" color="dark" size="default" label={label} />
            </HeadingWrapper>
          </Column>
        </Row>
      )}
    </>
  );
};
