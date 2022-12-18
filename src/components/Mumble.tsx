import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IUserProps, User } from './User';
import { Paragraph } from './typography/Paragraph';
import {
  IInteractionButton,
  InteractionButton,
} from './buttons/InteractionButton';
import { IShareButton, ShareButton } from './buttons/ShareButton';
import { IImageContainerProps, ImageContainer } from './ImageContainer';
import { Avatar, IAvatarProps } from './Avatar';

export interface IMumbleProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  variant?: 'detailpage' | 'timeline' | 'response';
  user: IUserProps;
  text: string;
  img: IImageContainerProps;
  comment: IInteractionButton;
  like: IInteractionButton;
  share: IShareButton;
  avatar: IAvatarProps;
}

export const Mumble: React.FC<IMumbleProps> = ({
  variant = 'detailpage',
  user = {
    avatar: {
      alt: 'avatar',
      src: 'https://i.stack.imgur.com/5xd5n.png',
      fCallBack: () => {},
    },
    btn: {
      fCallBack: () => {},
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
  avatar = {
    alt: 'Alter Tag',
    src: 'https://i.stack.imgur.com/5xd5n.png',
    variant: 'medium',
    fCallBack: () => {},
  },
  text = '',
  img = {
    alt: 'This is a profile picture!',
    fCallBack: () => {},
    src: '',
  },
  comment = {
    fCallBack: () => {},
    quantity: 0,
  },
  like = {
    fCallBack: () => {},
    quantity: 0,
  },
  share = {
    fCallBack: () => {},
    label: 'Share',
  },
}) => {
  return (
    <>
      {variant === 'detailpage' && (
        <Article>
          <User
            avatar={user.avatar}
            btn={user.btn}
            joined={user.joined}
            label={user.label}
            location={user.location}
            timestamp={user.timestamp}
            username={user.username}
            variant="xlarge"
          />
          <AvatarWrapper>
            <Avatar
              alt={avatar.alt}
              src={avatar.src}
              variant={'medium'}
              fCallBack={avatar.fCallBack}
            />
          </AvatarWrapper>
          <Div>
            <Paragraph variant={'large'} color={'dark'} text={text} />
          </Div>
          <Row>
            <ImageContainer
              alt={img.alt}
              fCallBack={img.fCallBack}
              src={img.src}
            />
          </Row>
          <Row>
            <InteractionButton
              fCallBack={comment.fCallBack}
              quantity={comment.quantity}
              type="comment"
            />
            <InteractionButton
              fCallBack={like.fCallBack}
              quantity={like.quantity}
              type="like"
            />
            <ShareButton fCallBack={share.fCallBack} label={share.label} />
          </Row>
        </Article>
      )}
      {variant === 'timeline' && (
        <Article>
          <User
            avatar={user.avatar}
            btn={user.btn}
            joined={user.joined}
            label={user.label}
            location={user.location}
            timestamp={user.timestamp}
            username={user.username}
            variant="large"
          />
          <AvatarWrapper>
            <Avatar
              alt={avatar.alt}
              src={avatar.src}
              variant={'medium'}
              fCallBack={avatar.fCallBack}
            />
          </AvatarWrapper>
          <Div>
            <Paragraph variant={'medium'} color={'dark'} text={text} />
          </Div>
          <Row>
            <ImageContainer
              alt={img.alt}
              fCallBack={img.fCallBack}
              src={img.src}
            />
          </Row>
          <Row>
            <InteractionButton
              fCallBack={comment.fCallBack}
              quantity={comment.quantity}
              type="comment"
            />
            <InteractionButton
              fCallBack={like.fCallBack}
              quantity={like.quantity}
              type="like"
            />
            <ShareButton fCallBack={share.fCallBack} label={share.label} />
          </Row>
        </Article>
      )}
      {variant === 'response' && (
        <Article>
          <User
            avatar={user.avatar}
            btn={user.btn}
            joined={user.joined}
            label={user.label}
            location={user.location}
            timestamp={user.timestamp}
            username={user.username}
            variant="small"
          />
          <Div>
            <Paragraph variant={'medium'} color={'dark'} text={text} />
          </Div>
          <Row>
            <ImageContainer
              alt={img.alt}
              fCallBack={img.fCallBack}
              src={img.src}
            />
          </Row>
          <Row>
            <InteractionButton
              fCallBack={comment.fCallBack}
              quantity={comment.quantity}
              type="comment"
            />
            <InteractionButton
              fCallBack={like.fCallBack}
              quantity={like.quantity}
              type="like"
            />
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
    
    py-4
    sm:(py-16)
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

    bg-slate-white

    py-32
    px-16
    sm:px-48

    w-full
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
