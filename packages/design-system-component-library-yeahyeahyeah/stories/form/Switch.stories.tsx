import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from '../../components/form/Switch';
import SwitchReadme from '../../docs/Switch.md';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form/Switch',
  component: Switch,
  argTypes: {
    value: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;
export const SwitchStory = Template.bind({});

SwitchStory.args = {
  value: 'likes',
  options: [
    {
      label: 'Deine Mumbles',
      value: 'mumbles',
    },
    {
      label: 'Deine Likes',
      value: 'likes',
    },
  ],
  fCallBack: action('value'),
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
