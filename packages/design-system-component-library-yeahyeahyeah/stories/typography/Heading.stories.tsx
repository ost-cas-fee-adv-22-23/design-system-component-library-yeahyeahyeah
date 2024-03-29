import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../../components/typography/Heading';
import HeadingReadme from '../../docs/Heading.md';

export default {
  title: 'Typography',
  component: Heading,
  argTypes: {
    label: {
      control: 'text',
    },
    size: {
      control: 'select',
    },
    tag: {
      control: 'select',
    },
    color: {
      control: 'select',
    },
    alignment: {
      control: 'select',
    },
    mbSpacing: {
      control: 'select',
    },
  },
  args: {
    label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr...',
    size: 'default',
    tag: 'h1',
    color: 'violet',
    mbSpacing: '0',
    alignment: 'left',
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const HeadingStory = Template.bind({});

HeadingStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: HeadingReadme,
    },
  },
};

HeadingStory.storyName = 'Heading';
