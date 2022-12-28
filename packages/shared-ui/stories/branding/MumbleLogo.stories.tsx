import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MumbleLogo } from '../../components/branding/MumbleLogo';
import { DefaultLayout } from '../layouts/DefaultLayout';
import React from 'react';

export default {
  title: 'Branding/Logo',
  component: MumbleLogo,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    title: {
      name: 'title',
      defaultValue: 'Homepage',
    },
    href: {
      name: 'href',
      defaultValue: '#',
    },
    alignment: {
      control: {
        type: 'select',
      },
      defaultValue: 'vertical',
    },
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'violet',
    },
    iconName: {
      control: false,
      table: {
        disable: true,
      },
      defaultValue: 'mumble-logo',
    },
    iconWidth: {
      control: false,
      table: {
        disable: true,
      },
      defaultValue: '246px',
    },
    iconHeight: {
      control: false,
      table: {
        disable: true,
      },
      defaultValue: '100%',
    },
  },
} as ComponentMeta<typeof MumbleLogo>;

const Template: ComponentStory<typeof MumbleLogo> = (args) => {
  return <MumbleLogo {...args} />;
};
/**
 * @button
 * @desc button standard slate
 */
export const LogoVariants = Template.bind({});

LogoVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

LogoVariants.storyName = 'Logo';
