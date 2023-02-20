import React from 'react';
import tw, { styled } from 'twin.macro';
import { BottomSpacing } from '../../index';
import type { TmbSpacing } from '../../types/types';
import { User, UserProps } from '../user/User';
import { Paragraph } from '../typography/Paragraph';
import { IImageContainerProps, ImageContainer } from '../image/ImageContainer';
import { Avatar } from '../user/Avatar';
import { IconButton } from '../button/IconButton';

export interface IMumbleHeaderProps {
  variant?: 'view' | 'edit';
  user: UserProps;
  text: string;
  banner?: IImageContainerProps;
  mbSpacing?: TmbSpacing;
}

export const MumbleHeader: React.FC<IMumbleHeaderProps> = ({
  text,
  variant = 'edit',
  mbSpacing = '32',
  banner = {
    src: 'https://loremflickr.com/640/360',
    alt: 'Image alt tag',
    type: 'banner-edit',
    fCallBack: () => {
      return null;
    },
  },
  user = {
    label: 'Display Name',
    variant: 'xlarge',
    avatar: {
      src: 'https://placebeard.it/640x360',
      alt: 'Alttag',
      onImageClick: () => {
        return null;
      },
    },
  },
}) => {
  return (
    <MumbleHeaderWrapper mbSpacing={mbSpacing}>
      <ImageContainer
        src={banner.src}
        alt={banner.alt}
        type={variant === 'edit' ? 'banner-edit' : 'banner-view'}
        fCallBack={banner.fCallBack}
      />
      <div tw="px-8 mb-16">
        <User avatar={user.avatar} label={user.label} variant={user.variant} type={variant} />
      </div>
      <Row variant={variant} mbSpacing="0">
        <Avatar
          src={user.avatar?.src || ''}
          alt={user.avatar?.alt || ''}
          variant="xlarge"
          onImageClick={user.avatar?.onImageClick}
        />
        {variant === 'edit' && (
          <IconBox>
            <IconButton label="label" icon="edit" variant="default" onClick={user.avatar?.onImageClick} />
          </IconBox>
        )}
      </Row>
      <div tw="p-8">
        <Paragraph text={text} color="light" size="default" alignment="left" mbSpacing="32" />
      </div>
    </MumbleHeaderWrapper>
  );
};

interface IMumbleHeaderStyles {
  variant: string;
  mbSpacing: string;
}

const MumbleHeaderWrapper = styled.div(() => [
  tw`
    flex
    flex-col
    justify-between
    overflow-hidden
  `,
  BottomSpacing,
]);

const IconBox = styled.div(() => [
  tw`
  relative
  -left-40
  bottom-6
  sm:(right-0)
`,
]);

const Row = styled.div(({ variant }: IMumbleHeaderStyles) => [
  tw`
  flex
  justify-end
  items-end
  z-10
  h-0
  overflow-visible
  pr-16
  relative
  -top-64
  sm:(-top-16)
  `,
  variant === 'edit' && tw`left-32`,
  variant === 'view' && tw`-left-16`,
]);
