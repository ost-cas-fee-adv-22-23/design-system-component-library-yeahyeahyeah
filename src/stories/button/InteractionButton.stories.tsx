import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InteractionButton } from 'src/components/buttons/InteractionButton';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Interactions/Interaction Button',
  component: InteractionButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    type: {
      defaultValue: 'like',
    },
    initCount: {
      defaultValue: 99999,
    },
  },
} as ComponentMeta<typeof InteractionButton>;

const Template: ComponentStory<typeof InteractionButton> = (args) => (
  <InteractionButton {...args} />
);
/**
 * @button
 * @desc button standard slate
 */
export const InteractionButtonStory = Template.bind({});

InteractionButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

InteractionButtonStory.storyName = 'Comment';
