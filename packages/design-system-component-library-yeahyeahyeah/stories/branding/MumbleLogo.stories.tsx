import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MumbleLogo } from '../../components/branding/MumbleLogo';
import React from 'react';
import MumbleLogoReadme from '../../docs/MumbleLogo.md';

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
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    newTab: {
      control: false,
      table: {
        disable: true,
      },
    },
    linkComponent: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  args: {
    title: 'Homepage',
    href: '/',
    src: 'https://raw.githubusercontent.com/smartive-education/design-system-component-library-yeahyeahyeah/master/packages/design-system-component-library-yeahyeahyeah/stories/assets/mumble-logo.svg',
    alt: 'Logo description',
  },
} as ComponentMeta<typeof MumbleLogo>;

const Template: ComponentStory<typeof MumbleLogo> = (args) => {
  return <MumbleLogo {...args} />;
};

export const LogoVariants = Template.bind({});

LogoVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: MumbleLogoReadme,
    },
  },
};

LogoVariants.storyName = 'Logo';
