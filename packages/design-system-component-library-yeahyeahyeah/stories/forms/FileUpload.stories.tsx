import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileUpload } from '../../components/forms/FileUpload';
import UploadReadme from '../../docs/FileUpload.md';
import { FileRejection } from 'react-dropzone';

export default {
  title: 'Form/FileUpload',
  component: FileUpload,
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
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => {
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

  return <FileUpload {...args} onDropCallBack={onDropCallBack} errorMessage={error} />;
};

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

UploadStory.storyName = 'FileUpload';
