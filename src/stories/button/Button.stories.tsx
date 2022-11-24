import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CASFEA22/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Submit',
  fCallBack: () => {
    console.log('callback primary');
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Submit',
  fCallBack: () => {
    console.log('callback sec');
  },
};

export const Large = Template.bind({});
Large.args = {
  label: 'Submit',
  fCallBack: () => {
    console.log('callback large');
  },
};

export const Small = Template.bind({});
Small.args = {
  label: 'Submit',
  fCallBack: () => {
    console.log('callback small');
  },
};
