import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentButton } from '../../components/button/CommentButton';
import { useArgs } from '@storybook/client-api';
import InterActionReadme from '../../docs/InteractionButton.md';

export default {
  title: 'Interactions',
  component: CommentButton,
  argTypes: {
    type: {
      control: false,
      table: {
        disable: true,
      },
    },
    quantity: {
      control: { type: 'number', min: 0, max: 100 },
      table: {
        defaultValue: {
          summary: 0,
        },
      },
    },
  },
} as ComponentMeta<typeof CommentButton>;

const Template: ComponentStory<typeof CommentButton> = (args) => {
  const [{ favourite, quantity }, updateArgs] = useArgs();

  const onClick = () => {
    updateArgs({ favourite: !favourite, quantity: favourite ? quantity - 1 : quantity + 1 });
  };

  return <CommentButton {...args} onClick={onClick} />;
};

// COMMENT STORY
export const CommentButtonStory = Template.bind({});

CommentButtonStory.argTypes = {};

CommentButtonStory.args = {
  quantity: 0,
};

CommentButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: InterActionReadme,
    },
  },
};

CommentButtonStory.storyName = 'Comment';
