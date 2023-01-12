import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NaviButton } from '../../components/buttons/NaviButton';
import { IconsMapped } from '../../components/icons/IconMap';
import NaviButtonReadme from '../../docs/NaviButton.md';

export default {
  title: 'Navigation',
  component: NaviButton,
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
    },
    fCallBack: {
      action: () => 'handleClick',
    },
    icon: {
      control: 'select',
      options: Object.keys(IconsMapped),
    },
    avatar: {
      control: 'object',
    },
  },
} as ComponentMeta<typeof NaviButton>;

const Template: ComponentStory<typeof NaviButton> = (args) => {
  return <NaviButton {...args} />;
};
export const ProfileButtonStory = Template.bind({});

// PROFILE BUTTON
ProfileButtonStory.argTypes = {
  icon: {
    control: false,
  },
};

ProfileButtonStory.args = {
  label: 'Label',
  variant: 'profile',
  avatar: {
    variant: 'small',
    src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
    alt: 'Alternative text',
  },
};

ProfileButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: NaviButtonReadme,
    },
  },
};

ProfileButtonStory.storyName = 'Profil Button';

export const NaviButtonStory = Template.bind({});

// NAVI BUTTON
NaviButtonStory.argTypes = {};

NaviButtonStory.args = {
  label: 'Label',
  variant: 'default',
  icon: 'settings',
};

NaviButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: NaviButtonReadme,
    },
  },
};

NaviButtonStory.storyName = 'Navi Button';
