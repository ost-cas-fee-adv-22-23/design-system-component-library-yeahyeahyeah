import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MumbleLogo } from '../../components/branding/MumbleLogo';
import React from 'react';

export default {
  title: 'Medias/Logo',
  component: MumbleLogo,
  argTypes: {
    title: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    alignment: {
      control: 'select',
    },
    color: {
      control: 'select',
    },
    fCallBack: {
      action: () => 'handleClick',
    },
    isNavigation: {
      control: 'boolean',
    },
  },
  args: {
    title: 'Homepage',
    href: '#',
    alignment: 'vertical',
    color: 'violet',
    isNavigation: false,
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
