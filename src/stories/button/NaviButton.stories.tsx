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
    icon: {
      control: 'select',
      options: Object.keys(Icons),
      mapping: Icons,
      name: 'Icon',
      defaultValue: Icons.settings,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
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
