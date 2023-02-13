import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UploadForm from '../../components/form/UploadForm';
import UploadReadme from '../../docs/FileUpload.md';
import { FileRejection } from 'react-dropzone';

export default {
  title: 'Form/UploadForm',
  component: UploadForm,
  argTypes: {
    showModal: {
      control: 'boolean',
    },
    setShowModal: {
      control: false,
      table: {
        disable: true,
      },
    },
    onDropCallBack: {
      control: false,
      table: {
        disable: true,
      },
    },
    fileUploadError: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof UploadForm>;

const Template: ComponentStory<typeof UploadForm> = (args) => {
  const [fileUploadError, setFileUploadError] = React.useState('');
  const [showModal, setShowModal] = useState(true);

  const setTimerForError = () =>
    setTimeout(() => {
      setFileUploadError('');
    }, 2000);

  const onDropCallBack = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    console.log('acceptedFiles, fileRejections', acceptedFiles, fileRejections);
    fileRejections?.length && setFileUploadError(fileRejections[0].errors[0].message);
    setTimerForError();
  };

  return (
    <UploadForm {...args} onDropCallBack={onDropCallBack} setShowModal={setShowModal} fileUploadError={fileUploadError} />
  );
};

export const UploadFormStory = Template.bind({});

UploadFormStory.args = {
  showModal: true,
};

UploadFormStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: UploadReadme,
    },
  },
};

UploadFormStory.storyName = 'UploadForm';
