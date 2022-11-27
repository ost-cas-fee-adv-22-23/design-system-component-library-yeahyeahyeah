import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonStyledComponent as Button } from '../../components/ButtonStyledComponents';

export default {
  title: 'Interactions/Buttons',
  component: Button,
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['mouseover', 'click .btn', 'mouseout', 'click .btn'],
    },
  },
  argTypes: {
    backgroundColor: {
      defaultValue: 'bg-violet-600',
      control: {
        type: 'select',
        options: {
          slate: 'bg-slate-600',
          violet: 'bg-violet-600',
          pink: 'bg-pink-500',
        },
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Button Label',
  isLarge: false,
  width: false,
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
