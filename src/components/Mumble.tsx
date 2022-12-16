import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IUserProps, User } from './User';
import { IParagraphProps, Paragraph } from './typography/Paragraph';
import { IconLink } from './IconLink';
import { InteractionButton } from './buttons/InteractionButton';
import { ShareButton } from './buttons/ShareButton';
import { ImageContainer } from './ImageContainer';

export interface IMumbleProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  variant?: 'detailpage' | 'timeline' | 'response';
  user: IUserProps;
  text: string;
}

export const Mumble: React.FC<IMumbleProps> = ({
  variant = 'detailpage',
  user = {
    avatar: {
      alt: 'avatar',
      src: 'https://i.stack.imgur.com/5xd5n.png',
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
  text = '',
}) => {
  return (
    <>
      {variant === 'detailpage' && (
        <ArticleStyled>
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
          <DivStyled>
            <Paragraph
              className={'pt-24'}
              variant={'large'}
              color={'dark'}
              text={text}
            />
          </DivStyled>
          <Row>
            <ImageContainer
              alt="This is a profile picture!"
              fCallBack={() => {}}
              src="https://shorturl.at/lzTV6"
            />
          </Row>
          <Row>
            <InteractionButton
              fCallBack={() => {}}
              quantity={0}
              type="comment"
            />
            <InteractionButton fCallBack={() => {}} quantity={0} type="like" />
            <ShareButton fCallBack={() => {}} label="Copy Link" />
          </Row>
        </ArticleStyled>
      )}
      {variant === 'timeline' && (
        <ArticleStyled>
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
          <DivStyled>
            <Paragraph
              className={'pt-24'}
              variant={'medium'}
              color={'dark'}
              text={text}
            />
          </DivStyled>
          <Row>
            <ImageContainer
              alt="This is a profile picture!"
              fCallBack={() => {}}
              src="https://shorturl.at/lzTV6"
            />
          </Row>
          <Row>
            <InteractionButton
              fCallBack={() => {}}
              quantity={0}
              type="comment"
            />
            <InteractionButton fCallBack={() => {}} quantity={0} type="like" />
            <ShareButton fCallBack={() => {}} label="Copy Link" />
          </Row>
        </ArticleStyled>
      )}
      {variant === 'response' && (
        <ArticleStyled>
          <User
            avatar={user.avatar}
            btn={user.btn}
            joined={user.joined}
            label={user.label}
            location={user.location}
            timestamp={user.timestamp}
            username={user.username}
            variant="medium"
          />
          <DivStyled>
            <Paragraph
              className={'pt-24'}
              variant={'medium'}
              color={'dark'}
              text={text}
            />
          </DivStyled>
          <Row>
            <ImageContainer
              alt="This is a profile picture!"
              fCallBack={() => {}}
              src="https://shorturl.at/lzTV6"
            />
          </Row>
          <Row>
            <InteractionButton
              fCallBack={() => {}}
              quantity={0}
              type="comment"
            />
            <InteractionButton fCallBack={() => {}} quantity={0} type="like" />
            <ShareButton fCallBack={() => {}} label="Copy Link" />
          </Row>
        </ArticleStyled>
      )}
    </>
  );
};

/**
 * @Button
 * @desc Button styles
 */
interface IUserStyles {
  variant?: string;
}

interface IRowStyles {
  gap?: string;
}

const Row = styled.div(({ gap }: IRowStyles) => [
  tw`
    flex
    flex-row
    justify-between
    items-center
    max-w-lg
    gap-16
  `,
  gap === 'small' && tw`gap-8`,
]);

const ArticleStyled = styled.article(() => [
  tw`
    flex
    flex-col
    bg-slate-white
    py-32
    px-16
    w-615

    sm:(px-16)
    md:(px-32)
    lg:(px-48)
  `,
]);

const DivStyled = styled.div(({ variant }: IUserStyles) => [
  tw`
    pt-24
  `,
]);
