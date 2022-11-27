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
    backgroundColor: {
      defaultValue: 'bg-slate-600',
      control: {
        type: 'select',
        options: {
          slate: 'bg-slate-600',
          violet: 'bg-violet-600',
          pink: 'bg-gradient-to-r from-pink-500 to-violet-500',
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
    <div className="flex flex-row justify-center mb-4">
      <Story />
    </div>
  ),
];
