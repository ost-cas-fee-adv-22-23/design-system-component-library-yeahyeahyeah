import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Upload } from '../../components/forms/Upload';
import UploadReadme from '../../docs/Upload.md';
import { Button, Modal } from '../../index';
import tw, { styled } from 'twin.macro';
import { FileRejection } from 'react-dropzone';

export default {
  title: 'Form/Upload',
  component: Upload,
  argTypes: {
    label: {
      control: 'text',
    },
    loading: {
      control: 'boolean',
    },
    fileDescription: {
      control: 'text',
    },
    dragDescription: {
      control: 'text',
    },
    onDropCallBack: {
      control: false,
      table: {
        disable: true,
      },
    },
    errorMessage: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => {
  const [error, setError] = React.useState('');

  const setTimerForError = () =>
    setTimeout(() => {
      setError('');
    }, 2000);

  const onDropCallBack = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    console.log('acceptedFiles, fileRejections', acceptedFiles, fileRejections);
    fileRejections?.length && setError(fileRejections[0].errors[0].message);
    setTimerForError();
  };

  return (
    <Modal label={'Modal'} isOpen={true} wide={true}>
      <form onSubmit={() => console.log('Submit')} tw="container">
        <Upload {...args} onDropCallBack={onDropCallBack} errorMessage={error} />
        <Row>
          <Button
            fCallBack={() => console.log('Cancel Button clicked')}
            icon="cancel"
            label="Abbrechen"
            size="large"
            type="button"
            color="slate"
            width="full"
          />
          <Button
            fCallBack={() => console.log('Send Button clicked')}
            icon="send"
            label="Speichern"
            size="small"
            type="button"
            color="violet"
            width="full"
          />
        </Row>
      </form>
    </Modal>
  );
};

export interface IRowStyle {
  upload?: string;
}

const Row = styled.div(({ upload }: IRowStyle) => [
  tw`
    flex
    justify-between
    gap-16
    flex-col
    sm:(flex-row)
    mt-48
  `,
  upload === 'upload' && tw`mt-16`,
]);

export const UploadStory = Template.bind({});

UploadStory.args = {
  label: 'Datei hierhin ziehen ...',
  fileDescription: 'JPEG oder PNG, maximal 50 MB',
  dragDescription: 'Jetzt loslassen ....',
  loading: false,
};

UploadStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: UploadReadme,
    },
  },
};

UploadStory.storyName = 'Upload';
