import styled from 'styled-components';
import tw from 'twin.macro';
import { User } from 'src/components/User';
import { IIconLinkProps } from '../IconLink';
import { InputForm, IFormInputProps } from 'src/components/forms/Input';
import { Button, IButtonProps } from 'src/components/buttons/Button';

interface IWriteComponent {
  name: string;
  username: IIconLinkProps;
  location: IIconLinkProps;
  editType: IFormInputProps;
  placeholder: string;
  label: IButtonProps;
}

export const WriteComponent: React.FC<IWriteComponent> = ({
  label,
  username,
  placeholder = 'Na, was meinste dazu ...',
}) => {
  return (
    <>
      <BoxStyled>
        <User
          btn={{
            fCallBack: function noRefCheck() {},
          }}
          label="Display Name"
          pic={{
            alt: 'This is a picture of Roli Rollinger',
            fCallBack: function noRefCheck() {},
            src: '3911aaec7c2685bf1059.png',
          }}
          username={{
            href: '',
            label: 'Username',
          }}
          variant="write"
        />
        <InputForm
          className="mt-16"
          editType="textarea"
          label={''}
          required={false}
          placeholder={placeholder}
          errorMessage={'error'}
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
