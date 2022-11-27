import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as Cancel } from '../../../icons/cancel.svg';

export default {
  title: 'CASFEA22/Icons/Cancel',
  component: Cancel,
} as ComponentMeta<typeof Cancel>;

const TemplateCancel: ComponentStory<typeof Cancel> = (args) => (
  <Cancel {...args} />
);

export const Filled = TemplateCancel.bind({});
Filled.args = {};
