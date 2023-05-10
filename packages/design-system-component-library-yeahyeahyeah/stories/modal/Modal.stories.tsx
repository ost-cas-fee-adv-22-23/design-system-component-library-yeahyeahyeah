import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../../components/modal/Modal';
import { action } from '@storybook/addon-actions';
import ModalReadme from '../../docs/Modal.md';

export default {
  title: 'Modal/Modal',
  component: Modal,
  onClose: {
    control: false,
    table: {
      disable: true,
    },
    action: action('Modal closed'),
  },
  argTypes: {
    wide: {
      control: 'select',
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}>Here comes the content ...</Modal>;

export const ModalStory = Template;

ModalStory.args = {
  label: 'Bild hochladen',
  children: 'Modal content',
  isOpen: true,
  wide: 'small',
};

ModalStory.parameters = {
  docs: {
    source: {
      type: 'dynamic',
    },
    description: {
      component: ModalReadme,
    },
  },
};

ModalStory.storyName = 'Modal';
