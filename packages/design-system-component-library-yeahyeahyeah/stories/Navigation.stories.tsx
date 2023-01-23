import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navigation } from '../components/Navigation';
import { Modal } from '../components/modal/Modal';
import NavigationReadme from '../docs/Navigation.md';
import { action } from '@storybook/addon-actions';

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
        fCallBack: action('logo'),
      },
    },
    avatar: {
      control: 'object',
      description: 'User image',
      defaultValue: {
        variant: 'profile',
        label: 'Profile',
        fCallBack: action('avatar'),
        avatar: {
          variant: 'small',
          src: 'https://media.giphy.com/media/3oEduQAsYcJKQH2XsI/giphy.gif',
          alt: 'Alternative text',
        },
      },
    },
    settings: {
      control: 'object',
      description: 'User settings',
      defaultValue: {
        icon: 'settings',
        label: 'Settings',
        variant: 'default',
        fCallBack: action('settings'),
      },
    },
    logout: {
      control: 'object',
      description: 'Logout',
      defaultValue: {
        icon: 'logout',
        label: 'Logout',
        variant: 'default',
        fCallBack: action('logout'),
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
