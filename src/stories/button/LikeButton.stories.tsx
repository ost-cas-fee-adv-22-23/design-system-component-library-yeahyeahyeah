import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LikeButton } from 'src/components/buttons/LikeButton';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Interactions/Interaction Button',
  component: LikeButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'Button Label',
    },
    size: {
      control: false,
      table: {
        disable: true,
      },
    },
    iconName: {
      control: false,
      table: {
        disable: true,
      },
    },
    iconColor: {
      control: false,
      table: {
        disable: true,
      },
    },
    handleClick: {
      action: () => 'handleClick',
    },
    iconWidth: {
      control: false,
      table: {
        disable: true,
      },
    },
    iconHeight: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof LikeButton>;

const Template: ComponentStory<typeof LikeButton> = (args) => (
  <LikeButton {...args} />
);
/**
 * @button
 * @desc button standard slate
 */
export const LikeButtonStory = Template.bind({});

LikeButtonStory.args = {
  label: 'Like',
};

LikeButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

LikeButtonStory.storyName = 'Like';
