import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserRecommended } from '../../components/user/UserRecommended';
import UserReadme from '../../docs/User.md';
import { IconLink } from '../../index';
import Link from 'next/link';

export default {
  title: 'User/User',
  component: UserRecommended,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  args: {
    label: 'Display Name',
    avatar: {
      alt: 'Alter Tag',
      onImageClick: () => console.log('image clicked'),
      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
    },
    btn: { label: 'Follow', onClick: () => console.log('btn clicked') },
  },
} as ComponentMeta<typeof UserRecommended>;

const Template: ComponentStory<typeof UserRecommended> = (args) => (
  <UserRecommended {...args}>
    <IconLink label="User" type="username" color="violet" href="/" legacyBehavior passHref linkComponent={Link} />
  </UserRecommended>
);

export const UserRecommendedStory = Template.bind({});

UserRecommendedStory.args = {};

UserRecommendedStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: UserReadme,
    },
  },
};

UserRecommendedStory.storyName = 'UserRecommended';
