import React from 'react';
import tw, { styled } from 'twin.macro';
import { IUserProps, User } from '../User';
import { Paragraph } from '../typography/Paragraph';
import { IInteractionButton, InteractionButton } from '../buttons/InteractionButton';
import { IShareButton, ShareButton } from '../buttons/ShareButton';
import { IImageContainerProps, ImageContainer } from '../ImageContainer';
import { Avatar } from '../Avatar';
import { BottomSpacing } from '../Spacing';
import type { TSpacing } from '../../types/types';

export interface IMumbleProps {
  variant?: 'detailpage' | 'timeline' | 'response';
  user: IUserProps;
  text: string;
  img?: IImageContainerProps;
  comment: IInteractionButton;
  like: IInteractionButton;
  share: IShareButton;
  spacing?: TSpacing;
}

export const Mumble: React.FC<IMumbleProps> = ({
  variant = 'detailpage',
  user = {
    avatar: {
      alt: '',
      src: 'https://i.stack.imgur.com/5xd5n.png',
      imageCallBack: () => {
        return null;
      },
    },
    btn: {
      fCallBack: () => {
        return null;
      },
      label: 'Follow',
    },
    joined: {
      href: '',
      label: 'Joined',
      type: 'joined',
    },
    label: 'Display Name',
    location: {
      href: '',
      label: 'Location',
      type: 'location',
    },
    timestamp: {
      href: '',
      label: 'Timestamp',
      type: 'timestamp',
    },
    username: {
      href: '',
      label: 'Username',
      type: 'username',
    },
  },
  text = '',
  img = {
    alt: '',
    fCallBack: () => {
      return null;
    },
    src: '',
    loading: false,
  },
  comment = {
    fCallBack: () => {
      return null;
    },
    quantity: 0,
  },
  like = {
    fCallBack: () => {
      return null;
    },
    quantity: 0,
  },
  share = {
    fCallBack: () => {
      return null;
    },
    label: 'Share',
  },
}) => {
  return (
    <>
      {variant === 'detailpage' && (
        <>
          <Article variant={variant}>
            <UserWrapper spacing={'16'}>
              <User
                btn={user.btn}
                joined={user.joined}
                label={user.label}
                location={user.location}
                username={user.username}
                variant="xlarge"
                avatar={user.avatar}
              />
              <AvatarWrapper>
                <Avatar
                  alt={user.avatar.alt}
                  src={user.avatar.src}
                  variant={'medium'}
                  imageCallBack={user.avatar?.imageCallBack}
                />
              </AvatarWrapper>
            </UserWrapper>
            <Row>
              <Paragraph size={'large'} color={'dark'} text={text} spacing={'16'} />
              <ImageContainer alt={img.alt} fCallBack={img.fCallBack} src={img.src} loading={img.loading} />
              <InteractionButton fCallBack={comment.fCallBack} quantity={comment.quantity} type="comment" />
              <InteractionButton fCallBack={like.fCallBack} quantity={like.quantity} type="like" />
              <ShareButton fCallBack={share.fCallBack} label={share.label} />
            </Row>
          </Article>
        </>
      )}
      {variant === 'timeline' && (
        <Article variant={variant}>
          <UserWrapper spacing={'16'}>
            <User
              avatar={user.avatar}
              btn={user.btn}
              label={user.label}
              timestamp={user.timestamp}
              username={user.username}
              variant="large"
            />
            <AvatarWrapper>
              <Avatar
                alt={user.avatar.alt}
                src={user.avatar.src}
                variant={'medium'}
                imageCallBack={user.avatar?.imageCallBack}
              />
            </AvatarWrapper>
          </UserWrapper>
          <Row>
            <Paragraph size={'medium'} color={'dark'} text={text} spacing={'16'} />
            <ImageContainer alt={img.alt} fCallBack={img.fCallBack} src={img.src} loading={img.loading} />
            <InteractionButton fCallBack={comment.fCallBack} quantity={comment.quantity} type="comment" />
            <InteractionButton fCallBack={like.fCallBack} quantity={like.quantity} type="like" />
            <ShareButton fCallBack={share.fCallBack} label={share.label} />
          </Row>
        </Article>
      )}
      {variant === 'response' && (
        <Article>
          <Row spacing={'16'}>
            <User
              avatar={user.avatar}
              btn={user.btn}
              label={user.label}
              timestamp={user.timestamp}
              username={user.username}
              variant="small"
            />
          </Row>
          <Row>
            <Paragraph size={'medium'} color={'dark'} text={text} spacing={'16'} />
            <ImageContainer alt={img.alt} fCallBack={img.fCallBack} src={img.src} loading={img.loading} />
            <InteractionButton fCallBack={comment.fCallBack} quantity={comment.quantity} type="comment" />
            <InteractionButton fCallBack={like.fCallBack} quantity={like.quantity} type="like" />
            <ShareButton fCallBack={share.fCallBack} label={share.label} />
          </Row>
        </Article>
      )}
    </>
  );
};

interface IRowStyles {
  gap?: string;
  spacing?: string;
}

interface IArticleStyles {
  variant?: string;
}

const Row = styled.div(({ gap }: IRowStyles) => [
  tw`
    flex
    flex-row
    flex-wrap
    justify-start
    items-center
    w-full
    `,
  gap === 'small' && tw`gap-8`,
  BottomSpacing,
]);

const Article = styled.article(({ variant }: IArticleStyles) => [
  tw`
    relative
    flex
    flex-col
    justify-start
    items-start
    w-full
    bg-slate-white
    py-32
    px-16
    sm:px-48
  `,
  (variant === 'timeline' || variant === 'detailpage') && tw`rounded-xl`,
]);

const AvatarWrapper = styled.div(() => [
  tw`
   mr-8   
  `,
]);

const UserWrapper = styled.div(() => [
  BottomSpacing,
  tw`
    flex
    flex-row-reverse
    relative
    left-0

    sm:(-left-76)
  `,
]);
