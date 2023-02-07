import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Mumble } from '../../components/mumble/Mumble';
import { action } from '@storybook/addon-actions';
import MumbleReadme from '../../docs/Mumble.md';

export default {
  title: 'Mumble/Mumble',
  component: Mumble,
  argTypes: {
    variant: {
      control: 'select',
    },
    user: {
      control: {
        type: 'object',
      },
    },
    img: {
      control: {
        type: 'object',
      },
    },
    comment: {
      control: { type: 'object' },
    },
    like: {
      control: { type: 'object' },
    },
    share: {
      control: { type: 'object' },
    },
    mbSpacing: {
      control: 'select',
      options: ['0', '2', '4', '8', '16', '32', '64'],
    },
  },
  args: {
    variant: 'timeline',
    user: {
      avatar: {
        alt: 'avatar',
        src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
        buttonCallBack: action('button mumble clicked'),
        imageCallBack: action('image mumble clicked'),
      },
      joined: {
        href: '',
        label: 'Joined',
        fCallBack: action('joined clicked'),
        type: 'joined',
      },
      label: 'Display Name',
      location: {
        href: '',
        label: 'Location',
        fCallBack: action('location clicked'),
        type: 'location',
      },
      timestamp: {
        href: '',
        label: 'Timestamp',
        fCallBack: action('timestamp clicked'),
        type: 'timestamp',
      },
      username: {
        href: '',
        label: 'Username',
        fCallBack: action('username clicked'),
        type: 'username',
      },
      variant: 'xlarge',
    },
    text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking.',
    img: {
      alt: 'This is a profile picture!',
      fCallBack: action('icon clicked'),
      src: 'https://picsum.photos/640/360',
    },
    comment: {
      fCallBack: action('comment clicked'),
      quantity: 0,
    },
    like: {
      fCallBack: action('like clicked'),
      quantity: 999,
    },
    share: {
      fCallBack: action('share clicked'),
      label: 'Share',
    },
    mbSpacing: '0',
  },
} as ComponentMeta<typeof Mumble>;

const Template: ComponentStory<typeof Mumble> = (args) => <Mumble {...args} />;

export const MumbleStory = Template.bind({});

MumbleStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: MumbleReadme,
    },
  },
};

MumbleStory.storyName = 'Mumble';
