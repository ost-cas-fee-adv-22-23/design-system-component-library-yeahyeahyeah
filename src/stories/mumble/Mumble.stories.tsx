import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Mumble } from 'src/components/Mumble';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Mumble/Mumble',
  component: Mumble,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    variant: {
      defaultValue: 'timeline',
    },
    user: {
      control: {
        type: 'object',
      },
      defaultValue: {
        avatar: {
          alt: 'avatar',
          src: 'https://i.stack.imgur.com/5xd5n.png',
        },
        btn: {
          fCallBack: () => {},
          label: 'Follow',
        },
        joined: {
          href: '',
          label: 'Joined',
        },
        label: 'Display Name',
        location: {
          href: '',
          label: 'Location',
        },
        timestamp: {
          href: '',
          label: 'Timestamp',
        },
        username: {
          href: '',
          label: 'Username',
        },
        variant: 'xlarge',
      },
    },
    text: {
      defaultValue: 'here comes a mumble xxx',
    },
  },
} as ComponentMeta<typeof Mumble>;

const Template: ComponentStory<typeof Mumble> = (args) => <Mumble {...args} />;
/**
 * @button
 * @desc button standard slate
 */
export const MumbleStory = Template.bind({});

MumbleStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

MumbleStory.storyName = 'Mumble';
