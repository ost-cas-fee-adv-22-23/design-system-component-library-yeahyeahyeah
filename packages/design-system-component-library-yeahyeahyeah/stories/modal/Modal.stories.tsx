import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../../components/modal/Modal';
import { action } from '@storybook/addon-actions';

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
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalStory = Template.bind({});

ModalStory.args = {
  label: 'Title modal',
  children: 'Hallo Roli',
  isOpen: false,
};

ModalStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ModalStory.storyName = 'Modal';
