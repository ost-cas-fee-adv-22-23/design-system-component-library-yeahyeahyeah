import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navigation } from '../components/Navigation';
import { Modal } from '../components/modal/Modal';
import NavigationReadme from '../docs/Navigation.md';

export default {
  title: 'Navigation/Navigation',
  component: Navigation,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    logo: {
      control: 'object',
      description: 'Description of mumbleLogo',
      defaultValue: {
        title: 'Mumble Logo',
        href: '#',
        fCallBack: () => {
          console.log('Mumble Logo');
        },
      },
    },
    avatar: {
      control: 'object',
      description: 'User image',
      defaultValue: {
        variant: 'profile',
        fCallBack: () => {
          console.log('Avatar');
        },
        src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
      },
    },
    settings: {
      control: 'object',
      description: 'User settings',
      defaultValue: {
        icon: 'settings',
        label: 'Settings',
        variant: 'default',
        fCallBack: () => {
          console.log('Settings');
        },
      },
    },
    logout: {
      control: 'object',
      description: 'Logout',
      defaultValue: {
        icon: 'logout',
        label: 'Logout',
        variant: 'default',
        fCallBack: () => {
          console.log('Logout');
        },
      },
    },
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((open) => !open);
  };

  const handleClose = () => {
    setOpen((open) => !open);
  };

  return !open ? (
    <Navigation
      {...args}
      settings={{
        icon: 'settings',
        label: 'Settings',
        variant: 'default',
        fCallBack: handleClick,
      }}
    />
  ) : (
    <Modal label="Settings" isOpen={open} onClose={handleClose}>
      Settings
    </Modal>
  );
};

export const NavigationStory = Template.bind({});

NavigationStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: NavigationReadme,
    },
  },
};

NavigationStory.storyName = 'Navigation';
