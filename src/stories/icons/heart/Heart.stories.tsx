import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as HeartFilled } from '../../assets/icons/heart_filled.svg';
import { ReactComponent as HeartOutlined } from '../../assets/icons/heart_outlined.svg';

export default {
  title: 'CASFEA22/Icons/Heart',
  component: HeartFilled,
} as ComponentMeta<typeof HeartFilled | typeof HeartOutlined>;

const TemplateHeartFilled: ComponentStory<typeof HeartFilled> = (args) => (
  <HeartFilled {...args} />
);

const TemplateHeartOutlined: ComponentStory<typeof HeartOutlined> = (args) => (
  <HeartOutlined {...args} />
);

export const Filled = TemplateHeartFilled.bind({});
Filled.args = {};

export const Outlined = TemplateHeartOutlined.bind({});
Outlined.args = {};
