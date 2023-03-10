import React from 'react';
import tw, { styled } from 'twin.macro';
import { User, UserProps } from '../user/User';
import { InputForm, IFormInputProps } from './InputForm';
import { Button, ButtonProps } from '../button/Button';
import { BottomSpacing } from '../../styles/Spacing';
import { Heading, Paragraph } from '../typography';
import type { TmbSpacing } from '../../types/types';
import { IconLink } from '../link/IconLink';
import Link from 'next/link';

export interface ITextBoxProps {
  user?: Pick<UserProps, 'label' | 'avatar'>;
  form: Pick<IFormInputProps, 'name' | 'placeholder' | 'errorMessage'>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  variant: 'write' | 'inline' | 'start';
  uploadCallback: () => void;
  sendCallback: () => void;
  mbSpacing?: TmbSpacing;
  startHeading?: string;
  startParagraph?: string;
}
export const TextBox: React.FC<ITextBoxProps> = ({
  variant = 'start',
  startHeading = 'Hey, was läuft?',
  startParagraph = 'Schreib deinen ersten Mumble, oder folge einem User',
  user = {
    label: 'Display Name',
    username: {
      label: 'Username',
      href: '#',
      type: 'username',
    },
    avatar: {
      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
      alt: 'Alter Tag',
    },
  },
  form = {
    name: 'mumble-input-form',
    placeholder: 'Na, was meinste dazu ...?',
    errorMessage: 'Da ist etwas schief gelaufen',
  },
  inputValue,
  setInputValue,
  uploadCallback = () => {
    null;
  },
  sendCallback = () => {
    null;
  },
}) => {
  const upload: ButtonProps = {
    label: 'Bild hochladen',
    icon: 'upload',
    size: 'small',
    type: 'button',
    color: 'slate',
    width: 'full',
  };

  const send: ButtonProps = {
    label: 'Absenden',
    icon: 'send',
    size: 'small',
    type: 'button',
    color: 'violet',
    width: 'full',
  };

  const onPressEnter = () => {
    sendCallback();
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    sendCallback();
  };

  return (
    <form onSubmit={handleSubmit} tw="container">
      <Card variant={variant}>
        <UserWrapper variant={variant} mbSpacing="16">
          {variant === 'write' && (
            <User avatar={user.avatar} label={user.label} variant="write">
              <IconLink
                label="User"
                type="username"
                color="violet"
                href="/profilepage"
                legacyBehavior
                passHref
                linkComponent={Link}
              />
            </User>
          )}
          {variant === 'inline' && (
            <User avatar={user.avatar} label={user.label} variant="inline">
              <IconLink
                label="User"
                type="username"
                color="violet"
                href="/profilepage"
                legacyBehavior
                passHref
                linkComponent={Link}
              />
            </User>
          )}
          {variant === 'start' && (
            <>
              <Heading tag="h3" label={startHeading} color="light" size="default" />
              <Paragraph text={startParagraph} color="light" size="default" alignment="left" />
            </>
          )}
        </UserWrapper>

        <InputForm
          name={form.name}
          editType="textarea"
          required={false}
          placeholder={form.placeholder}
          errorMessage={form.errorMessage}
          autoComplete="off"
          inputValue={inputValue}
          setInputValue={setInputValue}
          onPressEnter={onPressEnter}
          data-testid="testTextarea"
        />

        <Row>
          <Button
            onClick={uploadCallback}
            label={upload.label}
            size={upload.size}
            type={upload.type}
            color={upload.color}
            width={upload.width}
            icon={upload.icon}
          />
          <Button label={send.label} size={send.size} type="submit" color={send.color} width={send.width} icon={send.icon} />
        </Row>
      </Card>
    </form>
  );
};

interface ICard {
  variant: string;
  mbSpacing: string;
}

const Card = styled.div(({ variant }: Pick<ICard, 'variant'>) => [
  tw`
    flex
    flex-col
    bg-slate-white
    
    pt-24
    pb-32
    px-16
    w-full
    
    sm:(px-16)
    md:(px-32)
    lg:(px-48)
  `,
  variant === 'write' && tw`rounded pt-0`,
  variant === 'inline' && tw`rounded-none`,
  variant === 'start' && tw`rounded`,
]);

const UserWrapper = styled.div(({ variant }: ICard) => [
  BottomSpacing,
  variant === 'write' &&
    tw`
    flex
    flex-row
    justify-between
    items-center
    relative
    top-16
    left-0
    md:(-left-[70px])
    lg:(-left-[86px])
  `,
]);

const Row = styled.div(() => [
  tw`
    flex
    justify-between
    gap-16
    flex-col
    sm:(flex-row)
  `,
]);
