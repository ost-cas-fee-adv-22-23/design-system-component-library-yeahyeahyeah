import React from 'react';
import tw, { styled, TwStyle } from 'twin.macro';
import { Heading } from '../typography/Heading';
import { IconButton } from '../button/IconButton';
import { IconLink, IconLinkProps } from '../link/IconLink';
import { Button } from '../button/Button';
import { Avatar, AvatarProps } from './Avatar';

export interface IUserProps {
  label: string;
  variant: 'small' | 'medium' | 'large' | 'xlarge' | 'recommended' | 'write' | 'inline';
  username: IconLinkProps<any>;
  type?: 'edit' | 'view';
  timestamp?: IconLinkProps<any>;
  location?: IconLinkProps<any>;
  joined?: IconLinkProps<any>;
  avatar?: AvatarProps<any>;
  btn?: { label: string; fCallBack?: () => void };
  settings?: { fCallBack?: () => void };
}

export const User: React.FC<IUserProps> = ({
  label = 'Display Name',
  variant = 'small',
  type = 'view',
  username = {
    label: 'Username',
    href: '#',
    fCallBack: () => {
      return null;
    },
  },
  timestamp = {
    label: 'TimeStamp',
    href: '#',
    fCallBack: () => {
      return null;
    },
  },
  location = {
    label: 'Location',
    href: '#',
    fCallBack: () => {
      return null;
    },
  },
  joined = {
    label: 'Joined',
    href: '#',
    fCallBack: () => {
      return null;
    },
  },
  avatar = {
    src: 'https://i.stack.imgur.com/5xd5n.png',
    alt: 'Alter Tag',
  },
  btn = { label: 'Follow' },
  settings = {
    fCallBack: () => {
      return null;
    },
  },
}) => {
  return (
    <>
      {variant === 'small' && (
        <Row gap="small">
          <Avatar {...avatar} variant="small" />
          <Column variant={variant}>
            <Heading tag="h4" color="dark" size="medium" label={label} />
            <Row>
              <IconLink {...username} type="username" color="violet"></IconLink>
              <IconLink {...timestamp} type="timestamp" color="slate"></IconLink>
            </Row>
          </Column>
        </Row>
      )}
      {variant === 'inline' && (
        <Row gap="small">
          <Avatar {...avatar} variant="small" />
          <Column variant={variant}>
            <Heading tag="h4" color="dark" size="default" label={label} />
            <Row>
              <IconLink {...username} type="username" color="violet" />
            </Row>
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

      {variant === 'medium' && (
        <Column>
          <Heading tag="h4" color="dark" size="large" label={label} />
          <Row>
            <IconLink {...username} type="username" color="violet"></IconLink>
            <IconLink {...timestamp} type="timestamp" color="slate"></IconLink>
          </Row>
        </Column>
      )}
      {variant === 'large' && (
        <Column>
          <Heading tag="h4" color="dark" size="xlarge" label={label} />
          <Row>
            <IconLink {...username} type="username" color="violet"></IconLink>
            <IconLink {...timestamp} type="timestamp" color="slate"></IconLink>
          </Row>
        </Column>
      )}
      {variant === 'xlarge' && (
        <Column>
          <Row type={type}>
            <Heading tag="h3" color="dark" size="default" label={label} />
            {type === 'edit' && (
              <>
                <IconButton {...settings} label="settings" variant="plain" icon="settings" />
              </>
            )}
          </Row>
          <Row>
            <IconLink {...username} type="username" color="violet"></IconLink>
            <IconLink {...location} type="location" color="slate"></IconLink>
            <IconLink {...joined} type="joined" color="slate"></IconLink>
          </Row>
        </Column>
      )}
      {variant === 'recommended' && (
        <Article>
          <Column variant="recommended">
            <Avatar {...avatar} variant="large" />
            <Row spacing={tw`mb-8`}>
              <Heading tag="h4" color="dark" size="large" label={label} />
            </Row>
            <div tw="mb-16">
              <IconLink {...username} type="username" color="violet"></IconLink>
            </div>
            <Button {...btn} icon="logo" size="small" type="button" width="large" color="violet" />
          </Column>
        </Article>
      )}
    </>
  );
};

interface IUserStyles {
  variant?: string;
}

interface IRowStyles {
  gap?: string;
  spacing?: TwStyle;
  type?: string;
}

const Column = styled.div(({ variant }: IUserStyles) => [
  tw`
    flex
    flex-col
    gap-4
  `,
  variant === 'small' && tw`mt-2`,
  variant === 'recommended' && tw`items-center`,
  variant === 'write' &&
    tw`
    flex
    flex-row
    items-center
  `,
]);

const Row = styled.div(({ gap, spacing, type }: IRowStyles) => [
  tw`
    flex
    flex-row
    justify-start
    items-center
    gap-16
  `,
  gap === 'small' && tw`gap-8`,
  spacing && spacing,
  type === 'edit' && tw`w-fit gap-0`,
]);

const Article = styled.article(() => [tw`flex flex-col p-16 bg-slate-white rounded-16`]);

const HeadingWrapper = tw.div`
  ml-12
`;
