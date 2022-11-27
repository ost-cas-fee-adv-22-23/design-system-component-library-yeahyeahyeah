import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as HeartFilled } from '../../../icons/heart_filled.svg';
import { ReactComponent as HeartEmpty } from '../../../icons/heart_empty.svg';

export default {
  title: 'CASFEA22/Icons/Heart',
  component: HeartFilled,
} as ComponentMeta<typeof HeartFilled | typeof HeartEmpty>;

const TemplateHeartFilled: ComponentStory<typeof HeartFilled> = (args) => (
  <HeartFilled {...args} />
);

const TemplateHeartEmpty: ComponentStory<typeof HeartEmpty> = (args) => (
  <HeartEmpty {...args} />
);

export const Filled = TemplateHeartFilled.bind({});
Filled.args = {};

export const Empty = TemplateHeartEmpty.bind({});
Empty.args = {};
