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
      defaultValue:
        'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby.',
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
