import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentButton } from '../../components/button/CommentButton';
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
          summary: 99999,
        },
      },
    },
  },
} as ComponentMeta<typeof CommentButton>;

const Template: ComponentStory<typeof CommentButton> = (args) => {
  return <CommentButton {...args} />;
};

// COMMENT STORY
export const CommentButtonStory = Template.bind({});

CommentButtonStory.argTypes = {};

CommentButtonStory.args = {
  quantity: 99999,
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
