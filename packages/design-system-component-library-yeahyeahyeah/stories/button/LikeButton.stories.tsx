import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LikeButton } from '../../components/button/LikeButton';
import { useArgs } from '@storybook/client-api';
import InterActionReadme from '../../docs/InteractionButton.md';

export default {
  title: 'Interactions',
  component: LikeButton,
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
} as ComponentMeta<typeof LikeButton>;

const Template: ComponentStory<typeof LikeButton> = (args) => {
  const [{ favourite, quantity }, updateArgs] = useArgs();

  const onClick = () => {
    updateArgs({ favourite: !favourite, quantity: favourite ? quantity - 1 : quantity + 1 });
  };

  return <LikeButton {...args} onClick={onClick} />;
};

// LIKE STORY
export const LikeButtonStory = Template.bind({});
LikeButtonStory.argTypes = {
  favourite: {
    control: 'boolean',
  },
};

LikeButtonStory.args = {
  quantity: 0,
  favourite: false,
};

LikeButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: InterActionReadme,
    },
  },
};

LikeButtonStory.storyName = 'Like';
