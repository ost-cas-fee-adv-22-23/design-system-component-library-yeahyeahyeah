import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from '../../components/forms/Switch';
import SwitchReadme from '../../docs/Switch.md';

export default {
  title: 'Form/Switch',
  component: Switch,
  parameters: {},
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const SwitchStory = Template.bind({});

SwitchStory.args = {
  label: 'Switching to different Mumbles',
  value: 'likes',
  name: 'switch',
  options: [
    {
      label: 'Deine Mumbles',
      value: 'mumbles',
    },
    {
      label: 'Deine Likes',
      value: 'likes',
    },
    {
      label: 'Empfehlungen',
      value: 'promotedPosts',
    },
  ],
};

SwitchStory.parameters = {
  docs: {
    source: {
      type: 'dynamic',
    },
    description: {
      component: SwitchReadme,
    },
  },
};

SwitchStory.storyName = 'Switch';
