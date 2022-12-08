import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputForm } from 'src/components/forms/Input';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Form',
  component: InputForm,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      name: 'type',
      defaultValue: 'text',
    },
    placeholder: {
      name: 'placeholder',
      defaultValue: 'Placeholder',
    },
    editType: {
      control: {
        type: 'select',
      },
      defaultValue: 'input',
      name: 'Input Type',
    },
    required: {
      name: 'required',
      defaultValue: false,
    },
    errorMessage: {
      name: 'errorMessage',
      defaultValue: 'Error Message',
    },
  },
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => (
  <InputForm {...args} />
);

/**
 * @button
 * @desc button standard slate
 */
export const FormInput = Template.bind({});

FormInput.args = {
  label: 'Label',
};

FormInput.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

FormInput.storyName = 'Input';
