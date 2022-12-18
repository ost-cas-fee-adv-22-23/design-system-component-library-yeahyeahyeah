import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from 'src/components/Avatar';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'User',
  component: Avatar,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    avatar: {
      control: 'object',
      description: 'Avatar settings',
      defaultValue: {
        src: 'https://i.stack.imgur.com/5xd5n.png',
        alt: 'Alter Schalter',
        variant: 'edit',
        fCallBack: () => {
          console.log('Avatar');
        },
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
/**
 * @button
 * @desc button standard slate
 */
export const AvatarStory = Template.bind({});

AvatarStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

AvatarStory.storyName = 'Avatar';
