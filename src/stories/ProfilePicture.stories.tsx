import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { ProfilePicture } from '../components/ProfilePicture';

export default {
  title: 'Interactions/ProfilePicture',
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  component: ProfilePicture,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
    },
    fCallBack: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof ProfilePicture>;

const TemplateProfilePicture: ComponentStory<typeof ProfilePicture> = (
  args,
) => <ProfilePicture {...args} />;

export const Primary = TemplateProfilePicture.bind({});
Primary.args = {
  src: '',
  alt: 'test',
  size: 'small',
};
