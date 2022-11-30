import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonTypes as Button } from '../../components/ButtonTypes';

const buttonProps = {
  label: { name: 'Button Label' },
  width: { default: 'default', full: 'full' },
  size: { small: 'small', large: 'large' },
  variant: { slate: 'slate', violet: 'violet', pink: 'pink' },
};

export default {
  title: 'Interactions/Buttons',
  component: Button,
  argTypes: {
    label: {
      name: buttonProps.label.name,
    },
    size: {
      description: 'A small version of the button',
      options: Object.keys(buttonProps.size),
      control: { type: 'radio', defaultValue: 'small' },
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
    size: buttonProps.size.small,
    width: buttonProps.width.default,
    variant: buttonProps.variant.slate,
    fCallBack: () => console.log('fCallBack'),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

Default.decorators = [
  (Story) => (
    <div className="m-0 p-0 flex flex-row justify-center items-center w-full h-full">
      <div className="flex justify-center items-center w-full p-8">
        {Story()}
      </div>
    </div>
  ),
];
