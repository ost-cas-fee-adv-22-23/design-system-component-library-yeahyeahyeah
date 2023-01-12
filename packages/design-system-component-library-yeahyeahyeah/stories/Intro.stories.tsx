import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Heading } from '../components/typography/Heading';

export default {
  title: 'Welcome',
  component: Heading,
  argTypes: {},
};

const Template: ComponentStory<typeof Heading> = () => <Heading label="Welcome" size="default" tag="h1" alignmnent="left" />;

export const ContainerStory = Template.bind({});

ContainerStory.storyName = 'Welcome';
