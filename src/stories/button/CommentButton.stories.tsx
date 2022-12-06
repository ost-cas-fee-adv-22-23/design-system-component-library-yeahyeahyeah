import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentButton } from 'src/components/buttons/CommentButton';
import { Icons } from 'src/components/icons/IconMap';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Interactions/Interaction Button',
  component: CommentButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      control: false,
      table: {
        disable: true,
      },
    },
    size: {
      control: false,
      table: {
        disable: true,
      },
    },
    handleClick: {
      action: () => {
        console.log('handleClick');
      },
    },
    children: {
      control: 'select',
      options: Object.keys(Icons),
      mapping: Icons,
      name: 'Icon',
      defaultValue: Icons.Repost,
    },
  },
} as ComponentMeta<typeof CommentButton>;

const Template: ComponentStory<typeof CommentButton> = (args) => (
  <CommentButton {...args} />
);
/**
 * @button
 * @desc button standard slate
 */
export const CommentButtonStory = Template.bind({});

CommentButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

CommentButtonStory.storyName = 'Comment';
