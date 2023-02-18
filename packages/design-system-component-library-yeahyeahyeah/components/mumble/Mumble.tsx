import React from 'react';
import tw, { styled } from 'twin.macro';
import { IUserProps, User } from '../user/User';
import { Paragraph } from '../typography/Paragraph';
import { IInteractionButtonProps, InteractionButton } from '../button/InteractionButton';
import { IShareButton, ShareButton } from '../button/ShareButton';
import { ImageContainer, ImageProps } from '../image/';
import { Avatar } from '../user/Avatar';
import { BottomSpacing } from '../../styles/Spacing';
import type { TmbSpacing } from '../../types/types';

export interface IMumbleProps {
  variant?: 'detailpage' | 'timeline' | 'response';
  user: IUserProps;
  text: string;
  img?: ImageProps<any>;
  comment: IInteractionButtonProps;
  like: IInteractionButtonProps;
  share: IShareButton;
  mbSpacing?: TmbSpacing;
}

export const Mumble: React.FC<IMumbleProps> = ({
  variant = 'detailpage',
  mbSpacing = '16',
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
          <Article variant={variant} mbSpacing={mbSpacing}>
            <UserWrapper mbSpacing="0">
              <User {...user} variant="large" />
              <AvatarWrapper>
                <Avatar {...user.avatar} alt={user.avatar?.alt || ''} src={user.avatar?.src || ''} variant="medium" />
              </AvatarWrapper>
            </UserWrapper>
            <Row>
              <Paragraph size="large" color="dark" text={text} mbSpacing="16" alignment="left" />
              {img.src !== '' && <ImageContainer {...img} type="container" />}
              <InteractionButton {...comment} type="comment" />
              <InteractionButton {...like} type="like" />
              <ShareButton {...share} />
            </Row>
          </Article>
        </>
      )}
      {variant === 'timeline' && (
        <Article variant={variant} mbSpacing={mbSpacing}>
          <UserWrapper mbSpacing="0">
            <User {...user} variant="medium" />
            <AvatarWrapper>
              <Avatar {...user.avatar} alt={user.avatar?.alt || ''} src={user.avatar?.src || ''} variant="medium" />
            </AvatarWrapper>
          </UserWrapper>
          <Row>
            <Paragraph size="medium" color="dark" text={text} mbSpacing="16" alignment="left" />
            <ImageContainer {...img} type="container" />
            <InteractionButton {...comment} type="comment" />
            <InteractionButton {...like} type="like" />
            <ShareButton {...share} />
          </Row>
        </Article>
      )}
      {variant === 'response' && (
        <Article mbSpacing={mbSpacing}>
          <Row mbSpacing="0">
            <User {...user} variant="small" />
          </Row>
          <Row>
            <Paragraph size="medium" color="dark" text={text} mbSpacing="16" alignment="left" />
            <ImageContainer {...img} type="container" />
            <InteractionButton {...comment} type="comment" />
            <InteractionButton {...like} type="like" />
            <ShareButton {...share} />
          </Row>
        </Article>
      )}
    </>
  );
};

interface IRowStyles {
  gap?: string;
  mbSpacing?: string;
}

interface IArticleStyles {
  variant?: string;
  mbSpacing: string;
}

const Row = styled.div(({ gap }: IRowStyles) => [
  tw`
    flex
    flex-row
    flex-wrap
    justify-start
    items-center
    w-full
    mt-16
    `,
  gap === 'small' && tw`gap-8`,
  BottomSpacing,
]);

const Article = styled.article(({ variant }: IArticleStyles) => [
  tw`
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
  BottomSpacing,
]);

const AvatarWrapper = styled.div(() => [
  tw`
   mr-16
  `,
]);

const UserWrapper = styled.div(() => [
  BottomSpacing,
  tw`
    flex
    flex-row-reverse
    justify-between
    items-center
    relative
    left-0

    sm:(-left-[84px])
  `,
]);
