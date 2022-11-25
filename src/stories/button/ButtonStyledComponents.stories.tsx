import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonStyledComponent as Button } from '../../components/ButtonStyledComponents';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CASFEA22/ButtonStyledComponents',
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
  hasBorder: true,
  isLarge: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Submit',
  fCallBack: () => {
    console.log('callback sec');
  },
  hasBorder: false,
  isLarge: false,
};

export const Large = Template.bind({});
Large.args = {
  label: 'Submit',
  fCallBack: () => {
    console.log('callback large');
  },
  hasBorder: true,
  isLarge: true,
};

export const Small = Template.bind({});
Small.args = {
  label: 'Submit',
  fCallBack: () => {
    console.log('callback small');
  },
  hasBorder: false,
  isLarge: false,
};
