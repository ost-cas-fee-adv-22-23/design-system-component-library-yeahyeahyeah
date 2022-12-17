import styled from 'styled-components';
import tw from 'twin.macro';
import { User, IUserProps } from 'src/components/User';
import { InputForm, IFormInputProps } from 'src/components/forms/Input';
import { Button } from 'src/components/buttons/Button';

interface IWriteComponentProps {
  user: IUserProps;
  form: IFormInputProps;
}

export const WriteComponent: React.FC<IWriteComponentProps> = ({
  user = {
    label: 'Display Name',
    username: {
      label: 'Username',
      href: '#',
    },
    avatar: {
      src: 'https://i.stack.imgur.com/5xd5n.png',
      alt: 'Alter Tag',
    },
  },
  form = {
    placeholder: 'Na, was meinste dazu ...?',
    errorMessage: 'Da ist etwas schief gelaufen',
  },
}) => {
  return (
    <>
      <BoxStyled>
        <User
          avatar={user.avatar}
          label={user.label}
          username={user.username}
          variant={'write'}
        />
        <InputForm
          className="mt-16"
          editType={'textarea'}
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
