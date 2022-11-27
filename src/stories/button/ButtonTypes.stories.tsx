import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonTypes as Button } from '../../components/ButtonTypes';

const buttonProps = {
  label: { name: 'Button Label' },
  width: { default: 'default', full: 'full' },
  isLarge: { small: 'small', large: 'large' },
  variant: { slate: 'slate', violet: 'violet', pink: 'pink' },
};

export default {
  title: 'Interactions/Buttons',
  component: Button,
  parameters: {
    controls: { sort: 'requiredLast' },
    actions: {
      onClick: { action: 'clicked' },
      argTypesRegex: '^on.*',
      handles: ['click', 'click .btn', 'mouseout', 'click .btn'],
    },
  },
  argTypes: {
    label: {
      name: buttonProps.label.name,
    },
    isLarge: {
      description: 'A small version of the button',
      options: Object.keys(buttonProps.isLarge),
      control: { type: 'radio' },
    },
    width: {
      description: 'A full width version of the button',
      options: Object.keys(buttonProps.width),
      mapping: buttonProps.width,
      control: {
        type: 'select',
      },
    },
    variant: {
      options: Object.keys(buttonProps.variant),
      mapping: buttonProps.variant,
      control: {
        type: 'select',
      },
    },
  },
  args: {
    label: buttonProps.label.name,
    isLarge: buttonProps.isLarge.small,
    width: buttonProps.width.default,
    variant: buttonProps.variant.slate,
    fCallBack: () => console.log('fCallBack'),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  (Story) => <div className="flex flex-row justify-center">{Story()}</div>,
];
