import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InteractionButton } from '../../components/buttons/InteractionButton';
import { useArgs } from '@storybook/client-api';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default {
  title: 'Interactions',
  component: InteractionButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    type: {
      control: false,
      table: {
        disable: true,
      },
    },
    quantity: {
      control: 'number',
      table: {
        defaultValue: {
          summary: 0,
        },
      },
    },
  },
} as ComponentMeta<typeof InteractionButton>;

const Template: ComponentStory<typeof InteractionButton> = (args) => {
  const [{ favourite, quantity }, updateArgs] = useArgs();
  const [liked, setLiked] = useState<boolean>(favourite);
  const [updateQuantity, setUpdateQuantity] = useState<number>(quantity);

  useEffect(() => {
    setLiked(favourite);
    if (liked === true) {
      setUpdateQuantity(quantity - 1);
    } else {
      setUpdateQuantity(quantity + 1);
    }
  });

  const fCallBack = () => {
    console.log({ favourite, quantity, updateQuantity });
    updateArgs({ favourite: !favourite, quantity: updateQuantity });
  };

  return <InteractionButton {...args} fCallBack={fCallBack} />;
};

// LIKE STORY
export const LikeButtonStory = Template.bind({});
(LikeButtonStory.argTypes = {
  favourite: {
    control: 'boolean',
    table: {
      defaultValue: {
        summary: false,
      },
    },
  },
  fCallBack: { action: 'handleClickLike' },
}),
  (LikeButtonStory.args = {
    type: 'like',
    quantity: 0,
  }),
  (LikeButtonStory.parameters = {
    docs: {
      source: { type: 'dynamic' },
    },
  });

LikeButtonStory.storyName = 'Like';

// COMMENT STORY
export const CommentButtonStory = Template.bind({});
(CommentButtonStory.argTypes = {
  favourite: {
    control: false,
    table: {
      disable: true,
    },
  },
}),
  (CommentButtonStory.args = {
    type: 'comment',
    quantity: 0,
    favourite: false,
  }),
  (CommentButtonStory.parameters = {
    docs: {
      source: { type: 'dynamic' },
    },
  });

CommentButtonStory.storyName = 'Comment';
