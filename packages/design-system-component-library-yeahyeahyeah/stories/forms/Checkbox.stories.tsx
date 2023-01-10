import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBox } from '../../components/forms/CheckBox';

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  argTypes: {
    selection: {
      control: 'select',
      table: {
        defaultValue: {
          summary: 'mumbles',
        },
      },
    },
    fCallBack: {
      action: () => 'handleChange',
      table: {
        defaultValue: {
          summary: 'mumbles',
        },
      },
    },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

/**
 * @input
 * @desc form input field
 */
export const FormCheckBoxStory = Template.bind({});

FormCheckBoxStory.args = {
  selection: 'mumbles',
};

FormCheckBoxStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

FormCheckBoxStory.storyName = 'CheckBox';
