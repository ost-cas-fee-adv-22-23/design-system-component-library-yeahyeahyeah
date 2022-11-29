import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as ReplyFilled } from '../../assets/icons/reply_filled.svg';
import { ReactComponent as ReplyEmpty } from '../../assets/icons/reply_empty.svg';

export default {
  title: 'CASFEA22/Icons/Reply',
  component: ReplyFilled,
} as ComponentMeta<typeof ReplyFilled | typeof ReplyEmpty>;

const TemplateReplyFilled: ComponentStory<typeof ReplyFilled> = (args) => (
  <ReplyFilled {...args} />
);

const TemplateReplyEmpty: ComponentStory<typeof ReplyEmpty> = (args) => (
  <ReplyEmpty {...args} />
);

export const Filled = TemplateReplyFilled.bind({});
Filled.args = {};

export const Empty = TemplateReplyEmpty.bind({});
Empty.args = {};
