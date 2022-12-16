import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReplyFilled, ReplyOutlined } from '../../../components/icons/icons';

export default {
  title: 'Icons/Reply',
  component: ReplyFilled,
} as ComponentMeta<typeof ReplyFilled | typeof ReplyOutlined>;

const TemplateReplyFilled: ComponentStory<typeof ReplyFilled> = (args) => (
  <ReplyFilled {...args} />
);

const TemplateReplyEmpty: ComponentStory<typeof ReplyOutlined> = (args) => (
  <ReplyOutlined {...args} />
);

export const Filled = TemplateReplyFilled.bind({});
Filled.args = {
  className: 'fill-slate-300',
  onClick: () => console.log('icon clicked'),
};

export const Empty = TemplateReplyEmpty.bind({});
Empty.args = {
  className: 'fill-slate-500',
  onClick: () => console.log('icon clicked'),
};
