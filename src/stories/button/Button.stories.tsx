import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../components/buttons/Button';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Interactions/Button',
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
    handleClick: {
      action: () => 'handleClick',
    },
    iconColor: {
      control: false,
      table: {
        disable: true,
      },
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
  iconColor: 'fill-slate-white',
};

ButtonVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ButtonVariants.storyName = 'Variants';
