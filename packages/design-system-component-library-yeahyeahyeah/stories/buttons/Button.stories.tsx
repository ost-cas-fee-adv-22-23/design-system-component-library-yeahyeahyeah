import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../components/buttons/Button';
import { IconsMapped } from '../../components/icons/IconMap';
import Readme from '../../docs/Button.md';

export default {
  title: 'Interactions',
  component: Button,
  argTypes: {
    label: {
      table: {
        summary: 'Button Label',
      },
    },
    variant: {
      control: 'select',
      table: {
        summary: 'slate',
      },
    },
    type: {
      control: 'select',
      table: {
        summary: 'button',
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        summary: false,
      },
    },
    size: {
      control: 'select',
      table: {
        summary: 'sdfsdf',
      },
    },
    width: {
      control: {
        type: 'select',
      },
      table: {
        summary: 'default',
      },
    },

    fCallBack: {
      action: () => 'handleClick',
    },
    icon: {
      control: 'select',
      options: Object.keys(IconsMapped),
      name: 'Icon',
      table: {
        summary: 'Logo',
      },
    },
  },
  args: {
    label: 'Button Label',
    type: 'button',
    disabled: false,
    size: 'small',
    width: 'default',
    variant: 'slate',
    icon: 'logo',
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
      component: Readme,
    },
  },
};

ButtonStory.storyName = 'Button';
