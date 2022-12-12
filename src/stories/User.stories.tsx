import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User } from 'src/components/User';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'User/User',
  component: User,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Display Name',
    },
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'small',
    },
    username: {
      defaultValue: 'Username',
    },
    timestamp: {
      defaultValue: 'Timestamp',
    },
    location: {
      defaultValue: 'Location',
    },
    joined: {
      defaultValue: 'Joined',
    },
  },
} as ComponentMeta<typeof User>;

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
