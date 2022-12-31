import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from '../../components/buttons/IconButton';
import { Icons } from '../../components/icons/IconMap';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default {
  title: 'Interactions/IconButton',
  component: IconButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Label',
    },
    icon: {
      control: 'select',
      options: Object.keys(Icons),
      name: 'Icon',
      defaultValue: 'logo',
    },
    variant: {
      control: 'select',
      description: 'Only in use in Avatar "edit mode".',
      defaultValue: 'none',
    },
    fCallBack: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />;
};
/**
 * @button
 * @desc button standard slate
 */
export const ButtonIcon = Template.bind({});

ButtonIcon.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ButtonIcon.storyName = 'Icon Button';
