import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from '../../components/Typography';

const headingProps = {
  variant: { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4' },
  color: { slate: 'slate', violet: 'violet', pink: 'pink' },
};

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    label: {
      name: 'Typography Headings',
    },
    variant: {
      description: 'Lorem ipsum',
      options: Object.keys(headingProps.variant),
      mapping: headingProps.variant,
      control: { type: 'select' },
    },
    color: {
      description: 'Choose your font color',
      options: Object.keys(headingProps.color),
      mapping: headingProps.color,
      control: { type: 'select' },
    },
  },
  args: {
    label: 'Hello Heading Lorem Ipsum',
    variant: headingProps.variant.h1,
    color: headingProps.color.pink,
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
