import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MumbleHeader } from '../../components/mumble/MumbleHeader';
import { action } from '@storybook/addon-actions';

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
  },
  args: {
    variant: 'edit',
    user: {
      variant: 'header',
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
    banner: {
      src: 'https://placebeard.it/640x360',
      alt: 'Picture',
      type: 'banner',
    },
    text: 'De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking.',
  },
} as ComponentMeta<typeof MumbleHeader>;

const Template: ComponentStory<typeof MumbleHeader> = (args) => <MumbleHeader {...args} />;

export const MumbleStory = Template.bind({});

MumbleStory.parameters = {
  docs: {
    source: { type: 'auto' },
  },
};

MumbleStory.storyName = 'Mumble-Header';
