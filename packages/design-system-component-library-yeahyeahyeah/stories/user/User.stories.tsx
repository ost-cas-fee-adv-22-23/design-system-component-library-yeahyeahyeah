import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User } from '../../components/user/User';
import { action } from '@storybook/addon-actions';
import UserReadme from '../../docs/User.md';
import { IconLink } from '../../index';
import Link from 'next/link';

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
    type: 'edit',
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
  },
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args) => (
  <User {...args}>
    <IconLink label="User" type="username" color="violet" href="/" legacyBehavior passHref linkComponent={Link} />
    <IconLink label="Joined" type="timestamp" color="slate" href="/" legacyBehavior passHref linkComponent={Link} />
  </User>
);

export const UserStory = Template.bind({});

UserStory.args = {};

UserStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: UserReadme,
    },
  },
};

UserStory.storyName = 'User';
