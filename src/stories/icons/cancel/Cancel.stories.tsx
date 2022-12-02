import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as Cancel } from '../../assets/icons/cancel.svg';

export default {
  title: 'Icons/Cancel',
  component: Cancel,
} as ComponentMeta<typeof Cancel>;

const TemplateCancel: ComponentStory<typeof Cancel> = (args) => (
  <Cancel {...args} />
);

export const Filled = TemplateCancel.bind({});
Filled.args = {
  className: 'fill-slate-300',
  onClick: () => console.log('icon clicked'),
};
