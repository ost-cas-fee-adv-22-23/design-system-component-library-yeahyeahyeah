import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MumbleLogo } from '../../components/image/MumbleLogo';
import React from 'react';

export default {
  title: 'Medias/Logo',
  component: MumbleLogo,
  argTypes: {
    alignment: {
      control: 'select',
    },
    color: {
      control: 'select',
    },
    isNavigation: {
      control: 'boolean',
    },
    onLogoClick: {
      action: () => 'handleClick',
    },
  },
  args: {
    alignment: 'vertical',
    color: 'violet',
    isNavigation: false,
  },
} as ComponentMeta<typeof MumbleLogo>;

const Template: ComponentStory<typeof MumbleLogo> = (args) => {
  return <MumbleLogo {...args} />;
};

export const LogoVariants = Template;

LogoVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

LogoVariants.storyName = 'Logo';
