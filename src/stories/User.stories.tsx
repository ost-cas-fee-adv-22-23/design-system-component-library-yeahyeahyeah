import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User } from 'src/components/User';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import UserImage from './assets/user.png';

export default {
  title: 'User/User',
  component: User,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    name: {
      defaultValue: 'Display Name',
    },
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'small',
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
        src: UserImage,
        alt: 'This is a picture of Roli Rollinger',
        fCallBack: () => console.log('Clicked on the picture'),
      },
    },
    btn: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Follow',
        fCallBack: () => console.log('Clicked on the button'),
      },
    },
  },
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args) => <User {...args} />;
/**
 * @button
 * @desc button standard slate
 */
export const UserStory = Template.bind({});

UserStory.args = {
  variant: 'recommended',
};

UserStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

UserStory.storyName = 'User';
