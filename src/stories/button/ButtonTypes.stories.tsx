import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonTypes as Button } from '../../components/ButtonTypes';

export default {
  title: 'Interactions/Buttons',
  component: Button,
  parameters: {
    controls: { sort: 'requiredFirst' },
    actions: {
      argTypesRegex: '^on.*',
      handles: ['mouseover', 'click .btn', 'mouseout', 'click .btn'],
    },
  },
  argTypes: {
    label: {
      name: 'Button Label',
      defaultValue: 'Button Label',
      type: { name: 'string', required: true },
    },
    isLarge: {
      description: 'A small version of the button',
      defaultValue: 'large',
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
    width: {
      description: 'A width version of the button',
      defaultValue: 'default',
      control: {
        type: 'select',
        options: {
          default: 'default',
          full: 'full',
        },
      },
    },
    variant: {
      defaultValue: 'slate',
      control: {
        type: 'select',
        options: {
          slate: 'slate',
          violet: 'violet',
          pink: 'pink',
        },
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  fCallBack: () => {
    console.log('callback primary');
  },
};

Default.decorators = [
  (Story) => (
    <div className="flex flex-row justify-center">
      <Story />
    </div>
  ),
];
