import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../components/typography/Heading';
import { Paragraph } from '../components/index';

export default {
  title: 'Welcome',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = () => (
  <>
    <Heading tag="h1" label="Mumble" color="violet" size="default" alignment="left" />
    <Heading tag="h4" color="light" label="Design System Component Library" size="large" mbSpacing="32" alignment="left" />
    <Paragraph text="to be defined." size="medium" mbSpacing="32" />
  </>
);

export const Welcome = Template.bind({});

Welcome.parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  controls: { disabled: true },
  actions: { disable: true },
  accessibility: { disable: true },
};

Welcome.storyName = 'Welcome';
