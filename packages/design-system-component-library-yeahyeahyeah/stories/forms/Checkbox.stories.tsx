import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../../components/forms/Checkbox';

export default {
  title: 'Form/Switch',
  component: Checkbox,
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
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

/**
 * @input
 * @desc form input field
 */
export const FormCheckboxStory = Template.bind({});

FormCheckboxStory.args = {
  selection: 'mumbles',
};

FormCheckboxStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

FormCheckboxStory.storyName = 'Switch';
