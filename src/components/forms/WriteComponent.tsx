import styled from 'styled-components';
import tw from 'twin.macro';
import { User, IUserProps } from 'src/components/User';
import { IIconLinkProps } from '../IconLink';
import { InputForm } from 'src/components/forms/Input';
import { Button } from 'src/components/buttons/Button';

interface IWriteComponentProps {
  label: string;
  avatar?: { src: string; alt: string; fCallBack?: () => void };
  username: IIconLinkProps;
  user: IUserProps;
  form: { editType: 'textarea'; placeholder: string; errorMessage: string };
}

export const WriteComponent: React.FC<IWriteComponentProps> = ({
  label = 'Display Name',
  avatar = { src: 'https://i.stack.imgur.com/5xd5n.png', alt: 'Alter Tag' },
  user = { variant: 'write' },
  username = { label: 'Username', href: '#' },
  form = {
    editType: 'textarea',
    placeholder: 'Na, was meinste dazu ...?',
    errorMessage: 'Da ist etwas schief gelaufen',
  },
}) => {
  return (
    <>
      <BoxStyled>
        <User
          avatar={avatar}
          label={label}
          username={username}
          variant={user.variant}
        />
        <InputForm
          className="mt-16"
          editType={form.editType}
          label={''}
          required={false}
          placeholder={form.placeholder}
          errorMessage={form.errorMessage}
          autoComplete={'off'}
        />
        <Row>
          <Button
            handleClick={() => {}}
            label="Bild hochladen"
            size="small"
            type="button"
            variant="slate"
            width="full"
            icon="upload"
          />
          <Button
            handleClick={() => {}}
            label="Absenden"
            size="small"
            type="button"
            variant="violet"
            width="full"
            icon="send"
          />
        </Row>
      </BoxStyled>
    </>
  );
};

const BoxStyled = styled.div(() => [
  tw`
    flex
    flex-col
    bg-slate-white
    py-32
    px-16
    w-full

    sm:(px-16)
    md:(px-32)
    lg:(px-48)
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

/**
 * @write-component
 * @desc styles
 */
