import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from 'src/components/Avatar';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'User',
  component: Avatar,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'small',
    },
    src: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://shorturl.at/DY468',
    },
    alt: {
      control: {
        type: 'text',
      },
      defaultValue: 'Alter Tag',
    },
    fCallBack: {
      action: () => 'handleClick',
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
