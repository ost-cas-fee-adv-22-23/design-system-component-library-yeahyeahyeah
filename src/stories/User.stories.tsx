import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User } from 'src/components/User';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import Roli from './assets/roli.png';

export default {
  title: 'User/User',
  component: User,
  decorators: [(story) => <div className={'bg-slate-100 p-40'}>{story()}</div>],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
    username: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Username',
        href: '',
      },
    },
    timestamp: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Timestamp',
        href: '',
      },
    },
    location: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Location',
        href: '',
      },
    },
    joined: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Joined',
        href: '',
      },
    },
    pic: {
      control: {
        type: 'object',
      },
      defaultValue: {
        src: Roli,
        alt: 'This is a picture of Roli Rollinger',
        fCallBack: () => console.log('Clicked on the picture'),
      },
    },
    btn: {
      control: {
        type: 'object',
      },
      defaultValue: {
        fCallBack: () => console.log('Clicked on the button'),
      },
    },
  },
} as ComponentMeta<typeof User>;

console.log('Roli', Roli);

const Template: ComponentStory<typeof User> = (args) => <User {...args} />;
/**
 * @button
 * @desc button standard slate
 */
export const UserStory = Template.bind({});

UserStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

UserStory.storyName = 'User';
