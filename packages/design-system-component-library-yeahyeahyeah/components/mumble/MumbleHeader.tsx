import React from 'react';
import tw, { styled } from 'twin.macro';
import { User, IUserProps } from '../User';
import { Paragraph } from '../typography/Paragraph';
import { IImageContainerProps, ImageContainer } from '../ImageContainer';
import { Avatar, IAvatarProps } from '../Avatar';

export interface IMumbleHeaderProps {
  variant?: 'view' | 'edit';
  user: IUserProps;
  text: string;
  banner?: IImageContainerProps;
  avatar: IAvatarProps;
}

export const MumbleHeader: React.FC<IMumbleHeaderProps> = ({
  text,
  banner = {
    src: 'https://placebeard.it/640x360',
    alt: 'Picture',
    type: 'banner',
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
    <MumbleHeaderWrapper>
      <ImageContainer src={banner.src} alt={banner.alt} type={banner.type} />
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
      <Row>
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
  );
};

const MumbleHeaderWrapper = styled.div(() => [
  tw`
    flex
    flex-col
    justify-between
  `,
]);

const Row = tw.div`
  relative
  
  -top-32
  sm:-top-32
  md:-top-16

  flex
  justify-end
  items-end
  z-10
  h-0
  overflow-visible
`;
