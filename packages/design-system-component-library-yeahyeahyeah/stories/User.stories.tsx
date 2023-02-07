import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User } from '../components/User';
import { action } from '@storybook/addon-actions';
import UserReadme from '../docs/User.md';

export default {
  title: 'User/User',
  component: User,
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
    },
    username: {
      control: 'object',
    },
    timestamp: {
      control: {
        type: 'object',
      },
    },
    location: {
      control: {
        type: 'object',
      },
    },
    joined: {
      control: {
        type: 'object',
      },
    },
    btn: {
      control: {
        type: 'object',
      },
    },
    avatar: {
      control: {
        type: 'object',
      },
    },
    type: {
      control: 'select',
      if: { arg: 'variant', eq: 'xlarge' },
    },
  },
  args: {
    label: 'Display Name',
    variant: 'small',
    username: {
      label: 'Username',
      href: '',
      fCallBack: action('username clicked'),
      type: 'username',
    },
    timestamp: {
      label: 'Timestamp',
      href: '',
      fCallBack: action('timestamp clicked'),
      type: 'timestamp',
    },
    location: {
      label: 'Location',
      href: '',
      fCallBack: action('location clicked'),
      type: 'location',
    },
    joined: {
      label: 'Joined',
      href: '',
      fCallBack: action('joined clicked'),
      type: 'joined',
    },
    settings: {
      fCallBack: action('settings clicked'),
    },
    avatar: {
      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
      alt: 'Alter Tag',
      buttonCallBack: action('avatar button clicked'),
      imageCallBack: action('avatar image clicked'),
    },
    btn: {
      label: 'Follow',
      fCallBack: action('btn clicked'),
    },
    type: 'edit',
  },
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args) => <User {...args} />;

export const UserStory = Template.bind({});

UserStory.args = {
  variant: 'recommended',
};

UserStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: UserReadme,
    },
  },
};

UserStory.storyName = 'User';
