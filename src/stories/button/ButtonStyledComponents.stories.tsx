import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonStyledComponent as Button } from '../../components/ButtonStyledComponents';

export default {
  title: 'CASFEA22/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Button Label',
  fCallBack: () => {
    console.log('callback primary');
  },
  hasBorder: true,
  isLarge: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button Label',
  fCallBack: () => {
    console.log('callback sec');
  },
  hasBorder: false,
  isLarge: false,
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button Label',
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
