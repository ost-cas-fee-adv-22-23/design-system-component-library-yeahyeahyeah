import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../../components/typography/Heading';

export default {
  title: 'Typography',
  component: Heading,
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Heading',
    },
    size: {
      control: { type: 'select' },
      description: 'Label size variants.',
      defaultValue: 'default',
    },
    tag: {
      control: { type: 'select' },
      description: 'Choose your HTML-Tag',
      defaultValue: 'h1',
    },
    color: {
      control: { type: 'select' },
      description: 'Color variants',
      defaultValue: 'default',
    },
    mbSpacing: {
      control: 'select',
      options: ['0', '2', '4', '8', '16', '32', '64'],
      defaultValue: '0',
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const HeadingStory = Template.bind({});

HeadingStory.storyName = 'Heading';
