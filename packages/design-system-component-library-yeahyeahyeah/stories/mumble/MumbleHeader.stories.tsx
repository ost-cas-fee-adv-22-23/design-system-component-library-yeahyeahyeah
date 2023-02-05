import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MumbleHeader } from '../../components/mumble/MumbleHeader';
import { action } from '@storybook/addon-actions';
import MumbleHeaderReadme from '../../docs/MumbleHeader.md';

export default {
  title: 'Mumble/Mumble-Header',
  component: MumbleHeader,
  argTypes: {
    variant: {
      control: 'select',
    },
    user: {
      control: {
        type: 'object',
      },
    },
    banner: {
      control: 'object',
    },
    avatar: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: 'edit',
    mbSpacing: '32',
    banner: {
      src: 'https://loremflickr.com/640/360',
      alt: 'Picture',
      type: 'banner-edit',
      fCallBack: action('edit clicked'),
    },
    user: {
      variant: 'xlarge',
      label: 'Display Name',
      username: {
        label: 'username',
        type: 'joined',
        href: '#',
        fCallBack: action('username clicked'),
      },
      location: {
        label: 'Location',
        type: 'joined',
        href: '#',
        fCallBack: action('location clicked'),
      },
      joined: {
        label: 'Joined',
        type: 'joined',
        href: '#',
        fCallBack: action('joined clicked'),
      },
      settings: {
        fCallBack: action('settings clicked'),
      },
      avatar: {
        src: 'https://placebeard.it/640x360',
        alt: 'Alttag',
        buttonCallBack: action('avatar button clicked'),
        imageCallBack: action('avatar image clicked'),
      },
    },

    text: 'Schreib etwas über dich.',
  },
} as ComponentMeta<typeof MumbleHeader>;

const Template: ComponentStory<typeof MumbleHeader> = (args) => <MumbleHeader {...args} />;

export const MumbleStory = Template.bind({});

MumbleStory.parameters = {
  docs: {
    source: { type: 'auto' },
    description: {
      component: MumbleHeaderReadme,
    },
  },
};

MumbleStory.storyName = 'Mumble-Header';
