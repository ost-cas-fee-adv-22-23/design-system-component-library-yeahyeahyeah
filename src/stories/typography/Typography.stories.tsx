import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from '../../components/Typography';

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    label: {
      name: 'Heading',
    },
    variant: {
      description: 'Lorem ipsum',
      control: { type: 'select' },
    },
    color: {
      description: 'Choose your font color',
      control: { type: 'select' },
    },
  },
  args: {
    label: 'Typografie',
    variant: 'h1',
    color: 'slate-600',
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Heading = Template.bind({});

Heading.decorators = [
  (Story) => (
    <div className="flex justify-center items-start w-full">
      <div className="sm:container mx-auto">{Story()}</div>
    </div>
  ),
];
