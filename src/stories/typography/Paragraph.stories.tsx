import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph } from 'src/components/typography/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    label: 'Paragraph',
    variant: {
      description: 'Add description here ...',
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const ParagraphVariants = Template.bind({});

ParagraphVariants.args = {
  variant: 'large',
  children: 'Paragraph LARGE - Lorem ipsum dolor sit amet ...',
};

ParagraphVariants.storyName = 'Variants';
