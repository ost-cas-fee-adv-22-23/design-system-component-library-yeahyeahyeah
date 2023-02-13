import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../../components/user/Avatar';
import { action } from '@storybook/addon-actions';
import AvatarReadme from '../../docs/Avatar.md';

export default {
  title: 'User',
  component: Avatar,
  argTypes: {
    variant: {
      control: 'select',
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    imageCallBack: {
      control: false,
      action: action('image clicked'),
    },
    buttonCallBack: {
      control: false,
      action: action('button clicked'),
    },
  },
  args: {
    variant: 'large',
    src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
    alt: 'Image description',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarStory = Template.bind({});

AvatarStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: AvatarReadme,
    },
  },
};

AvatarStory.storyName = 'Avatar';
