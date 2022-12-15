import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { Heading } from 'src/components/typography/Heading';

export default {
  title: 'Typography',
  component: Heading,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Heading',
    },
    variant: {
      control: { type: 'select' },
      description: 'Lorem ipsum',
      defaultValue: 'default',
    },
    tag: {
      control: { type: 'select' },
      description: 'Set diffrent font-size than default',
      defaultValue: 'h1',
    },
    color: {
      control: { type: 'select' },
      description: 'Choose your font color',
      defaultValue: 'medium',
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const HeadingStory = Template.bind({});

HeadingStory.storyName = 'Heading';
