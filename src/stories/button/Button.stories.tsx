import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'src/components/buttons/Button';
import { Icons } from 'src/components/icons/IconMap';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Interactions',
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
        type: 'radio',
      },
    },
    variant: {
      control: {
        type: 'select',
      },
    },
    children: {
      control: 'select',
      options: Object.keys(Icons),
      mapping: Icons,
      name: 'Icon',
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
export const ButtonVariants = Template.bind({});

ButtonVariants.args = {
  label: 'Button Label',
  variant: 'slate',
  width: 'default',
  size: 'small',
  children: Icons.Mumble,
};

ButtonVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ButtonVariants.storyName = 'Button';
