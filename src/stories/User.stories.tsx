import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User } from 'src/components/User';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'User/User',
  component: User,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'User',
    },
    variant: {
      control: {
        type: 'select'
      }
    }
  },
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args) => (
  <User {...args} />
);
/**
 * @button
 * @desc button standard slate
 */
export const UserStory = Template.bind({});

UserStory.args = {
  label: 'Display Name',
};

UserStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

UserStory.storyName = 'User';
