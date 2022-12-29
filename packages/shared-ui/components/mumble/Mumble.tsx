import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IUserProps, User } from '../User';
import { Paragraph } from '../typography/Paragraph';
import { IInteractionButton, InteractionButton } from '../buttons/InteractionButton';
import { IShareButton, ShareButton } from '../buttons/ShareButton';
import { IImageContainerProps, ImageContainer } from '../ImageContainer';
import { Avatar } from '../Avatar';

export interface IMumbleProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  variant?: 'detailpage' | 'timeline' | 'response';
  user: IUserProps;
  text: string;
  img: IImageContainerProps;
  comment: IInteractionButton;
  like: IInteractionButton;
  share: IShareButton;
}

export const Mumble: React.FC<IMumbleProps> = ({
  variant = 'detailpage',
  user = {
    avatar: {
      alt: '',
      src: 'https://i.stack.imgur.com/5xd5n.png',
      fCallBack: () => {
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
    },
    label: 'Display Name',
    location: {
      href: '',
      label: 'Location',
    },
    timestamp: {
      href: '',
      label: 'Timestamp',
    },
    username: {
      href: '',
      label: 'Username',
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
          <Article>
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
              <Avatar alt={user.avatar.alt} src={user.avatar.src} variant={'medium'} fCallBack={user.avatar?.fCallBack} />
            </AvatarWrapper>
            <Div>
              <Paragraph variant={'large'} color={'dark'} text={text} />
            </Div>
            <Row>
              <ImageContainer alt={img.alt} fCallBack={img.fCallBack} src={img.src} loading={img.loading} />
            </Row>
            <Row>
              <InteractionButton fCallBack={comment.fCallBack} quantity={comment.quantity} type="comment" />
              <InteractionButton fCallBack={like.fCallBack} quantity={like.quantity} type="like" />
              <ShareButton fCallBack={share.fCallBack} label={share.label} />
            </Row>
          </Article>
        </>
      )}
      {variant === 'timeline' && (
        <Article>
          <User
            avatar={user.avatar}
            btn={user.btn}
            label={user.label}
            timestamp={user.timestamp}
            username={user.username}
            variant="large"
          />
          <AvatarWrapper>
            <Avatar alt={user.avatar.alt} src={user.avatar.src} variant={'medium'} fCallBack={user.avatar.fCallBack} />
          </AvatarWrapper>
          <Div>
            <Paragraph variant={'medium'} color={'dark'} text={text} />
          </Div>
          <Row>
            <ImageContainer alt={img.alt} fCallBack={img.fCallBack} src={img.src} loading={img.loading} />
          </Row>
          <Row>
            <InteractionButton fCallBack={comment.fCallBack} quantity={comment.quantity} type="comment" />
            <InteractionButton fCallBack={like.fCallBack} quantity={like.quantity} type="like" />
            <ShareButton fCallBack={share.fCallBack} label={share.label} />
          </Row>
        </Article>
      )}
      {variant === 'response' && (
        <Article>
          <User
            avatar={user.avatar}
            btn={user.btn}
            label={user.label}
            timestamp={user.timestamp}
            username={user.username}
            variant="small"
          />
          <Div>
            <Paragraph variant={'medium'} color={'dark'} text={text} />
          </Div>
          <Row>
            <ImageContainer alt={img.alt} fCallBack={img.fCallBack} src={img.src} loading={img.loading} />
          </Row>
          <Row>
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
]);

const Article = styled.article(() => [
  tw`
    relative
    flex
    flex-col
    justify-center
    items-start
    w-full

    bg-slate-white

    py-32
    px-16
    sm:px-48
  `,
]);

const Div = styled.div(() => [
  tw`
    pt-16
  `,
]);

const AvatarWrapper = styled.div(() => [
  tw`
    absolute
    top-32
    left-[-32px]
  `,
]);
