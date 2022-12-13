import styled from 'styled-components';
import tw from 'twin.macro';

import { Icon } from 'src/components/icons/Icon';
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
  name,
  username,
  placeholder = 'Na, was meinste dazu ...',
}) => {
  return (
    <>
      <BoxStyled>
        <User variant="small" username={username} name={name} />
        <InputForm
          className="mt-16"
          editType="textarea"
          label={''}
          required={false}
          placeholder={placeholder}
          errorMessage={'error'}
          autoComplete={'off'}
        />
        <div className="flex flex-row justify-between gap-16">
          <Button
            handleClick={() => {}}
            label="Bild hochladen"
            size="small"
            type="button"
            variant="slate"
            width="full"
          >
            <Icon iconName="upload" iconColor="fill-slate-white ml-8" />
          </Button>
          <Button
            handleClick={() => {}}
            label="Absenden"
            size="small"
            type="button"
            variant="violet"
            width="full"
          >
            <Icon iconName="send" iconColor="fill-slate-white ml-8" />
          </Button>
        </div>
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
    px-48
  `,
]);

/**
 * @write-component
 * @desc styles
 */
