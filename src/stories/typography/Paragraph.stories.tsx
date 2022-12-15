import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { Paragraph } from 'src/components/typography/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    variant: {
      description: 'Add description here ...',
      control: { type: 'select' },
    },
    color: {
      description: 'The color of paragraph',
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const ParagraphVariants = Template.bind({});

ParagraphVariants.args = {
  variant: 'default',
  color: 'dark',
};

ParagraphVariants.storyName = 'Paragraph';
