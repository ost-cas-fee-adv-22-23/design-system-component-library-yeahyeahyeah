import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '../components/Container';
import ContainerReadme from '../docs/Container.md';

export default {
  title: 'Wireframes/Container',
  component: Container,
  argTypes: {
    layout: {
      control: 'select',
      table: {
        defaultValue: {
          summary: 'plain',
        },
      },
    },
  },
  args: {
    layout: 'box',
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args}>Content goes here</Container>;

export const ContainerStory = Template.bind({});

ContainerStory.parameters = {
  docs: {
    description: {
      component: ContainerReadme,
    },
  },
};

ContainerStory.storyName = 'Container';
