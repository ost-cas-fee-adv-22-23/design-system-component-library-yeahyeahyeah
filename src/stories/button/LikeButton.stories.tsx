import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LikeButton } from 'src/components/buttons/LikeButton';
import { Icons } from 'src/components/icons/IconMap';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Interactions/Interaction Button',
  component: LikeButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      control: false,
    },
    size: {
      control: false,
      table: {
        disable: true,
      },
    },

    handleClick: {
      action: () => 'handleClick',
    },
    children: {
      control: 'select',
      options: Object.keys(Icons),
      mapping: Icons,
      name: 'Icon',
      defaultValue: Icons.HeartFilled,
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
