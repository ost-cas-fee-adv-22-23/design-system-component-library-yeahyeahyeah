import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../components/Avatar';
import { action } from '@storybook/addon-actions';

export const decorators = [(Story: any) => <div style={{ margin: '3em' }}>{Story()}</div>];

export default {
  title: 'User',
  component: Avatar,
  decorators,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'small',
    },
    src: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
    },
    alt: {
      control: {
        type: 'text',
      },
      defaultValue: 'Alter Tag',
    },
    imageCallBack: {
      defaultValue: action('image clicked'),
    },
    buttonCallBack: {
      defaultValue: action('button clicked'),
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
/**
 * @button
 * @desc button standard slate
 */
export const AvatarStory = Template.bind({});

AvatarStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

AvatarStory.storyName = 'Avatar';
