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
      name: 'label',
      defaultValue: 'Button Label',
    },
    type: {
      control: {
        type: 'select',
      },
      defaultValue: 'button',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    size: {
      description: 'A sized version of the button',
      control: { type: 'radio' },
      defaultValue: 'small',
    },
    width: {
      description: 'A full width version of the button',
      control: {
        type: 'radio',
      },
      defaultValue: 'default',
    },
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'slate',
    },
    fCallBack: {
      action: () => 'handleClick',
    },
    icon: {
      control: 'select',
      options: Object.keys(IconsMapped),
      name: 'Icon',
      defaultValue: 'settings',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

/**
 * @button
 * @desc button standard slate
 */
export const ButtonStory = Template.bind({});

ButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: Readme,
    },
    readme: {
      sidebar: Readme,
    },
  },
};

ButtonStory.storyName = 'Button';
