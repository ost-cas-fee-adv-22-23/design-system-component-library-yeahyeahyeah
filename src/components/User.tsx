import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IconLink } from 'src/components/IconLink';
import { ProfilePicture } from './ProfilePicture';
interface IUserProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  name: string;
  variant?: 'small' | 'medium' | 'large' | 'xlarge';
  username: string;
  timestamp?: string;
  location?: string;
  joined?: string;
}

export const User: React.FC<IUserProps> = ({
  name = 'Display Name',
  variant = 'small',
  username,
  timestamp = 'Timestamp',
  location = 'Location',
  joined = 'Joined',
}) => {
  return (
    <>
      {variant === 'small' && (
        <Row gap="small">
          <ProfilePicture
            alt="This is a profile picture!"
            fCallBack={() => {}}
            size="small"
            src="https://cdn.unitycms.io/images/AGldBqK4qne8kxrx_ovKtu.png?op=ocroped&val=1200,1200,1000,1000,0,0&sum=ATBpuG0Cxeg"
          />
          <Column variant={variant}>
            <Name variant={variant}>{name}</Name>
            <Row>
              <IconLink
                label={username}
                type="username"
                variant="violet"
                href="#"
              ></IconLink>
              <IconLink
                label={timestamp}
                type="timestamp"
                variant="slate"
                href="#"
              ></IconLink>
            </Row>
          </Column>
        </Row>
      )}
      {(variant === 'large' || variant === 'medium') && (
        <Column>
          <Name variant={variant}>{name}</Name>
          <Row>
            <IconLink
              label={username}
              type="username"
              variant="violet"
              href="#"
            ></IconLink>
            <IconLink
              label={timestamp}
              type="timestamp"
              variant="slate"
              href="#"
            ></IconLink>
          </Row>
        </Column>
      )}
      {variant === 'xlarge' && (
        <Column>
          <Name variant={variant}>{name}</Name>
          <Row>
            <IconLink
              label={username}
              type="username"
              variant="violet"
              href="#"
            ></IconLink>
            <IconLink
              label={location}
              type="location"
              variant="slate"
              href="#"
            ></IconLink>
            <IconLink
              label={joined}
              type="joined"
              variant="slate"
              href="#"
            ></IconLink>
          </Row>
        </Column>
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

const Column = styled.div(({ variant }: IUserStyles) => [
  tw`
    flex
    flex-col
    gap-4
  `,
  variant === 'small' && tw`mt-2`,
]);

const Row = styled.div(({ gap }: IRowStyles) => [
  tw`
    flex
    flex-row
    justify-between
    max-w-lg
    gap-16
  `,
  gap === 'small' && tw`gap-8`,
]);

const Name = styled.h4(({ variant }: IUserStyles) => [
  tw`
    text-slate-900
  `,
  variant === 'small' && tw`text-sm font-semibold mb-4`,
  variant === 'medium' && tw`text-md font-semibold`,
  variant === 'large' && tw`text-xl font-semibold`,
  variant === 'xlarge' && tw`text-2xl font-semibold`,
]);
