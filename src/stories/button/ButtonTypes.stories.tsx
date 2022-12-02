import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonTypes as Button } from '../../components/ButtonTypes';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Interactions/Buttons',
  component: Button,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'Button Label',
    },
    size: {
      description: 'A sized version of the button',
      control: { type: 'radio' },
    },
    width: {
      description: 'A full width version of the button',
      control: {
        type: 'select',
      },
    },
    variant: {
      control: {
        type: 'select',
      },
    },
    handleClick: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

/**
 * @button
 * @desc button standard slate
 */
export const Slate = Template.bind({});

Slate.args = {
  label: 'Button Label',
  variant: 'slate',
  width: 'default',
  size: 'small',
};

Slate.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

/**
 * @button
 * @desc button violet
 */
export const ButtonViolet = Template.bind({});
ButtonViolet.args = {
  ...Slate.args,
  variant: 'violet',
};

ButtonViolet.storyName = 'Violet';

/**
 * @button
 * @desc button violet
 */
export const ButtonPink = Template.bind({});
ButtonPink.args = {
  ...Slate.args,
  variant: 'pink',
};

ButtonPink.storyName = 'Pink';
