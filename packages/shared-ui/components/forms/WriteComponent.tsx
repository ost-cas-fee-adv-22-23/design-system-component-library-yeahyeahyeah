import React from 'react';
import tw, { styled } from 'twin.macro';
import { User, IUserProps } from '../User';
import { InputForm, IFormInputProps } from './Input';
import { Button, IButtonProps } from '../buttons/Button';

export interface IWriteComponentProps {
  user: IUserProps;
  form: IFormInputProps;
  mode: 'write' | 'inline';
  upload: IButtonProps;
  send: IButtonProps;
}

export const WriteComponent: React.FC<IWriteComponentProps> = ({
  mode = 'write',
  user = {
    label: 'Display Name',
    username: {
      label: 'Username',
      href: '#',
    },
    variant: mode,
    avatar: {
      src: 'https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif',
      alt: 'Alter Tag',
    },
  },
  form = {
    placeholder: 'Na, was meinste dazu ...?',
    errorMessage: 'Da ist etwas schief gelaufen',
  },
  upload = {
    label: 'Bild hochladen',
    icon: 'upload',
    size: 'small',
    type: 'button',
    variant: 'slate',
    width: 'full',
    fCallBack: () => {
      return null;
    },
  },
  send = {
    label: 'Absenden',
    icon: 'send',
    size: 'small',
    type: 'button',
    variant: 'violet',
    width: 'full',
    fCallBack: () => {
      return null;
    },
  },
}) => {
  return (
    <>
      <CardHeader mode={mode}>
        <CardHeaderRow mode={mode}>
          <User avatar={user.avatar} label={user.label} username={user.username} variant={mode} />
        </CardHeaderRow>
      </CardHeader>
      <Card mode={mode}>
        <InputForm
          tw="mt-16"
          editType={'textarea'}
          label={''}
          required={false}
          placeholder={form.placeholder}
          errorMessage={form.errorMessage}
          autoComplete={'off'}
        />
        <Row>
          <Button
            fCallBack={upload.fCallBack}
            label={upload.label}
            size={upload.size}
            type={upload.type}
            variant={upload.variant}
            width={upload.width}
            icon={upload.icon}
          />
          <Button
            fCallBack={send.fCallBack}
            label={send.label}
            size={send.size}
            type={send.type}
            variant={send.variant}
            width={send.width}
            icon={send.icon}
          />
        </Row>
      </Card>
    </>
  );
};

interface ICard {
  mode?: string;
}

const CardHeader = styled.div(({ mode }: ICard) => [
  tw`
  flex
  flex-col
  items-baseline
  bg-slate-white
  pt-16
  px-16
  pl-16
  w-full
  rounded-t-16
  `,
  mode === 'inline' &&
    tw`
      sm:(px-16 pt-16)
      md:(px-[20px] pt-0)
      lg:(px-48 pt-0)
  `,
  mode === 'write' &&
    tw`
      rounded-none
      sm:(px-16)
      md:(px-32 pt-32)
      lg:(px-48 pt-32)
  `,
]);

const CardHeaderRow = styled.div(({ mode }: ICard) => [
  mode === 'inline' &&
    tw`
    relative
    sm:(left-0 top-8)
    md:(-left-[60px] top-16)
    lg:(-left-[76px] top-16)
  `,
]);

const Card = styled.div(({ mode }: ICard) => [
  tw`
  flex
  flex-col
  bg-slate-white
  pb-32
  px-16
  w-full
  rounded-b-16
  
  sm:(px-16)
  md:(px-32)
  lg:(px-48)
  `,
  mode === 'inline' && tw``,
  mode === 'write' && tw`rounded-none`,
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
