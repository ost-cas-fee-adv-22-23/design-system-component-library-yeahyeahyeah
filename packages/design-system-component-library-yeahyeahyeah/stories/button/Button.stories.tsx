import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../components/button/Button';
import { IconsMapped } from '../../components/icon/IconMap';
import ButtonReadme from '../../docs/Button.md';

export default {
  title: 'Interactions',
  component: Button,
  argTypes: {
    label: {
      control: 'text',
    },
    color: {
      control: 'select',
    },
    type: {
      control: 'select',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: 'select',
    },
    width: {
      control: {
        type: 'select',
      },
    },
    fCallBack: {
      action: () => 'handleClick',
    },
    icon: {
      control: 'select',
      options: Object.keys(IconsMapped),
      name: 'Icon',
    },
  },
  args: {
    label: 'Button Label',
    type: 'button',
    size: 'small',
    width: 'default',
    color: 'slate',
    icon: 'logo',
    disabled: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const ButtonStory = Template.bind({});

ButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: ButtonReadme,
      language: 'javascript',
    },
  },
};

ButtonStory.storyName = 'Button';
