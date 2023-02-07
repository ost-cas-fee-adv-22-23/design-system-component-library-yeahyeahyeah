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
    text: 'Schreib etwas über dich.',
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
        src: 'https://raw.githubusercontent.com/smartive-education/design-system-component-library-yeahyeahyeah/master/packages/design-system-component-library-yeahyeahyeah/stories/assets/avatar.png',
        alt: 'Alttag',
        buttonCallBack: action('avatar button clicked'),
        imageCallBack: action('avatar image clicked'),
      },
    },
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
  // controls: { sort: 'requiredFirst' },
};

MumbleStory.storyName = 'Mumble-Header';
