import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Checkbox } from '../../components/forms/Checkbox';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default {
  title: 'Form/Switch',
  component: Checkbox,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    selection: {
      control: 'select',
      table: {
        defaultValue: {
          summary: 'yourMumbles',
        },
      },
    },
    fCallBack: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [{ selection }, updateArgs] = useArgs();
  const [isType, setIsType] = useState<string>(selection);

  const fCallBack = () => {
    isType === 'yourLikes' ? setIsType('yourMumbles') : setIsType('yourLikes');
    updateArgs({ selection: isType });
    console.log({ selection, isType });
  };
  return <Checkbox {...args} fCallBack={fCallBack} />;
};

/**
 * @input
 * @desc form input field
 */
export const FormCheckboxStory = Template.bind({});

FormCheckboxStory.args = {
  selection: 'yourMumbles',
};

FormCheckboxStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

FormCheckboxStory.storyName = 'Switch';
