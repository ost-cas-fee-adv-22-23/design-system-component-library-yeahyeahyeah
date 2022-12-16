import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { NaviButton } from 'src/components/buttons/NaviButton';
import { Icons } from 'src/components/icons/IconMap';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { ISVGProps } from 'src/interfaces/SVG';

export default {
  title: 'Interactions',
  component: NaviButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Label',
    },
    variant: {
      control: {
        type: 'select',
      },
    },
    handleClick: {
      action: () => 'handleClick',
    },
    width: {
      control: false,
      table: {
        disable: true,
      },
    },
    size: {
      control: false,
      table: {
        disable: true,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    icon: {
      control: 'select',
      options: [
        'calendar',
        'cancel',
        'checkmark',
        'down',
        'edit',
        'eye',
        'fullscreen',
        'heart-filled',
        'heart-outlined',
        'left',
        'location',
        'logo-mumble',
        'logout',
        'mumble-gradient',
        'mumble-logo',
        'mumble-text',
        'mumble',
        'profile',
        'reply-filled',
        'reply-outlined',
        'repost',
        'right',
        'send',
        'settings',
        'share',
        'time',
        'up',
        'upload',
      ],
      name: 'Icon',
      defaultValue: 'settings',
    },
  },
} as ComponentMeta<typeof NaviButton>;

const Template: ComponentStory<typeof NaviButton> = (args) => {
  return <NaviButton {...args} />;
};
/**
 * @button
 * @desc button standard slate
 */
export const NaviButtonStory = Template.bind({});

NaviButtonStory.args = {
  label: 'Label',
  variant: 'label',
};

NaviButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

NaviButtonStory.storyName = 'Navi Button';
