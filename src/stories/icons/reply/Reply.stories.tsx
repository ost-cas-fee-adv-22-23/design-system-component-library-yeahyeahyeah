import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as ReplyFilled } from '../../assets/icons/reply_filled.svg';
import { ReactComponent as ReplyEmpty } from '../../assets/icons/reply_outlined.svg';

export default {
  title: 'Icons/Reply',
  component: ReplyFilled,
} as ComponentMeta<typeof ReplyFilled | typeof ReplyEmpty>;

const TemplateReplyFilled: ComponentStory<typeof ReplyFilled> = (args) => (
  <ReplyFilled {...args} />
);

const TemplateReplyEmpty: ComponentStory<typeof ReplyEmpty> = (args) => (
  <ReplyEmpty {...args} />
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
