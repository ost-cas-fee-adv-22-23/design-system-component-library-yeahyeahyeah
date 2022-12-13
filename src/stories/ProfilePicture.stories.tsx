import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { ProfilePicture } from '../components/ProfilePicture';

export default {
  title: 'User/Avatar',
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  component: ProfilePicture,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      defaultValue: 'xlarge',
    },
    src: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://i.stack.imgur.com/5xd5n.png?s=256&g=1',
    },
    alt: {
      control: {
        type: 'text',
      },
      defaultValue: 'This is a profile picture!',
    },
    fCallBack: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof ProfilePicture>;

const TemplateProfilePicture: ComponentStory<typeof ProfilePicture> = (
  args,
) => <ProfilePicture {...args} />;

export const Avatar = TemplateProfilePicture.bind({});
