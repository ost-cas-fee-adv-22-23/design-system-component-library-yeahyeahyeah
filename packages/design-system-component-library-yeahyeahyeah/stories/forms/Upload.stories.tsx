import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Upload } from '../../components/forms/Upload';
import UploadReadme from '../../docs/Upload.md';

export default {
  title: 'Form/Upload',
  component: Upload,
  argTypes: {
    fCallBack: {
      action: () => 'handleClick',
    },
  },
  args: {
    loading: false,
  },
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

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
