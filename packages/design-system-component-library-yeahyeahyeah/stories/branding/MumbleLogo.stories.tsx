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
      defaultValue: 'horizontal',
    },
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'violet',
    },
    fCallBack: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof MumbleLogo>;

const Template: ComponentStory<typeof MumbleLogo> = (args) => {
  return <MumbleLogo {...args} />;
};

export const LogoVariants = Template.bind({});

LogoVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

LogoVariants.storyName = 'Logo';
