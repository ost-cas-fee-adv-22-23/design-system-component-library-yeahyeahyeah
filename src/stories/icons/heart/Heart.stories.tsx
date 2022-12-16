import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeartFilled, HeartOutlined } from '../../../components/icons/icons';

export default {
  title: 'Icons/Heart',
  component: HeartFilled,
} as ComponentMeta<typeof HeartFilled | typeof HeartOutlined>;

const TemplateHeartFilled: ComponentStory<typeof HeartFilled> = (args) => (
  <HeartFilled {...args} />
);

const TemplateHeartOutlined: ComponentStory<typeof HeartOutlined> = (args) => (
  <HeartOutlined {...args} />
);

export const Filled = TemplateHeartFilled.bind({});
Filled.args = {
  className: 'fill-pink-500',
  width: '300px',
  height: '300px',
  onClick: () => console.log('icon clicked'),
};

export const Outlined = TemplateHeartOutlined.bind({});
Outlined.args = {
  className: 'fill-pink-500',
  width: '300px',
  height: '300px',
  onClick: () => console.log('icon clicked'),
};
