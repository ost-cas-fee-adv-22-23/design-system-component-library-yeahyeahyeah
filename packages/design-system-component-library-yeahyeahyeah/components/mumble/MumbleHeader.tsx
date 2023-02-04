import React from 'react';
import tw, { styled } from 'twin.macro';
import { User, IUserProps } from '../User';
import { Paragraph } from '../typography/Paragraph';
import { IImageContainerProps, ImageContainer } from '../ImageContainer';
import { Avatar } from '../Avatar';

export interface IMumbleHeaderProps {
  variant?: 'view' | 'edit';
  user: IUserProps;
  text: string;
  banner?: IImageContainerProps;
}

export const MumbleHeader: React.FC<IMumbleHeaderProps> = ({
  text,
  variant = 'edit',
  banner = {
    src: 'https://loremflickr.com/640/360',
    alt: 'Image alt tag',
    type: 'banner',
    fCallBack: () => {
      return null;
    },
  },
  user = {
    label: 'Display Name',
    variant: 'header',
    username: {
      label: 'Username',
      type: 'joined',
      href: '#',
    },
    location: {
      label: 'location',
      type: 'joined',
      href: '#',
    },
    joined: {
      label: 'Joined',
      type: 'joined',
      href: '#',
    },
    settings: {
      fCallBack: () => {
        return null;
      },
    },
    avatar: {
      src: 'https://placebeard.it/640x360',
      alt: 'Alttag',
      imageCallBack: () => {
        return null;
      },
      buttonCallBack: () => {
        return null;
      },
    },
  },
}) => {
  return (
    <>
      {variant === 'edit' && (
        <MumbleHeaderWrapper>
          <ImageContainer src={banner.src} alt={banner.alt} type={banner.type} fCallBack={banner.fCallBack} />
          <div tw="px-8 mb-16">
            <User
              avatar={user.avatar}
              username={user.username}
              location={user.location}
              joined={user.joined}
              label={user.label}
              variant={user.variant}
              settings={user.settings}
            />
          </div>
          <Row variant={variant}>
            <Avatar
              src={user.avatar?.src || ''}
              alt={user.avatar?.alt || ''}
              variant="edit"
              imageCallBack={user.avatar?.imageCallBack}
              buttonCallBack={user.avatar?.buttonCallBack}
            />
          </Row>
          <div tw="p-8 mb-32">
            <Paragraph text={text} color={'light'} size={'default'} alignment={'left'} />
          </div>
        </MumbleHeaderWrapper>
      )}
      {variant === 'view' && (
        <MumbleHeaderWrapper>
          <ImageContainer src={banner.src} alt={banner.alt} type={'container'} fCallBack={banner.fCallBack} />
          <div tw="px-8 mb-16">
            <User
              avatar={user.avatar}
              username={user.username}
              location={user.location}
              joined={user.joined}
              label={user.label}
              variant={'xlarge'}
              settings={user.settings}
            />
          </div>
          <Row variant={variant}>
            <Avatar
              src={user.avatar?.src || ''}
              alt={user.avatar?.alt || ''}
              variant="xlarge"
              imageCallBack={user.avatar?.imageCallBack}
            />
          </Row>
          <div tw="p-8 mb-32">
            <Paragraph text={text} color={'light'} size={'default'} alignment={'left'} />
          </div>
        </MumbleHeaderWrapper>
      )}
    </>
  );
};

interface IMumbleHeaderStyles {
  variant: string;
}

const MumbleHeaderWrapper = styled.div(() => [
  tw`
    flex
    flex-col
    justify-between
  `,
]);

const Row = styled.div(({ variant }: IMumbleHeaderStyles) => [
  tw`
  relative
  -top-8

  flex
  justify-end
  items-end
  z-10
  h-0
  overflow-visible
`,
  variant === 'view' && tw`-top-0 pr-32`,
]);
